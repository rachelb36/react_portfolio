import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import Navbar from "./Navbar";
import { Link as ScrollLink } from "react-scroll";
import logoImage from "../assets/rachel_logo.png"; 

const Header = () => {
  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 0, paddingX: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left Side: Logo Image with Link to Home */}
        <ScrollLink to="home" smooth={true} duration={800} offset={-70}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <img src={logoImage} alt="Rachel Burgos" style={{ height: "50px", padding: "0 10px" }} />
          </IconButton>
        </ScrollLink>

        {/* Right Side: Navbar Links */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <Navbar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
