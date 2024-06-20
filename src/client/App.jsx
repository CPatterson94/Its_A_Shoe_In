import React from "react";
import ProductList from "./pages/index";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Account from "./pages/account";
import Cart from "./pages/cart";
import SingleProduct from "./pages/singleProduct"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<ProductList />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/account"} element={<Account />} />
        <Route path={"/product/:productId"} element={<SingleProduct />} /> 
      </Routes>
    </div>
  );
};

export default App;
