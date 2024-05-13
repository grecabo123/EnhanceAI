import axios from 'axios'
import moment from 'moment'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Image } from 'primereact/image'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'

function PurchaseStatus() {

    const [Status, setStatus] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`/api/PurchaseStatus/${localStorage.getItem('auth_id')}`).then(res => {
            if(res.data.status === 200) {
                setStatus(res.data.data)
            }
            setLoading(false)
        }).catch((error) => {
            if(error.response.status === 500) {
                swal("Warning",error.response.statusText,'warning');
            }
            else if(error.response.status === 404) {
                swal("Error","Server Error", 'error')
            }
        })
    },[])

    const Image_Display =(Status) => {
        return (
            <span><Image src={`${import.meta.env.VITE_API_BASE_URL}/${Status.file_product_design}`} width='100' /></span>
        )
    }
    const Status_purchase = (Status) => {
        return (
            <span>{Status.Status_purchase === 0 ? "Pending" : Status.Status_purchase == 1 ? "On Progress" : "Completed"}</span>
        )
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <Panel header="Status">
                    <DataTable loading={loading} value={Status} paginator paginatorLeft rows={10}>
                        <Column body={(data,options) => options.rowIndex + 1}  header="#"></Column>
                        <Column body={Image_Display} header="Image"></Column>
                        <Column field='product_name' header="Product Name"></Column>
                        <Column field='price' body={(Status) => <span>₱{Status.price.toFixed(2)}</span> } header="Product Price"></Column>
                        <Column field='purchase_status' body={Status_purchase} header="Status"></Column>
                        <Column body={(Status) => moment(Status.created_at).format('MMMM DD YYYY')} header="Order Date"></Column>
                    </DataTable>
                </Panel>
            </div>
        </div>
    )
}

export default PurchaseStatus