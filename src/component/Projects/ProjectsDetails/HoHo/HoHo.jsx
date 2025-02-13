import React from "react";
import './HoHo.css';

const HoHo = () => {
    const github = 'https://github.com/kbarbarin/secretSanta';
    const website = "https://secretsanta-c60ad.web.app";

    return (
      <div className="hoho-project" id="projects">
        <div className="hoho-project-section">
          <div className="hoho-project-left">
            <div className="hoho-project-left-desc">
              <h2 className="hoho-project-name">HO-HO</h2>
              <p className="hoho-project-description">Ho-Ho est un site web qui vous permet de créer et de répartir secrètement les participants de votre groupe et propose des idées cadeaux personnalisées pour rendre vos échanges de cadeaux encore plus spéciaux. Faites de la magie des fêtes une réalité en organisant des célébrations festives et pleines de surprises avec notre plateforme conviviale. Faites plaisir à vos proches en offrant des cadeaux qui montrent que vous les connaissez vraiment, le tout dans un esprit de mystère et de joie. Il utilise du JS, React, Node, ...</p>
              <div className="hoho-project-techno">
                <img className="hoho-project-left-techno-icon" src="/icons/react.svg" alt="react" />
                <img className="hoho-project-left-techno-icon" src="/icons/sass.svg" alt="scss" />
                <img className="hoho-project-left-techno-icon" src="/icons/nodejs.svg" alt="nodejs" />
                <img className="hoho-project-left-techno-icon" src="/icons/firebase.svg" alt="firebase" />
              </div>
            </div>
          </div>
          <div className="hoho-project-right">
            <img src="/HoHo.png" alt="hoho screen" className="hoho-card" />
          </div>
        </div>
        <div className="hoho-project-links">
          <a target="_blank" href={website} className="hoho-project-links-button">Voir le site web</a>
          <a target="_blank" href={github} className="hoho-project-links-button">Voir le github</a>
        </div>
      </div>
    );
  }
  
  export default HoHo;