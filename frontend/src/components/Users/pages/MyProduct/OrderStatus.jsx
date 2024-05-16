import axios from 'axios'
import moment from 'moment'
import { Badge } from 'primereact/badge'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'

function OrderStatus() {


    const [loading, setLoading] = useState(true)
    const [orderdata, setOrder] = useState([])


    useEffect(() => {
        axios.get(`/api/OrderStatus/${localStorage.getItem('auth_id')}`).then(res => {
            if(res.data.status === 200) {
                setOrder(res.data.data)
            }
            setLoading(false)
        }).catch((error) => {
            if(error.response.status === 500) {
                swal("Warning",error.response.statusText,'warning')
            }
        })
    },[])

    const status_pro = (rowData) => {
        return (
            <>
                {
                    rowData.purchase_status == 1 ? <Badge severity={'success'} value={'Completed'} /> : <Badge severity={'warning'} value={'On Progress'} />
                }
            </>
        )
    }

    return (
        <div>
            <Panel>
                <DataTable loading={loading} value={orderdata} paginator paginatorLeft rows={10}>
                    <Column header="#" body={(data,options) => options.rowIndex + 1}></Column>
                    <Column field='file_product' header="Product"></Column>
                    <Column field='product_name' header="Product"></Column>
                    <Column field='purchase_status' body={status_pro} header="Product Status"></Column>
                    <Column body={(orderdata) => <span>{moment(orderdata.created_at).format('MMM DDD YYYY')}</span> } header="DateTime"></Column>
                </DataTable>
            </Panel>
        </div>
    )
}

export default OrderStatus