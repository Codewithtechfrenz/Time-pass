import React, { useEffect, useRef, useState } from "react";

import img1 from "../Image/Tea.png";
import img2 from "../Image/Coffee.png";
import img3 from "../Image/Badam.png";
import img4 from "../Image/Milk.png";
import img5 from "../Image/Gingertea.png";
import img6 from "../Image/Cardamom.png";
import '../CSS/Menu.css';

const products = [
  { img: img1, name: "Hot Tea", badge: "hot" },
  { img: img2, name: "Filter Coffee", badge: "hot" },
  { img: img3, name: "Badam Milk", badge: "cold" },
  { img: img4, name: "Milk", badge: "hot" },
  { img: img5, name: "Ginger Tea", badge: "hot" },
  { img: img6, name: "Cardamom Tea", badge: "hot" }
];

const PopularBeverages = () => {
  const headingRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="beverages-section">
      <div className="bw-mask"></div>

      <div className="beverages-wrapper">
        <h2
          ref={headingRef}
          className={`beverages-heading fade-down ${visible ? "show" : ""}`}
        >
          Our Signature <span>Beverages</span>
          <p
            className={`fade-down fade-delay ${visible ? "show" : ""}`}
          >
            Inspired by temple streets and morning rituals, our beverages bring comfort,
            nostalgia, and freshness in every cup.
          </p>
        </h2>

        <div className="beverages-grid">
          {products.map((item, index) => (
            <div className="beverage-card" key={index}>
              <div className="image-frame1">
                <img src={item.img} alt={item.name} />
                <div className={`badge ${item.badge}`}>
                  {item.badge === "hot" ? "🔥 Hot" : "❄ Cold"}
                </div>
              </div>

              <p className="product-name">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="beverages-footer">
          <a href="/products">
          <button className="view-btn">View All Products</button>
          </a>

        </div>
      </div>
    </section>
  );
};

export default PopularBeverages;
