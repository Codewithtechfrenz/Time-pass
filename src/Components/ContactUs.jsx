import React, { useEffect, useState } from "react";
import Header from "./Header";
import PageScrollProgress from "./PageScrollProgress";
import Footer from "./Footer";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import emailjs from "emailjs-com";
import "../CSS/ContactUs.css";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [rating, setRating] = useState(0);

  /* ================= Scroll animations ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".tp-contact-card, .tp-animate-hero, .tp-animate-form, .tp-animate-map"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ================= Form submit ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message || rating === 0) {
      setError(true);
      setTimeout(() => setError(false), 500);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_ivljx4q",
        "template_o9sw3cg",
        { name, email, message, rating },
        "k2pcD_G5kwFRVV9Fl"
      )
      .then(() => {
        return emailjs.send(
          "service_ivljx4q",
          "template_1tzhuzf",
          { name, email, message, rating },
          "k2pcD_G5kwFRVV9Fl"
        );
      })
      .then(() => {
        setLoading(false);
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
          setRating(0);
          e.target.reset();
        }, 4000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
        alert("Message failed to send. Please try again.");
      });
  };

  return (
    <div className="tp-contact-page">
      <Header />
      <PageScrollProgress />

      {/* ================= HERO ================= */}
      <div className="tp-contact-hero tp-animate-hero">
      </div>

      {/* ================= CONTACT CARDS ================= */}
      <div className="tp-contact-cards">
        <div className="tp-contact-card">
          <div className="tp-contact-icon">
            <FiPhone />
          </div>
          <h3>Call Us</h3>
          <p>
            <a href="tel:+917904023603">+91 79040 23603</a>
          </p>
        </div>

        <div className="tp-contact-card">
          <div className="tp-contact-icon">
            <FiMail />
          </div>
          <h3>Email Us</h3>
          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=timepasspkarthick@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              timepasspkarthick@gmail.com
            </a>
          </p>
        </div>

        <div className="tp-contact-card">
          <div className="tp-contact-icon">
            <FiMapPin />
          </div>
          <h3>Visit Us</h3>
          <p>
            Karthick Kannan .R, <br />
            Amirtha Nagar 4th Street, <br />
            H.M.S Colony, Madurai – 16.
          </p>
        </div>
      </div>

      {/* ================= CONTACT FORM ================= */}
      <div className="tp-contact-form-wrapper tp-animate-form">
        <h2>Send Us a Message</h2>
        <form
          className={`tp-contact-form ${error ? "shake" : ""}`}
          onSubmit={handleSubmit}
        >
          <input name="name" type="text" placeholder="Your Name" />
          <input name="email" type="email" placeholder="Your Email" />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
          ></textarea>

          {/* ⭐ RATING */}
          <div className="tp-rating">
            <p>Rate Your Experience</p>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? "star active" : "star"}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <button type="submit" disabled={loading || submitted}>
            {loading ? (
              <span className="spinner"></span>
            ) : submitted ? (
              "Sent ✓"
            ) : (
              "Send Message"
            )}
          </button>

          {submitted && (
            <div className="tp-form-success">
              <span className="checkmark">✓</span>
              <p>Your message has been sent successfully!</p>
              <p>Thank you for contacting us. We will get back to you shortly.</p>
              <p>Rating: ⭐ {rating}/5</p>
            </div>
          )}
        </form>
      </div>

      {/* ================= GOOGLE MAP ================= */}
      <div className="tp-contact-map tp-animate-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d694.7428080036862!2d78.08397352044996!3d9.929060739563175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf007a82483d%3A0x874a1e6b0f62b169!2sTime%20Pass!5e0!3m2!1sen!2sus!4v1769242200622!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Time Pass Location Map"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
