import React from "react";
import RegistrationForm from "../../modules/RegistrationForm/RegistrationForm";
import { ToastContainer } from 'react-toastify';


export default function Register() {
    return (
        <>
            <RegistrationForm />
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