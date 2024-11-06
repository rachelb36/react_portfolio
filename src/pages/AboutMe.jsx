// src/pages/AboutMe.jsx
import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import profileImage from "../assets/rachel_burgos.png"; // Corrected image import

const AboutMe = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom align="left" id="about">
        About Me
      </Typography>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Text Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Vivamus pharetra, quam a
              facilisis laoreet, felis est tempor erat, in varius est felis at
              quam. Morbi efficitur condimentum orci, et suscipit tortor mattis
              eu. Integer venenatis, enim vitae blandit iaculis, urna neque
              pellentesque lorem, nec feugiat arcu erat vel leo.
            </Typography>
            <Typography variant="body1" paragraph>
              Praesent luctus, nisi sit amet placerat dapibus, tortor purus
              bibendum tellus, et facilisis erat quam at quam. Nam porttitor
              consectetur congue. Integer ultricies, felis ut varius placerat,
              quam est dapibus felis, nec ultricies lectus justo et ligula.
            </Typography>
          </Box>
        </Grid>

        {/* Right Side: Image Section */}
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img
              src={profileImage} // Updated to use imported image
              alt="Rachel Burgos"
              style={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;



