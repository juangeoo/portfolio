import React from 'react';
import "./Projects.css"
import { ProjectsInfoUI } from './ProjectsInfoUI';

function ProjectCardUI() {
  return (    
  <div>

{ProjectsInfoUI.map ((item, index) =>
     <div data-scroll data-scroll-class="view_project" className={`container__project1 flex-center ${item.pos}`} key={item.id}>
      <a href={`${item.url}`} target="_blank">
        <div className={`project1__img project${item.id}`} style={{ backgroundImage: `url(${item.image})`}}></div>
      </a>
      <div className="project1__info">
      <img src={`${item.logo}`} className="project-title"></img>
        <p className="project-desc">{item.desc}</p>
        <ul className="project-ul">
                <li className="project-ul-item">{item.tag1}</li>
                <li className="project-ul-item">{item.tag2}</li>
                <li className="project-ul-item">{item.tag3}</li>
        </ul>
        <a href={`${item.url}`} target="_blank" className="project-button"><h2 className="project-button-h2">View Project</h2><img src="./projects/button.svg"></img></a>
    </div>
  </div>
      )}
  </div>
  )
}

export default ProjectCardUI;
