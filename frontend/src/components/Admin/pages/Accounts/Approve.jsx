import axios from 'axios'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React, { useEffect, useRef, useState } from 'react'
import swal from 'sweetalert'
import moment from 'moment'
import { Badge } from 'primereact/badge'
import { FilterMatchMode, PrimeIcons } from 'primereact/api';
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'

import { Dialog } from 'primereact/dialog';


function Approve() {

    const [loading, setLoading] = useState(true)
    const [Accounts, setAccount] = useState([]);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const toast = useRef(null)
    const [visible, setVisible] = useState(false)

    const [filters, setFilter] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    })

    useEffect(() => {
        FetchData();
        return () => {
            setLoading(true)
        }
    }, [])

    const FetchData = () => {
        axios.get(`/api/FetchAllAccounts`).then(res => {
            if (res.data.status === 200) {
                setAccount(res.data.data);
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning');
            }
            else if (error.response.status === 404) {
                swal("Error", 'Server Error', 'error');

            }
        })
    }
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilter(_filters);
        setGlobalFilterValue(value);
    };

    const header = () => {
        return (
            <div className="d-flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search" />
                </span>
            </div>
        );
    };

    const role_status = (Accounts) => {
        return Accounts.shop_status === 1 ? <Badge severity={'success'} value={'Shop Open'} /> : <Badge severity={'danger'} value={'No Shop'} />
    }

    const dateformat = (Accounts) => {
        return (
            <span>{moment(Accounts.created_at).format('MMM DD YYYY hh:mm a')}</span>
        )
    }

    const actionbutn = (rowData) => {
        return (
            <div className="d-flex justify-content-evenly">
                {/* <Button className='p-button-sm p-button-info m-1' data-id={rowData.id} data-indicator={1} onClick={ActionButton} label='Details' /> */}
                <Button className='p-button-sm p-button-danger m-1' data-indicator={2} onClick={ActionButton} data-id={rowData.id} icon={PrimeIcons.LOCK} />
                
            </div>
        )
    }

    const ActionButton = (e) => {

        if (e.currentTarget.getAttribute('data-indicator') == 1) {
            setVisible(true)
            axios.get(`/api/AccountDetailsInformation/${e.currentTarget.getAttribute('data-id')}`).then(res => {
                if(res.data.status === 200) {

                }
            }).catch((error) => {
                if (error.response.status === 500) {
                    swal("Warning", error.response.statusText, 'warning');
                }
                else if (error.response.status === 404) {
                    swal("Error", 'Server Error', 'error');

                }
            })
        }
        else {

            const data = {
                id: e.currentTarget.getAttribute('data-id'),
                user_fk: localStorage.getItem('auth_id'),
            };

            axios.put(`/api/AccountUpdate`, data).then(res => {
                if (res.data.status === 200) {
                    toast.current.show({
                        severity: "success",
                        summary: "Account Has Been Locked!",
                        detail: "Successfully",
                    });
                    FetchData()
                }
                else {

                }
            }).catch((error) => {
                if (error.response.status === 500) {
                    swal("Warning", error.response.statusText, 'warning');
                }
                else if (error.response.status === 404) {
                    swal("Error", 'Server Error', 'error');

                }
            })
        }

    }

    return (
        <div className='container'>
            <div className="row">
                <Panel header="All Accounts Registered">
                    <Toast ref={toast} />
                    <DataTable value={Accounts}
                        size='small'
                        header={header}
                        stripedRows
                        filters={filters}
                        // tableStyle={{ minWidth: '50rem' }}
                        globalFilterFields={['name', 'email']}
                        selectionMode={'single'}
                        loading={loading} paginator paginatorLeft rows={10}>
                        <Column body={(data, options) => options.rowIndex + 1} header="#"></Column>
                        <Column field='name' filterField='name' header="Name"></Column>
                        <Column field='email' filterField='email' header="Email"></Column>
                        <Column field='shop_status' body={role_status} header="Open Shop"></Column>
                        <Column field='created_at' body={dateformat} header="Date Registered"></Column>
                        <Column body={actionbutn} header="Date Registered"></Column>
                    </DataTable>
                </Panel>

                <Dialog position='top' draggable={false} header="Account Details" visible={visible} onHide={() => { if (!visible) return; setVisible(false); }}
                    style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-2">
                            <label htmlFor="" className="form-label">
                                
                            </label>
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default Approve