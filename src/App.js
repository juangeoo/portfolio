import React from 'react';
import './App.css';
import Home from './components/Home';
import ProjectSinglePage from './components/projects/ProjectSinglePage';
import { AnimatePresence } from "framer-motion";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const App = () => {

  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects/:id" element={<ProjectSinglePage />}/>
        </Routes>
      </Router>
    </AnimatePresence>
  )
}

export default App