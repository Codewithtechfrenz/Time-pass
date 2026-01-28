import React, { useEffect, useRef, useState } from "react";
import Rightside from "../Image/Rightside.png";
import ContentBg from "../Image/Content-bg.jpg";
import '../CSS/Content.css';

const ImageTextSection = ({ imageLeft = false }) => {
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { number: 2000, text: "Reviews" },
    { number: 3000, text: "Sells" },
    { number: 10, text: "Menus" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current || hasAnimated) return;

      const rect = statsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setHasAnimated(true); // trigger animation only when section enters viewport
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <div className="image-text-wrapper">
      <div className="leaf-3d-wrapper">
        <img src={ContentBg} alt="Floating leaves" className="leaf-3d" />
      </div>

      <div className={`image-text-container ${imageLeft ? "left-image" : ""}`}>
        <div className="left-content">
          <h2>
            We are the best <span className="highlight">Coffee shop</span> ever <br />
            in our <span className="highlight">Madurai City</span>
          </h2>

          <div className="text-row">
            <p>
              "Madurai City’s Coffee lovers’ paradise!<br />
              Enjoy rich flavors, relaxing vibes, and a friendly smile.<br />
              Every cup tells a story of love for coffee."
            </p>
          </div>

          <div className="stats-section" ref={statsRef}>
            {stats.map((stat, index) => (
              <Stat
                key={index}
                number={stat.number}
                text={stat.text}
                animate={hasAnimated}
                delay={index * 300} // staggered effect
              />
            ))}
          </div>

          <button
  className="cta-btn-pill"
  onClick={() => {
    console.log("clicked");
    window.location.href = "/about";
  }}
>
  <span>Learn More</span>
  <span className="arrow-circle">↗</span>
</button>



        </div>

        <div className="right-image">
          <img src={Rightside} alt="Section Illustration" />
        </div>
      </div>
    </div>
  );
};

const Stat = ({ number, text, animate, delay }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false); // fade-in + scale
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!animate) return;

    const duration = 2000;

    const startAnimation = () => {
      setVisible(true); // trigger fade + scale

      const step = (timestamp) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const progress = timestamp - startTimeRef.current;
        const progressRatio = Math.min(progress / duration, 1);
        const currentCount = Math.floor(number * progressRatio);
        setCount(currentCount);

        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          setCount(number);
        }
      };

      requestAnimationFrame(step);
    };

    const timer = setTimeout(startAnimation, delay);
    return () => clearTimeout(timer);
  }, [animate, number, delay]);

  const formatNumber = (num) => {
    if (num >= 1000) return Math.floor(num / 1000) + "K+";
    return num + "+";
  };

  return (
    <div
      className="stat"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px) scale(1)"
          : "translateY(20px) scale(0.8)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <span className="stat-number">{formatNumber(count)}</span>
      <br />
      <span className="stat-text">{text}</span>
    </div>
  );
};

export default ImageTextSection;
