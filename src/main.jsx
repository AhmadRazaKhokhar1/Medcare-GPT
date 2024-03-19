import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import App from './App.jsx';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
