import React from "react";
import orderImg from "../Image/image1.png";
import orderIconImg from "../Image/order-icon.png";
import deliveryIconImg from "../Image/delivery-icon.png";
import coffeeIconImg from "../Image/coffee-icon.png";
import '../CSS/Delivery.css';

const features = [
  {
    iconImg: orderIconImg,
    title: "ORDER YOUR TEA",
    text: "Your Tea Journey Begins Here.",
    image: orderImg,
    className: "card-1"
  },
  {
    iconImg: deliveryIconImg,
    title: "DELIVERY OR PICK UP",
    text: "Hot tea, right to you.",
    image: orderImg,
    className: "card-2"
  },
  {
    iconImg: coffeeIconImg,
    title: "ENJOY YOUR BEVERAGES",
    text: "Refresh. Recharge. Reenergize",
    image: orderImg,
    className: "card-3"
  }
];


const DeliveryStoryPage = () => {
  return (
    <div className="feature-row">
      {features.map((item, i) => (
        <div className={`feature-card ${item.className}`} key={i}>

          {/* Main Image */}
          <img
            src={item.image}
            alt={item.title}
            className="feature-image"
          />

          {/* Icon + Content */}
          <div className="feature-content">
            <div className="feature-icon">
              <img src={item.iconImg} alt={item.title} />
            </div>

            <div className="feature-text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};


export default DeliveryStoryPage;
