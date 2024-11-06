import React from "react";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 2, backgroundColor: "#f8f8f8" }}>
      <p>Rachel Burgos &copy; 2024</p>
    </Box>
  );
}

export default Footer;