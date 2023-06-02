import React from 'react'
import Logo from "../../../assets/Logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const obj = {
    name : "Navin"
}

export const NavbarInside = () => {
  let navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "white" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <img
            src={Logo}
            alt=""
            style={{ width: 100, height: "auto", marginLeft: "-12px" }}
          />
          <Box sx={{ marginLeft: "auto" }}>
            <Button color="inherit" sx={{ color: "black" }}>
              Hello, {obj.name}
            </Button>
            <Button color="inherit" sx={{ color: "black" }} onClick={() => navigate("/History")}>
              <ListAltIcon />
            </Button>
            <Button color="inherit" sx={{ color: "black" }} onClick={() => navigate("/Cart")}>
              <ShoppingBasketIcon />
            </Button>
            <Button color="inherit" sx={{ color: "black" }} onClick={() => navigate("/Home")}>
              <HomeIcon></HomeIcon>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
