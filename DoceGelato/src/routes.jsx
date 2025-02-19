import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./Components/Cart"
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
