// src/pages/Portfolio.js
import React from 'react';
import Project from '../components/Project/Project';

const projects = [
  {
    title: "Project One",
    imageUrl: "path_to_image.jpg",
    deployedUrl: "http://deployedurl.com",
    repoUrl: "http://githubrepo.com"
  },
  // Add more projects here...
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
        {projects.map(project => (
          <Project
            key={project.title}
            title={project.title}
            imageUrl={project.imageUrl}
            deployedUrl={project.deployedUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
