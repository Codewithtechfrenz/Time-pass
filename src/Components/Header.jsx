// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Image/Logo.png";
import {
  FaPhoneAlt,
  FaHome,
  FaCoffee,
  FaInfoCircle,
  FaEnvelopeOpenText
} from "react-icons/fa";
import "../CSS/Header.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  /* ===== Sticky header scroll effect ===== */
  const headerRef = React.useRef(null);

useEffect(() => {
  const handleScroll = () => {
    headerRef.current?.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

[...document.querySelectorAll("*")].filter(el => {
  const s = getComputedStyle(el);
  return (s.overflowY === "auto" || s.overflowY === "scroll") && el.scrollHeight > el.clientHeight;
});



  // smooth scroll helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="header-main" role="banner">
        <div className="container-nav">
          {/* Brand / Logo */}
          <Link to="/" className="brand-main" onClick={() => { setMobileOpen(false); scrollToTop(); }}>
            <img src={logo} alt="Time Pass Logo" className="logo-main" />
          </Link>

          {/* Navigation Links */}
          <nav className={`nav-links-main ${mobileOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => { setMobileOpen(false); scrollToTop(); }}>Home</Link>
            <Link to="/products" onClick={() => { setMobileOpen(false); scrollToTop(); }}>Products</Link>
            <Link to="/about" onClick={() => { setMobileOpen(false); scrollToTop(); }}>About</Link>
            <Link to="/contact" onClick={() => { setMobileOpen(false); scrollToTop(); }}>Contact</Link>
          </nav>

          {/* Contact icons */}
          <div className="contact-icons-main">
            <div className="tooltip-main">
              <a href="tel:+917904023603" className="icon-text-main">
                <FaPhoneAlt size={18} />
                <span className="icon-label-main">Call Us</span>
              </a>
              <span className="tooltip-text-main">+91 79040 23603</span>
            </div>

            <div className="tooltip-main">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=timepasspkarthick@gmail.com"
    className="icon-text-main"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaEnvelopeOpenText size={18} />

    <span className="icon-label-main">Email</span>
  </a>

  <span className="tooltip-text-main">
    timepasspkarthick@gmail.com
  </span>
</div> 



          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-toggle-main"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(prev => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ===== Mobile & Tablet Bottom Nav ===== */}
      <nav className="bottom-nav-main">
        <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={scrollToTop}>
          <FaHome size={20} />
          <span>Home</span>
        </Link>
        <Link to="/products" className={location.pathname === "/products" ? "active" : ""} onClick={scrollToTop}>
          <FaCoffee size={20} />
          <span>Products</span>
        </Link>
        <Link to="/about" className={location.pathname === "/about-us" ? "active" : ""} onClick={scrollToTop}>
          <FaInfoCircle size={20} />
          <span>About</span>
        </Link>
        <Link to="/contact" className={location.pathname === "/contact-us" ? "active" : ""} onClick={scrollToTop}>
          <FaEnvelopeOpenText size={20} />
          <span>Contact</span>
        </Link>
      </nav>
    </>
  );
};

export default Header;
