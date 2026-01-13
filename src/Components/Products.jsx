import React, { useState, useEffect } from "react";
import Header from "./Header";
import PageScrollProgress from "./PageScrollProgress";
import Footer from "./Footer";
import '../CSS/Products.css';

/* Icons as Images */
import flaskImg from "../Image/flask.png";
import sugarImg from "../Image/sugar-cubes.png";

/* Product Images */
import img1 from "../Image/Tea.png";
import img2 from "../Image/Coffee.png";
import img3 from "../Image/Badam.png";
import img4 from "../Image/Milk.png";
import img5 from "../Image/Gingertea.png";
import img6 from "../Image/Cardamom.png";
import img7 from "../Image/Boost.png";
import img8 from "../Image/Horlicks.png";
import img9 from "../Image/LemonTea.png";

/* ================= Products Data ================= */
const productsData = [
  {
    name: "Milk",
    image: img4,
    desc: "Pure and hygienic milk, gently warmed to give you comfort and nourishment in every sip.",
    half: "₹40",
    full: "₹70",
  },
  {
    name: "Badam Milk",
    image: img3,
    desc: "A rich and creamy blend of milk and hand-picked almonds, perfect for a royal refreshment.",
    half: "₹60",
    full: "₹100",
  },
  {
    name: "Hot Tea",
    image: img1,
    desc: "A timeless tea experience brewed fresh to relax your mind and refresh your senses.",
    half: "₹30",
    full: "₹55",
  },
  {
    name: "Coffee",
    image: img2,
    desc: "Strong, aromatic coffee crafted to energize your day and lift your mood instantly.",
    half: "₹35",
    full: "₹65",
  },
  {
    name: "Cardamom Tea",
    image: img6,
    desc: "Smooth tea infused with fragrant cardamom for a soothing and flavorful experience.",
    half: "₹40",
    full: "₹75",
  },
  {
    name: "Ginger Tea",
    image: img5,
    desc: "A refreshing ginger-infused tea with a spicy warmth that awakens your senses.",
    half: "₹40",
    full: "₹75",
  },
  {
    name: "Boost",
    image: img7,
    desc: "An energy-packed drink that keeps you active and refreshed throughout the day.",
    half: "₹50",
    full: "₹90",
  },
  {
    name: "Horlicks",
    image: img8,
    desc: "A nourishing malt drink that offers strength, comfort, and great taste.",
    half: "₹50",
    full: "₹90",
  },
  {
    name: "Lemon Tea",
    image: img9,
    desc: "A light and refreshing lemon-flavored tea, perfect for a calming break.",
    half: "₹35",
    full: "₹65",
  },
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  /* ================= Auto-close Price Popup ================= */
  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => setActiveIndex(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  /* ================= Scroll Zoom-in Animation ================= */
  useEffect(() => {
    const cards = document.querySelectorAll(".tp-product-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tp-zoom-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <PageScrollProgress />
      {/* ================= Banner ================= */}
      <section className="tp-products-banner">
        <div className="tp-banner-overlay">
          <div className="tp-banner-content">
            <h1>
              Vibrant Tea and Coffees <br /> Delivered Fresh
            </h1>
            <p>
              "At Time Pass, we turn every tea and coffee break into a little
              celebration. Savor bold flavors, relaxing aromas, and moments made
              just for you."
            </p>
          </div>
        </div>
      </section>

      {/* ================= Products Cards ================= */}
      <section className="tp-products-section">
        <div className="tp-products-grid">
          {productsData.map((item, index) => {
            const isTopOrdered =
              item.name === "Hot Tea" || item.name === "Coffee";

            return (
              <div
                key={index}
                className="tp-product-card"
                onClick={() => setActiveIndex(index)}
              >
                {/* 🔥 Top Ordered Badge */}
                {isTopOrdered && (
                  <span className="tp-top-badge">Top Ordered</span>
                )}

                {/* Left Image */}
                <div className="tp-product-image">
                  <img src={item.image} alt={item.name} />
                </div>

                {/* Right Content */}
                <div className="tp-product-content">
                  <h3>{item.name}</h3>
                  <p className="tp-product-desc">{item.desc}</p>

                  <p className="tp-product-flask">
                    <img
                      src={flaskImg}
                      alt="Flask measurement"
                      className="tp-flask-img"
                    />
                    ½ Litre / 1 Litre Flask
                  </p>

                  <p className="tp-product-sugar">
                    <img
                      src={sugarImg}
                      alt="Sugar option"
                      className="tp-sugar-img"
                    />
                    With / Without Sugar
                  </p>
                </div>

                {/* Price Popup */}
                {activeIndex === index && (
                  <div className="tp-price-popup-slide">
                    <span>½ Litre : {item.half}</span>|
                    <span>1 Litre : {item.full}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;
