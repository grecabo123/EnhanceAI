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
import { InputNumber } from 'primereact/inputnumber'
import Swal from 'sweetalert2'


function ListofBuyer() {

    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [visible, setVisible] = useState(false);
    const [btnloading, setbtnload] = useState(false)
    const [amt, setAmt] = useState("")
    const [Details, setDetails] = useState({
        id: "",
        name: "",
        price: "",
        message: "",
        product_name: "",
        to_address: "",
        to_contact: "",
        to_name: "",
        img: "",
        desc: "",
        contact: "",
        address: "",
        city: "",
        person_msg: "",
        date_order: "",
        invoice: "",
        type_order: "",
    });
    const [Error, setError] = useState({
        error: [],
    })
    const toast = useRef(null);

    const [globalFilterValue, setGlobalFilterValue] = useState('');

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
    }

    const file_format = (list) => {
        // console.log(list.type_order);
        return (
            <span>
                {
                    list.type_order === 1 ?
                        <img src={`${import.meta.env.VITE_API_BASE_URL}/${list.file_attach}`} width={80} alt="" />
                        :
                        <img src={`${import.meta.env.VITE_API_BASE_URL}/${list.file_product_design}`} width={80} alt="" />

                }
            </span>
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
                    data-price={list.price}
                    data-message={list.message}
                    data-product_name={list.product_name}
                    data-to_address={list.to_address}
                    data-to_contact={list.to_contact}
                    data-to_name={list.to_name}
                    data-img={list.type_order === 1 ? list.file_attach : list.file_product_design}
                    data-desc={list.description}
                    data-contact={list.contact}
                    data-address={list.address}
                    data-city={list.city}
                    data-person_msg={list.messages}
                    data-date={list.order_date}
                    data-order={list.invoice_id}
                    data-type_order={list.type_order}
                    onClick={GetDetails}
                />
                <Button label='Remove Order' className='p-button-sm p-button-danger m-1' onClick={RemoveOrder} data-id={list.order_id} />
            </React.Fragment>
        )
    }

    const RemoveOrder = (e) => {

        var id_order = e.currentTarget.getAttribute('data-id');

        Swal.fire({
            title: "Are you sure?",
            text: "You want to remove this list!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/api/DeleteOrder/${id_order}`).then(res => {
                    if (res.data.status === 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Order has been removed.",
                            icon: "success"
                        });
                        FetchData();
                    }
                }).catch((error) => {
                    if (error.response.status === 500) {
                        swal("Warning", error.response.statusText, 'warning')
                    }
                    else if (error.response.status === 404) {
                        swal("Error", "Server Error", 'error')
                    }
                })
            }
        });
    }

    const GetDetails = (e) => {
        setVisible(true)
        const type_order = e.currentTarget.getAttribute('data-type_order')

        setDetails({
            id: e.currentTarget.getAttribute('data-id'),
            name: e.currentTarget.getAttribute('data-name'),
            price: e.currentTarget.getAttribute('data-price'),
            product_name: e.currentTarget.getAttribute('data-product_name'),
            to_address: e.currentTarget.getAttribute('data-to_address'),
            to_contact: e.currentTarget.getAttribute('data-to_contact'),
            to_name: e.currentTarget.getAttribute('data-to_name'),
            img:  e.currentTarget.getAttribute('data-img'),
            message: e.currentTarget.getAttribute('data-desc'),
            contact: e.currentTarget.getAttribute('data-contact'),
            address: e.currentTarget.getAttribute('data-address'),
            city: e.currentTarget.getAttribute('data-city'),
            person_msg: e.currentTarget.getAttribute('data-person_msg'),
            date_order: e.currentTarget.getAttribute('data-date'),
            invoice: e.currentTarget.getAttribute('data-order'),
        });
    }

    const UpdateStatus = (e) => {
        e.preventDefault();
        setbtnload(true)
        const data = {
            product_id: Details.id,
            user_fk: localStorage.getItem('auth_id'),
            amt: amt,
            date_: moment(Details.date_order).format('MMM DD YYYY hh:mm a'),
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
                FetchData();
            }
            else {
                setError({ ...Error, error: res.data.error });
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

    const imge_from = (rowData) => {
        return (
            <span className={`fw-bold ${rowData.type_order === 1 ? 'text-info' : 'text-success'}`}>{rowData.type_order === 1 ? "Generate AI" : "Store Design"}</span>
        )
    }

    return (
        <div className='container-fluid'>
            <Toast ref={toast} />
            <Panel header="List of Buyer">
                <DataTable loading={loading}
                    size='small'
                    selectionMode={'single'}
                    header={header}
                    filters={filters}
                    globalFilterFields={['invoice_id']}
                    value={list} paginator paginatorLeft rows={10}>
                    <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                    <Column field='invoice_id' filterField='invoice_id' header="Order ID"></Column>
                    <Column body={imge_from}  header="Image From"></Column>
                    <Column field='file_product_design' body={file_format} header="Product Image"></Column>
                    <Column field='name' header="Name of Buyer"></Column>
                    <Column body={(list) => <span>{moment(list.created_at).format('MMM DD YYYY hh:mm a')}</span>} header="Date Time Order"></Column>
                    <Column field='id' body={ActionsButton} header="Actions"></Column>
                </DataTable>
            </Panel>


            <Dialog header="Details" draggable={false} position='top' visible={visible} onHide={() => setVisible(false)}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>

                <Divider>
                    <span>Product Details</span>
                </Divider>
                <div className="d-flex justify-content-center">
                    <img src={`${import.meta.env.VITE_API_BASE_URL}/${Details.img}`} alt="" width={100} />
                </div>

                <form onSubmit={UpdateStatus}>
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

                    <Divider>
                        <span>Total</span>
                    </Divider>
                    <li class="list-group-item d-flex border-0 justify-content-between align-items-center">
                        Total Price
                        <InputNumber className={`p-inputtext-sm ${Error.error.amt ? 'p-invalid' : ''}`} prefix='₱' minFractionDigits={2}
                            onValueChange={(e) => setAmt(e.value)}

                        />
                    </li>

                    <div className="mt-2">
                        <Button loading={btnloading} className='p-button-sm p-button-info m-1'
                            label={btnloading ? "Saving..." : "Approve"}
                        />

                    </div>
                </form>
            </Dialog>
        </div>
    )
}

export default ListofBuyer