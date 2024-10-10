import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>+1-234-567-8900</p>
        <p>123 Street, City, Country</p>
      </div>
    </div>
  );
};

export default Contact;