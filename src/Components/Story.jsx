import React, { useEffect, useRef, useState } from "react";
import '../CSS/Story.css';

const OurStory = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ourstory-section" ref={sectionRef}>
      <div className="ourstory-wrapper">

        <h2 className={`ourstory-heading fade-down ${visible ? "show" : ""}`}>
          Our Story
          <span className="magic-underline"></span>
        </h2>

        <div className="ourstory-content">
          <p>
            <span className={`blur-text ${visible ? "show" : ""}`} style={{ transitionDelay: "0.1s" }}>
              "Time Pass Coffee Shop was born in 2024, in the heart of Madurai.
            </span>

            <span className={`blur-text ${visible ? "show" : ""}`} style={{ transitionDelay: "0.25s" }}>
              What began as an idea shared during quick tea breaks slowly became a space
              where conversations flow freely and time feels lighter.
            </span>

            <span className={`blur-text ${visible ? "show" : ""}`} style={{ transitionDelay: "0.4s" }}>
              Inspired by temple streets, evening walks, and the aroma of filter coffee,
              we wanted to create a place that feels familiar yet special.
            </span>

            <span className={`blur-text ${visible ? "show" : ""}`} style={{ transitionDelay: "0.55s" }}>
              Every cup we serve carries warmth, patience, and the comfort of shared moments.
            </span>

            <span className={`blur-text ${visible ? "show" : ""}`} style={{ transitionDelay: "0.7s" }}>
              Here, people gather not just for beverages, but for unhurried conversations
              and peaceful pauses from everyday routines.
            </span>

            <span className={`blur-text ${visible ? "show" : ""}`} style={{ transitionDelay: "0.85s" }}>
              It is a place where strangers become friends and silence feels welcome.
            </span>

            <span className={`blur-text ${visible ? "show" : ""}`} style={{ transitionDelay: "1s" }}>
              Time Pass Coffee Shop is our love letter to Madurai and its everyday stories."
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
