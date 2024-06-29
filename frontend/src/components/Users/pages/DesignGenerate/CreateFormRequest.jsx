import axios from 'axios'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';

function CreateFormRequest(props) {

    const [ShopData, setShopData] = useState([])
    const [Book, setBook] = useState({
        name: "",
        contact: "",
        address: "",
        desc: "",
        error: [],
    })
    const [BookDate, setBookDate] = useState("")
    const [FileAttach, setFileAttach] = useState([])
    const [btndis, setBtn] = useState(false)


    useEffect(() => {
        axios.get(`/api/ShopInfo/${props.match.params.id}`).then(res => {
            if (res.data.status === 200) {
                setShopData(res.data.data)
            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
            else if (error.response.status === 404) {

            }
        })
    }, [])

    const ReturnPAge = () => {
        window.history.back();
    }

    const handleupload = (e) => {
        setFileAttach({ file: e.target.files[0] })
    }

    const hanldeinput = (e) => {
        setBook({ ...Book, [e.target.name]: e.target.value });
    }

    const BookForm = (e) => {
        e.preventDefault();

        const data = new FormData;
        

        data.append('name',Book.name)
        data.append('contact',Book.contact)
        data.append('address',Book.address)
        data.append('desc',Book.desc)
        data.append('date_',BookDate)
        data.append('file',FileAttach.file)
        data.append('user_',localStorage.getItem('auth_id'))

        axios.post(`/api/BookDataForm`,data).then(res => {
            if(res.data.status === 200) {

            }
            else{

            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
            else if (error.response.status === 404) {

            }
        })

    }

    return (
        <div>
            <Panel header="Form Design Request">
                <div className="d-flex justify-content-end">
                    <Button className='p-button-sm p-button-info' label='Return Page' onClick={ReturnPAge} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-2">
                            <label htmlFor="" className="form-label">
                                Shop Name
                            </label>
                            <InputText className='w-100 p-inputtext-sm' value={ShopData.shop_name} readOnly />
                        </div>
                        <div className="col-lg-6 mb-2">
                            <label htmlFor="" className="form-label">
                                Shop Name
                            </label>
                            <InputText className='w-100 p-inputtext-sm' value={ShopData.email} readOnly />
                        </div>
                        <div className="col-lg-6 mb-2">
                            <label htmlFor="" className="form-label">
                                Shop Name
                            </label>
                            <InputText className='w-100 p-inputtext-sm' value={ShopData.shop_contact} readOnly />
                        </div>
                        <div className="col-lg-6 mb-2">
                            <label htmlFor="" className="form-label">
                                Shop Owner
                            </label>
                            <InputText className='w-100 p-inputtext-sm' value={ShopData.name} readOnly />
                        </div>
                        <Divider>

                        </Divider>
                        <form onSubmit={BookForm} id="reset_form">
                            <div className="row">
                                <div className="col-lg-6 mb-2">
                                    <label htmlFor="" className="form-label">
                                        <span className='text-danger'>*</span>Name
                                    </label>
                                    <InputText name='name' className='w-100 p-inputtext-sm' onChange={hanldeinput} />
                                </div>
                                <div className="col-lg-6 mb-2">
                                    <label htmlFor="" className="form-label">
                                        <span className='text-danger'>*</span>Contact
                                    </label>
                                    <InputText name='contact' className='w-100 p-inputtext-sm' onChange={hanldeinput} />
                                </div>
                                <div className="col-lg-6 mb-2">
                                    <label htmlFor="" className="form-label">
                                        <span className='text-danger'>*</span>Address
                                    </label>
                                    <InputText name='address' className='w-100 p-inputtext-sm' onChange={hanldeinput} />
                                </div>
                                <div className="col-lg-6 mb-2">
                                    <label htmlFor="" className="form-label">
                                        <span className='text-danger'>*</span>Date
                                    </label>
                                    <Calendar value={BookDate} onChange={(e) => setBookDate(e.target.value)} className='w-100 p-inputtext-sm' showIcon showTime hourFormat='12' />
                                </div>
                                <div className="col-lg-12 mb-2">
                                    <label htmlFor="" className="form-label">
                                        <span className='text-danger'>*</span>File Attach
                                    </label>
                                    <InputText name='file' onChange={handleupload} className='w-100 p-inputtext-sm' type='file' />
                                </div>
                                <div className="col-lg-12 mb-2">
                                    <label htmlFor="" className="form-label">
                                        Description (optional)
                                    </label>
                                    <InputTextarea name='desc' className='w-100' rows={5} cols={5} onChange={hanldeinput} style={{ resize: "none" }} />
                                </div>
                            </div>
                            <div className="mt-2">
                                <Button loading={btndis} className='p-button-sm' label='Book Now' />
                            </div>
                        </form>
                    </div>
                </div>
            </Panel>
        </div>
    )
}

export default CreateFormRequest