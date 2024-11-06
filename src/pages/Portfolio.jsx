// src/pages/Portfolio.jsx
import React, { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import Project from "../components/Project";
import projectData from "../data/index.json";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <Container className="portfolio_conatiner" maxWidth="lg" sx={{ mt: 5 }}>
        <a href="#portfolio"></a>
        <h1 id="portfolio">Portfolio</h1>  
      <Typography variant="h4" component="h1" gutterBottom align="center">
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Project
              title={project.title}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
