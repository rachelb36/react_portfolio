// src/components/Project.jsx
import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Box } from "@mui/system";

const Project = ({ title, image, technologies, link }) => {
  return (
    <Card 
      sx={{
        maxWidth: 345,
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardMedia component="img" height="200" image={image} alt={`${title} project image`} />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {technologies.join(", ")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
