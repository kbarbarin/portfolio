import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Contact.css';
import interogation from "./InterogationMark";

const Contact = () => {
    const { ref, inView } = useInView();

    const controls = useAnimation();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    const lineToQuestionMark = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <React.Fragment>
            <div className="contact-container">
                <h1 className="contact-title">Contact</h1>
                {/* <motion.svg
                    // width="100"
                    // height="100"
                    // viewBox="0 0 100 100"
                    className="question-mark"
                    initial="hidden"
                    animate={controls}
                    ref={ref}
                >
                    <motion.path
                        d={interogation}
                        stroke="#0099ff"
                        strokeWidth="2"
                        fill="none"
                        variants={lineToQuestionMark}
                    />
                </motion.svg> */}
                <form className="contact-form">
                    <div className="contact-form-name">
                        <label>Name:</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="contact-form-email">
                        <label>Email:</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="contact-form-subject">
                        <label>Subject:</label>
                        <input type="text" name="subject" />
                    </div>
                    <div className="contact-form-message">
                        <label>Message:</label>
                        <textarea type="text" name="message" />
                    </div>
                    <button className="contact-form-button" type="submit">Send</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Contact;
