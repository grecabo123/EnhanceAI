import axios from 'axios'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import moment from 'moment'
import { Badge } from 'primereact/badge'

function Approve() {

    const [loading, setLoading] = useState(true)
    const [Accounts, setAccount] = useState([]);

    useEffect(() => {
        axios.get(`/api/FetchAllAccounts`).then(res => {
            if(res.data.status === 200) {
                setAccount(res.data.data);
            }
            setLoading(false)
        }).catch((error) => {
            if(error.response.status === 500) {
                swal("Warning",error.response.statusText,'warning')
            }
        })
    },[])

   const role_status = (Accounts) => {
        return Accounts.role === 1 ? <Badge severity={'success'} value={'Admin'} /> : <Badge severity={'danger'} value={'Users'} /> 
   }

    const dateformat = (Accounts) => {
        return (
            <span>{moment(Accounts.created_at).format('MMM DD YYYY')}</span>
        )
    }

    return (
        <div className='container'>
            <div className="row">
                <Panel header="All Accounts Registered">
                    <DataTable value={Accounts} loading={loading} paginator paginatorLeft rows={10}>
                        <Column field='name' header="Name"></Column>
                        <Column field='email' header="Email"></Column>
                        <Column field='role' body={role_status} header="Role"></Column>
                        <Column field='created_at' body={dateformat} header="Date Registered"></Column>
                    </DataTable>
                </Panel>
            </div>
        </div>
    )
}

export default Approve