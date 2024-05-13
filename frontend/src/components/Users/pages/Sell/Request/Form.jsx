import axios from 'axios'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Panel } from 'primereact/panel'
import { Toast } from 'primereact/toast'
import React, { useRef, useState } from 'react'
import swal from 'sweetalert'

function Form() {

    const [Create, setCreate] = useState({
        shop_name: "",
        shop_description: "",
        shop_city: "",
        shop_address: "",
        shop_contact: "",
        error: [],
    });
    const [btnloading, setbtnloading] = useState(false)
    const toast = useRef(null)
    const [logofile, setFile] = useState([])
    const [permit, setpermit] = useState([]);

    const hanldeinput = (e) => {
        e.persist();
        setCreate({...Create, [e.target.name] : e.target.value});
    }

    const handlelogo = (e) => {
        e.persist();
        setFile({logo_file: e.target.files[0]});
    }
    const handlepermit = (e) => {
        e.persist();
        setpermit({file_permit: e.target.files[0]});
    }

    const RegisterForm = (e) => {
        e.preventDefault()
        setbtnloading(true)
        const data = new FormData;

        data.append('shop_name',Create.shop_name);
        data.append('shop_description',Create.shop_description);
        data.append('shop_contact',Create.shop_contact);
        data.append('shop_city',Create.shop_city);
        data.append('shop_address',Create.shop_address);
        data.append('logo_file',logofile.logo_file)
        data.append('file_permit',permit.file_permit)
        data.append('user_fk',localStorage.getItem('auth_id'))

        axios.post(`/api/RegisterShop`,data).then(res => {
            if(res.data.status === 200){
                toast.current.show({
                    severity: "success",
                    summary: "Shop Form Submitted",
                    detail: "Successfully",
                })
                document.getElementById('form_reset').reset();
                setbtnloading(false)
            }   
            else{
                setbtnloading(false)

                setCreate({...Create, error: res.data.error})
            }
        }).catch((error) => {
            if(error.response.status === 500) {
                swal("Warning",error.response.statusText,'warning');
                setbtnloading(false)

            }
        })
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="d-flex justify-content-end mb-2" >
                </div>
                <Panel header="Request Form">
                <Toast ref={toast} />
                    <form onSubmit={RegisterForm} id='form_reset'>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-2">
                                    <label htmlFor="" className="form-label">
                                        Shop Name
                                    </label>
                                    <InputText onChange={hanldeinput} className='w-100 p-inputtext-sm' name='shop_name' />
                                    <span className='text-danger'>{Create.error.shop_name}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-2">
                                    <label htmlFor="" className="form-label">
                                        Shop Logo
                                    </label>

                                    <InputText type='file' name="logo_file" onChange={handlelogo} className='w-100 p-inputtext-sm' />
                                    <span className='text-danger'>{Create.error.logo_file}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-2">
                                    <label htmlFor="" className="form-label">
                                        Shop City
                                    </label>

                                    <InputText className='w-100 p-inputtext-sm' onChange={hanldeinput} name='shop_city' />
                                    <span className='text-danger'>{Create.error.shop_city}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-2">
                                    <label htmlFor="" className="form-label">
                                        Address
                                    </label>

                                    <InputText className='w-100 p-inputtext-sm' name='shop_address' onChange={hanldeinput} />
                                    <span className='text-danger'>{Create.error.shop_address}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-2">
                                    <label htmlFor="" className="form-label">
                                        Contact
                                    </label>

                                    <InputText className='w-100 p-inputtext-sm' name='shop_contact' onChange={hanldeinput} />
                                    <span className='text-danger'>{Create.error.shop_contact}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-2">
                                    <label htmlFor="" className="form-label">
                                        Business Permit
                                    </label>
                                    <InputText type='file' className='w-100 p-inputtext-sm' name='file_permit' onChange={handlepermit} />
                                    <small className='text-info'>* Attached PDF File Only</small>
                                    <span className='text-danger'>{Create.error.file_permit}</span>
                                </div>
                                <div className="col-lg-12 col-md-12 mb-2">
                                    <label htmlFor="" className="form-label">
                                        Description
                                    </label>
                                    <InputTextarea className='w-100' rows={5} cols={5} style={{ resize: "none" }} onChange={hanldeinput} name='shop_description' />
                                </div>
                                <div className="mt-2">
                                    <Button className='p-button-sm p-button-info' label={btnloading == true ? "Submiting" : "Submit"} loading={btnloading} />
                                </div>
                            </div>
                        </div>
                    </form>
                </Panel>
            </div>
        </div>
    )
}

export default Form