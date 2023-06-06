import React from "react";
import AppBar from "./modules/AppBar/AppBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { checkAuth } from "./store/actions/authActions";
import { useDispatch } from "react-redux";


export default function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        (async () => {
            dispatch( await checkAuth())
        })(); 
    }, []);

    return (
        <Router>
            <AppBar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="*" element={ <div>Error Page</div> } />
            </Routes>
            <Footer />
        </Router>
    )
}