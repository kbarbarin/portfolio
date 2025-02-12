import React from "react";
import { motion } from "framer-motion";
import './MainPresentation.css';

const MainPresentation = () => {
    const divSVG = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.2 } } }
    const imageGreen = { hidden: { opacity: 0, height: "0%", width: "0%", x: 10 }, visible: { opacity: 1, height: "100%", width: "100%", x: 0 } };
    const imageRed = { hidden: { opacity: 0, width: "50%", y: 10 }, visible: { opacity: 1, width: "100%", y: 0 } };
    const imagePurple = { hidden: { opacity: 0, width: "50%", y: -10 }, visible: { opacity: 1, width: "100%", y: 0 } };
    const imageYellow = { hidden: { opacity: 0, width: "50%", x: -10 }, visible: { opacity: 1, width: "100%", x: 0 } };
    const pathGreen = "M 3.8 4 C 3.8 4 1.2 4.8 0.7 6 V 14.4 C 1 15.5 3 16 4 16.5 C 4 16.5 4.5 16.7 4.5 16.4 V 4 M 4.5 4 C 4.5 4 4.5 3.8 3.8 4";
    const pathRed = "M 6.55 3 L 6.55 8 C 6.55 8 6.5 8.4 6.8 8.6 L 8 9.8 C 8 9.8 8.5 10.1 8.8 9.7 L 13.7 3.4 C 13.7 3.4 14 3.1 13.7 2.8 L 10.4 1.1 C 10.4 1.1 10.1 1 9.8 1.1 M 9.8 1.1 L 7 2.4 C 7 2.4 6.7 2.5 6.55 3";
    const pathPurple = "M 6.55 11.1 L 6.55 17.5 C 6.55 17.5 6.6 17.8 7 18 L 9.6 19.4 C 9.6 19.4 9.9 19.6 10.2 19.4 L 13 18 C 13 18 13.5 17.7 13 17.25 L 6.8 11 C 6.8 11 6.65 10.9 6.55 11.1";
    const pathYellow = "M 15.8 4.1 L 10.3 11 C 10.3 11 10 11.5 10.6 12 L 15 16.4 C 15 16.4 15.5 16.7 16 16.4 L 19 14.8 C 19 14.8 19.3 14.5 19.3 14 L 19.2 6 C 19.2 6 19.2 5.8 19 5.5 L 16.2 4 C 16.2 4 16 3.9 15.8 4.1";

    return (
        <div className="main">
            <div className="main-left">
                <h1 className="main-left-hello">Hello there!</h1>
                <h1 className="main-left-name">Killian Barbarin</h1>
                <h2 className="main-left-job">Front-End Developer.</h2>
                <h2 className="main-left-desc">Eat. Code. Sleep. And make it loop.</h2>
                <div className="main-links">
                    <button onClick={() => window.open('https://github.com/kbarbarin', '_blank')} className="main-button">
                        <img className="main-button-icon" src="/icons/git.svg" alt="GitHub" />
                        Github
                    </button>
                    <button onClick={() => window.open('https://www.linkedin.com/in/killian-barbarin-7a551617a/', '_blank')} className="main-button">
                        <img className="main-button-icon" src="/icons/LinkedIn.webp" alt="LinkedIn" />
                        Linkedin
                    </button>
                </div>
            </div>
            <motion.div className="main-right">
                <motion.svg
                    initial="hidden"
                    animate="visible"
                    width="500"
                    variants={divSVG}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        d={pathGreen}
                        strokeWidth="1"
                        fill="#17C8AF"
                        variants={imageGreen}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2, duration: 2 }}
                    />
                    <motion.path
                        d={pathPurple}
                        fill="#6076A5"
                        variants={imagePurple}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2, duration: 2 }}
                    />
                    <motion.path
                        d={pathRed}
                        fill="#FC6969"
                        variants={imageRed}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2, duration: 2 }}
                    />
                    <motion.path
                        d={pathYellow}
                        fill="#FAC144"
                        variants={imageYellow}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2, duration: 2 }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
}

export default MainPresentation;