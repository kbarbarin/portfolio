// src/App.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import HeaderBar from './component/HeaderBar/HeaderBar';
import MainPresentation from './component/MainPresentation/MainPresentation';
import IntroAnimation from './component/IntroAnimation/IntroAnimation';
import Projects from './component/Projects/Projects';

import './App.css';
import Skills from './component/Skills/Skills';
import Contact from './component/Contact/Contact';

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="App">
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      {introComplete && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className='body'
        >
          <HeaderBar />
          <MainPresentation />
          <Projects />
          <Skills />
          <Contact />
          <p className='copyright'>© Copyright 2024 - Killian Barbarin</p>
        </motion.div>
      )}
    </div>
  );
};

export default App;
