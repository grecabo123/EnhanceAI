import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React, { useEffect, useRef, useState } from 'react'
import { PrimeIcons } from 'primereact/api';
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import axios from 'axios'
import swal from 'sweetalert'
import { Toast } from 'primereact/toast'
import moment from 'moment'
import { InputNumber } from 'primereact/inputnumber'

function Myproduct() {

    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true)
    const toast = useRef(null)
    const [btndis, setBtn] = useState(false)
    const [Amount, setAmt] = useState("")
    const [product, setProduct] = useState({
        name: "",
        pcs: "",
        error: [],
    });
    const [product_img, setimg] = useState([]);
    const [ListProduct, setList] = useState([])
    const [editmodal, setEditmodal] = useState(false);
    const [EditDetails, setDetails] = useState({
        name: "",
        pcs: "",
        product_id: "",
        user_fk: "",
    })
    const [NewFile, setFile] = useState([])


    useEffect(() => {
        FetchProduct();
        return () => {
            setLoading(true)
        }
    }, [])

    const FetchProduct = () => {
        axios.get(`/api/ListProduct/${localStorage.getItem('auth_id')}`).then(res => {
            if (res.data.status === 200) {
                setList(res.data.data)
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
            else if (error.response.status === 404) {
                swal("Error", "Page Not Found", 'error')
            }
        })
    }

    const handleinput = (e) => {
        e.persist();
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const handleupload = (e) => {
        setimg({ file: e.target.files[0] })
    }

    const AddProduct = (e) => {
        e.preventDefault();

        const data = new FormData;
        setBtn(true)

        data.append('name', product.name)
        data.append('pcs', product.pcs)
        data.append('file', product_img.file)
        data.append('Amount',Amount == null ? "" : Amount);
        data.append('user_fk', localStorage.getItem('auth_id'))

        axios.post(`/api/AddProduct`, data).then(res => {
            if (res.data.status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Product Added",
                    detail: "Successfully",
                });
                document.getElementById('form_reset').reset();
                setVisible(false)
                FetchProduct();
                setBtn(false)
                setAmt("")

            }
            else {
                setProduct({ ...product, error: res.data.error });
                setBtn(false)

            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
                setBtn(false)

            }
            else if (error.response.status === 404) {
                swal("Error", "Page Not Found", 'error')
                setBtn(false)

            }
        })
    }

    const ActionBtn = (ListProduct) => {
        return (
            <>
                <Button className='p-button-success p-button-sm' data-id={ListProduct.id}
                    data-name={ListProduct.product_name}
                    data-pcs={ListProduct.number_pcs}
                    onClick={EditData} label='Edit' icon={PrimeIcons.PENCIL} />
            </>
        )
    }

    const handleupdate = (e) => {
        e.persist();
        setDetails({ ...EditDetails, [e.target.name]: e.target.value });
    }


    const EditData = (e) => {
        setEditmodal(true)
        setDetails({
            name: e.currentTarget.getAttribute('data-name'),
            product_id: e.currentTarget.getAttribute('data-id'),
            pcs: e.currentTarget.getAttribute('data-pcs'),
            user_fk: localStorage.getItem('auth_id'),
        });
    }

    const handleuploadnew = (e) => {
        e.persist();
        setFile({file_new: e.target.files[0]});
        
    }

    const Update = (e) => {
        e.preventDefault();

        // const data = {
        //     name: EditDetails.name,
        //     pcs: EditDetails.pcs,
        //     id: EditDetails.product_id,
        //     user: EditDetails.user_fk,
        // };

        const data = new FormData;

        data.append('name',EditDetails.name)
        data.append('pcs',EditDetails.pcs)
        data.append('id',EditDetails.product_id)
        data.append('user',EditDetails.user_fk)
        data.append('file_new',NewFile.file_new === undefined ? "" : NewFile.file_new)


        axios.post(`/api/UpdateProduct`, data).then(res => {
            if (res.data.status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Product Updated",
                    detail: "Successfully",
                });
                document.getElementById('form_update').reset();
                setEditmodal(false)
                FetchProduct();
            }
            else {

            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
            else if (error.response.status === 404) {
                swal("Error", "Something Went wrong", 'error')
            }
        })
    }

    

    return (
        <div className='container'>
            <Panel header="List of Product">
                <Toast ref={toast} />

                <div className="d-flex justify-content-end">
                    <Button className='p-button-sm p-button-info' label='Add Product' onClick={() => setVisible(true)} icon={PrimeIcons.PLUS} />
                </div>

                <DataTable loading={loading} value={ListProduct}
                    size='small'
                    selectionMode={'small'}
                    paginator paginatorLeft rows={10}>

                    <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                    <Column field='file_product' body={(ListProduct) => <img className='' width={100} src={`${import.meta.env.VITE_API_BASE_URL}/${ListProduct.file_product}`} />} header="Product Image"></Column>
                    <Column field='product_name' header="Product Name"></Column>
                    <Column body={(ListProduct) => <span>₱{ListProduct.price.toFixed(2)}</span> } header="Product Price"></Column>
                    <Column field='number_pcs' header="Quantity"></Column>
                    <Column field='id' body={ActionBtn} header="Actions"></Column>
                    <Column field='created_at' body={(ListProduct) => moment(ListProduct.created_at).format('MMM DD YYYY')} header="Date Created"></Column>
                </DataTable>
            </Panel>

            <Dialog header="Add Product" style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                visible={visible}
                position='top'
                draggable={false}
                onHide={() => setVisible(false)}
            >
                <form onSubmit={AddProduct} id='form_reset'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Product Name
                                </label>
                                <InputText className={`w-100 p-inputtext-sm ${product.error.name ? 'p-invalid' : ''}`} name='name' onChange={handleinput} />
                                <small className='text-danger'>{product.error.name}</small>
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Price
                                </label>
                                <InputNumber value={Amount} className={`w-100 p-inputtext-sm ${product.error.Amount ? 'p-invalid' : ''}`} prefix='₱' minFractionDigits={2} onValueChange={(e) => setAmt(e.value)} />
                                <small className='text-danger'>{product.error.Amount}</small>
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Pieces
                                </label>
                                <InputText className={`w-100 p-inputtext-sm ${product.error.pcs ? 'p-invalid' : ''}`} keyfilter={'num'} name='pcs' onChange={handleinput} />
                                <small className='text-danger'>{product.error.pcs}</small>
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Product Name
                                </label>
                                <InputText type='file' className={`w-100 p-inputtext-sm ${product.error.file ? 'p-invalid' : ''}`} name='file' onChange={handleupload} />
                                <small className='text-danger'>{product.error.file}</small>
                            </div>
                            <div className="mt-2">
                                <Button loading={btndis} label='Add Product' className='w-100 p-button-sm p-button-info' />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>


            <Dialog header="Update Product" style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                visible={editmodal}
                position='top'
                draggable={false}
                onHide={() => setEditmodal(false)}
            >
                <form onSubmit={Update} id='form_update'>
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Product Image
                                </label>
                                <InputText className='w-100 p-inputtext-sm' type='file' name='file_new' onChange={handleuploadnew} />
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Product Name
                                </label>
                                <InputText className='w-100 p-inputtext-sm' name='name' value={EditDetails.name} onChange={handleupdate} />
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Number of Pcs
                                </label>
                                <InputText className='w-100 p-inputtext-sm' name='pcs' value={EditDetails.pcs} onChange={handleupdate} />
                            </div>
                            <div className="mt-2">
                                <Button className='w-100 p-button-sm' label='Update Product' />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </div>
    )
}

export default Myproduct