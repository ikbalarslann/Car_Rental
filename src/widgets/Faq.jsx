import Faq_Data from "../store/FaqData";
import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOnClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq">
      <h2 className="faq__title">hey i am Faq component</h2>
      <h4 className="faq__subtitle">FAQ</h4>
      <h1 className="faq__main-title">Frequently Asked Questions</h1>
      <p className="faq__description">
        Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to <br />
        Common Concerns and Inquiries.
      </p>
      <div>
        {Faq_Data.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2
              onClick={() => handleOnClick(index)}
              className="faq-item__question"
            >
              {faq.question}
            </h2>
            {activeIndex === index && (
              <p className="faq-item__answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
