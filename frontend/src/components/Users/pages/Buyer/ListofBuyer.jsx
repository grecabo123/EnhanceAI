import axios from 'axios'
import moment from 'moment'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'

import { Dialog } from 'primereact/dialog';


function ListofBuyer() {

    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [visible, setVisible] = useState(false);
    const [Details, setDetails] = useState({
        id: "",
        name: "",
        img: "",
        user_fk: "",
    });

    useEffect(() => {
        axios.get(`/api/ListoBuyer/${localStorage.getItem('auth_id')}`).then(res => {
            if (res.data.status === 200) {
                setList(res.data.data)
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
        })
    }, [])
    const file_format = (list) => {
        return (
            <img src={`${import.meta.env.VITE_API_BASE_URL}/${list.file_product_design}`} width={60} alt="" />
        )
    }

    const ActionsButton = (list) => {
        return (
            <React.Fragment>
                <Button className='p-button-sm' label='Details' data-id={list.id}
                    onClick={GetDetails}
                />
            </React.Fragment>
        )
    }

    const GetDetails = (e) => {
        setVisible(true)
    }

    return (
        <div className='container-fluid'>
            <Panel>
                <DataTable loading={loading} value={list} paginator paginatorLeft rows={10}>
                    <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                    <Column field='file_product_design' body={file_format} header="Product Image"></Column>
                    <Column field='name' header="Name of Buyer"></Column>
                    <Column body={(list) => <span>{moment(list.created_at).format('MMM DD YYYY')}</span>} header="Date Time"></Column>
                    <Column field='id' body={ActionsButton} header="Actions"></Column>
                </DataTable>
            </Panel>


            <Dialog header="Header" position='top' visible={visible} onHide={() => setVisible(false)}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                    
            </Dialog>
        </div>
    )
}

export default ListofBuyer