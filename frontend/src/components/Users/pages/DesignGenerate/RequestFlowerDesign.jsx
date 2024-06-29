import axios from 'axios'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Image } from 'primereact/image'
import { InputText } from 'primereact/inputtext'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import {FilterMatchMode } from 'primereact/api'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function RequestFlowerDesign() {

    const [ShopData, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory();
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const [filters, setFilter] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    })

    useEffect(() => {
        axios.get(`/api/ShopList/${localStorage.getItem('auth_id')}`).then(res => {
            if(res.data.status === 200) {
                setData(res.data.data);
            }
            setLoading(false)
        }).catch((error) => {
            if(error.response.status === 500) {
                swal("Warning",error.response.statusText,'warning')
            }
            else if(error.response.status === 404) {
                swal("Error","Page Error",'warning')
            }
        })
    },[])

    const ImageLogo = (rowData) =>{
        return (
            <span> 
                <Image src={`${import.meta.env.VITE_API_BASE_URL}/${rowData.shop_logo}`} width='80' />
            </span>
        )
    }

    const ActionButton = (rowData) => {
        return (
            <React.Fragment>
                <Button data-id={rowData.id} data-shop={rowData.shop_name} onClick={ProductList} className='p-button-sm' label='Create Form' />
            </React.Fragment>
        )
    }

    const ProductList = (e) => {
        history.push(`/customer/request/form/flower/${e.currentTarget.getAttribute('data-shop')}/${e.currentTarget.getAttribute('data-id')}`)
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

    return (
        <div>
            <Panel header="List Shops">
                <DataTable 
                    loading={loading}
                    paginator
                    paginatorLeft
                    rows={10}
                    size='small'
                    filters={filters}
                    selectionMode={'single'}
                    value={ShopData}
                    globalFilterFields={['shop_name']}
                    header={header}
                >

                    <Column header="#" body={(data,options) => options.rowIndex +1}></Column>
                    <Column body={ImageLogo} header="Shop Logo"></Column>
                    <Column field='shop_name' filterField='shop_name' header="Shop Name"></Column>
                    <Column field='email' header="Shop Email"></Column>
                    <Column field='shop_city' header="Shop City"></Column>
                    <Column field='shop_address' header="Shop Address"></Column>
                    <Column body={ActionButton} header="Action"></Column>
                </DataTable>
            </Panel>
        </div>
    )
}

export default RequestFlowerDesign