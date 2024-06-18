import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store";
import Nav from './components/navigation/nav'
import Footer from './components/navigation/footer'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Nav/>
                <App/>
                <Footer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);