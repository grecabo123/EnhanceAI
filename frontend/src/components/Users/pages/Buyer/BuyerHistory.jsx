import axios from 'axios'
import moment from 'moment'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React, { useEffect, useRef, useState } from 'react'
import swal from 'sweetalert'
import { FilterMatchMode } from 'primereact/api'
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider'
import { Toast } from 'primereact/toast'
import { InputText } from 'primereact/inputtext'


function ListofBuyer() {

    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [visible, setVisible] = useState(false);
    const [btnloading, setbtnload] = useState(false)
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [Details, setDetails] = useState({
        id: "",
        name: "",
        contact: "",
        address: "",
        city: "",
        price: "",
        message: "",
        product_name: "",
        to_address: "",
        to_contact: "",
        to_name: "",
        img: "",
        desc: "",
        date_order: "",
        invoice: "",
    });
    const toast = useRef(null);
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
        axios.get(`/api/ListoBuyerHistory/${localStorage.getItem('auth_id')}`).then(res => {
            if (res.data.status === 200) {
                setList(res.data.data)
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
        })
    }

    const file_format = (list) => {
        return (
            <img src={`${import.meta.env.VITE_API_BASE_URL}/${list.file_product_design}`} width={60} alt="" />
        )
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

    const ActionsButton = (list) => {
        return (
            <React.Fragment>
                <Button className='p-button-sm m-1' label='Details'
                    data-id={list.order_id}
                    data-name={list.name}
                    data-contact={list.contact}
                    data-address={list.address}
                    data-city={list.city}
                    data-price={list.price}
                    data-message={list.message}
                    data-product_name={list.product_name}
                    data-to_address={list.to_address}
                    data-to_contact={list.to_contact}
                    data-to_name={list.to_name}
                    data-img={list.file_product_design}
                    data-desc={list.description}
                    data-date={list.order_date}
                    data-order={list.invoice_id}
                    onClick={GetDetails}
                    data-indicator={1}
                />
                <Button className='p-button-sm p-button-success m-1'
                    label='Update'
                    data-order={list.invoice_id}
                    onClick={GetDetails}
                    data-indicator={2}

                />
            </React.Fragment>
        )
    }

    const GetDetails = (e) => {
        
        if (e.currentTarget.getAttribute('data-indicator') == 1) {
            setVisible(true)
            setDetails({
                id: e.currentTarget.getAttribute('data-id'),
                name: e.currentTarget.getAttribute('data-name'),
                contact: e.currentTarget.getAttribute('data-contact'),
                address: e.currentTarget.getAttribute('data-address'),
                city: e.currentTarget.getAttribute('data-city'),
                price: e.currentTarget.getAttribute('data-price'),
                product_name: e.currentTarget.getAttribute('data-product_name'),
                to_address: e.currentTarget.getAttribute('data-to_address'),
                to_contact: e.currentTarget.getAttribute('data-to_contact'),
                to_name: e.currentTarget.getAttribute('data-to_name'),
                img: e.currentTarget.getAttribute('data-img'),
                message: e.currentTarget.getAttribute('data-desc'),
                invoice: e.currentTarget.getAttribute('data-order'),
                date_order: e.currentTarget.getAttribute('data-date'),
            });

        }
        else {
            const data = {
                invoice: e.currentTarget.getAttribute('data-order'),
                user_fk: localStorage.getItem('auth_fk'),
            }
            axios.put(`/api/OrderStatusUpdate`,data).then(res => {
                if(res.data.status === 200) {
                    toast.current.show({
                        severity: "success",
                        summary: "Order #: "+data.invoice+ "Update",
                        detail: "Successfully"
                    });
                    FetchData();
                }
                else{

                }
            }).catch((error) => {
                if(error.response.status === 500) {
                    swal("Warning",error.response.statusText,'warning')
                }
                else if(error.response.status === 404) {
                    swal("Error","Page Error",'error')
                    
                }
            })
        }
    }

    const UpdateStatus = (e) => {
        e.preventDefault();
        setbtnload(true)
        const data = {
            product_id: Details.id,
            user_fk: localStorage.getItem('auth_id'),
        };

        axios.post(`/api/UpdateProductBuyer`, data).then(res => {
            if (res.data.status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Data Updated",
                    detail: "Successfully"
                });
                setVisible(false);
                setbtnload(false)
            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
                setbtnload(false)

            }
            else if (error.response.status === 404) {
                swal("Error", "Page Not Found", 'error');
                setbtnload(false)

            }
        })
    }

    return (
        <div className='container-fluid'>
            <Toast ref={toast} />
            <Panel header="History Buyer">
                <DataTable loading={loading}
                    header={header}
                    size='small'
                    filters={filters}
                    selectionMode={'small'}
                    value={list} paginator paginatorLeft rows={10}
                    globalFilterValue={['invoice_id']}
                >
                    <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                    <Column field='invoice_id' filterField='invoice_id' header="Order ID"></Column>
                    <Column field='file_product_design' body={file_format} header="Product Image"></Column>
                    <Column field='name' header="Name of Buyer"></Column>
                    <Column body={(list) => <span>{moment(list.created_at).format('MMM DD YYYY')}</span>} header="Date Time"></Column>
                    <Column field='id' body={ActionsButton} header="Actions"></Column>
                </DataTable>
            </Panel>


            <Dialog header="Details" draggable={false} position='top' visible={visible} onHide={() => setVisible(false)}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <ul class="list-group">
                    <Divider>
                        <span>Order  Details</span>
                    </Divider>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        Order ID
                        <span>{Details.invoice}</span>
                    </li>
                    <Divider>
                        <span>Buyer  Details</span>
                    </Divider>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        Name of Buyer
                        <span>{Details.name}</span>
                    </li>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        Contact
                        <span>{Details.contact}</span>
                    </li>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        Address
                        <span>{Details.address}</span>
                    </li>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        City
                        <span>{Details.city}</span>
                    </li>
                    <Divider>
                        <span> Product Details</span>
                    </Divider>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        Product Name
                        <span>{Details.product_name}</span>
                    </li>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        Product Price
                        <span>₱{Details.price ? Number(Details.price).toFixed(2) : '0.00'}</span>
                    </li>

                    <Divider>
                        <span>Other Details</span>
                    </Divider>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        Person Deliver
                        <span>{Details.to_name}</span>
                    </li>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        Person Address
                        <span>{Details.to_address}</span>
                    </li>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        Person Contact
                        <span>{Details.to_contact}</span>
                    </li>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        Deliver Date
                        <span>{Details.date_order == null ? "" : moment(Details.date_order).format('MMM DD YYYY hh:mm a')}</span>
                    </li>
                    <Divider>
                        <span>Message</span>
                    </Divider>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        <span>{Details.person_msg}</span>
                    </li>
                    <p>
                        {Details.message}
                    </p>
                </ul>

            </Dialog>
        </div>
    )
}

export default ListofBuyer