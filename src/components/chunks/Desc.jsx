import React from "react";

const Desc = ({ desc }) => {
  const descParts = desc.split(/<br\s*\/?>/);

  return (
    <div>
      <p className="description">
        {descParts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < descParts.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default Desc;
