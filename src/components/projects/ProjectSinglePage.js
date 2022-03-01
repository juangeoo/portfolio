import React from 'react';
import {useEffect, useRef} from "react";
import "./Projects.css";
import { ProjectsInfo } from './ProjectsInfo';
import { useParams, useNavigate } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion";
import CustomCursor from '../CustomCursor';


function ProjectSinglePage(){

  const {id} = useParams();
  const project = ProjectsInfo[id];
  const navigate = useNavigate();

  const ref = useRef(null);


  useEffect(() => {
    console.log("width", ref.current.offsetWidth);
  }, []);

  useEffect(() => {
    if (ref.current.offsetWidth > 1150) {
      new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: "horizontal",
    multiplier: 1,
    lerp:.03,
      })
    }
    else {
      new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        direction: "vertical",
        multiplier: 1,
        lerp:.03,
    })
  }
  }, [])

  
  if (!project){
    return <h2>Not Found</h2>
  }

  const { desc, name, url, slide1, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14, nextproject } = project;

  return <div className="container_single">
    
    <CustomCursor />

  <motion.div initial={{ x:"-200%", opacity:0 }} transition={{ease: [0.6, -0.05, 0.01, 0.9], duration:1.5 }} animate={{ x:"0%", opacity:1 }} className="project__bar">
    <div onClick={() => navigate("/")} className="project__bar-return">
      <div>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 10L10 30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10L30 30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    </div>

    <div className="project__bar-info">
      <div className="project__bar-info_p"><p><span>Role/</span>Designer/Dev</p></div>
      <div className="project__bar-info_p"><p><span>Project/</span>{name}</p></div> 
    </div>

    <div className="project__bar-img">
    </div>
  </motion.div>

<motion.a initial={{ opacity:0 }} transition={{ease: [0.6, -0.05, 0.01, 0.9], duration:1.5 }} animate={{ opacity:1 }} href={url} target="_blank">
  <div className="project__link">
    Visit Live Site
  </div>
  </motion.a>

<div data-scroll-container data-scroll-repeat className="scroll-container" ref={ref}>

    <motion.div initial={{ x:"-200%", opacity:0 }} transition={{ease: [0.6, -0.05, 0.01, 0.9], duration:1.5 }} animate={{ x:"0%", opacity:1 }} className="slide flex-center slide1">
      <div>
          <img className="slide_1_img" src={`../${slide1}`}></img>
      </div>
      <div>
        <hr className="slide_1_hr"></hr>
      </div>
       <div>
        <h1 className="slide_1_text">Scroll</h1>
      </div>
    </motion.div>

     <div className="slide flex-center slide2">
      <div>
        <h1 data-scroll data-scroll-class="view" data-scroll-delay="0.18" data-scroll-repeat className="slide_2_h1">About the project</h1>
      </div>
      <p  data-scroll data-scroll-class="view" data-scroll-repeat className="slide_2_p">{desc}</p>
    </div>


    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide3}`}></img>
    </div>

    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide4}`}></img>
    </div>

    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide5}`}></img>
    </div>

    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide6}`}></img>
    </div>

    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide7}`}></img>
    </div>

    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide8}`}></img>
    </div>

    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide9}`}></img>
    </div>

    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide10}`}></img>
    </div>

    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide11}`}></img>
    </div>

    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide12}`}></img>
    </div>

    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide13}`}></img>
    </div>

    <div className="slide flex-center">
    <img data-scroll data-scroll-class="view" data-scroll-repeat className="slide_img" src={`../${slide14}`}></img>
    </div>

    <div className="slide flex-center lastslide">
      
       <a href={`/projects/${parseInt(id) == 3 ? 0 : parseInt(id) + 1 }`}> <h1 data-scroll data-scroll-class="view-h1" data-scroll-repeat className="slide_2_h1 lastslide_h1"> Next Project </h1></a>
        <img className="lastslide_img" src={`../${nextproject}`}></img>
      
    </div>

</div>
    
    </div>

}

export default ProjectSinglePage;
