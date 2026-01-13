import React, { useState, useEffect } from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import { SlCup } from "react-icons/sl";
import '../CSS/FAQ.css';

const faqData = [
  {
    question: "What makes Time Pass Tea special?",
    answer:
      "Time Pass Tea is crafted with authentic blends and fresh ingredients, offering a comforting taste that brings people together for meaningful conversations."
  },
  {
    question: "Do you serve coffee as well?",
    answer:
      "Yes, along with our signature teas, we serve freshly brewed coffee made from premium beans for a rich and satisfying experience."
  },
  {
    question: "Is Time Pass Tea suitable for quick breaks?",
    answer:
      "Absolutely. Our menu is designed for quick refreshment, making it perfect for short breaks, casual meetups, or relaxed evenings."
  },
  {
    question: "Do you offer takeaway and delivery?",
    answer:
      "Yes, we offer both takeaway and delivery so you can enjoy your favorite tea or coffee wherever you are."
  },
  {
    question: "What snacks pair best with your tea?",
    answer:
      "Our tea pairs wonderfully with light snacks like biscuits, puffs, and samosas — perfect for enhancing your tea-time moments."
  },
  {
    question: "Is Time Pass Tea a good place to hang out with friends?",
    answer:
      "Definitely! Time Pass Tea is designed as a relaxed space where friends can unwind, chat, and enjoy great tea together."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".faq-left, .faq-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* LEFT CONTENT */}
        <div className="faq-left">
          <span className="faq-badge"><SlCup /> Frequently asked questions</span>
          <h2>
            Frequently Asked
            <br />
            <span>Questions ?</span>
          </h2>
          <p>
            Everything you need to know about enjoying your
            perfect cup of tea or coffee with us.
          </p>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="faq-right">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>

                <span className="faq-icon">
                  {activeIndex === index ? (
                    <IoIosArrowDropupCircle />
                  ) : (
                    <IoIosArrowDropdownCircle />
                  )}
                </span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
