import React, { useState } from "react";
import { db } from '../../firebase/firebase';

import './Contact.css';

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [isAdded, setIsAdded] = useState(0); // [-1; 0; 1];

    const sendNotification = (e) => {
        e.preventDefault();
        db
        .collection('message')
        .add({name, email, subject, message})
        .then(() => {
            setIsAdded(1);
            setEmail("");
            setName("");
            setMessage("");
            setSubject("");
        })
        .then(() => {
            setIsAdded(-1);
        });
    }
    
    return (
        <React.Fragment>
            <div className="contact-container">
                <h1 className="contact-title">Contact</h1>
                <form className="contact-form" onSubmit={sendNotification}>
                    <div className="contact-form-name">
                        <label>Name:</label>
                        <input onTextChange={(e) => setName(e.value)} value={name} type="text" name="name" required/>
                    </div>
                    <div className="contact-form-email">
                        <label>Email:</label>
                        <input onTextChange={(e) => setEmail(e.value)} value={email} type="text" name="email" required/>
                    </div>
                    <div className="contact-form-subject">
                        <label>Subject:</label>
                        <input onTextChange={(e) => setSubject(e.value)} value={subject} type="text" name="subject" required/>
                    </div>
                    <div className="contact-form-message">
                        <label>Message:</label>
                        <textarea onTextChange={(e) => setMessage(e.value)} value={message} type="text" name="message" required/>
                    </div>
                    <button className="contact-form-button" type="submit" >Send</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Contact;
