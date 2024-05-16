import axios from 'axios'
import { PrimeIcons } from 'primereact/api'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { Image } from 'primereact/image'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Panel } from 'primereact/panel'
import { Skeleton } from 'primereact/skeleton'
import { Toast } from 'primereact/toast'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import swal from 'sweetalert'

function ShopDetails(props) {

    const [detail, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory();
    const [btnloading, setbtnloading] = useState(false)
    const toast = useRef(null)
    const [status_pick, setStatus] = useState([])
    useEffect(() => {
        axios.get(`/api/ShopDetails/${props.match.params.id}`).then(res => {
            if (res.data.status === 200) {
                setDetails(res.data.data)
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
        })
    }, [])

    const returnpage = () => {
        history.push(`/admin/accounts/request`)
    }

    const list_status = [
        { label: "Approved", value: 1 },
        { label: "Disapproved", value: 2 }
    ];

    const ViewPDF = (e) => {
        window.open(e.currentTarget.getAttribute('data-link'))
    }


    const UpdateStatus = (e) => {
        e.preventDefault();
        setbtnloading(true)
        const data = {
            user_fk: localStorage.getItem('auth_id'),
            status_choose: status_pick,
            account: detail.user_fk,
        }

        axios.put(`/api/UpdateAccount`, data).then(res => {
            if (res.data.status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Account Updated",
                    detail: "Successfully"
                })
                setTimeout(() => {
                    window.location.href = "/admin/accounts/request";
                }, 1500)
                setbtnloading(false)
            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
                setbtnloading(false)

            }
        })
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="d-flex justify-content-end mb-2">
                    {/* <Button className='p-button-sm p-button-info' onClick={returnpage} label='Return Page' /> */}
                </div>
                <Panel header="Details">
                    <Toast ref={toast} />
                    {
                        loading ?
                            <>
                                <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                                <Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
                                <Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
                                <Skeleton height="2rem" className="mb-2" borderRadius="16px"></Skeleton>
                                <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                            </>
                            :

                            <React.Fragment>
                                <div className="container">
                                    <form onSubmit={UpdateStatus} id='form_staus'>
                                        <div className="row">
                                            <div className="col-lg-3 mb-3">
                                                <div className="text-center">
                                                    <Image src={`http://127.0.0.1:8000/${detail.shop_logo}`} width='150' preview />
                                                </div>
                                            </div>
                                            <div className="col-lg-9 mb-2">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <label htmlFor="" className="form-label">
                                                            Shop Owner
                                                        </label>
                                                        <InputText readOnly className='w-100 p-inputtext-sm' value={detail.name} />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label htmlFor="" className="form-label">
                                                            Shop Name
                                                        </label>
                                                        <InputText readOnly className='w-100 p-inputtext-sm' value={detail.shop_name} />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label htmlFor="" className="form-label">
                                                            Shop Name
                                                        </label>
                                                        <InputText readOnly className='w-100 p-inputtext-sm' value={detail.shop_city} />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label htmlFor="" className="form-label">
                                                            Shop Name
                                                        </label>
                                                        <InputText readOnly className='w-100 p-inputtext-sm' value={detail.shop_address} />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label htmlFor="" className="form-label">
                                                            Shop Contact
                                                        </label>
                                                        <InputText readOnly className='w-100 p-inputtext-sm' value={detail.shop_contact} />
                                                    </div>
                                                    <div className="col-lg-6 mb-2">
                                                        <label htmlFor="" className="form-label">
                                                            Status
                                                        </label>
                                                        <Dropdown required value={status_pick} onChange={(e) => setStatus(e.value)} options={list_status} className='w-100 p-inputtext-sm' placeholder='Choose Status' />
                                                    </div>
                                                    <label htmlFor="" className="form-label">
                                                        Document
                                                    </label>

                                                    <div className="p-inputgroup flex-1">
                                                        {/* <InputText  readOnly value={`http://127.0.0.1:8000/${detail.shop_permit}`} /> */}
                                                        <Button data-link={`http://127.0.0.1:8000/${detail.shop_permit}`} icon={PrimeIcons.FILE_PDF} className="p-button-info" onClick={ViewPDF} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-12 mb-2">
                                                        <label htmlFor="" className="form-label">
                                                            Description
                                                        </label>
                                                        <InputTextarea readOnly className='w-100' style={{ resize: "none" }} rows={5} cols={5} />
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <Button loading={btnloading} className='p-button-sm' label='Action' />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </React.Fragment>
                    }
                </Panel>
            </div>
        </div>
    )
}

export default ShopDetails