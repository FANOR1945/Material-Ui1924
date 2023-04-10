import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';

import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:5000';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
