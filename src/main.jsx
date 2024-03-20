import React from 'react'
import {ClerkProvider} from '@clerk/clerk-react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast'
import App from './App.jsx';
import './index.css';
import './App.css';
let publishableKey = 'pk_test_dHJ1ZS10ZXJyaWVyLTM5LmNsZXJrLmFjY291bnRzLmRldiQ';
if(!publishableKey){
  tost.dismiss("Error for Clerk")
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <Router>
      <ClerkProvider publishableKey={publishableKey}>
        <App />
      </ClerkProvider>
    </Router>
  </React.StrictMode>,
)
