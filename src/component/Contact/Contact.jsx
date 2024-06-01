import React, {useEffect} from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

import './Contact.css';

const Contact = () => {
    const questionMarkVariants = {
        hidden: {
            scale: 1,
            rotate: 0,
        },
        visible: {
            scale: [1, 3, 2],
            rotate: 360,
            transition: {
                duration: 2,
                ease: 'easeInOut',
                loop: Infinity,
            },
        },
    };

    const { ref, inView } = useInView();

    const controls = useAnimation();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [inView, controls]);

    return (
        <React.Fragment>
            <h1 className="contact-title">Contact</h1>

            <div className="contact-container">
                <motion.div
                    className="question-mark"
                    variants={questionMarkVariants}
                    initial="hiden"
                    animate={controls}
                    ref={ref}
                >
                    ?
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
        </React.Fragment>

    );
}

export default Contact;