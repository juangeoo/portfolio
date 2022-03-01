import React from 'react';
import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  return (
  <motion.div initial={{ y:"200%", opacity:0 }} transition={{ease: [0.6, -0.05, 0.01, 0.9], duration:.8, delay:.8 }} animate={{ y:"0%", opacity:1 }} className="nav__container flex-center">
    <p className="nav__container-p">Juan Geoghegan</p>
    <p className="nav__container-p">Portfolio 2022</p>
    <a href="#about" id="about-button"><p className="nav__container-p">About</p></a>
  </motion.div>
  )
}

export default Navbar;
