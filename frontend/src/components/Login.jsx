import { Button } from 'primereact/button'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { FaBars, FaCartPlus, FaRobot, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { InputText } from 'primereact/inputtext'
import { Divider } from 'primereact/divider'
import axios from 'axios'
import swal from 'sweetalert'
import { Sidebar } from 'primereact/sidebar'

function Login() {

    const history = useHistory();
    const [btnload, setbtnload] = useState(false)
    const [LoginData, setData] = useState({
        email: "",
        password: "",
        error: [],
    });
    const [visible, setVisible] = useState(false)

    const Return = () => {
        history.push(`/register`)
    }

    const handleinput = (e) => {
        setData({ ...LoginData, [e.target.name]: e.target.value });
    }

    const Signin = (e) => {
        e.preventDefault();
        setbtnload(true)

        const data = {
            email: LoginData.email,
            password: LoginData.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/Login`,data).then(res => {
                if(res.data.status === 200) {
                    if(res.data.role === 1){
                        localStorage.setItem("auth_token", res.data.token);
                        localStorage.setItem("auth_id", res.data.id);
                        localStorage.setItem('auth_name', res.data.name);
                        history.push('/admin');
                        swal('Success', res.data.message, 'success')
                        setbtnload(false)
                    }
                    else{
                        localStorage.setItem("auth_token", res.data.token);
                        localStorage.setItem("auth_id", res.data.id);
                        localStorage.setItem('auth_name', res.data.name);
                        history.push('/customer');
                        swal('Success', res.data.message, 'success')
                        setbtnload(false)

                    }
                }
                else if (res.data.status === 501){
                    swal("Warning",res.data.message,'warning');
                    setbtnload(false)
                    
                }
                else if (res.data.status === 504){
                    swal("Warning",res.data.message,'warning');
                    setbtnload(false)
                    
                }
                else{
                    setData({...LoginData, error: res.data.error});
                    setbtnload(false)

                }
            }).catch((error) => {
                if(error.response.status === 500) {
                    swal("Warning",error.response.statusText,'warning');
                    setbtnload(false)

                }
            })
        });
    }

    return (
        <React.Fragment>
               <header id="header" class="fixed-top d-flex align-items-center">
                <div class="container d-flex align-items-center justify-content-start">
                    <div className='d-lg-none' id='bars'>
                        <FaBars size={24} onClick={(e) => setVisible(true)} style={{ cursor: "pointer" }} />
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
      
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <div className="text-center">
                    <h4><b>Floral Design</b></h4>
                </div>
                <ul className='sidebar-list'>
                    <li><a class="nav-link scrollto active" href="/">Home</a></li>
                    <li><Link to="/register" class="nav-link scrollto" href="#about">Register</Link></li>
                    <li><Link to="/login" class="nav-link scrollto" href="#contact">Login</Link></li>
                </ul>
            </Sidebar>
            <main id="main">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <div id='form'>
                            <div className="text-center">
                                <h2>Login</h2>
                            </div>
                            <div className="container">
                                <form onSubmit={Signin} id='form_reset'>
                                    <div className="row">
                                        <div className="col-lg-12 mb-2">
                                            <label htmlFor="" className="form-label">
                                                Email Address
                                            </label>
                                            <InputText className='w-100 p-inputtext-sm' onChange={handleinput} name='email' />
                                            <span className='text-danger'>{LoginData.error.email}</span>
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label htmlFor="" className="form-label">
                                                Password
                                            </label>
                                            <InputText type='password' className='w-100 p-inputtext-sm' onChange={handleinput} name='password' />
                                            <span className='text-danger'>{LoginData.error.password}</span>
                                        </div>
                                        <div className="mt-3">
                                            <Button loading={btnload} className='w-100 p-button-sm p-button-info' label='Login' />
                                        </div>
                                        <div className="mt-2">
                                            <Divider align='center'>
                                                <span>Or</span>
                                            </Divider>
                                        </div>
                                    </div>
                                </form>
                                <Button className='w-100 p-button-sm' text label='Create an Account' onClick={Return} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Login