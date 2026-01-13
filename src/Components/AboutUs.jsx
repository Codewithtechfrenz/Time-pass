import React, { useEffect, useRef } from "react";
import Header from "./Header";
import PageScrollProgress from "./PageScrollProgress";
import Footer from "./Footer";
import aboutVideo from "../Image/About.mp4";
import MissionImg from "../Image/Mission.png";
import VisionVideo from "../Image/vision.mp4";
import ValuesImg from "../Image/Values.png";
import '../CSS/AboutUs.css';


const About = () => {
  const titleRefs = useRef([]);
  const animatedRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tp-active");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    titleRefs.current.forEach((el) => el && observer.observe(el));
    animatedRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const mvvData = [
    {
      title: "Our Mission",
      text:
        "At Time Pass, our mission is to transform everyday tea and coffee breaks into moments of comfort and connection. We believe that a simple cup can slow down busy days, spark conversations, and create warmth. From carefully selected ingredients to the way each cup is served, Time Pass is dedicated to delivering quality, consistency, and a welcoming experience every single time.",
      media: MissionImg,
      type: "image"
    },
    {
      title: "Our Vision",
      text:
        "Time Pass envisions becoming more than just a tea and coffee destination — we aspire to be a familiar space where people pause, relax, and feel at home. Our vision is to build a culture where friends meet, ideas flow, and everyday moments turn into lasting memories, all centered around the comfort of a well-crafted cup.",
      media: VisionVideo,
      type: "video"
    },
    {
      title: "Our Values",
      text:
        "Everything at Time Pass is guided by values rooted in authenticity and care. We value quality over shortcuts, people over processes, and experiences over transactions. With a focus on sustainability, honesty, and craftsmanship, we aim to serve not just beverages, but trust, warmth, and a sense of belonging with every cup.",
      media: ValuesImg,
      type: "image"
    }
  ];

  return (
    <>
      <Header />
      <PageScrollProgress />
      {/* ================= ABOUT VIDEO BANNER ================= */}
      <section className="tp-about-banner">
        <video
          className="tp-about-video"
          src={aboutVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="tp-about-overlay" />

        <div className="tp-about-content">
          <h1 className="tp-about-heading">
            More Than Tea & Coffee — It’s a{" "}
            <span className="tp-highlight">Time Pass</span> Tradition
          </h1>
          <p className="tp-about-subheading">
            Crafted with warmth and served with heart. Time Pass turns everyday
            breaks into meaningful traditions.
          </p>
        </div>
      </section>

      {/* ================= ABOUT US CONTENT ================= */}
      <main className="tp-aboutus-page">
        <section className="tp-aboutus-section">
          <h2
            ref={(el) => (titleRefs.current[0] = el)}
            className="tp-aboutus-title tp-title-animate tp-scroll-animate"
          >
            <h2 class="purpose-heading">Our Purpose</h2>
            <span className="magic-underline-one"></span>
          </h2>

          {mvvData.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`tp-aboutus-mvv ${
                  isReverse ? "tp-aboutus-mvv-reverse" : ""
                }`}
              >
                {/* TEXT */}
                <div
                  ref={(el) => (animatedRefs.current[index * 2] = el)}
                  className="tp-aboutus-mvv-content tp-scroll-animate"
                >
                  <h3>{item.title}</h3>
                  <br />
                  <p>{item.text}</p>
                </div>

                {/* MEDIA (IMAGE / VIDEO) – ADDED */}
                <div
                  ref={(el) => (animatedRefs.current[index * 2 + 1] = el)}
                  className="tp-aboutus-mvv-media tp-scroll-animate"
                >
                  {item.type === "image" ? (
                    <img src={item.media} alt={item.title} />
                  ) : (
                    <video
                      src={item.media}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {/* ===== Why Choose Us ===== */}
      
{/* ===== Why Choose Us ===== */}
<section className="tp-aboutus-section">
  <h2
    ref={(el) => (titleRefs.current[1] = el)}
    className="tp-aboutus-title tp-title-animate tp-scroll-animate"
  >
    <h2 class="choose-heading">Why Choose Us</h2>
    <span className="magic-underline-one"></span>
  </h2>

  <div className="tp-aboutus-why-grid">
    {[
      {
        num: "01",
        title: "Premium Ingredients",
        text:
          "We use carefully selected tea leaves and coffee beans to ensure rich aroma and authentic taste."
      },
      {
        num: "02",
        title: "Freshly Brewed Daily",
        text:
          "Every cup is freshly prepared to maintain warmth, flavor, and consistency."
      },
      {
        num: "03",
        title: "Fast & Reliable Delivery",
        text:
          "On-time delivery so your tea and coffee moments stay uninterrupted."
      },
      {
        num: "04",
        title: "Affordable Pricing",
        text:
          "Premium quality tea and coffee at prices made for everyday enjoyment."
      },
      {
        num: "05",
        title: "Hygienic Preparation",
        text:
          "Clean kitchens, safe handling, and strict quality standards."
      },
      {
        num: "06",
        title: "Trusted Local Brand",
        text:
          "Built on warmth, trust, and familiarity—your daily tea & coffee partner."
      }
    ].map((item, index) => (
      <div
        key={index}
        ref={(el) => (animatedRefs.current[40 + index] = el)}
        className="tp-aboutus-why-card tp-scroll-animate tp-fade-down"
      >
        <span className="tp-aboutus-why-num">{item.num}</span>
        <h4>{item.title}</h4>
        <p>{item.text}</p>
      </div>
    ))}
  </div>
</section><br></br>



{/* ===== Stats Section ===== */}
<section className="tp-aboutus-soft-stats">

  <h2 className="tp-aboutus-soft-stats-title">
    <h2 class="impact-heading">Our Impact in Every Cup</h2>
    <span className="magic-underline-one"></span>
  </h2><br></br>

  <div className="tp-aboutus-soft-stats-grid">
    <div
      ref={(el) => (animatedRefs.current[60] = el)}
      className="tp-soft-stat tp-scroll-animate"
    >
      <h3>120+</h3>
      <p>
        Daily cups of tea & coffee served fresh across busy streets and offices.
      </p>
    </div>

    <div
      ref={(el) => (animatedRefs.current[61] = el)}
      className="tp-soft-stat tp-scroll-animate"
    >
      <h3>92%</h3>
      <p>
        Customers return for the comfort, taste, and consistency we deliver.
      </p>
    </div>

    <div
      ref={(el) => (animatedRefs.current[62] = el)}
      className="tp-soft-stat tp-scroll-animate"
    >
      <h3>45+</h3>
      <p>
        Trusted delivery partners serving neighborhoods with care.
      </p>
    </div>

    <div
      ref={(el) => (animatedRefs.current[63] = el)}
      className="tp-soft-stat tp-scroll-animate"
    >
      <h3>5–10 min</h3>
      <p>
        Average delivery time ensuring your cup arrives hot & fresh.
      </p>
    </div>
  </div>
</section>





        {/* ===== CTA ===== */}
        <section className="tp-aboutus-cta">
          <h2>Ready for Your Perfect Cup?</h2>
          <p>Visit us or explore our menu to experience real flavor.</p>
          <button className="tp-aboutus-cta-btn">Explore Menu</button>
        </section><br></br><br></br>
      </main>

      <Footer />
    </>
  );
};

export default About;
