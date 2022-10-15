import React from "react";
import SubTitle from "./chunks/SubTitle";

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
        <SubTitle subtitle={title} />
        {descWithLineBreaks}
      </div>
    </div>
  );
};

export default Card;
