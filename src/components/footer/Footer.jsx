import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
            We are a family-owned restaurant committed to providing our
            customers with the best culinary experience. Join us for delicious
            food, great service, and a welcoming atmosphere.
          </p>
          <div className="social-icons">
            <Link to="#" className="social-icon"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#" className="social-icon"><i className="fab fa-twitter"></i></Link>
            <Link to="#" className="social-icon"><i className="fab fa-instagram"></i></Link>
            <Link to="#" className="social-icon"><i className="fab fa-linkedin"></i></Link>
          </div>
        </div>
        <div className="footer-section links" id="footer-section-links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><Link to="/">These Are Just</Link></li>
            <li><Link to="/about">For The</Link></li>
            <li><Link to="/menu">Design Purpose</Link></li>
            <li><Link to="/contact">Please Don't</Link></li>
            <li><Link to="/blog">Click</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <ul id="footer-title-contact">
            <li><i className="fas fa-map-marker-alt"></i> 123 Main Street, Anytown, USA</li>
            <li><i className="fas fa-phone-alt"></i> +1 234 567 890</li>
            <li><i className="fas fa-envelope"></i> info@restaurant.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
