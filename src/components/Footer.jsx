import React from "react";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#f8f8f8",
      }}
    >
      <a
        href="https://www.linkedin.com/in/rachelburgos/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 10px" }}
      >
        <img
          src="/images/linkedin_icon.png"
          alt="LinkedIn logo"
          style={{
            height: "50px",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </a>
      <a
        href="https://github.com/rachelb36"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 10px" }}
      >
        <img
          src="/images/github_icon.png"
          alt="GitHub logo"
          style={{
            height: "50px",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </a>
      <a
        href="https://www.behance.net/rachelburgos"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 10px" }}
      >
        <img
          src="/images/behance_icon.png"
          alt="Behance logo"
          style={{
            height: "50px",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </a>
    </Box>
  );
}

export default Footer;
