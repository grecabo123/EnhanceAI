import axios from 'axios'
import moment from 'moment'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React, { useEffect, useRef, useState } from 'react'
import swal from 'sweetalert'

import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider'
import { Toast } from 'primereact/toast'
import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber'


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
    });
    const [Error, setError] = useState({
        error: [],
    })
    const toast = useRef(null);



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
        return (
            <img src={`${import.meta.env.VITE_API_BASE_URL}/${list.file_product_design}`} width={80} alt="" />
        )
    }

    const ActionsButton = (list) => {
        return (
            <React.Fragment>
                <Button className='p-button-sm' label='Details'
                    data-id={list.order_id}
                    data-name={list.name}
                    data-price={list.price}
                    data-message={list.message}
                    data-product_name={list.product_name}
                    data-to_address={list.to_address}
                    data-to_contact={list.to_contact}
                    data-to_name={list.to_name}
                    data-img={list.file_product_design}
                    data-desc={list.description}
                    data-contact={list.contact}
                    data-address={list.address}
                    data-city={list.city}
                    data-person_msg={list.messages}
                    onClick={GetDetails}
                />
            </React.Fragment>
        )
    }

    const GetDetails = (e) => {
        setVisible(true)

        setDetails({
            id: e.currentTarget.getAttribute('data-id'),
            name: e.currentTarget.getAttribute('data-name'),
            price: e.currentTarget.getAttribute('data-price'),
            product_name: e.currentTarget.getAttribute('data-product_name'),
            to_address: e.currentTarget.getAttribute('data-to_address'),
            to_contact: e.currentTarget.getAttribute('data-to_contact'),
            to_name: e.currentTarget.getAttribute('data-to_name'),
            img: e.currentTarget.getAttribute('data-img'),
            message: e.currentTarget.getAttribute('data-desc'),
            contact: e.currentTarget.getAttribute('data-contact'),
            address: e.currentTarget.getAttribute('data-address'),
            city: e.currentTarget.getAttribute('data-city'),
            person_msg: e.currentTarget.getAttribute('data-person_msg'),
        });
    }

    const UpdateStatus = (e) => {
        e.preventDefault();
        setbtnload(true)
        const data = {
            product_id: Details.id,
            user_fk: localStorage.getItem('auth_id'),
            amt: amt,
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
            else{
                setError({...Error, error: res.data.error});
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
            <Panel header="List of Buyer">
                <DataTable loading={loading}
                    size='small'
                    selectionMode={'single'}
                    value={list} paginator paginatorLeft rows={10}>
                    <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                    <Column field='file_product_design' body={file_format} header="Product Image"></Column>
                    <Column field='name' header="Name of Buyer"></Column>
                    <Column body={(list) => <span>{moment(list.created_at).format('MMM DD YYYY')}</span>} header="Date Time"></Column>
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
                        <Button loading={btnloading} className='p-button-sm p-button-info'
                            label={btnloading ? "Saving..." : "Approve"}
                        />
                    </div>
                </form>
            </Dialog>
        </div>
    )
}

export default ListofBuyer