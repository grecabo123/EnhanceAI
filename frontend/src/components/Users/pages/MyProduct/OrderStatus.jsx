import axios from 'axios'
import moment from 'moment'
import { Badge } from 'primereact/badge'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React, { useEffect, useRef, useState } from 'react'
import swal from 'sweetalert'
import { Image } from 'primereact/image'
import { Button } from 'primereact/button'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Toast } from 'primereact/toast'
import { PrimeIcons } from 'primereact/api'

function OrderStatus() {


    const [loading, setLoading] = useState(true)
    const [orderdata, setOrder] = useState([])
    const history = useHistory();
    const toast = useRef();


    useEffect(() => {
        Order();
        return () => {
            setLoading(true)
        }
    }, [])


    const Order = () => {
        axios.get(`/api/OrderStatus/${localStorage.getItem('auth_id')}`).then(res => {
            if (res.data.status === 200) {
                setOrder(res.data.data)
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
        })
    }

    const status_pro = (rowData) => {
        return (
            <>
                {
                    rowData.purchase_status == 1 ? <small className='text-success fw-bold'>Approved</small> : <small className='text-danger fw-bold'>Pending</small>
                }
            </>
        )
    }

    const Image_Format = (rowData) => {
        return (
            <span>
                {
                    rowData.type_order == 1 ?  
                    <span><Image src={`${import.meta.env.VITE_API_BASE_URL}/${rowData.file_attach}`} width='100' /></span>
                    :
                        <span><Image src={`${import.meta.env.VITE_API_BASE_URL}/${rowData.file_product_design}`} width='100' /></span>
                }
            </span>
        )
    }
    const ActionButton = (rowData) => {
        return (
            <div>
                <Button className='p-button-sm p-button-info m-1' data-id={rowData.id} data-indicator={1} onClick={DetailsInfo}
                    label='Track'
                    icon={PrimeIcons.MAP_MARKER}
                />
                {/* {
                    rowData.purchase_status  == 0 ?   <Button className='p-button-sm p-button-danger m-1' data-id={rowData.id} data-indicator={2} onClick={DetailsInfo}
                    label='Remove'
                />
                : ""
                } */}
            </div>
        )
    }
    const DetailsInfo = (e) => {

        e.currentTarget.getAttribute('data-indicator') == 1 ?
            history.push(`/customer/product/order/${e.currentTarget.getAttribute('data-id')}`)
            :
            axios.delete(`/api/OrderRemove/${e.currentTarget.getAttribute('data-id')}`).then(res => {
                if (res.data.status === 200) {
                    toast.current.show({
                        severity: "success",
                        summary: "Order Has Been Removed",
                        detail: "Successfully"
                    });
                    Order();
                }
            }).catch((error) => {
                if (error.response.status === 500) {

                }
            })
    }

    const OrderType = (rowData) => {
        return (
            <span>{rowData.type_order == 1 ? "Own Design" : "Store Design"}</span>
        )
    }

    const ProductName = (rowData) => {
        return (
            <span>{rowData.type_order == 1 ? "Own Design" : rowData.product_name}</span>
        )
    }

    return (
        <div>
            <Panel header="Order Status">
                <Toast ref={toast} />
                <DataTable loading={loading} value={orderdata} paginator paginatorLeft rows={10}>
                    <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                    <Column field='purchase_status' body={status_pro} header="Product Status"></Column>
                    <Column field='invoice_id' header="Invoice #"></Column>
                    <Column field='shop_name' header="Shop Name"></Column>
                    <Column field='file_product' body={Image_Format} header="Product"></Column>
                    <Column body={ProductName} header="Product Name"></Column>
                    <Column header="Type of Order" body={OrderType}></Column>
                    {/* <Column field='price' body={(orderdata) => <span> ₱{orderdata.price.toFixed(2)}</span> } header="Product Price"></Column> */}
                    <Column body={(orderdata) => <span>{moment(orderdata.order_date).format('MMM DD YYYY hh:mm a')}</span>} header="Deliver Date"></Column>
                    <Column field='id' body={ActionButton} header="Action"></Column>
                </DataTable>
            </Panel>
        </div>
    )
}

export default OrderStatus