import React, { useEffect, useRef } from 'react'
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import admin from '../../assets/admin/customer.png'
import { FcFolder, FcHome, FcPackage, FcSearch } from 'react-icons/fc'
import { FaBars, FaCaretDown, FaDesktop, FaUser, FaUsers } from 'react-icons/fa'
import { BsPersonBadge } from "react-icons/bs";
import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Avatar } from 'primereact/avatar'
import { Menu } from 'primereact/menu'
import axios from 'axios'
import CustomerRoutes from '../../routes/CustomerRoutes'
import { Skeleton } from 'primereact/skeleton'

function Admin() {

    const menu = useRef(null);
    const [visible, setVisible] = useState(false)

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
            {
                loading ?
                    <Skeleton />
                    :
                    <div className="wrapper">
                        <aside id="sidebar" className="js-sidebar">
                            <div className="h-100">
                                <div className="sidebar-logo d-flex justify-content-center align-items-center">
                                    <img src={admin} alt="" width={100} style={{ borderRadius: "50%" }} />
                                </div>
                                <div className="mt-2 text-center">
                                    <h5 className='text-light'>CUSTOMER FLOWER</h5>
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

                                    <li className="sidebar-header">
                                        Find Products
                                    </li>
                                    <li className="sidebar-item">
                                        <Link to="/customer/product/search" className="sidebar-link">
                                            <FcSearch size={20} className='align-middle' />
                                            <span>Search Product</span>
                                        </Link>
                                    </li>

                                    {
                                        UserControl.shop_status == 1 ? "" :
                                            <>
                                                <li className="nav-heading">Build a Shop</li>
                                                <li className="sidebar-item">
                                                    <a href="/admin" className="sidebar-link">
                                                        <FcHome size={20} className='align-middle' />
                                                        <span>Dashboard</span>
                                                    </a>
                                                </li>
                                            </>
                                    }

                                    {

                                        UserControl.shop_status === null ? "" : UserControl.shop_status === 0 ? "" :

                                            <React.Fragment>
                                                <li className="sidebar-header">
                                                    Products
                                                </li>
                                                <li className="sidebar-item">
                                                    <a href="#" className="sidebar-link collapsed" data-bs-target="#sells" data-bs-toggle="collapse"
                                                        aria-expanded="false">
                                                        <FcFolder size={20} className='align-middle' />
                                                        <span>Inventory</span>
                                                    </a>
                                                    <ul id="sells" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                                        <li className="sidebar-item">
                                                            <Link to="/customer/product/status" className="sidebar-link"><span className='child'>Add Products</span></Link>
                                                        </li>
                                                        <li className="sidebar-item">
                                                            <Link to="/customer/product/design" className="sidebar-link"><span className='child'>Add Designs</span></Link>
                                                        </li>

                                                    </ul>
                                                </li>

                                                <li className="sidebar-header">
                                                    List of Buyer
                                                </li>
                                                <li className="sidebar-item">
                                                    <a href="#" className="sidebar-link collapsed" data-bs-target="#buyer" data-bs-toggle="collapse"
                                                        aria-expanded="false">
                                                        <FaUsers size={20} className='align-middle' />
                                                        <span>Buyers</span>
                                                    </a>
                                                    <ul id="buyer" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                                        <li className="sidebar-item">
                                                            <Link to="/customer/buyer/list" className="sidebar-link"><span className='child'>Buyers</span></Link>
                                                        </li>
                                                        <li className="sidebar-item">
                                                                <Link to="/customer/buyer/history" className="sidebar-link"><span className='child'>History Buyer</span></Link>
                                                            </li>
                                                        <li className="sidebar-item">
                                                            <Link to="/customer/purchase/generate/design" className="sidebar-link"><span className='child'>Feedback</span></Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                            </React.Fragment>


                                    }


                                    <li className="sidebar-header">
                                        History
                                    </li>
                                    <li className="sidebar-item">
                                        <Link to="/customer/history/logs" className="sidebar-link">
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
                                            <span className='p-2' style={{ cursor: "pointer" }} onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup shape='square'>{UserControl.name}  <FaCaretDown /></span>
                                        </div>
                                    </div>
                                </nav>
                                <div className="wrapper d-flex flex-column min-vh-100">
                                    <div className="">
                                        <Switch>
                                            {
                                                CustomerRoutes.map((routes, id) => {
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
                                            <Redirect from='/customer' to="/customer/dashboard" />
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
                                        <h5 className='text-light'>CUSTOMER FLOWER</h5>
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

                                        <li className="sidebar-header">
                                            Find Products
                                        </li>
                                        <li className="sidebar-item">
                                            <Link to="/customer/product/search" className="sidebar-link">
                                                <FcSearch size={20} className='align-middle' />
                                                <span>Search Product</span>
                                            </Link>
                                        </li>

                                        {
                                            UserControl.shop_status == 1 ? "" :
                                                <>
                                                    <li className="nav-heading">Build a Shop</li>
                                                    <li className="sidebar-item">
                                                        <a href="/admin" className="sidebar-link">
                                                            <FcHome size={20} className='align-middle' />
                                                            <span>Dashboard</span>
                                                        </a>
                                                    </li>
                                                </>
                                        }

                                        {

                                            UserControl.shop_status === null ? "" : UserControl.shop_status === 0 ? "" :

                                                <React.Fragment>
                                                    <li className="sidebar-header">
                                                        Products
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <a href="#" className="sidebar-link collapsed" data-bs-target="#sells" data-bs-toggle="collapse"
                                                            aria-expanded="false">
                                                            <FcFolder size={20} className='align-middle' />
                                                            <span>Inventory</span>
                                                        </a>
                                                        <ul id="sells" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                                            <li className="sidebar-item">
                                                                <Link to="/customer/product/status" className="sidebar-link"><span className='child'>Add Products</span></Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link to="/customer/product/design" className="sidebar-link"><span className='child'>Add Designs</span></Link>
                                                            </li>

                                                        </ul>
                                                    </li>

                                                    <li className="sidebar-header">
                                                        List of Buyer
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <a href="#" className="sidebar-link collapsed" data-bs-target="#buyer" data-bs-toggle="collapse"
                                                            aria-expanded="false">
                                                            <FaUsers size={20} className='align-middle' />
                                                            <span>Buyers</span>
                                                        </a>
                                                        <ul id="buyer" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                                            <li className="sidebar-item">
                                                                <Link to="/customer/buyer/list" className="sidebar-link"><span className='child'>Buyers</span></Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link to="/customer/buyer/history" className="sidebar-link"><span className='child'>History Buyer</span></Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link to="/customer/purchase/generate/design" className="sidebar-link"><span className='child'>Feedback</span></Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                </React.Fragment>


                                        }
                                        <li className="sidebar-header">
                                            History
                                        </li>
                                        <li className="sidebar-item">
                                            <Link to="/customer/history/logs" className="sidebar-link">
                                                <FaDesktop size={20} className='align-middle' />
                                                <span>Activity Logs</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>

                            </Sidebar>


                        </div>
                    </div>

            }

        </div>
    )
}

export default Admin