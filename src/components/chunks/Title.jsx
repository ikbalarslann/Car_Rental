import React from "react";

const Title = ({ title }) => {
  const titleWithLineBreaks = title.split(/<br\s*\/?>/).map((item, index) => (
    <React.Fragment key={index}>
      {item}
      {index < title.split(/<br\s*\/?>/).length - 1 && <br />}
    </React.Fragment>
  ));
  return (
    <div>
      <h1 className="title">{titleWithLineBreaks}</h1>
    </div>
  );
};

export default Title;
