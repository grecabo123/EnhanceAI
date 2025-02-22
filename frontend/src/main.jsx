import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { Ripple } from 'primereact/ripple';
import {BrowserRouter as Router } from 'react-router-dom'

import '../node_modules/primereact/resources/themes/viva-light/theme.css';
import "../node_modules/primereact/resources/primereact.min.css"; 
import '../node_modules/primeicons/primeicons.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import '../node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.css';
import '../node_modules/react-vertical-timeline-component/style.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
