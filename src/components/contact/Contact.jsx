import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p>We would love to hear from you! Whether you have questions, comments, or just want to say hello, feel free to reach out to us.</p>
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>1234 Restaurant St, Food City, FL 12345</span>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span>(123) 456-7890</span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>info@restaurant.com</span>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};


