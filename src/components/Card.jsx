import React from "react";

const Card = ({
  image,
  alt,
  cardTitle,
  cardPrice,
  cardDesc
}) => {
  return (
    <article>
      <div>
        <img src={image} alt={alt} />
      </div>
      <div>
        <div>
          <h3>{cardTitle}</h3>
          <p>{cardPrice}</p>
        </div>
        <div>
          {cardDesc}
        </div>
        <div>
          <p>
            See more 
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
