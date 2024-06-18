import React from "react";
import ProductList from "./pages/index";
import {Route, Routes} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<ProductList/>}/>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/login"} element={<Login/>}/>
      </Routes>
    </div>
  );
};

export default App;
