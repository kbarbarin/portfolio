// src/components/IntroAnimation/IntroAnimation.jsx
import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import './IntroAnimation.css';

const IntroAnimation = ({ onComplete }) => {
  return (
    <motion.div 
      className="intro-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 6, duration: 1 }}
      onAnimationComplete={onComplete}
    >
      <motion.div 
        className="circle"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3 }}
      />
      <ReactTyped
        strings={['Welcome to My Portfolio.', 'Discover My Projects.', 'I\'m Killian Barbarin.']}
        typeSpeed={40}
        backSpeed={20}
        className="typed-text"
      />
    </motion.div>
  );
};

export default IntroAnimation;
