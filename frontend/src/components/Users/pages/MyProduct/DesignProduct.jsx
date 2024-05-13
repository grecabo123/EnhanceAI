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
    const [pricedata, setPrice] = useState(0)
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

    });
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
        setimg({ file: e.target.files[0] })
    }

    const AddProduct = (e) => {
        e.preventDefault();

        const data = new FormData;

        data.append('name', product.name)
        data.append('desc', product.desc)
        data.append('file', product_img.file)
        data.append('pricedata',pricedata)
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
            }
            else {
                setProduct({ ...product, error: res.data.error });
            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
            else if (error.response.status === 404) {
                swal("Error", "Page Not Found", 'error')
            }
        })
    }

    console.log(pricedata);

    return (
        <div className='container'>
            <Panel header="List of Product Design">
                <Toast ref={toast} />
                <div className="d-flex justify-content-end">
                    <Button className='p-button-sm p-button-info' label='Add Product' onClick={() => setVisible(true)} icon={PrimeIcons.PLUS} />
                </div>
                <DataTable loading={loading} value={ListProduct} paginator paginatorLeft rows={10}>
                    <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                    <Column field='file_product' body={(ListProduct) => <img className='' width={100} src={`http://127.0.0.1:8000/${ListProduct.file_product_design}`} />} header="Product Image"></Column>
                    <Column field='product_name' header="Product Name"></Column>
                    <Column field='price' body={(ListProduct) => <span>₱{ListProduct.price.toFixed(2)}</span> } header="Price"></Column>
                    <Column field='description' header="Description"></Column>
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
                                <InputText className='w-100 p-inputtext-sm' name='name' onChange={handleinput} />
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Product Price
                                </label>
                                <InputNumber prefix='₱' name='pricedata' onValueChange={(e) => setPrice(e.value)} className='w-100 p-inputtext-sm' minFractionDigits={2} mode='decimal' />
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Description
                                </label>
                                <InputTextarea className='w-100' rows={5} cols={5} name='desc' onChange={handleinput} />
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    Product Name
                                </label>
                                <InputText type='file' className='w-100 p-inputtext-sm' name='file' onChange={handleupload} />
                            </div>
                            <div className="mt-2">
                                <Button label='Add Product' className='w-100 p-button-sm p-button-info' />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </div>
    )
}

export default DesignProduct