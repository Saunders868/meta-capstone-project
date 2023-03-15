import React from "react";
import stars from "../assets/stars.png";

const TestCard = ({ image, alt, name, desc }) => {
  return (
    <article>
      <div>
        <img src={image} alt={alt} />
        <img src={stars} alt="stars" />
      </div>

      <p>{desc}</p>

      <p>{name}</p>
    </article>
  );
};

export default TestCard;
