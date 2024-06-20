import React from "react";
import ProductList from "./pages/index";
import { Route, Routes } from "react-router-dom";
import NavLoggedIn from "./components/navigation/NavLoggedIn";
import NavLoggedOut from "./components/navigation/NavLoggedOut";
import Register from "./pages/register";
import Login from "./pages/login";
import Account from "./pages/account";
import Cart from "./pages/cart";
import SingleProduct from "./pages/singleProduct";
import { useState } from "react";
import Footer from "./components/navigation/footer";

const App = () => {
  const [token] = useState(window.sessionStorage.getItem("token"));
  return (
    <div>
      {token !== null ? <NavLoggedIn /> : <NavLoggedOut />}
      <Routes>
        <Route path={"/"} element={<ProductList />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/account"} element={<Account />} />
        <Route path={"/product/:productId"} element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
