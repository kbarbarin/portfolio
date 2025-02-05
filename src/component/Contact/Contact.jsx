import React, { useState } from "react";
import { db } from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

import './Contact.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isAdded, setIsAdded] = useState(0); // [-1; 0; 1];

    const sendNotification = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'message'), {
              name,
              email,
              subject,
              message
            });
            setIsAdded(1);
            setEmail("");
            setName("");
            setMessage("");
            setSubject("");
          } catch (error) {
            console.error("Erreur lors de l'ajout du message :", error);
            setIsAdded(-1);
          }    }
    
    return (
        <React.Fragment>
            <div className="contact-container">
                <h1 className="contact-title">Contact</h1>
                <form className="contact-form" onSubmit={sendNotification}>
                    <div className="contact-form-name">
                        <label>Name:</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" required/>
                    </div>
                    <div className="contact-form-email">
                        <label>Email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" required/>
                    </div>
                    <div className="contact-form-subject">
                        <label>Subject:</label>
                        <input onChange={(e) => setSubject(e.target.value)} value={subject} type="text" name="subject" required/>
                    </div>
                    <div className="contact-form-message">
                        <label>Message:</label>
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} type="text" name="message" required/>
                    </div>
                    <button className="contact-form-button" type="submit" >Send</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Contact;
