// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.css';
import App from './App';
import AuthProvider from './context/AuthContext';

// Set the base URL for Axios
axios.defaults.baseURL = 'http://localhost:5000'; // Adjust the URL as needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);