import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Image/Logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-card">

        {/* LOGO ABOVE LEFT SECTION */}
        <div className="footer-top-logo">
          <img src={logo} alt="Time Pass Logo" />
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
          <ul>
  <li>
    <a href="/">Home</a>
  </li>
  <li>
    <a href="/products">Products</a>
  </li>
  <li>
    <a href="/About us">About us</a>
  </li>
  <li>
    <a href="/contact us">Contact us</a>
  </li>
</ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
  <h4>Contact</h4>

  <p className="footer-contact">
    <FaMapMarkerAlt className="footer-icon" />
    <span>
      Amirtha Nagar 4th Street<br />
      H.M.S Colony, Madurai – 16
    </span>
  </p>

  <p className="footer-contact">
    <FaEnvelope className="footer-icon" />
    <span>timepass@gmail.com</span>
  </p>

  <p className="footer-contact">
    <FaPhoneAlt className="footer-icon" />
    <span>(790) 402-3603</span>
  </p>
</div>


      </div>
    </footer>
  );
};

export default Footer;
