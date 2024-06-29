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
import Swal from 'sweetalert2'

function Pending() {

    const [loading, setLoading] = useState(true)
    const [Accounts, setAccount] = useState([]);
    const history = useHistory();

    useEffect(() => {
        FetcAccount();
        return () => {
            setLoading(true)
        }
    }, [])

    const FetcAccount = () => {
        axios.get(`/api/FetchPending`).then(res => {
            if (res.data.status === 200) {
                setAccount(res.data.data);
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
        })
    }

    const role_status = (Accounts) => {
        return Accounts.role === 1 ? <Badge severity={'success'} value={'Admin'} /> : <Badge severity={'danger'} value={'Users'} />
    }

    const dateformat = (Accounts) => {
        return (
            <span>{moment(Accounts.created_at).format('MMM DD YYYY hh:mm a')}</span>
        )
    }

    const ActionButton = (Accounts) => {
        return (
            <>
                <Button data-id={Accounts.id} data-indicator={1} className='p-button-sm p-button-info m-2' onClick={Details} label='Details' icon={PrimeIcons.EYE} />
                <Button data-id={Accounts.id} onClick={Details} data-indicator={2} className='p-button-sm p-button-danger m-2' label='Remove' icon={PrimeIcons.TRASH} />
            </>
        )
    }

    const Details = (e) => {
        var id = e.currentTarget.getAttribute('data-id')
        if (e.currentTarget.getAttribute('data-indicator') == 1) {
            history.push(`/admin/accounts/details/refid=${e.currentTarget.getAttribute('data-id')}`);
        }
        else {
            Swal.fire({
                title: "Are you sure?",
                text: "You want to delete this account!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`/api/RemoveAccount/${id}`).then(res => {
                        if (res.data.status === 200) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Account has been deleted.",
                                icon: "success"
                            });
                            FetcAccount();
                        }
                    }).catch((error) => {
                        if (error.response.status === 500) {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong!",
                            });
                        }
                        else if(error.response.status === 404) {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong!",
                            });
                        }
                    })
                }
                else {
                    Swal.fire({
                        title: "Cancelled",
                        text: "Account delete is cancel",
                        icon: "error"
                    });
                }
            });
        }

    }

    return (
        <div className='container'>
            <div className="row">
                <Panel header="New Account Registered">
                    <DataTable value={Accounts} loading={loading}
                        size='small'
                        selectionMode={'single'}
                        paginator paginatorLeft rows={10}>
                        <Column body={(data, options) => options.rowIndex + 1} header="#"></Column>
                        <Column field='name' header="Name"></Column>
                        <Column field='email' header="Email"></Column>
                        {/* <Column field='role' body={role_status} header="Role"></Column> */}
                        <Column field='created_at' body={dateformat} header="Date Registered"></Column>
                        <Column field='id' body={ActionButton} header="Actions"></Column>
                    </DataTable>
                </Panel>
            </div>
        </div>
    )
}

export default Pending