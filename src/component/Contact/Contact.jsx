import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const sendNotification = (e) => {
        e.preventDefault();
    }
    
    return (
        <React.Fragment>
            <div className="contact-container">
                <h1 className="contact-title">Contact</h1>
                <form className="contact-form">
                    <div className="contact-form-name">
                        <label>Name:</label>
                        <input onTextChange={(e) => setName(e.value)} type="text" name="name" required/>
                    </div>
                    <div className="contact-form-email">
                        <label>Email:</label>
                        <input onTextChange={(e) => setEmail(e.value)} type="text" name="email" required/>
                    </div>
                    <div className="contact-form-subject">
                        <label>Subject:</label>
                        <input onTextChange={(e) => setSubject(e.value)} type="text" name="subject" required/>
                    </div>
                    <div className="contact-form-message">
                        <label>Message:</label>
                        <textarea onTextChange={(e) => setMessage(e.value)} type="text" name="message" required/>
                    </div>
                    <button onPress={(e) => sendNotification(e)} className="contact-form-button" type="submit">Send</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Contact;
