import React from "react";
import { motion } from "framer-motion";

import './NosLois.css';

const NosLois = () => {
    const githubLink = 'https://github.com/kbarbarin/algobourse';
    const lpLink = '';
    const githubLpLink = 'https://github.com/arasolonjatovo/algobourse-lp';
  
    return (
      <div className="noslois-project" id="projects">
        <div className="noslois-project-section">
          <div className="noslois-project-left">
            <div className="noslois-project-left-desc">
              <h2 className="noslois-project-name">NosLois</h2>
              <p className="noslois-project-description">NosLois est une application de suivi d'investissement innovante conçue pour optimiser vos stratégies. Grâce à ses algorithmes uniques, elle offre une vue détaillée de vos performances. Avec plus de 8 000 actions et 50 filtres, vous trouverez des opportunités adaptées à vos besoins. La plateforme permet de suivre vos performances en temps réel via des graphiques interactifs et vous notifie des changements importants. Simplifiez vos recherches en centralisant toutes les informations essentielles au même endroit. Rejoignez-nous dès aujourd'hui et testez en avant-première la bêta de notre application.</p>
              <div className="noslois-project-techno">
                <img className="noslois-project-left-techno-icon" src="/icons/react-native.svg" alt="react native" />
                <img className="noslois-project-left-techno-icon" src="/icons/google-cloud.svg" alt="google cloud plateform" />
                <img className="noslois-project-left-techno-icon elastic" src="/icons/elastic.svg" alt="elasticsearch" />
                <img className="noslois-project-left-techno-icon" src="/icons/firebase.svg" alt="firebase" />
              </div>
            </div>
          </div>
          <div className="noslois-project-right">
            <img src="/noslois2.png" alt="noslois screen" className="noslois-card" />
          </div>
        </div>
        <div className="noslois-project-links">
          <a target="_blank" href={githubLink} className="noslois-project-links-button">Voir le github</a>
          <a target="_blank" href={lpLink} className="noslois-project-links-button">Voir la landing page</a>
          <a target="_blank" href={githubLpLink} className="noslois-project-links-button">Voir le github de la landing page</a>
        </div>
      </div>
    );
  }
  
  export default NosLois;