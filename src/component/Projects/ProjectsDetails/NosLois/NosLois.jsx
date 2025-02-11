import React from "react";
import { motion } from "framer-motion";

import './NosLois.css';

const NosLois = () => {
    const website = 'https://civicpower.vote/noslois/';
    const app = 'https://apps.apple.com/fr/app/noslois/id1544954286';
  
    return (
      <div className="noslois-project" id="projects">
        <div className="noslois-project-section">
          <div className="noslois-project-left">
            <div className="noslois-project-left-desc">
              <h2 className="noslois-project-name">NosLois</h2>
              <p className="noslois-project-description">NosLois est une application citoyenne qui permet de suivre, comprendre et participer à l’élaboration des lois en France. Transparente et interactive, elle offre à chaque citoyen la possibilité de consulter les projets de loi, d’en suivre les étapes clés et d’exprimer son avis directement depuis l’application. NosLois favorise ainsi une démocratie participative, en rapprochant les citoyens des décisions politiques qui les concernent.</p>
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
          <a target="_blank" href={website} className="noslois-project-links-button">Voir la landing page</a>
          <a target="_blank" href={app} className="noslois-project-links-button">Voir l'application</a>
        </div>
      </div>
    );
  }
  
  export default NosLois;