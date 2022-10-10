import React from "react";

const Card = ({ title, desc }) => {
  const descWithLineBreaks = desc.split(/<br\s*\/?>/).map((item, index) => (
    <React.Fragment key={index}>
      {item}
      {index < desc.split(/<br\s*\/?>/).length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className="chooseUs__feature">
      <img src="" alt="icon" className="chooseUs__icon" />
      <div className="chooseUs__feature-content">
        <h3 className="chooseUs__feature-title">{title}</h3>
        <p className="chooseUs__feature-description">{descWithLineBreaks}</p>
      </div>
    </div>
  );
};

export default Card;
