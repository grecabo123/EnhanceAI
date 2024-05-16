import axios from 'axios';
import moment from 'moment';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Image } from 'primereact/image';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { Skeleton } from 'primereact/skeleton';
import { Toast } from 'primereact/toast';
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';

function Details(props) {

    const [loading, setLoading] = useState(true);
    const [UserInfo, setInfo] = useState([])
    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState([]);
    const toast = useRef(null);
    const history = useHistory();

    useEffect(() => {
        axios.get(`/api/AccountDetails/${props.match.params.id}`).then(res => {
            if (res.data.status === 200) {
                setInfo(res.data.data)
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning');
            }
        })
    }, []);

    const ModelPreview = () => {
        setVisible(true)
    }

    const list_approve = [
        { label: "Approved", value: 1 },
        { label: "Not Approved", value: 2 },
    ]

    const SubmitData = (e) => {
        e.preventDefault();

        const data = {
            user_id: props.match.params.id,
            action: status,
            user_fk: localStorage.getItem('auth_id'),
        };

        axios.put(`/api/UpdateStatus`,data).then(res => {
            if(res.data.status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Change Status",
                    detail: "Successfully",
                });
                setTimeout(() =>{
                    history.push(`/admin/accounts/pending`)
                },2000)
            }
        }).catch((error) => {
            if(error.response.status === 500) {
                swal("Warning",error.response.statusText,'warning')
            }
        })
    }

    const Return_Page = () => {
        history.push(`/admin/accounts/pending`)
    }

    return (
        <div className='container'>
            <div className="row">
                
                {
                    loading ? <Skeleton /> :
                        <Panel header={`Details - ${UserInfo.name}`}>
                            <Toast ref={toast} />
                            <div className="d-flex justify-content-end">
                                <Button onClick={Return_Page} className='p-button-sm p-button-info' label='Return Page' />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
                                        <label htmlFor="" className="form-label">
                                            Name
                                        </label>
                                        <InputText className='w-100' value={UserInfo.name} readOnly />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
                                        <label htmlFor="" className="form-label">
                                            Email
                                        </label>
                                        <InputText className='w-100' value={UserInfo.email} readOnly />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
                                        <label htmlFor="" className="form-label">
                                            Contact
                                        </label>
                                        <InputText className='w-100' value={UserInfo.contact} readOnly />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
                                        <label htmlFor="" className="form-label">
                                            City
                                        </label>
                                        <InputText className='w-100' value={UserInfo.city} readOnly />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
                                        <label htmlFor="" className="form-label">
                                            Address
                                        </label>
                                        <InputText className='w-100' value={UserInfo.address} readOnly />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
                                        <label htmlFor="" className="form-label">
                                            Date Registered
                                        </label>
                                        <InputText className='w-100' value={moment(UserInfo.created_at).format('MMM DD YYYY')} readOnly />
                                    </div>
                                    <div className="col-lg-12">
                                        <Image src={`http://127.0.0.1:8000/${UserInfo.file_upload}`} width='200' height='200' preview />
                                    </div>
                                    <div className="mt-2">
                                        <Button onClick={ModelPreview} className='p-button-sm p-button-info' label='Actions' />
                                    </div>
                                </div>
                            </div>
                        </Panel>
                }

                <Dialog header="Actions" visible={visible} draggable={false} breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '50vw' }}
                    onHide={() => setVisible(false)} position='top'
                >
                        <div className="container">
                            <form onSubmit={SubmitData}>
                                <div className="row">
                                    <div className="col-lg-12 mb-2">
                                        <label htmlFor="" className="form-label">
                                            Status
                                        </label>
                                        <Dropdown value={status} placeholder='Choose Status' onChange={(e) => setStatus(e.value)} options={list_approve} className='w-100 p-inputtext-sm' />
                                    </div>
                                    <div className="mt-2">
                                        <Button className='w-100 p-button-sm' label='Submit' />
                                    </div>
                                </div>
                            </form>
                        </div>
                </Dialog>
            </div>
        </div>
    )
}

export default Details