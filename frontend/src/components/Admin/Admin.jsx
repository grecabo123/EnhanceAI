import React, { useRef, useState } from 'react'
import { FaBars, FaCaretDown, FaCheck, FaDesktop, FaHome, FaUsers } from 'react-icons/fa'
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import AdminRoutes from '../../routes/AdminRoutes'
import { FcApproval, FcBarChart, FcBookmark, FcFile, FcLineChart, FcLock, FcShop } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import { Menu } from 'primereact/menu';
import { Avatar } from 'primereact/avatar';
import axios from 'axios';


function Admin() {

    const history = useHistory();
    const menu = useRef(null);
    


    const Logout = () => {
        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_id');
                swal('Success', res.data.message, 'success');
                history.push('/login');
            }
        });
    }

    let items = [
        { label: 'Settings', icon: 'pi pi-fw pi-cog', url: '/admin/myaccount' },
        {
            label: 'My Account', icon: 'pi pi-fw pi-user', command: () => {
                history.push(`admin/myaccount`)
            }
        },
        // { label: <span>Sidebar</span>, icon: 'pi pi-fw pi-user' },
        { label: <span className='text-danger fw-bold' onClick={Logout}>Logout</span>, icon: 'pi pi-fw pi-power-off' },
    ];

    return (
        <React.Fragment>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="/admin" className="logo d-flex justify-content-center align-items-center" style={{ textDecoration: "none" }}>
                        <span className="d-none d-lg-block text-white">Admin</span>
                    </a>
                    <FaBars size={25} style={{ color: "#A1A5AC", cursor: "pointer" }} />
                </div>
                <nav className="header-nav ms-auto m-3">
                    <Menu model={items} id="popup_menu" popup ref={menu} />
                    <Avatar className='fw-bold' onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup shape='circle' label='A' size='large' />
                </nav>
            </header>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-heading">Pages</li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin">
                            <FaHome className='me-3' size={20} />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" >
                            <FaUsers className='me-3' size={20} /><span>Accounts</span> <FaCaretDown className='ms-auto bi-chevron-down' />
                        </a>
                        <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/admin/accounts/registered">
                                    <FcApproval size={20} className='me-2' /><span>Registered Account</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/accounts/pending">
                                    <FcBookmark size={20} className='me-2' /> <span>Pending Account</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#shops" data-bs-toggle="collapse" >
                            <FcShop className='me-3' size={25} /><span>Flower Shop  </span> <FaCaretDown className='ms-auto bi-chevron-down' />
                        </a>
                        <ul id="shops" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/admin/shop/accounts">
                                    <FcApproval className='me-2' size={20} /> <span>Shop Account</span>
                                </Link>
                            </li>
                    
                            <li>
                                <Link to="/admin/accounts/request">
                                    <FcFile className='me-2' size={20} /> <span>Request Shop Form</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
             

                    <li className="nav-heading">Monitoring</li>
                    <li className="nav-item">
                        <Link to="/admin/monitor/shop" className="nav-link collapsed" >
                            <FcLineChart className='me-3' size={20} />
                            <span>Shop Monitoring</span>
                        </Link>
                    </li>
                    <li className="nav-heading">Chart</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/admin/analytics/chart">
                            <FcBarChart className='me-3' size={20} />
                            <span>Analytics</span>
                        </Link>
                    </li>
                    <li className="nav-heading">Reports</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/admin/feedback">
                            <GoReport size={20} className='me-3' />
                            <span>Feedback</span>
                        </Link>
                    </li>

                    <li className="nav-heading">Logs</li>
                    <li className="nav-item">
                        <Link to="/admin/history/logs" className="nav-link collapsed">
                            <FaDesktop size={20} className='me-3' />
                            <span>Activity Logs</span>
                        </Link>
                    </li>
                </ul>

            </aside>

            <main id="main-sidebar" className="main">
                <section className="">
                    <Switch>
                        {
                            AdminRoutes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => <route.component {...props} />}
                                        />
                                    )
                                )
                            })
                        }
                        <Redirect from='/admin' to='/admin/dashboard' />
                    </Switch>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Admin