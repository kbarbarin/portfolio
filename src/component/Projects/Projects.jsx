import React from "react";
import { motion } from "framer-motion";

import './Projects.css';

const Projects = () => {
  const githubLink = 'https://github.com/kbarbarin/algobourse';
  const lpLink = '';
  const githubLpLink = 'https://github.com/arasolonjatovo/algobourse-lp';

  return (
    <div className="project-section">
      <div className="project-left">
        <div className="project-left-techno">
          <h2 className="project-left-techno-title">Les technos</h2>
          <h3 className="project-left-techno-text">React Native</h3>
          <h3 className="project-left-techno-text">React</h3>
          <h3 className="project-left-techno-text">scss</h3>
          <h3 className="project-left-techno-text">Firebase</h3>
        </div>
        <div className="project-left-desc">
          <h2 className="project-name">Algobourse</h2>
          <p className="project-description">Algobourse est une application mobile de suivi de performance sur ses investissements boursiers, voici la landing page du projet qui explique toutes les fonctionnalités du projet.</p>
          <div className="project-links">
            <a target="_blank" href={githubLink} className="project-links-button">Voir le github</a>
            <a target="_blank" href={lpLink} className="project-links-button">Voir la landing page</a>
            <a target="_blank" href={githubLpLink} className="project-links-button">Voir le github de la landing page</a>
          </div>
        </div>
      </div>
      <div className="project-right">
        <img src="/MainMookUp.png" alt="algobourse screen" className="card" />
        <motion.div className="holo" />
      </div>
    </div>
  );
}

export default Projects;