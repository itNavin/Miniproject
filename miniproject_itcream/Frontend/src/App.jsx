import "./App.css";
import React from "react";
import { Loginform } from "./pages/auth/components/Loginform"; 
import { Box } from "@mui/material";
import { Registerform } from "./pages/auth/components/Registerform";
import { Navbar } from "./pages/Home/components/Navbar";
import { Footer } from "./pages/Home/components/Footer";
import { Home } from "./pages/Home/Home";
import { NavbarInside } from "./pages/Home/components/NavbarInside";
import { Menu } from "../src/pages/Menu"
import { Size } from "./pages/Size";
import { Cart }from "./pages/Cart";
import { Summary } from "./pages/Summary";
import { Tracking } from "./pages/Tracking";
import { History } from "./pages/History";
import { Detail } from "./pages/Detail";
import { NothingInHere } from "./pages/NothingInHere";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavbarInside></NavbarInside>
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/Registerform" element={<Registerform />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Size" element={<Size />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Summary" element={<Summary />} />
          <Route path="/Tracking" element={<Tracking />} />
          <Route path="/History" element={<History />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
