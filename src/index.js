import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';

import Axios from 'axios';

Axios.defaults.baseURL = 'https://backendnodejs-production.up.railway.app';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
