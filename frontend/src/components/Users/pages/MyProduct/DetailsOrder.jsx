import axios from 'axios'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { Panel } from 'primereact/panel'
import { Skeleton } from 'primereact/skeleton'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import swal from 'sweetalert'

function DetailsOrder(props) {

    const [OrderDetails, setOrder] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory();

    useEffect(() => {
        axios.get(`/api/OrderStatusDetails/${props.match.params.id}`).then(res => {
            if (res.data.status === 200) {
                setOrder(res.data.data)
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
    }, [])

    const ReturnPAge = () => {
        history.push(`/customer/product/order`);
    }

    return (
        <div>
            <div className="d-flex justify-content-end mb-2">
                <Button className='p-button-sm p-button-info' onClick={ReturnPAge} label='Return Page' />

            </div>
            {
                loading ?
                    <div className="border-round border-1 surface-border p-4 surface-card">
                        <div className="flex mb-3">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div>
                                <Skeleton width="10rem" className="mb-2"></Skeleton>
                                <Skeleton width="5rem" className="mb-2"></Skeleton>
                                <Skeleton height=".5rem"></Skeleton>
                            </div>
                        </div>
                        <Skeleton width="100%" height="150px"></Skeleton>
                        <div className="flex justify-content-between mt-3">
                            <Skeleton width="4rem" height="2rem"></Skeleton>
                            <Skeleton width="4rem" height="2rem"></Skeleton>
                        </div>
                    </div>
                    :
                    <React.Fragment>
                        <Panel header={OrderDetails.product_name + ' - ' + OrderDetails.invoice_id}>
                            <div className="d-flex justify-content-center">
                                <img src={`${import.meta.env.VITE_API_BASE_URL}/${OrderDetails.file_product_design
                                    }`} width={100} style={{ borderRadius: "50%" }} alt="" />

                            </div>
                            <Divider>
                                <span>Product Details</span>
                            </Divider>
                            <ul className="list-group">
                                <li className="text-secondary list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <span>Product Name: </span>
                                    <span>{OrderDetails.product_name}</span>
                                </li>
                                <li className="text-secondary list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <span>Product Price: </span>
                                    <span>₱{OrderDetails.price.toFixed(2)}</span>
                                </li>

                            </ul>

                            <Divider>
                                <span>Buyer Name</span>
                            </Divider>

                            <ul className="list-group">
                                <li className="text-secondary list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <span>Name: </span>
                                    <span>{OrderDetails.from_name}</span>
                                </li>
                                <li className="text-secondary list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <span>Email:</span>
                                    <span>{OrderDetails.from_email}</span>
                                </li>
                            </ul>

                            <Divider>
                                <span>Owner Product</span>
                            </Divider>

                            <ul className="list-group">
                                <li className="text-secondary list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <span>Name: </span>
                                    <span>{OrderDetails.owner_name}</span>
                                </li>
                                <li className="text-secondary list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <span>Email:</span>
                                    <span>{OrderDetails.from_email}</span>
                                </li>
                            </ul>

                            <Divider>
                                <span>Delivery Details</span>

                            </Divider>
                            <ul className="list-group">
                                <li className="text-secondary list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <span>Name: </span>
                                    <span>{OrderDetails.to_name}</span>
                                </li>
                                <li className="text-secondary list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <span>Contact Number:</span>
                                    <span>{OrderDetails.to_contact}</span>
                                </li>
                                <li className="text-secondary list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <span>Address:</span>
                                    <span>{OrderDetails.to_address}</span>
                                </li>
                            </ul>
                            <div className="container mt-2">
                                <span>Message: </span>
                                <p>{OrderDetails.messages}</p>

                            </div>



                        </Panel>
                    </React.Fragment>
            }
        </div>
    )
}

export default DetailsOrder