import React from "react";
import { motion } from 'framer-motion';

import './Contact.css';

const Contact = () => {
    const questionMarkVariants = {
        initial: {
          scale: 1,
          rotate: 0,
        },
        animate: {
          scale: [1, 1.2, 1],
          rotate: [0, 20, -20, 0],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            loop: Infinity,
          },
        },
      };

    return (
        <div className="contact-container">
      <motion.div 
        className="question-mark" 
        variants={questionMarkVariants} 
        initial="initial" 
        animate="animate"
      >
        <p>?</p>
      </motion.div>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
    );
}

export default Contact;