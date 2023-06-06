import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import './styles/global.scss';
import './styles/toastify.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ store }>
        <App />
    </Provider>
)