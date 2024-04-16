// src/pages/Resume.js
import React from 'react';

function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <p><a href="path_to_resume.pdf" download>Download My Resume</a></p>
      <h2>Proficiencies</h2>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>HTML & CSS</li>
        <li>Webpack</li>
        <li>Git</li>
      </ul>
    </div>
  );
}

export default Resume;
