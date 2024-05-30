import React from "react";

import './Skill.css';

const Skills = () => {
    return (
        <React.Fragment>
            <h1 className="title"> Skills</h1>
            <div className="section">
                <div className="section-part">
                    <h2>Design</h2>
                    <div>
                        <img className="icon" src='/icons/figma.svg' alt='figma icon' />
                        <h3>figma</h3>
                    </div>
                </div>
                <div className="section-part">
                    <h2>Frontend</h2>
                    <div>
                        <img className="icon" src='/icons/react-native.svg' alt='react-native icon' />
                        <h3>React Native</h3>
                    </div>
                    <div>
                        <img className="icon" src='/icons/react.svg' alt='react icon' />
                        <h3>React</h3>
                    </div>
                    <div>
                        <img className="icon" src='/icons/sass.svg' alt='sass icon' />
                        <h3>Sass</h3>
                    </div>
                </div>
                <div className="section-part">
                    <h2>Backend</h2>
                    <div>
                        <img className="icon" src='/icons/firebase.svg' alt='firebase icon' />
                        <h3>Firebase</h3>
                    </div>
                    <div>
                        <img className="icon" src='/icons/nodejs.svg' alt='nodejs icon' />
                        <h3>NodeJS</h3>
                    </div>
                    <div>
                        <img className="icon" src='/icons/google-cloud.svg' alt='google-cloud icon' />
                        <h3>Google Cloud Plateform</h3>
                    </div>
                </div>
                <div className="section-part">
                    <h2>Other</h2>
                    <div>
                        <img className="icon" src='/icons/git.svg' alt='git icon' />
                        <h3>Git</h3>
                    </div>
                    <div>
                        <img className="icon" src='/icons/bash.svg' alt='bash icon' />
                        <h3>Linux / MacOs</h3>
                    </div>
                    <div>
                        <img className="icon" src='/icons/trello.svg' alt='trello icon' />
                        <h3>Trello</h3>
                    </div>
                    <div>
                        <img className="icon" src='/icons/c.svg' alt='c icon' />
                        <h3>Langage C</h3>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default Skills;