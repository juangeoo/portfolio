import React from 'react';
import "./Projects.css"
import ProjectCard from "./ProjectCard";
import ProjectCardUI from "./ProjectCardUI";


function Projects() {
  return (
  <div className="container__projects">
      <h1 id="frontend" className="section-title">Front End Development</h1>
      <ProjectCard />
      <h1 id="uiux" className="section-title">UI/UX Design</h1>
      <ProjectCardUI />
  </div>
    )
}

export default Projects;
