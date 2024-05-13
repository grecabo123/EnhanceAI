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

function Myproduct() {
    
    const [visible , setVisible] = useState(false);
    const [loading, setLoading] = useState(true)
    const toast = useRef(null)
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


    useEffect(() => {
        FetchProduct();
        return () =>{
            setLoading(true)
        }
    },[])

    const FetchProduct = () =>{
        axios.get(`/api/ListProduct/${localStorage.getItem('auth_id')}`).then(res => {
            if(res.data.status === 200) {
                setList(res.data.data)
            }
            setLoading(false)
        }).catch((error) => {
            if(error.response.status === 500) {
                swal("Warning",error.response.statusText,'warning')
            }
            else if(error.response.status === 404) {
                swal("Error","Page Not Found",'error')
            }
        })
    }

    const handleinput =(e) => {
        e.persist();
        setProduct({...product, [e.target.name] : e.target.value})
    }
    const handleupload = (e) =>{
        setimg({file: e.target.files[0]})        
    }

    const AddProduct = (e) => {
        e.preventDefault();

        const data = new FormData;

        data.append('name',product.name)
        data.append('pcs',product.pcs)
        data.append('file',product_img.file)
        data.append('user_fk',localStorage.getItem('auth_id'))

        axios.post(`/api/AddProduct`,data).then(res => {
            if(res.data.status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Product Added",
                    detail: "Successfully",
                });
                document.getElementById('form_reset').reset();
                setVisible(false)
                FetchProduct();
            }
            else{
                setProduct({...product, error: res.data.error});
            }
        }).catch((error) => {
            if(error.response.status === 500) {
                swal("Warning",error.response.statusText,'warning')
            }
            else if(error.response.status === 404) {
                swal("Error","Page Not Found",'error')
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
        setDetails({...EditDetails, [e.target.name] : e.target.value});
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

    const Update = (e) => {
        e.preventDefault();

        const data = {
            name: EditDetails.name,
            pcs: EditDetails.pcs,
            id: EditDetails.product_id,
            user: EditDetails.user_fk,
        };

        axios.put(`/api/UpdateProduct`,data).then(res => {
            if(res.data.status === 200 ){
                toast.current.show({
                    severity: "success",
                    summary: "Product Updated",
                    detail: "Successfully",
                });
                document.getElementById('form_update').reset();
                setEditmodal(false)
                FetchProduct();
            }
            else{

            }
        }).catch((error) => {
            if(error.response.status === 500) {
                swal("Warning",error.response.statusText,'warning')
            }
            else if(error.response.status === 404) {
                swal("Error", "Something Went wrong",'error')
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

                <DataTable loading={loading} value={ListProduct} paginator paginatorLeft rows={10}>
                    
                    <Column header="#" body={(data,options) => options.rowIndex + 1}></Column>
                    <Column field='file_product' body={(ListProduct) =>  <img className=''width={100} src={`http://127.0.0.1:8000/${ListProduct.file_product}`} /> } header="Product Image"></Column>
                    <Column field='product_name' header="Product Name"></Column>
                    <Column field='number_pcs' header="Quantity"></Column>
                    <Column field='id' body={ActionBtn} header="Actions"></Column>
                    <Column field='created_at' body={(ListProduct) => moment(ListProduct.created_at).format('MMM DD YYYY') } header="Date Created"></Column>
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
                                    Product Name
                                </label>
                                <InputText className='w-100 p-inputtext-sm' name='name' onChange={handleinput} />
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    Pieces
                                </label>
                                <InputText className='w-100 p-inputtext-sm'  keyfilter={'num'}  name='pcs' onChange={handleinput} />
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
                                    Product Name
                                </label>
                                <InputText className='w-100 p-inputtext-sm' name='name' value={EditDetails.name} onChange={handleupdate} />
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    Number of Pcs
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