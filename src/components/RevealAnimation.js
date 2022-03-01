import React from 'react';
import { motion } from "framer-motion";
import "./RevealAnimation.css"


function RevealAnimation() {
    
    return (
        <div>
            <motion.div initial={{y:"0%"}} animate={{y:"200%"}} transition={{ease: [0.6, -0.05, 0.01, 0.9], duration:3}} className="reveal_div1"></motion.div>
            <motion.div initial={{y:"0%"}} animate={{y:"-200%"}} transition={{ease: [0.6, -0.05, 0.01, 0.9], duration:3}} className="reveal_div2"></motion.div>
        </div>
    )
  }
  
  export default RevealAnimation;
  
  