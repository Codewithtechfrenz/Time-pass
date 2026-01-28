import React from "react";
import "../CSS/Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="coffeeloader">
        <div className="steam">
          <div className="smoke1"></div>
          <div className="smoke2"></div>
          <div className="smoke3"></div>
        </div>

        <div className="cupcontainer">
          <div className="cup"></div>
          <div className="glance"></div>
          <div className="handle"></div>
        </div>

        <div className="plate"></div>
        <div className="bottom"></div>
      </div>

      {/* Loader Text */}
      <div className="loader-text"> "Welcome Timepass" </div>
    </div>
  );
};

export default Loader;
