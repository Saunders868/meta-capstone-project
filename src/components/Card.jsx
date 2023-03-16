import React from "react";
import '../styles/components/card.css'

const Card = ({
  image,
  alt,
  cardTitle,
  cardPrice,
  cardDesc
}) => {
  return (
    <article className="card">
      <div className="card-image">
        <img src={image} alt={alt} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3 >{cardTitle}</h3>
          <p >{cardPrice}</p>
        </div>
        <div className="card-desc content">
          {cardDesc}
        </div>
        <div className="card-links">
          <a href="#">
            See more 
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
