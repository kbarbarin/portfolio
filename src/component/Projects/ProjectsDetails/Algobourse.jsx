import React from "react";
import { motion } from "framer-motion";

import './Algobourse.css';

const Algobourse = () => {
    const githubLink = 'https://github.com/kbarbarin/algobourse';
    const lpLink = '';
    const githubLpLink = 'https://github.com/arasolonjatovo/algobourse-lp';
  
    return (
      <div className="algobourse-project" id="projects">
        <div className="algobourse-project-section">
          <div className="algobourse-project-left">
            <div className="algobourse-project-left-desc">
              <h2 className="algobourse-project-name">Algobourse</h2>
              <p className="algobourse-project-description">Algobourse est une application de suivi d'investissement innovante conçue pour optimiser vos stratégies. Grâce à ses algorithmes uniques, elle offre une vue détaillée de vos performances. Avec plus de 8 000 actions et 50 filtres, vous trouverez des opportunités adaptées à vos besoins. La plateforme permet de suivre vos performances en temps réel via des graphiques interactifs et vous notifie des changements importants. Simplifiez vos recherches en centralisant toutes les informations essentielles au même endroit. Rejoignez-nous dès aujourd'hui et testez en avant-première la bêta de notre application.</p>
              <div className="algobourse-project-techno">
                <img className="algobourse-project-left-techno-icon" src="/icons/react-native.svg" alt="react native" />
                <img className="algobourse-project-left-techno-icon" src="/icons/react.svg" alt="react" />
                <img className="algobourse-project-left-techno-icon" src="/icons/sass.svg" alt="sass" />
                <img className="algobourse-project-left-techno-icon" src="/icons/firebase.svg" alt="firebase" />
              </div>
            </div>
          </div>
          <div className="algobourse-project-right">
            <img src="/MainMookUp.png" alt="algobourse screen" className="card" />
            <motion.div className="holo" />
          </div>
        </div>
        <div className="algobourse-project-links">
          <a target="_blank" href={githubLink} className="algobourse-project-links-button">Voir le github</a>
          <a target="_blank" href={lpLink} className="algobourse-project-links-button">Voir la landing page</a>
          <a target="_blank" href={githubLpLink} className="algobourse-project-links-button">Voir le github de la landing page</a>
        </div>
      </div>
    );
  }
  
  export default Algobourse;