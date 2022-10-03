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

  const faqData = [
    {
      question: "What is special about comparing rental car deals?",
      answer:
        "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
    },
    {
      question: "How do I find the car rental deals?",
      answer:
        "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
    },
    {
      question: "How do I find such low rental car prices?",
      answer:
        "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
    },
  ];

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
        {faqData.map((faq, index) => (
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
