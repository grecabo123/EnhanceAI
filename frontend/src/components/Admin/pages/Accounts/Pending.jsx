import axios from 'axios'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import moment from 'moment'
import { Badge } from 'primereact/badge'
import { Button } from 'primereact/button'
import { PrimeIcons } from 'primereact/api'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Pending() {

    const [loading, setLoading] = useState(true)
    const [Accounts, setAccount] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`/api/FetchPending`).then(res => {
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

    const ActionButton = (Accounts) => {
        return (
            <>
                <Button data-id={Accounts.id} className='p-button-sm p-button-info m-2' onClick={Details} label='Details' icon={PrimeIcons.EYE}  />
                <Button className='p-button-sm p-button-danger m-2' label='Remove' icon={PrimeIcons.TRASH}  />
            </>
        )
    }

    const Details = (e) => {
        history.push(`/admin/accounts/details/refid=${e.currentTarget.getAttribute('data-id')}`);
    }

    return (
        <div className='container'>
            <div className="row">
                <Panel header="New Account Registered">
                    <DataTable value={Accounts} loading={loading} paginator paginatorLeft rows={10}>
                        <Column field='name' header="Name"></Column>
                        <Column field='email' header="Email"></Column>
                        <Column field='role' body={role_status} header="Role"></Column>
                        <Column field='created_at' body={dateformat} header="Date Registered"></Column>
                        <Column field='id' body={ActionButton} header="Actions"></Column>
                    </DataTable>
                </Panel>
            </div>
        </div>
    )
}

export default Pending