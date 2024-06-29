import { Button } from 'primereact/button'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { FaCartPlus, FaRobot, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { InputText } from 'primereact/inputtext'
import { Divider } from 'primereact/divider'
import axios from 'axios'
import swal from 'sweetalert'
import {Toast} from 'primereact/toast'
import ReCAPTCHA from "react-google-recaptcha"
import { Checkbox } from 'primereact/checkbox';



function Register() {

    const history = useHistory();
    const [loading, setloading] = useState(false)
    const [CreateAccountData, setData] = useState({
        name: "",
        email: "",
        password: "",
        city: "",
        address: "",
        contact: "",
        error: [],
    });
    const toast = useRef();
    const [FileUpload, setUpload] = useState([]);
    const boxcheck = useRef(false);
    const UsercaptchaRef = useRef(null);
    const [checked, setChecked] = useState(false)
    

    const Return = () => {
        history.push(`/login`)
    }

    const handleinput = (e) => {
        setData({...CreateAccountData, [e.target.name] : e.target.value});
    }

    const handleupload = (e) => {
        setUpload({file: e.target.files[0]});
    }

    const CreateAccount = (e) =>{
        e.preventDefault();

    
        const robot = UsercaptchaRef.current.getValue();
        if(checked === true &&  robot){
            setloading(true)
            const data = new FormData;

            data.append('name',CreateAccountData.name);
            data.append('file',FileUpload.file);
            data.append('email',CreateAccountData.email);
            data.append('address',CreateAccountData.address);
            data.append('contact',CreateAccountData.contact);
            data.append('city',CreateAccountData.city);
            data.append('password',CreateAccountData.password);

            axios.post(`/api/CreateAccount`,data).then(res => {
                if(res.data.status === 200) {
                    toast.current.show({
                        severity: "success",
                        summary: "Created Account",
                        detail: "Successfully"
                    });
                    document.getElementById('form_reset').reset();
                    UsercaptchaRef.current.reset();
                    setChecked(false)
                    setloading(false)
                }
                else{
                    setData({...CreateAccountData, error: res.data.error});
                    UsercaptchaRef.current.reset();
                    setloading(false)


                }
            }).catch((error) => {
                if(error.response.status === 500) {
                    swal("Warning",error.response.statusText,'warning');
                    UsercaptchaRef.current.reset();
                    setloading(false)

                }
            })
        }
        else{
            alert("Please Verify That you are Human.!")
        }
    }

    return (
        <React.Fragment>
            <Toast ref={toast} />
            <header id="header" class="fixed-top d-flex align-items-center">
                <div class="container d-flex align-items-center">
                    <div class="logo me-auto">
                        <h1><a href="index.html">Floral Design</a></h1>
                    </div>
                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><Link to="/register" class="nav-link scrollto" href="#about">Register</Link></li>
                            <li><Link to="/login" class="nav-link scrollto" href="#contact">Login</Link></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="container text-center text-md-left" data-aos="fade-up">
                    <h1>Welcome to <span>Floral Design</span></h1>
                    <h2>Harmony in Bloom: Cultivating Creativity with AI-Powered Floral Designs</h2>
                </div>
            </section>
            <main id="main">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <div id='form_register'>
                            <div className="text-center">
                                <h3>Create Account</h3>
                            </div>
                            <div className="container">
                                <form onSubmit={CreateAccount} id='form_reset'>
                                    <div className="row">
                                        <div className="col-lg-6 mb-2">
                                            <label htmlFor="" className="form-label">
                                                Name
                                            </label>
                                            <InputText className={`w-100 p-inputtext-sm ${CreateAccountData.error.name ? 'p-invalid' : ''}`} onChange={handleinput} name='name' />
                                            <span className='text-danger'>{CreateAccountData.error.name}</span>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <label htmlFor="" className="form-label">
                                                Email
                                            </label>
                                            <InputText type='email' className={`w-100 p-inputtext-sm ${CreateAccountData.error.email ? 'p-invalid' : ''}`} onChange={handleinput} name='email' />
                                            <span className='text-danger'>{CreateAccountData.error.email}</span>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <label htmlFor="" className="form-label">
                                                City
                                            </label>
                                            <InputText  className={`w-100 p-inputtext-sm ${CreateAccountData.error.city ? 'p-invalid' : ''}`} onChange={handleinput} name='city' />
                                            <span className='text-danger'>{CreateAccountData.error.city}</span>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <label htmlFor="" className="form-label">
                                                Address
                                            </label>
                                            <InputText  className={`w-100 p-inputtext-sm ${CreateAccountData.error.address ? 'p-invalid' : ''}`} onChange={handleinput} name='address' />
                                            <span className='text-danger'>{CreateAccountData.error.address}</span>

                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <label htmlFor="" className="form-label">
                                                Contact
                                            </label>

                                            <InputText className={`w-100 p-inputtext-sm ${CreateAccountData.error.contact ? 'p-invalid' : ''}`} onChange={handleinput} name='contact' />
                                            <span className='text-danger'>{CreateAccountData.error.contact}</span>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <label htmlFor="" className="form-label">
                                                Password
                                            </label>
                                            <InputText type='password' className={`w-100 p-inputtext-sm ${CreateAccountData.error.password ? 'p-invalid' : ''}`} onChange={handleinput} name='password' />
                                            <span className='text-danger'>{CreateAccountData.error.password}</span>
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label htmlFor="" className="form-label">
                                                Valid ID
                                            </label>
                                            <InputText type='file' className={`w-100 p-inputtext-sm ${CreateAccountData.error.file ? 'p-invalid' : ''}`} onChange={handleupload} name='file' />
                                            <small className='text-danger'>*</small><small>PNG,JPEG</small><br />
                                            <span className='text-danger'>{CreateAccountData.error.file}</span>
                                        </div>
                                         <div className="col-lg-12 mb-3">
                                            <Checkbox className='p-checkbox' ref={boxcheck} onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> <small className='text-secondary'>By using our services, you agree to the following terms and conditions related to the collection and use of your information. </small>
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <ReCAPTCHA
                                                sitekey={"6LcC86wcAAAAAOohkFSsLQ-Pa-6W21_hukOLMYoV"}
                                                render="explicit"
                                                theme="light"
                                                ref={UsercaptchaRef}
                                            />
                                        </div>
                                        
                                        <div className="mt-3">
                                            <Button loading={loading} className='w-100 p-button-sm p-button-info' label='Create Account' />
                                        </div>
                                        <div className="mt-2">
                                            <Divider align='center'>
                                                <span>Already Have an Account</span>
                                            </Divider>
                                        </div>
                                    </div>
                                </form>
                                <Button className='w-100 p-button-sm' text label='Login Account' onClick={Return} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Register