import React from "react";
import { Button, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <ScrollLink
        to="about-me"
        smooth={true}
        duration={800}
        offset={-70}
        activeClass="active"
      >
        <Button
          color="inherit"
          sx={{
            color: "#5A9EC9", // Grayish-blue color
            "&:hover": {
              color: "#4A90E2", // Slightly darker on hover
            },
            "&.active": {
              color: "#3B7AB8", // Even darker shade when active
            },
          }}
        >
          About Me
        </Button>
      </ScrollLink>
      <ScrollLink
        to="portfolio"
        smooth={true}
        duration={800}
        offset={-70}
        activeClass="active"
      >
        <Button
          color="inherit"
          sx={{
            color: "#5A9EC9",
            "&:hover": {
              color: "#4A90E2",
            },
            "&.active": {
              color: "#3B7AB8",
            },
          }}
        >
          Portfolio
        </Button>
      </ScrollLink>
      <a
        href="../public/assets/rachel_burgos_old_resume.pdf" // Replace with the actual path to your PDF
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button
          color="inherit"
          sx={{
            color: "#5A9EC9",
            "&:hover": {
              color: "#4A90E2",
            },
          }}
        >
          Resume
        </Button>
      </a>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={800}
        offset={-70}
        activeClass="active"
      >
        <Button
          color="inherit"
          sx={{
            color: "#5A9EC9",
            "&:hover": {
              color: "#4A90E2",
            },
            "&.active": {
              color: "#3B7AB8",
            },
          }}
        >
          Contact Me
        </Button>
      </ScrollLink>
    </Box>
  );
};

export default Navbar;
