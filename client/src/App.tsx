import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppBar from "./modules/AppBar/AppBar";
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";


export default function App() {
    return (
        <Router>
            <AppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Link to='login'>Rgister</Link>} />
                <Route path="/login" element={<div>Login</div>} />
                <Route path="*" element={<div>Error Page</div>} />
            </Routes>
            <Footer />
        </Router>
    )
}