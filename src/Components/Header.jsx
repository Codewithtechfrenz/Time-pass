// src/components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Image/Logo.png";
import { FaPhoneAlt, FaEnvelope, FaHome, FaCoffee, FaInfoCircle, FaEnvelopeOpenText } from "react-icons/fa";
import '../CSS/Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="header" role="banner">
        <div className="container nav">
          {/* Brand / Logo */}
          <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
            <img src={logo} alt="Time Pass Logo" className="logo" />
            <h1>Time Pass</h1>
          </Link>

          {/* Navigation Links */}
          <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setMobileOpen(false)}>Products</Link>
            <Link to="/about-us" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/contact-us" onClick={() => setMobileOpen(false)}>Contact</Link>
          </nav>

          {/* Contact icons */}
          <div className="contact-icons">
            <div className="tooltip">
              <a href="tel:+911234567890" className="icon-text">
                <FaPhoneAlt size={18} />
                <span className="icon-label">Call Us</span>
              </a>
              <span className="tooltip-text">+91 12345 67890</span>
            </div>
            <div className="tooltip">
              <a href="mailto:info@coffeecorner.com" className="icon-text">
                <FaEnvelope size={18} />
                <span className="icon-label">Email Now</span>
              </a>
              <span className="tooltip-text">info@coffeecorner.com</span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ===============================
          MOBILE & TABLET BOTTOM NAV
      =============================== */}
      <nav className="bottom-nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <FaHome size={20} />
          <span>Home</span>
        </Link>
        <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>
          <FaCoffee size={20} />
          <span>Products</span>
        </Link>
        <Link to="/about-us" className={location.pathname === "/about-us" ? "active" : ""}>
          <FaInfoCircle size={20} />
          <span>About</span>
        </Link>
        <Link to="/contact-us" className={location.pathname === "/contact-us" ? "active" : ""}>
          <FaEnvelopeOpenText size={20} />
          <span>Contact</span>
        </Link>
      </nav>
    </>
  );
};

export default Header;
