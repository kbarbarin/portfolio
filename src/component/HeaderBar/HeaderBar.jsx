import React from "react";
import { motion } from 'framer-motion';
import './HeaderBar.css';

const HeaderBar = () => {
    const list = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: {when: "beforeChildren", staggerChildren: 0.2}}};
    const item = { hidden: {x: -20, opacity: 0}, visible: {x: 0, opacity: 1}};
    const image = {hidden: {opacity: 0, width: "90%"}, visible: {opacity: 1,  width: "100%"}};

    return (
        <header className="headerBar">
            <div className="headerBar-leftPart">
                <motion.img initial="hidden" animate="visible" variants={image} src="/logo_portfolio.png" className="headerBar-leftPart-logo" alt='logo' />
            </div>
            <div className="headerBar-rightPart">
                <motion.ol initial="hidden" animate="visible" variants={list} className="headerBar-rightPart-list">
                    <motion.li variants={item}>
                        <a href="#projects" className="headerBar-link">Projects</a>
                    </motion.li>
                    <motion.li variants={item}>
                        <a href="#skills" className="headerBar-link">Skills</a>
                    </motion.li>
                    <motion.li variants={item}>
                        <a href="#contact" className="headerBar-link">Contact</a>
                    </motion.li>
                </motion.ol>
            </div>
        </header>
    );
}

export default HeaderBar;