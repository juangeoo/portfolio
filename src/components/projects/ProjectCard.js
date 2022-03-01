import React from 'react';
import "./Projects.css"
import { ProjectsInfo } from './ProjectsInfo';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


function ProjectCard() {

  return (    
  <div initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 1}}>

{ProjectsInfo.map ((item, index) =>
     <div data-scroll data-scroll-class="view_project" key={index} className={`container__project1 flex-center ${item.pos}`}>
      {index == 4 && <a target="_blank" href={`${item.url}`}><div className={`project1__img project${item.id}`} style={{ backgroundImage: `url(${item.image})`}}></div></a> }
      {index != 4 && <Link to={`/projects/${item.id}`}><div className={`project1__img project${item.id}`} style={{ backgroundImage: `url(${item.image})`}}></div></Link>}
      <div className="project1__info">
        <img src={`${item.logo}`} className="project-title"></img>
        <p className="project-desc">{item.desc}</p>
        <ul className="project-ul">
                <li className="project-ul-item">{item.tag1}</li>
                <li className="project-ul-item">{item.tag2}</li>
                <li className="project-ul-item">{item.tag3}</li>
        </ul>

        {index == 4 && <a target="_blank" href={`${item.url}`}> <button type="button" className="project-button"><h2 className="project-button-h2">View Project</h2><img src="./projects/button.svg"></img></button></a> }
       {index != 4 && <Link to={`/projects/${item.id}`}><button type="button" className="project-button"><h2 className="project-button-h2">View Project</h2><img src="./projects/button.svg"></img></button></Link>}
    </div>
  </div>
      )}
  </div>
  )
}

export default ProjectCard;
