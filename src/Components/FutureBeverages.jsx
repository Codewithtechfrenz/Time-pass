import React, { useEffect } from "react";

import biscutImg from "../Image/Biscut.png";
import puffsImg from "../Image/Puffs.png";
import samosaImg from "../Image/Samosa.png";
import '../CSS/FutureBeverages.css';

const FutureBeverages = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".future-heading, .future-subheading, .future-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="future-section">
      <div className="future-wrapper">

        <h2 className="future-heading">
          Our Future Beverages
          <span className="underline"></span>
        </h2>

        <p className="future-subheading">
          We’re brewing more than just beverages.
          <br />
          Thoughtfully crafted snacks are on the way to complete your tea-time experience.
        </p>

        <div className="future-card-grid">

          <div className="future-card disabled">
            <img src={biscutImg} alt="Biscuits" /><br /><br />
            <h3>Biscuits</h3>
            <button disabled>Coming Soon</button>
          </div>

          <div className="future-card disabled">
            <img src={puffsImg} alt="Puffs" />
            <h3>Puffs</h3>
            <button disabled>Coming Soon</button>
          </div>

          <div className="future-card disabled">
            <img src={samosaImg} alt="Samosa" />
            <h3>Samosa</h3>
            <button disabled>Coming Soon</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FutureBeverages;
