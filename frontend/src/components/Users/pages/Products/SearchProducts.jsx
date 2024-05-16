import React, { useEffect, useState } from 'react'
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Panel } from 'primereact/panel';
import PrimeReact, { PrimeIcons } from 'primereact/api';
import axios from 'axios';
import swal from 'sweetalert';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


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
                    <div className="row">
                        <div className="col-lg-12 mb-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className='row'>
                                    <div className="col-lg-10 col-md-12 mb-2">
                                        <div className="text-center mt-4">
                                            <h4>{AllDesin.product_name}</h4>
                                        </div>
                                        <div className="d-flex justify-content-evenly">
                                            <Image src={`${import.meta.env.VITE_API_BASE_URL}/${AllDesin.file_product_design}`} className='me-3' width='150' preview />
                                            <p>{AllDesin.description}</p>
                                        </div>
                                        {/* Price: ₱{AllDesin.price.toFixed(2)} */}
                                        <div className="mt-2">
                                            <ul>
                                                <li>Name of Seller: {AllDesin.name}</li>
                                                <li>Email: {AllDesin.email}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 mb-2 col-md-12 mt-5">
                                        <Button onClick={OrderNow} data-name={AllDesin.product_name} data-id={AllDesin.id} className='p-button-sm w-100 p-button-info m-2' label='Order Now' icon={PrimeIcons.SHOPPING_CART} />
                                        {/* <Button className='p-button-sm w-100 p-button-warning m-2' label='Generate Design' icon={PrimeIcons.ANDROID} /> */}
                                        {/* <Button className='p-button-sm w-100 p-button-success m-2' label='Details' icon={PrimeIcons.BOOK} /> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    const OrderNow = (e) => {
        const name = e.currentTarget.getAttribute('data-name').replace(/\s/g, '');
        history.push(`/customer/${name}/refid=${e.currentTarget.getAttribute('data-id')}`)
    }

    return (
        <div className='container'>
            <div className="row">
                <Panel>
                    <DataView header="List of Products" itemTemplate={itemplate} value={AllDesin} loading={loading} paginator paginatorPosition='both' paginatorLeft rows={5} className='border-0' />
                </Panel>
            </div>
        </div>
    )
}

export default SearchProducts