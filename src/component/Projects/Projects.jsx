import React from "react";
import { motion } from "framer-motion";

import './Projects.css';

const Projects = () => {
    return (
        <div className="project-section">
      <div className="project-left">
        <h2 className="project-name">Algobourse</h2>
        <p className="project-description">Algobourse, la plateforme pour vous aider à investir</p>
      </div>
      <div className="project-right">
        <motion.div
          className="project-hologram"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            src="/algobourse.png"
            alt="Project Preview"
            className="project-image"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          />
        </motion.div>
        <div className="project-socle"></div>
        <motion.div
          className="projector-light"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </div>
    );
}

export default Projects;