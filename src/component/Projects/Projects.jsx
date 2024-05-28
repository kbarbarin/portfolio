import React from "react";
import { motion } from "framer-motion";

import './Projects.css';

const Projects = () => {
  const hologramAnimation = {
    initial: { opacity: 0.5, boxShadow: '0 -1px 5px rgba(0, 252, 252, 0.15)' },
    animate: {
      opacity: [0.5, 1],
      boxShadow: [
        '0 -1px 5px rgba(0, 252, 252, 0.15)',
        '0 -75px  90px rgba(0, 252, 252, 1)'
      ],
      transition: {
        duration: 1.5,
        yoyo: Infinity
      }
    }
  };

  return (
    <div className="project-section">
      <div className="project-left">
        <h2 className="project-name">Algobourse</h2>
        <p className="project-description">Algobourse, la plateforme pour vous aider à investir</p>
      </div>
      <div className="project-right">
        {/* <div className="card"> */}
          <img src="/algobourse.png" alt="algovourse screen" className="card" />
        {/* </div> */}
        <motion.div className="holo" />
      </div>
    </div>
  );
}

export default Projects;