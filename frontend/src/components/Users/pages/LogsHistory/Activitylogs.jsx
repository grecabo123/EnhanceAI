import axios from 'axios'
import moment from 'moment'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'

function ActivityLogs() {

    const [loading, setLoading] = useState(true);
    const [Logs, setLogs] = useState([])

    useEffect(() => {
        axios.get(`/api/Logs/${localStorage.getItem('auth_id')}`).then(res => {
            if(res.data.status === 200) {
                setLogs(res.data.data);
            }
            setLoading(false)
        }).catch((error) => {
            if(error.response.status === 500) {

            }
        })
    },[])

    const created_at_format= (Logs) => {
        return (
            <span>{moment(Logs.created_at).format('MMM DD YYYY hh:mm a')}</span>
        )
    }

    return (
        <div className='container'>
            <div className="row">
                <Panel header="History Logs">
                    <DataTable value={Logs} loading={loading} paginator paginatorLeft rows={10}>
                        <Column field='description' header="Description"></Column>
                        <Column field='created_at' body={created_at_format} header="DateTime"></Column>
                    </DataTable>
                </Panel>    
            </div>
        </div>
    )
}

export default ActivityLogs