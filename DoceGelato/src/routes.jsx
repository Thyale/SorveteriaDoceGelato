import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./Pages/Cart/Cart"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
