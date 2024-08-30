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
import { InputTextarea } from 'primereact/inputtextarea'
import { InputNumber } from 'primereact/inputnumber'

function DesignProduct() {

    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true)
    const [pricedata, setPrice] = useState("")
    const [btndis, setBtn] = useState(false)
    const [detailsvisible, setdetailsvisible] = useState(false)
    const toast = useRef(null)
    const [product, setProduct] = useState({
        name: "",
        desc: "",
        error: [],
    });
    const [product_img, setimg] = useState([]);
    const [ListProduct, setList] = useState([])
    const [EditDesign, setDesign] = useState({
        name: "",
        desc: "",
        price: "",
        product_id: "",
        indicator: ""
    });
    const [NewImage, setNewImage] = useState([])
    const [DesignVisible, setVisibleDesign] = useState(false)


    useEffect(() => {
        FetchProduct();
        return () => {
            setLoading(true)
        }
    }, [])

    const FetchProduct = () => {
        axios.get(`/api/DesignProduct/${localStorage.getItem('auth_id')}`).then(res => {
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
        e.persist();
        setimg({ file: e.target.files[0] })
    }

    const handleupdatedata = (e) => {
        e.persist();
        setDesign({ ...EditDesign, [e.target.name]: e.target.value })
    }

    const handleuploadupdate = (e) => {
        e.persist();
        setNewImage({ file_new: e.target.files[0] });
    }

    const AddProduct = (e) => {
        e.preventDefault();
        setBtn(true)

        const data = new FormData;

        data.append('name', product.name)
        data.append('desc', product.desc)
        data.append('file', product_img.file === undefined ? "" : product_img.file)
        // data.append('file', product_img.file == "undefined" ? "" : product_img.file)
        data.append('pricedata', pricedata)
        data.append('user_fk', localStorage.getItem('auth_id'))

        axios.post(`/api/AddProductDesign`, data).then(res => {
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

    const actionbutton = (rowData) => {
        return (
            <div>
                <Button onClick={Detailsdata}
                    data-name={rowData.product_name}
                    data-price={rowData.price}
                    data-product_id={rowData.id}
                    data-indicator={1} data-product={rowData.id} className='p-button-sm p-button-success m-2' icon={PrimeIcons.PENCIL} label='Edit Product' />
                <Button
                    data-name={rowData.product_name}
                    data-price={rowData.price}
                    data-product_id={rowData.id}
                    className='p-button-sm p-button-danger m-2' data-indicator={2} onClick={Detailsdata} data-product={rowData.id} label='Delete Product' />
            </div>
        )
    }

    const onUpdateData = (e) => {
        e.preventDefault();

        const data = new FormData;

        data.append('name', EditDesign.name)
        data.append('product_id', EditDesign.product_id)
        data.append('price', EditDesign.price)
        data.append('file_new', NewImage.file_new === undefined ? "" : NewImage.file_new)

        axios.post(`/api/ProductDesignUpdate`, data).then(res => {
            if (res.data.status === 200) {
                FetchProduct();
                setdetailsvisible(false)
            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
            else if (error.response.status === 404) {
                swal("Warning", "Server Error", 'warning')
            }
        })


    }

    // console.log(NewImage);

    const Detailsdata = (e) => {
        setdetailsvisible(true)
        setDesign({
            name: e.currentTarget.getAttribute('data-name'),
            price: e.currentTarget.getAttribute('data-price'),
            indicator: e.currentTarget.getAttribute('data-indicator'),
            product_id: e.currentTarget.getAttribute('data-product_id'),
        });
    }

    const DeleteProduct = (e) => {
        e.preventDefault();

        axios.put(`/api/ProductDelete/${EditDesign.product_id}`).then(res => {
            if(res.data.status === 200) {
                FetchProduct();
                toast.current.show({
                    severity: "success",
                    summary: "Delete Product Successfully",
                    detail: "Success",
                });
                setdetailsvisible(false)
            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
            else if (error.response.status === 404) {
                swal("Warning", "Server Error", 'warning')
            }
        })
    }


    return (
        <div className='container'>
            <Panel header="List of Product Design">
                <Toast ref={toast} />
                <div className="d-flex justify-content-end mb-2">
                    <Button className='p-button-sm p-button-info' label='Add Product' onClick={() => setVisible(true)} icon={PrimeIcons.PLUS} />
                </div>
                <DataTable
                    size='small'
                    selectionMode={'small'}
                    loading={loading} value={ListProduct} paginator paginatorLeft rows={10}>
                    <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                    <Column field='file_product' body={(ListProduct) => <img className='' width={100} src={`${import.meta.env.VITE_API_BASE_URL}/${ListProduct.file_product_design}`} />} header="Product Image"></Column>
                    <Column field='product_name' header="Product Name"></Column>
                    <Column field='price' body={(ListProduct) => <span>₱{ListProduct.price.toFixed(2)}</span>} header="Price"></Column>
                    {/* <Column field='description' header="Description"></Column> */}
                    {/* <Column field='created_at' body={(ListProduct) => moment(ListProduct.created_at).format('MMM DD YYYY')} header="Date Created"></Column> */}
                    <Column field='id' body={actionbutton} header="Action"></Column>
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
                                <InputText className={`w-100 p-inputtext-sm  ${product.error.name ? 'p-invalid' : ''}`} name='name' onChange={handleinput} />
                                <small className='text-danger'>{product.error.name}</small>
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Product Price
                                </label>
                                <InputNumber prefix='₱' name='pricedata' onValueChange={(e) => setPrice(e.value)} className={`w-100 p-inputtext-sm ${product.error.pricedata ? 'p-invalid' : ''}`} minFractionDigits={2} mode='decimal' />
                                <small className='text-danger'>{product.error.pricedata}</small>
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    Description <small>(optional)</small>
                                </label>
                                <InputTextarea className={`w-100 ${product.error.desc ? 'p-invalid' : ''}`} rows={5} cols={5} name='desc' onChange={handleinput} />
                                <small className='text-danger'>{product.error.desc}</small>
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Product Image
                                </label>
                                <InputText type='file' className={`w-100 p-inputtext-sm ${product.error.file ? 'p-invalid' : ''} `} name='file' onChange={handleupload} />
                                <small className='text-danger'>{product.error.file}</small>
                            </div>
                            <div className="mt-2">
                                <Button loading={btndis} label='Add Product' className='w-100 p-button-sm p-button-info' />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>


            <Dialog
                header={`${EditDesign.indicator == 1 ? 'Edit Product Details' : 'Delete Product'}`} style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                visible={detailsvisible}
                position='top'
                draggable={false}
                onHide={() => setdetailsvisible(false)}
            >
                {
                    EditDesign.indicator == 1 ?
                        <React.Fragment>
                            <form onSubmit={onUpdateData} id='reset_form'>
                                <div className="row">
                                    <div className="col-lg-12 mb-2">
                                        <label htmlFor="" className="form-label">
                                            Product Image
                                        </label>
                                        <InputText type='file' onChange={handleuploadupdate} className='w-100 p-inputtext-sm' name='file_new' />
                                    </div>
                                    <div className="col-lg-12 mb-2">
                                        <label htmlFor="" className="form-label">
                                            Product Name
                                        </label>
                                        <InputText value={EditDesign.name} onChange={handleupdatedata} className='w-100 p-inputtext-sm' name='' />
                                    </div>
                                    <div className="col-lg-12 mb-2">
                                        <label htmlFor="" className="form-label">
                                            Product Price
                                        </label>
                                        <InputNumber value={EditDesign.price} name='price' onChange={handleupdatedata} className='w-100 p-inputtext-sm' prefix='₱' />
                                    </div>
                                    <div className="mt-2">
                                        <Button className='w-100 p-button-sm p-button-success' label='Update Data' />
                                    </div>

                                </div>
                            </form>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <form onSubmit={DeleteProduct}>
                                <div className="col-lg-12 mb-2">
                                    <label htmlFor="" className="form-label">
                                        Product Name
                                    </label>
                                    <InputText value={EditDesign.name} onChange={handleupdatedata} className='w-100 p-inputtext-sm' name='' />
                                </div>
                                <div className="col-lg-12 mb-2">
                                    <label htmlFor="" className="form-label">
                                        Product Price
                                    </label>
                                    <InputNumber value={EditDesign.price} name='price' onChange={handleupdatedata} className='w-100 p-inputtext-sm' prefix='₱' />
                                </div>
                                <Button className='p-button-danger p-button-sm' label='Delete Product' />
                            </form>
                        </React.Fragment>
                }
            </Dialog>
        </div>
    )
}

export default DesignProduct