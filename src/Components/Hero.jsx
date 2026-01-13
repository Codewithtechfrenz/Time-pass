import React, { useState, useEffect, useRef } from "react";
import heroVideo from "../Image/coffee-video.mp4";
import '../CSS/Hero.css';

const quotes = [
  {
    title: "1960",
    text: "மண்பானை கப் டீ… காசு குறைஞ்சாலும், மனசு நிறைய பேசின காலம்."
  },
  {
    title: "1980",
    text: "டீ கடைன்னா வெறும் கடை இல்ல… ஊரு கூடுற இடம்."
  },
  {
    title: "2000",
    text: "காலை டீ இல்லாம நாள் தொடங்காத காலம்… கடை முன்னாடி தான் வாழ்க்கை ஓடிச்சு."
  },
  {
    title: "2010",
    text: "ஃப்ளேவர் டீ வந்துச்சு… ஆனா பழைய டீக்கான ஆசை போகவில்லை.”ஒரு கப் டீ…Mind Reset"
  },
  {
    title: "2025",
    text: "மாடர்ன் World, ஆன்லைன் ஆர்டர், ஆனா டீ இன்னும் வீட்டு சுவை."
  }
];

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out text

      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setFade(true); // fade in text
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-video-wrapper">

        {/* Background Video */}
        <video
          ref={videoRef}
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="hero-overlay">
          <div className="hero-content">
            <h2 className={fade ? "text-fade-in" : "text-fade-out"}>
              {quotes[currentQuote].title}
            </h2>
            <p className={fade ? "text-fade-in" : "text-fade-out"}>
              {quotes[currentQuote].text}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
