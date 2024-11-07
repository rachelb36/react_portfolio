import React, { useState } from "react";
import "../index.css";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    // Basic email validation pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    const newErrors = {
      name: !formData.name,
      email: !formData.email || !isValidEmail(formData.email),
      message: !formData.message,
    };
    setErrors(newErrors);

    // Show toast messages for empty fields or invalid email
    if (!formData.name) {
      toast.error("Name is required");
    }
    if (!formData.email) {
      toast.error("Email is required");
    } else if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address");
    }
    if (!formData.message) {
      toast.error("Message cannot be empty");
    }

    // Submit if there are no errors
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log("Form submitted:", formData);
      toast.success("Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <ToastContainer />
      <Container id="contact" maxWidth="sm">
        <Box
          sx={{
            mt: 5,
            mb: 5,
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "background.paper",
          }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Contact Me
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  helperText={errors.name && "Name is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email && "Valid email is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  error={errors.message}
                  helperText={errors.message && "Message cannot be empty"}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button type="submit" variant="contained" color="primary">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default ContactMe;
