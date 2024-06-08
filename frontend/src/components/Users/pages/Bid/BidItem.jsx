import axios from 'axios'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { Image } from 'primereact/image'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Panel } from 'primereact/panel'
import { Skeleton } from 'primereact/skeleton'
import { Toast } from 'primereact/toast'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import swal from 'sweetalert'

function BidItem(props) {

    const history = useHistory()
    const [Details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [btndis, setBtn] = useState(false)
    const [PurchaseData, setPurchase] = useState({
        name: "",
        contact: "",
        to_address: "",
        message: "",
        error: [],
    });
    const toast = useRef(null)

    useEffect(() => {
        axios.get(`/api/DetailsProduct/${props.match.params.id}`).then(res => {
            if (res.data.status === 200) {
                setDetails(res.data.data)
            }
            else {

            }
            setLoading(false)

        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
        })
    }, [])


    const handleinput = (e) => {
        e.persist();
        setPurchase({ ...PurchaseData, [e.target.name]: e.target.value });
    }

    const Purchase = (e) => {
        e.preventDefault();
        setBtn(true)
        const data = {
            user_fk: localStorage.getItem('auth_id'),
            product_fk: Details.id,
            name: PurchaseData.name,
            contact: PurchaseData.contact,
            to_address: PurchaseData.to_address,
            message: PurchaseData.message,
            from_buyer: Details.user_id,
        }

        axios.post(`/api/OrderNow`, data).then(res => {
            if (res.data.status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Order Product",
                    detail: "Successfully",
                });
                setBtn(false)

                setTimeout(() => {
                    window.location.href = "/customer/product/search"
                }, 1500)
            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
                setBtn(false)

            }
            else if (error.response.status === 404) {
                swal("Error", "Server Error", 'error');
                setBtn(false)

            }
        })

    }



    return (
        <div>
            <div className="d-flex justify-content-end mb-2" >
                <Button label='Return Page' className='p-button-sm' onClick={() => history.push(`/customer/product/search`)} />
            </div>
            <Toast ref={toast} />
            <Panel header="Details">
                {
                    loading ?
                        <React.Fragment>
                            <Skeleton className="mb-2"></Skeleton>
                            <Skeleton width="10rem" className="mb-2"></Skeleton>
                            <Skeleton width="5rem" className="mb-2"></Skeleton>
                            <Skeleton height="2rem" className="mb-2"></Skeleton>
                            <Skeleton width="10rem" height="4rem"></Skeleton>

                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className="text-center">
                                <h5>{Details.product_name}</h5>
                            </div>
                            <div className="text-center">
                                <Image src={`${import.meta.env.VITE_API_BASE_URL}/${Details.file_product_design}`} width='200' />
                            </div>
                            <div className="mt-2">
                                <p>{Details.description}</p>
                            </div>
                            <Divider>
                                <span>Owner Details</span>
                            </Divider>
                            <ul class="list-group">
                                <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                                    Name of Owner
                                    <span className='text-secondary'>{Details.name}</span>
                                </li>
                                <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                                    Email
                                    <span className='text-secondary'>{Details.email}</span>
                                </li>
                                <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                                    Contact Number
                                    <span className='text-secondary'>{Details.contact}</span>
                                </li>
                                <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                                    Price
                                    <span className='text-success'>₱{Details.price.toFixed(2)}</span>
                                </li>
                            </ul>
                            <Divider>
                                <span>Price Information</span>
                            </Divider>
                            <div className="container">
                            </div>
                            <Divider>
                                <span>Delivery Details</span>
                            </Divider>
                            <form onSubmit={Purchase} id='form_purchase'>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 mb-2">
                                            <label className="label form-label">
                                                Name (optional)
                                            </label>
                                            <InputText className='w-100 p-inputtext-sm' name='name' onChange={handleinput} />
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <label className="label form-label">
                                                Contact Number(optional)
                                            </label>
                                            <InputText className='w-100 p-inputtext-sm' keyfilter={'num'} name='contact' onChange={handleinput} />
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label className="label form-label">
                                                Address (optional)
                                            </label>
                                            <InputText className='w-100 p-inputtext-sm' name='to_address' onChange={handleinput} />
                                        </div>

                                        <div className="col-lg-12 mb-2">
                                            <label htmlFor="" className="form-label">
                                                Message (optional)
                                            </label>
                                            <InputTextarea className='w-100' rows={5} onChange={handleinput} name='message' cols={5} style={{ resize: "none" }} />
                                        </div>
                                        <div className="mt-2">
                                            <Button loading={btndis} className='p-button-sm p-button-info' label='Purchase' />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </React.Fragment>
                }
            </Panel>
        </div>
    )
}

export default BidItem