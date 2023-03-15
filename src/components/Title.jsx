import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Title;
