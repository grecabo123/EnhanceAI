import React, { useRef } from 'react'
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import AdminRoutes from '../../routes/AdminRoutes'
import admin from '../../assets/admin/admin.jpg'
import { FcHome, FcPackage } from 'react-icons/fc'
import { FaBars, FaCaretDown, FaDesktop, FaUser, FaUsers } from 'react-icons/fa'
import { BsPersonBadge } from "react-icons/bs";
import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Avatar } from 'primereact/avatar'
import { Menu } from 'primereact/menu'
import axios from 'axios'

function Admin() {

    const menu = useRef(null);
    const [visible, setVisible] = useState(false)

    const Logout = () => {
        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_id');
                localStorage.removeItem('auth_name');
                swal('Success', res.data.message, 'success');
                history.push('/login');
            }
        });
    }

    let items_list = [
        // {
        //     label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => {
        //         history.push(`/admin/settings/config`)
        //     }
        // },
        // {
        //     label: 'My Account', icon: 'pi pi-fw pi-user', command: () => {
        //         history.push(`admin/myaccount`)
        //     }
        // },
        { label: <span className='text-danger fw-bold' onClick={Logout}>Logout</span>, icon: 'pi pi-fw pi-power-off' },
    ];

    const history = useHistory();



    return (
        <div>
            <div className="wrapper">
                <aside id="sidebar" className="js-sidebar">
                    <div className="h-100">
                        <div className="sidebar-logo d-flex justify-content-center align-items-center">
                            <img src={admin} alt="" width={100} style={{ borderRadius: "50%" }} />
                        </div>
                        <div className="mt-2 text-center">
                            <h4 className='text-light'>ADMIN FLOWER</h4>
                        </div>
                        <ul className="sidebar-nav">
                            <li className="sidebar-header">
                                Pages
                            </li>
                            <li className="sidebar-item">
                                <a href="/admin" className="sidebar-link">
                                    <FcHome size={20} className='align-middle' />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a href="#" className="sidebar-link collapsed" data-bs-target="#users" data-bs-toggle="collapse"
                                    aria-expanded="false">
                                    <FaUsers size={20} className='align-middle' />
                                    <span>Accounts</span>
                                </a>
                                <ul id="users" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                    <li className="sidebar-item">
                                        <Link to="/admin/accounts/pending" className="sidebar-link"><span className='child'>New Account</span></Link>
                                    </li>
                                    <li className="sidebar-item">
                                        <Link to="/admin/accounts/registered" className="sidebar-link"><span className='child'>Registered Account</span></Link>
                                    </li>
                                    <li className="sidebar-item">
                                        <Link to="/admin/accounts/lock" className="sidebar-link"><span className='child'>Lock Account</span></Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="sidebar-item">
                                <a href="#" className="sidebar-link collapsed" data-bs-target="#customer" data-bs-toggle="collapse"
                                    aria-expanded="false">
                                    <BsPersonBadge size={20} className='align-middle' />
                                    <span>Shop Account</span>
                                </a>
                                <ul id="customer" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                    <li className="sidebar-item">
                                        <Link to="/admin/accounts/request" className="sidebar-link"><span className='child'>Request Form</span></Link>
                                    </li>
                                    <li className="sidebar-item">
                                        <Link to="/admin/shop/accounts" className="sidebar-link"><span className='child'>Shop Accounts</span></Link>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className="sidebar-item">
                                <Link to="/admin/logs" className="sidebar-link">
                                    <FaDesktop size={20} className='align-middle' />
                                    <span>Payment</span>
                                </Link>
                            </li> */}
                            <li className="sidebar-header">
                                History
                            </li>
                            <li className="sidebar-item">
                                <Link to="/admin/history/logs" className="sidebar-link">
                                    <FaDesktop size={20} className='align-middle' />
                                    <span>Activity Logs</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </aside>
                <div className="main">
                    <main className="content px-1">
                        <nav className="navbar navbar-expand ">
                            <div className="navbar-collapse navbar">
                                <div className="container-fluid">
                                    <span className='d-md-block d-none'></span>

                                    <FaBars size={25} className='d-block d-xl-none d-md-none' style={{ cursor: "pointer" }} onClick={() => setVisible(true)} />
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <Menu model={items_list} popup ref={menu} id="popup_menu_left" />
                                        </li>
                                    </ul>
                                    <span className='p-2' style={{ cursor: "pointer" }} onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup shape='square'>Admin  <FaCaretDown /></span>
                                </div>
                            </div>
                        </nav>
                        <div className="wrapper d-flex flex-column min-vh-100">
                            <div className="">
                                <Switch>
                                    {
                                        AdminRoutes.map((routes, id) => {
                                            return (
                                                routes.component && (
                                                    <Route
                                                        key={id}
                                                        path={routes.path}
                                                        exact={routes.exact}
                                                        name={routes.name}
                                                        render={(props) => <routes.component {...props} />}
                                                    />
                                                )
                                            )
                                        })
                                    }
                                    <Redirect from='/admin' to="/admin/dashboard" />
                                </Switch>
                            </div>
                        </div>
                    </main>

                    <Sidebar style={{ backgroundColor: "#212529" }} visible={visible} onHide={() => setVisible(false)}>
                    <div className="h-100">
                        <div className="sidebar-logo d-flex justify-content-center align-items-center">
                            <img src={admin} alt="" width={100} style={{ borderRadius: "50%" }} />
                        </div>
                        <div className="mt-2 text-center">
                            <h4 className='text-light'>ADMIN FLOWER</h4>
                        </div>
                        <ul className="sidebar-nav">
                            <li className="sidebar-header">
                                Pages
                            </li>
                            <li className="sidebar-item">
                                <a href="/admin" className="sidebar-link">
                                    <FcHome size={20} className='align-middle' />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a href="#" className="sidebar-link collapsed" data-bs-target="#users" data-bs-toggle="collapse"
                                    aria-expanded="false">
                                    <FaUsers size={20} className='align-middle' />
                                    <span>Accounts</span>
                                </a>
                                <ul id="users" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                    <li className="sidebar-item">
                                        <Link to="/admin/accounts/pending" className="sidebar-link"><span className='child'>New Account</span></Link>
                                    </li>
                                    <li className="sidebar-item">
                                        <Link to="/admin/accounts/registered" className="sidebar-link"><span className='child'>Registered Account</span></Link>
                                    </li>
                                    <li className="sidebar-item">
                                        <Link to="/admin/accounts/request" className="sidebar-link"><span className='child'>Request Shop</span></Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="sidebar-item">
                                <a href="#" className="sidebar-link collapsed" data-bs-target="#customer" data-bs-toggle="collapse"
                                    aria-expanded="false">
                                    <BsPersonBadge size={20} className='align-middle' />
                                    <span>Customer</span>
                                </a>
                                <ul id="customer" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                    <li className="sidebar-item">
                                        <Link to="/admin/accounts/request" className="sidebar-link"><span className='child'>Request Form</span></Link>
                                    </li>
                                    <li className="sidebar-item">
                                        <Link to="/admin/shop/accounts" className="sidebar-link"><span className='child'>Shop Accounts</span></Link>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className="sidebar-item">
                                <Link to="/admin/logs" className="sidebar-link">
                                    <FaDesktop size={20} className='align-middle' />
                                    <span>Payment</span>
                                </Link>
                            </li> */}
                            <li className="sidebar-header">
                                History
                            </li>
                            <li className="sidebar-item">
                                <Link to="/admin/history/logs" className="sidebar-link">
                                    <FaDesktop size={20} className='align-middle' />
                                    <span>Activity Logs</span>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    </Sidebar>


                </div>
            </div>

        </div>
    )
}

export default Admin