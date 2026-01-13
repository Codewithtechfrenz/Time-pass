import React from "react";
import {
  GiCoffeeCup,
  GiManualMeatGrinder,
  GiToaster,
  GiCoffeePot
} from "react-icons/gi";
import coffeeCardBack from "../Image/Logo.png";
import '../CSS/Preparation.css';

const CoffeeCards = () => {
  const cards = [
    {
      icon: <GiCoffeeCup size={50} color="#a0522d" />,
      title: "FRESHLY BREWED",
      description:
        "Experience the aroma of freshly brewed coffee, prepared with love and precision to start your day right.",
    },
    {
      icon: <GiManualMeatGrinder size={50} color="#a0522d" />,
      title: "COFFEE GRINDING",
      description:
        "Our beans are perfectly ground to release maximum flavor and aroma, ensuring a rich and smooth cup every time.",
    },
    {
      icon: <GiToaster size={50} color="#a0522d" />,
      title: "TOASTED PERFECTION",
      description:
        "We toast our beans carefully to bring out the natural sweetness and depth of flavor for a delightful coffee experience.",
    },
    {
      icon: <GiCoffeePot size={50} color="#a0522d" />,
      title: "EXPERT BREWING",
      description:
        "Each cup is brewed to perfection using traditional and modern techniques for the ultimate coffee experience.",
    },
  ];

  return (
    <div className="coffee-cards-section">
      {cards.map((card, index) => (
        <div className="coffee-card" key={index}>
          <div className="coffee-card-inner">
            {/* Front */}
            <div className="coffee-card-front">
              <div className="icon">{card.icon}</div>
              <h3 className="title">{card.title}</h3>
              <p className="description">{card.description}</p>
            </div>

            {/* Back */}
            <div className="coffee-card-back">
              <img src={coffeeCardBack} alt="Coffee Shop Logo" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoffeeCards;
