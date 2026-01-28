// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../Image/Logo.png";
import "../CSS/Footer.css";

const Footer = () => {
  // helper function for smooth scroll
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-card">
        {/* LOGO */}
        <div className="footer-top-logo">
          <img src={logo} alt="TimePass Logo" />
        </div>

        {/* LEFT */}
        <div className="footer-left">
          <h3 className="footer-brand">TimePass</h3>
          <p className="footer-text">
            Time Pass Tea & Coffee Shop is your everyday refreshment stop.
            Serving premium tea and coffee with love and consistency.
            A perfect place to relax, refresh, and recharge.
          </p>

          <div className="footer-social">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaInstagram /></span>
            <span><FaYoutube /></span>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h4>Pages</h4>
          <ul className="footer-links">
            <li>
              <Link to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/products" onClick={scrollToTop}>Products</Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={scrollToTop}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>Contact</h4>

          <p className="footer-contact">
            <FaMapMarkerAlt className="footer-icon" />
            <span>
              Karthick Kannan .R, <br />
              Amirtha Nagar 4th Street, <br />
              H.M.S Colony, Madurai – 16.
            </span>
          </p>

          <p className="footer-contact">
            <FaEnvelope className="footer-icon" />
            <span>timepasspkarthick@gmail.com</span>
          </p>

          <p className="footer-contact">
            <FaPhoneAlt className="footer-icon" />
            <span>(790) 402-3603</span>
          </p>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p className="footer-bottom-content">
            <span className="footer-left-text">
              © All Rights Reserved. TimePass Tea & Coffee Shop {new Date().getFullYear()}.
            </span>

            <span className="footer-right-text">
              Powered By{" "}
              <a
                href="https://techfrenz.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <strong>Techfrenz Tech Solutions</strong>
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
