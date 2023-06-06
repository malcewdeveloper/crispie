import React from "react";
import AuthorizationForm from "../../modules/AuthorizationForm/AuthorizationForm";
import { ToastContainer } from 'react-toastify';

export default function Login() {
    return (
        <>        
            <AuthorizationForm />
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light" />
        </>
    )
}