import React from "react";
import stars from "../assets/stars.png";
import '../styles/components/test-card.css'

const TestCard = ({ image, alt, name, desc }) => {
  return (
    <article className="test-card" >
      <div className="test-card-images" >
        <div className="test-card-person">
          <img src={image} alt={alt} />
        </div>
        <div className="test-card-rating">
          <img src={stars} alt="stars" />
        </div>
      </div>

      <p className="test-card-desc content">{desc}</p>

      <p className="test-card-name section-title">{name}</p>
    </article>
  );
};

export default TestCard;
