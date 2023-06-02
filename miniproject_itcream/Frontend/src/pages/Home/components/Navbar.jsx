import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../../../assets/Logo.png'

import React from 'react'

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ background: "white" }}>
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
          <Box sx={{ marginLeft: "auto"}}>
            <Button color="inherit" sx={{ color: "black" }}>
              Login
            </Button>
            <Button color="inherit" sx={{ color: "black" }}>
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

