import React from "react";
import teaImage from "../Image/Teaimage.png"; // main image
import midImage from "../Image/Teaimage1.png"; // middle decorative image
import '../CSS/Content1.css';

const ShowcaseSection = () => {
  return (
    <section className="showcase-section">
      <div className="showcase-bg-text">TimePass</div>

      <span className="decor-circle decor-circle-1"></span>
      <span className="decor-circle decor-circle-2"></span>

      <div className="showcase-container">

        {/* Left Content */}
        <div className="showcase-content">
          <span className="showcase-label"> MADURAI TEMPLE STREET</span>
          <h2>
            Brewing <span>Moments</span><br />
            Not Just <span>Madurai Tea</span>
          </h2>

          <div className="showcase-divider"><span></span></div>

          <p>
            As the temple bells echo through Madurai’s morning streets,
            our tea begins its slow brew with fresh tea leaves and warming spices.
            Each cup captures the calm, devotion, and comfort of a new day.
          </p>

          <div className="showcase-highlights">
            <div className="highlight-box">
              <strong>15+</strong>
              <span>Years of Tradition</span>
            </div>
            <div className="highlight-box">
              <strong>100%</strong>
              <span>Authentic Tea</span>
            </div>
          </div>

        </div>

        {/* Middle Decorative Image */}
        <div className="showcase-middle-image">
          <img src={midImage} alt="Decorative Tea Scene" />
        </div>

        {/* Right Main Image */}
        <div className="showcase-image">
          <div className="image-frame">
            <img src={teaImage} alt="Madurai Tea" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShowcaseSection;
