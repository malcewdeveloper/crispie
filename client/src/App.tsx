import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppBar from "./modules/AppBar/AppBar";


export default function App() {
    return (
        <Router>
            <AppBar />
            <Routes>
                <Route path="/" element={<Link to='register'>Home</Link>} />
                <Route path="/register" element={<Link to='login'>Rgister</Link>} />
                <Route path="/login" element={<div>Login</div>} />
                <Route path="*" element={<div>Error Page</div>} />
            </Routes>
        </Router>
    )
}