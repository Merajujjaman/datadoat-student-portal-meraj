import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import  { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom'
import router from './Routs/Routs.jsx'
import AuthProvider from './Providers/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </AuthProvider>

  </React.StrictMode>,
)
