// src/pages/WorkplaceService.jsx
import React, { useEffect, useRef } from "react";
import deliveryGirl from "../Image/Deliverygirl.png";
import {
  FaBuilding,
  FaStore,
  FaSchool,
  FaHospital,
  FaIndustry
} from "react-icons/fa";
import '../CSS/Service.css';

const WorkplaceService = () => {

  const headingRef = useRef(null);
  const deliveryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-active");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (deliveryRef.current) observer.observe(deliveryRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* WORKPLACE + DELIVERY COMBINED SECTION */}
      <section className="workplace-service-section">

        {/* WORKPLACE INTRO */}
        <div
          className="workplace-wrapper fade-down"
          ref={headingRef}
        >
          <h2 className="workplace-heading">
            Serving Warmth Beyond the Cup
          </h2>

          <p className="workplace-subheading">
            We deliver twice a day — Morning and Evening — bringing authentic,
            freshly brewed beverages to workplaces across industries. Rooted in
            Madurai tradition, every cup is crafted to energize teams, spark
            conversations, and add comfort to everyday work moments.
          </p>
        </div>

        {/* DELIVERY DETAILS */}
        <div
          className="delivery-wrapper fade-left"
          ref={deliveryRef}
        >

          {/* LEFT CONTENT */}
          <div className="delivery-content">

            <div className="delivery-item">
              <FaBuilding className="delivery-icon" />
              <div>
                <h4>IT & Corporate Offices</h4>
                <p>
                  Supporting focused teams with scheduled beverage deliveries —
                  brewed fresh and served right at desks.
                </p>
              </div>
            </div>

            <div className="delivery-item">
              <FaStore className="delivery-icon" />
              <div>
                <h4>Retail Shops & Marketplaces</h4>
                <p>
                  Helping retail teams stay refreshed during busy hours with
                  quick, on-the-go traditional drinks.
                </p>
              </div>
            </div>

            <div className="delivery-item">
              <FaSchool className="delivery-icon" />
              <div>
                <h4>Colleges & Schools</h4>
                <p>
                  A trusted refreshment partner for students and educators,
                  offering comfort during long academic days.
                </p>
              </div>
            </div>

            <div className="delivery-item">
              <FaHospital className="delivery-icon" />
              <div>
                <h4>Hospitals</h4>
                <p>
                  Providing warm, comforting beverages for caregivers, patients,
                  and healthcare staff around the clock.
                </p>
              </div>
            </div>

            <div className="delivery-item">
              <FaIndustry className="delivery-icon" />
              <div>
                <h4>Manufacturing Units</h4>
                <p>
                  Fueling factory floors with strong filter coffee and traditional
                  drinks that keep productivity flowing.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="delivery-image">
            <img src={deliveryGirl} alt="Delivery Service" />
          </div>

        </div>
      </section>
    </>
  );
};

export default WorkplaceService;
