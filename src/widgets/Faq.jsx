import Faq_Data from "../store/FaqData";
import React, { useState } from "react";
import SubTitle from "../components/chunks/SubTitle";
import Title from "../components/chunks/Title";
import Desc from "../components/chunks/Desc";

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
      <SubTitle subtitle="FAQ" />
      <Title title="Frequently Asked Questions" />
      <Desc
        desc=" Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to <br />
        Common Concerns and Inquiries."
      />

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
