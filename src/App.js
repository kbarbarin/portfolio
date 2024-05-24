// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import HeaderBar from './component/HeaderBar/HeaderBar';
import IntroAnimation from './component/IntroAnimation/IntroAnimation';
import { motion } from 'framer-motion';

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="App">
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      {introComplete && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='body'
        >
          <HeaderBar />
          {/* Add other components of your site here */}
        </motion.div>
      )}
    </div>
  );
};

export default App;
