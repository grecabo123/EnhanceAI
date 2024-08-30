import React, { useEffect, useState } from 'react'
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Panel } from 'primereact/panel';
import PrimeReact, { PrimeIcons } from 'primereact/api';
import axios from 'axios';
import swal from 'sweetalert';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


function SearchProducts() {

    const [AllDesin, setDesign] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        FetchProduct();
        return () => {
            // setLoading(true)
        }
    }, []);

    const FetchProduct = () => {
        axios.get(`/api/GetAllProduct/${localStorage.getItem('auth_id')}`).then(res => {
            if (res.data.status === 200) {
                setDesign(res.data.data)
            }
            else {

            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
            else if (error.response.status === 404) {
                swal("Error", "Server Error", 'error')
            }
        })
    }
    const itemplate = (AllDesin) => {
        return (
            <React.Fragment>
                <div className="container-fluid">



                    {/* <div className="row"> */}
                    {/* <div className="col-lg-4 col-md-12 mb-1 col-sm-12"> */}
                    {/* <div class="col-md-4 mb-4"> */}
                    {/* <div class="card border-1">
                                    <div className="text-start m-2">
                                        <Image src={`${import.meta.env.VITE_API_BASE_URL}/${AllDesin.file_product_design}`} className='me-3' width='100%' preview />
                                    </div>
                                    <div class="card-body">
                                        <div className='mb-0'> <span className='fs-6'>Seller Name:</span> {AllDesin.name}</div>
                                        <div className='mb-0'> <span className='fs-6'>Email Address:</span> {AllDesin.email}</div>
                                        <div className='mb-0'> <span className='fs-6'>Contact Number:</span> {AllDesin.contact}</div>
                                        <div className='mb-0'> <span className='fs-6'>Product Name:</span> {AllDesin.product_name}</div>
                                        <div className='mb-0'> <span className='fs-6'>Product Price:</span> ₱{AllDesin.price.toFixed(2)}</div>
                                        <Button onClick={OrderNow} data-name={AllDesin.product_name} data-id={AllDesin.id} className='p-button-sm w-100 p-button-info m-2' label='Order Now' icon={PrimeIcons.SHOPPING_CART} />
                                    </div>
                                </div> */}
                    {/* </div> */}
                    {/* <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="d-flex justify-content-evenly p-2">
                                        <Image src={`${import.meta.env.VITE_API_BASE_URL}/${AllDesin.file_product_design}`} className='me-3' width='150' preview />
                                        <div className="m-2 p-3">
                                            <div className='mb-2'> <span className='fs-6'>Seller Name:</span> {AllDesin.name}</div>
                                            <div className='mb-2'> <span className='fs-6'>Email Address:</span> {AllDesin.email}</div>
                                            <div className='mb-2'> <span className='fs-6'>Contact Number:</span> {AllDesin.contact}</div>
                                            <div className='mb-2'> <span className='fs-6'>Product Name:</span> {AllDesin.product_name}</div>
                                            <div className='mb-2'> <span className='fs-6'>Product Price:</span> ₱{AllDesin.price.toFixed(2)}</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button onClick={OrderNow} data-name={AllDesin.product_name} data-id={AllDesin.id} className='p-button-sm w-100 p-button-info m-2' label='Order Now' icon={PrimeIcons.SHOPPING_CART} />
                                </div>
                            </div> */}
                    {/* </div>
                    </div> */}
                </div>

            </React.Fragment>
        )
    }


    const image_tbl = (rowData) => {
        return (
            <Image src={`${import.meta.env.VITE_API_BASE_URL}/${rowData.file_product_design}`} className='me-3' width='150' preview />
        )
    }

    const action_btn = (rowData) => {
        return (
            <div >
                <Button onClick={OrderNow} data-name={rowData.product_name} data-id={rowData.id} className='p-button-sm p-button-info m-2' label='Order Now' icon={PrimeIcons.SHOPPING_CART} />
            </div>
        )
    }
    const list_info = (rowData) => {
        return (
            <div className="m-2 p-3">
                <div className='mb-2'> <span className='fs-6'>Seller Name:</span> {rowData.name}</div>
                <div className='mb-2'> <span className='fs-6'>Email Address:</span> {rowData.email}</div>
                <div className='mb-2'> <span className='fs-6'>Contact Number:</span> {rowData.contact}</div>
                <div className='mb-2'> <span className='fs-6'>Product Name:</span> {rowData.product_name}</div>
                <div className='mb-2'> <span className='fs-6 fw-bold'>Product Price:</span> ₱{rowData.price.toFixed(2)}</div>
            </div>
        )
    }

    const OrderNow = (e) => {
        const name = e.currentTarget.getAttribute('data-name').replace(/\s/g, '');
        history.push(`/customer/${name}/refid=${e.currentTarget.getAttribute('data-id')}`)
    }

    return (
        <div className='container'>
            <div className="row">
                <Panel header="Search Product">
                    <DataTable value={AllDesin} loading={loading} rows={10} paginator paginatorLeft >
                        {/* <Column header="#" body={(data, options) => options.rowIndex + 1}></Column> */}
                        <Column header="Image" body={image_tbl}></Column>
                        <Column header="Details" body={list_info}></Column>
                        <Column header="Actions" body={action_btn}></Column>
                    </DataTable>
                    {/* <DataView itemTemplate={itemplate} layout={'grid'} value={AllDesin} loading={loading} paginator paginatorPosition='bottom' paginatorLeft rows={5} className='border-0' /> */}
                </Panel>
            </div>
        </div>
    )
}

export default SearchProducts