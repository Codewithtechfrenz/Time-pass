import React, { useEffect, useState } from "react";
import Header from "./Header";
import PageScrollProgress from "./PageScrollProgress";
import Footer from "./Footer";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import '../CSS/ContactUs.css';

const ContactUs = () => {
  /* ===============================
     FORM STATES
  ================================ */
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  /* ===============================
     SCROLL ANIMATIONS
  ================================ */
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".tp-contact-card, .tp-animate-hero, .tp-animate-form, .tp-animate-map"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ===============================
     FORM SUBMIT HANDLER
  ================================ */
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form[0].value;
    const email = form[1].value;
    const message = form[2].value;

    // ❌ Validation error → shake
    if (!name || !email || !message) {
      setError(true);
      setTimeout(() => setError(false), 500);
      return;
    }

    // ⏳ Loading spinner
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Reset after success
      setTimeout(() => {
        setSubmitted(false);
        form.reset();
      }, 3500);
    }, 1500);
  };

  return (
    <div className="tp-contact-page">
      <Header />
      <PageScrollProgress />
      {/* Hero */}
      <div className="tp-contact-hero tp-animate-hero"></div>

      {/* Contact Cards */}
      <div className="tp-contact-cards">
        <div className="tp-contact-card">
          <div className="tp-contact-icon"><FiPhone /></div>
          <h3>Call Us</h3>
          <p><a href="tel:+919876543210">+91 98765 43210</a></p>
        </div>

        <div className="tp-contact-card">
          <div className="tp-contact-icon"><FiMail /></div>
          <h3>Email Us</h3>
          <p><a href="mailto:timepass@gmail.com">timepass@gmail.com</a></p>
        </div>

        <div className="tp-contact-card">
          <div className="tp-contact-icon"><FiMapPin /></div>
          <h3>Visit Us</h3>
          <p>
            Amirtha Nagar 4th Street<br />
            H.M.S Colony, Madurai – 16
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="tp-contact-form-wrapper tp-animate-form">
        <h2>Send Us a Message</h2>

        <form
          className={`tp-contact-form ${error ? "shake" : ""}`}
          onSubmit={handleSubmit}
        >
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>

          <button type="submit" disabled={loading || submitted}>
            {loading ? <span className="spinner"></span> : submitted ? "Sent ✓" : "Send Message"}
          </button>

          {submitted && (
            <>
              <div className="tp-form-success">
                <span className="checkmark">✓</span>
                <p>Thank you! We’ll get back to you shortly.</p>
              </div>

              {/* 🎉 Confetti */}
              <div className="confetti">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span key={i}></span>
                ))}
              </div>
            </>
          )}
        </form>
      </div>

      {/* Google Map */}
      <div className="tp-contact-map tp-animate-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=New+Delhi&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
