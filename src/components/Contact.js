import React from 'react'
import Link from 'gatsby-link'
import './Contact.css';

const Contact = () => (
    <footer className="contact">
        <h3>Contact</h3>
        <p>To contact me for work head over to LinkedIn or just type in your email below and i'll get back to you.</p>
        <div className="message-sent">
            <h3>Message sent!</h3>
        </div>
        <div className="invalid-email">
            <h3>Please include a valid email address.</h3>
        </div>
        <div className="no-message">
            <h3>The message space was left blank. Please write something before sending.</h3>
        </div>
        <form id="contact-form">
            <input type="text" placeholder="  email" id="email" required />
            <input type="text" placeholder="  message" id="message" required />
            <input type="submit" />
        </form>
    </footer>
)

export default Contact;
