import React, { useEffect, useRef } from "react";
import OfferImage from "../Image/Offer.png"; // ✅ CHANGED IMAGE IMPORT METHOD
import '../CSS/Offer.css';

const OfferSection = () => {

  const offerRef = useRef(null);

  /* ===============================
     FADE IN DOWN ON SCROLL
  ================================ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (offerRef.current) {
      observer.observe(offerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="offer-section">
      <div className="offer-content" ref={offerRef}>

        {/* LEFT IMAGE */}
        <div className="offer-image">
          <img src={OfferImage} alt="Special Offer" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="offer-text">
          <h2>
            Join in and get <span>15% Off!</span>
          </h2>

          <p>
            Subscribe to our newsletter and get 15% off discount code
            for your next tea or coffee break.
          </p>

          <form className="offer-form">
            <input
              type="email"
              placeholder="Email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default OfferSection;
