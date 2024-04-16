import React from 'react';
import './Project.css';

function Project({ title, imageUrl, deployedUrl, repoUrl }) {
    return (
        <div className="project">
            <img src={imageUrl} alt={title} className="project-image" />
            <h3>{title}</h3>
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">View App</a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
    );
}

export default Project;
