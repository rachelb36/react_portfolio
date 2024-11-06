import React from "react";
import { Button, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <ScrollLink to="about-me" smooth={true} duration={800} offset={-70}>
        <Button color="inherit">About Me</Button>
      </ScrollLink>
      <ScrollLink to="portfolio" smooth={true} duration={800} offset={-70}>
        <Button color="inherit">Portfolio</Button>
      </ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={800} offset={-70}>
        <Button color="inherit">Contact Me</Button>
      </ScrollLink>
    </Box>
  );
};

export default Navbar;

