import React from "react";
import { motion } from "framer-motion";

import './Projects.css';

const Projects = () => {
  const githubLink = 'https://github.com/kbarbarin/algobourse';
  const lpLink = '';
  const githubLpLink = 'https://github.com/arasolonjatovo/algobourse-lp';

  return (
    <div className="project" id="projects">
      <div className="project-section">
        <div className="project-left">
          {/* <div className="project-left-techno">
            <h2 className="project-left-techno-title">Les technos</h2>
            <div className="project-left-techno-section">
              <img className="project-left-techno-icon" src="/icons/react-native.svg" alt="react native" />
              <h3 className="project-left-techno-text">React Native</h3>
            </div>
            <div className="project-left-techno-section">
              <img className="project-left-techno-icon" src="/icons/react.svg" alt="react" />
              <h3 className="project-left-techno-text">React</h3>
            </div>
            <div className="project-left-techno-section">
              <img className="project-left-techno-icon" src="/icons/sass.svg" alt="sass" />
              <h3 className="project-left-techno-text">scss</h3>
            </div>
            <div className="project-left-techno-section">
              <img className="project-left-techno-icon" src="/icons/firebase.svg" alt="firebase" />
              <h3 className="project-left-techno-text">Firebase</h3>
            </div>
          </div> */}
          <div className="project-left-desc">
            <h2 className="project-name">Algobourse</h2>
            <p className="project-description">Algobourse est une application de suivi d'investissement innovante conçue pour optimiser vos stratégies. Grâce à ses algorithmes uniques, elle offre une vue détaillée de vos performances. Avec plus de 8 000 actions et 50 filtres, vous trouverez des opportunités adaptées à vos besoins. La plateforme permet de suivre vos performances en temps réel via des graphiques interactifs et vous notifie des changements importants. Simplifiez vos recherches en centralisant toutes les informations essentielles au même endroit. Rejoignez-nous dès aujourd'hui et testez en avant-première la bêta de notre application.</p>
            <div className="project-techno">
              <img className="project-left-techno-icon" src="/icons/react-native.svg" alt="react native" />
              <img className="project-left-techno-icon" src="/icons/react.svg" alt="react" />
              <img className="project-left-techno-icon" src="/icons/sass.svg" alt="sass" />
              <img className="project-left-techno-icon" src="/icons/firebase.svg" alt="firebase" />
            </div>
          </div>
        </div>
        <div className="project-right">
          <img src="/MainMookUp.png" alt="algobourse screen" className="card" />
          <motion.div className="holo" />
        </div>
      </div>
      <div className="project-links">
        <a target="_blank" href={githubLink} className="project-links-button">Voir le github</a>
        <a target="_blank" href={lpLink} className="project-links-button">Voir la landing page</a>
        <a target="_blank" href={githubLpLink} className="project-links-button">Voir le github de la landing page</a>
      </div>
    </div>
  );
}

export default Projects;