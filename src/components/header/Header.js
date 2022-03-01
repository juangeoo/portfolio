import React from 'react';
import "./Header.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";


function Header() {

  AOS.init();
  return (
    <section className="container__all">
  <motion.div className="container__header flex-center">

      <div className="container__header-animation">
        <motion.h1 initial={{ y:"200%", opacity:0 }} transition={{ease: [0.6, -0.05, 0.01, 0.9], duration:.8, delay:1 }} animate={{ y:"0%", opacity:1 }} className="container__header-title">
          Web Designer 
          <div className="header-img1"></div>
          </motion.h1>
        </div>
      <div className="container__header-animation">
        <motion.h1 initial={{ y:"200%", opacity:0 }} transition={{ease: [0.6, -0.05, 0.01, 0.9], duration:.8, delay:1.4 }} animate={{ y:"0%", opacity:1 }} className="container__header-title"> 
        and Front End Developer
        </motion.h1>
        </div> 
      <div className="container__header-animation">
        <motion.h1 initial={{ y:"200%", opacity:0 }} transition={{ease: [0.6, -0.05, 0.01, 0.9], duration:.8, delay:1.6 }} animate={{ y:"0%", opacity:1 }} className="container__header-title">
          <div className="header-img2"></div> from <span className="container_header-span">Buenos Aires.</span>
          </motion.h1>
        </div> 

  </motion.div>

  <motion.div initial={{ y:"200%", opacity:0 }} transition={{ease: [0.6, -0.05, 0.01, 0.9], duration:.8, delay:2 }} animate={{ y:"0%", opacity:1 }} className="container__bar flex-center">
    <h2 className="container__bar-h2">Featured Projects</h2>
    <div className="container__bar-items flex-center">
      <a href="#frontend"><h2 className="container__bar-h2">Front End</h2></a>
      <a href="#uiux"><h2 className="container__bar-h2">UI/UX Design</h2></a>
    </div>
  </motion.div>

<div className="hr">
  <motion.hr initial={{ x:"-200%", opacity:1 }} transition={{ease: [0.6, -0.05, 0.01, 0.9], duration:1, delay:2.2 }} animate={{ x:"0%", opacity:1 }} ></motion.hr>
</div>
</section>
  )
}

export default Header;

