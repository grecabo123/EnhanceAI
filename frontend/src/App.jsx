import React, { useState } from 'react'
import PrimeReact from 'primereact/api';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './components/Login';
import Landing from './components/Landing';
import Register from './components/Register';
import PrivateAdminRoutes from './private/PrivateAdminRoutes';
import PrivateCustomerRoutes from './private/PrivateCustomerRoutes';


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.post['Accept'] = "application/json";

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});


function App() {

    PrimeReact.ripple = true;
    return (
        <div className=''>
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={Landing} />
                    <Route path="/login" exact={true} component={Login} />
                    <Route path="/register" exact={true} component={Register} />
                    {/* Admin */}
                    <PrivateAdminRoutes path="/admin" name="Admin" />
                    {/* Customer */}
                    <PrivateCustomerRoutes path="/customer" name="Customer" />

                </Switch>
            </Router>
        </div>
    )
}

export default App