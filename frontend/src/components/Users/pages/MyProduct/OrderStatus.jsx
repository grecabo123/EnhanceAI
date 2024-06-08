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
                    rowData.purchase_status == 1 ? <Badge severity={'success'} value={'Completed'} /> : <Badge severity={'warning'} value={'On Progress'} />
                }
            </>
        )
    }

    const Image_Format = (rowData) => {
        return (
            <span><Image src={`${import.meta.env.VITE_API_BASE_URL}/${rowData.file_product_design}`} width='100' /></span>
        )
    }
    const ActionButton = (rowData) => {
        return (
            <div>
                <Button className='p-button-sm p-button-info m-1' data-id={rowData.id} data-indicator={1} onClick={DetailsInfo}
                    label='Details'
                />
                {
                    rowData.purchase_status  == 0 ?   <Button className='p-button-sm p-button-danger m-1' data-id={rowData.id} data-indicator={2} onClick={DetailsInfo}
                    label='Remove'
                />
                : ""
                }
            </div>
        )
    }
    const DetailsInfo = (e) => {

        e.currentTarget.getAttribute('data-indicator') == 1 ?
            history.push(`/customer/product/order/${e.currentTarget.getAttribute('data-id')}`)
            :
        axios.delete(`/api/OrderRemove/${e.currentTarget.getAttribute('data-id')}`).then(res => {
            if(res.data.status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Order Has Been Removed",
                    detail: "Successfully"
                });
                Order();
            }
        }).catch((error) => {
            if(error.response.status === 500) {

            }
        })


    }

    return (
        <div>
            <Panel header="Order Status">
                <Toast ref={toast} />
                <DataTable loading={loading} value={orderdata} paginator paginatorLeft rows={10}>
                    <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                    <Column field='invoice_id' header="Invoice #"></Column>
                    <Column field='file_product' body={Image_Format} header="Product"></Column>
                    <Column field='product_name' header="Product"></Column>
                    <Column field='purchase_status' body={status_pro} header="Product Status"></Column>
                    <Column body={(orderdata) => <span>{moment(orderdata.created_at).format('MMM DD YYYY hh:mm a')}</span>} header="DateTime"></Column>
                    <Column field='id' body={ActionButton} header="Action"></Column>
                </DataTable>
            </Panel>
        </div>
    )
}

export default OrderStatus