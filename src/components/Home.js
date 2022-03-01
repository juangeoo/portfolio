import React from 'react';
import { useEffect, useRef } from "react";
import '../App.css';
import RevealAnimation from './RevealAnimation';
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Projects from "./projects/Projects";
import About from "./about/About";
import Footer from "./footer/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import CustomCursor from './CustomCursor';


const Home = () => {


  const ref = useRef(null);


  useEffect(() => {
    if (ref) {
      new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    
      })
    }
  }, [])



  return (
    <div data-scroll-container ref={ref}>
      <CustomCursor />
        <RevealAnimation />
        <Navbar  />
        <Header /> 
        <Projects />
        <About />
        <Footer />
    </div>
  )
}

export default Home