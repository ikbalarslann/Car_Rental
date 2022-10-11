import React from "react";

const Desc = ({ desc }) => {
  const descWithLineBreaks = desc.split(/<br\s*\/?>/).map((item, index) => (
    <React.Fragment key={index}>
      {item}
      {index < desc.split(/<br\s*\/?>/).length - 1 && <br />}
    </React.Fragment>
  ));
  return (
    <div>
      <p className="hero__description">{descWithLineBreaks}</p>
    </div>
  );
};

export default Desc;
