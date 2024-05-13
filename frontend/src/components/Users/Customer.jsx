import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaCaretDown, FaCartPlus, FaCheck, FaDesktop, FaHome, FaRobot, FaUsers } from 'react-icons/fa'
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { FcApproval, FcBarChart, FcBookmark, FcBriefcase, FcCalculator, FcFile, FcFolder, FcInfo, FcLineChart, FcReading, FcSearch, FcShop, FcStatistics } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import { Menu } from 'primereact/menu';
import { Avatar } from 'primereact/avatar';
import axios from 'axios';
import CustomerRoutes from '../../routes/CustomerRoutes';
import swal from 'sweetalert';
import { Skeleton } from 'primereact/skeleton';


function Customer() {

    const history = useHistory();
    const menu = useRef(null);
    const [loading, setLoading] = useState(true)
    const [UserControl, setUser] = useState([]);


    useEffect(() => {
        axios.get(`/api/UserControl/${localStorage.getItem('auth_id')}`).then(res => {
            if (res.data.status === 200) {
                setUser(res.data.data)
                localStorage.setItem('shop_status', UserControl.shop_status)
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
        })
    }, [])

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
        { label: 'Settings', icon: 'pi pi-fw pi-cog', url: '/customer/myaccount' },
        {
            label: 'My Account', icon: 'pi pi-fw pi-user', command: () => {
                history.push(`customer/myaccount`)
            }
        },
        // { label: <span>Sidebar</span>, icon: 'pi pi-fw pi-user' },
        { label: <span className='text-danger fw-bold' onClick={Logout}>Logout</span>, icon: 'pi pi-fw pi-power-off' },
    ];

    // console.log(UserControl.shop_status);

    return (
        <React.Fragment>
            {
                loading ? <Skeleton /> :
                    <>
                        <header id="header" className="header fixed-top d-flex align-items-center">
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="/customer" className="logo d-flex justify-content-center align-items-center" style={{ textDecoration: "none" }}>
                                    <span className="d-none d-lg-block text-white">Customer</span>
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
                                    <a className="nav-link" href="/customer">
                                        <FaHome className='me-3' size={20} />
                                        <span>Dashboard</span>
                                    </a>
                                </li>



                                {
                                    UserControl.shop_status == 1 ? "" :
                                        <>
                                            <li className="nav-heading">Build a Shop</li>
                                            <li className="nav-item">
                                                <Link to="/customer/request/form" className="nav-link collapsed">
                                                    <FcFile size={20} className='me-3' />
                                                    <span>Request Form</span>
                                                </Link>
                                            </li>
                                        </>
                                }

                                {
                                    UserControl.shop_status === null ? "" : UserControl.shop_status === 0 ? "" :
                                        <>
                                            <li className="nav-heading">Sell Product</li>
                                            <li className="nav-item">
                                                <a className="nav-link collapsed" data-bs-target="#sell" data-bs-toggle="collapse" >
                                                    <FcShop className='me-3' size={25} /><span>Purchase  </span> <FaCaretDown className='ms-auto bi-chevron-down' />
                                                </a>
                                                <ul id="sell" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                                                    <li>
                                                        <Link to="/customer/product/status">
                                                            <FcBriefcase size={20} className='me-3' /> <span>Product Status</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/customer/product/design">
                                                            <FcFolder size={20} className='me-3' /> <span>All Designs</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/customer/purchase/status">
                                                            <FaCartPlus size={20} className='me-3' /> <span>Buyer</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>


                                            <li className="nav-heading">Buyer History</li>
                                            <li className="nav-item">
                                                <a className="nav-link collapsed" data-bs-target="#buyer_history" data-bs-toggle="collapse" >
                                                    <FcReading className='me-3' size={25} /><span>Purchase  </span> <FaCaretDown className='ms-auto bi-chevron-down' />
                                                </a>
                                                <ul id="buyer_history" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                                                    <li>
                                                        <Link to="/customer/buyer/list">
                                                            <FcBriefcase size={20} className='me-3' /> <span>List of Buyer</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/customer/purchase/generate/design">
                                                            <FcFolder size={20} className='me-3' /> <span>Feedback</span>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </li>
                                        </>
                                }

                                <li className="nav-heading">Buy Product</li>
                                <li className="nav-item">
                                    <a className="nav-link collapsed" data-bs-target="#Buy" data-bs-toggle="collapse" >
                                        <FcShop className='me-3' size={25} /><span>Purchase  </span> <FaCaretDown className='ms-auto bi-chevron-down' />
                                    </a>
                                    <ul id="Buy" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                                        <li>
                                            <Link to="/customer/product/search">
                                                <FcSearch size={20} className='me-3' /> <span>Product</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/customer/purchase/generate/design">
                                                <FaRobot size={20} className='me-3' /> <span>Generate Design</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/customer/purchase/status">
                                                <FcInfo size={20} className='me-3' /> <span>Purchase Status</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link collapsed" href="users-profile.html">
                                        <i className="bi bi-person"></i>
                                        <span></span>
                                    </a>
                                </li>
                                <li className="nav-heading">Reports</li>
                                <li className="nav-item">
                                    <a className="nav-link collapsed" href="users-profile.html">
                                        <GoReport size={20} className='me-3' />
                                        <span>Feedback</span>
                                    </a>
                                </li>

                                <li className="nav-heading">Logs</li>
                                <li className="nav-item">
                                    <Link to="/customer/history/logs" className="nav-link collapsed">
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
                                        CustomerRoutes.map((route, idx) => {
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
                                    <Redirect from='/customer' to='/customer/dashboard' />
                                </Switch>
                            </section>
                        </main>
                    </>
            }



        </React.Fragment>
    )
}

export default Customer