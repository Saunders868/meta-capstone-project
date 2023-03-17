import React from "react";
import "../styles/components/title.css";

const Title = ({ title, desc, test }) => {
  return (
    <>
      <h2 className="display-title" style={test ? { color: "white" } : {}}>
        {title}
      </h2>
      <p className="subtitle" style={test ? { color: "white" } : {}}>
        {desc}
      </p>
    </>
  );
};

export default Title;
