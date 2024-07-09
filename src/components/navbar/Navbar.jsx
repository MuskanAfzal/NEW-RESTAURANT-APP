import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./Navbar.css";
import About from "../about/About";
import Items from "../items/Items";
import Contact from "../contact/Contact";
import Blogs from "../blogs/Blogs";

export default function Navbar() {
  const [popupContent, setPopupContent] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handlePopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Restaurant Logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "images/logo.png";
            }}
          />
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item" id="home-icon" onClick={toggleMenu}><Link to="/">HOME</Link></li>
          <li className="navbar-item" onClick={() => { handlePopup("ABOUT"); toggleMenu(); }}>ABOUT</li>
          <li className="navbar-item" onClick={() => { handlePopup("ITEMS"); toggleMenu(); }}>ITEMS</li>
          <li className="navbar-item" onClick={() => { handlePopup("BLOGS"); toggleMenu(); }}>BLOGS</li>
          <li className="navbar-item" onClick={() => { handlePopup("CONTACT"); toggleMenu(); }}>CONTACT</li>
        </ul>
        <div className="navbar-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <Link to="/cart">
            <button className="cart-button">
              <i className="fas fa-shopping-cart"></i>
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </button>
          </Link>
        </div>
      </nav>
      {popupContent && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>X</button>
            {popupContent === "ABOUT" && <About />}
            {popupContent === "ITEMS" && <Items />}
            {popupContent === "BLOGS" && <Blogs />}
            {popupContent === "CONTACT" && <Contact />}
          </div>
        </div>
      )}
    </div>
  );
}
