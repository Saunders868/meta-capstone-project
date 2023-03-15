import React from "react";
import landingImage from "../assets/restaurant.jpg";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <section>
      <div>
        <img src={landingImage} alt="little lemon restaurant" />
      </div>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Dui suspendisse cras malesuada
          scelerisque augue in id. Neque nunc mauris in amet vitae viverra
          tincidunt consectetur. Suspendisse cras viverra orci malesuada. Lectus
          ac commodo turpis ut egestas enim feugiat semper. Purus pharetra nisl
          eget ante mauris. Pellentesque habitasse enim nec sapien vel egestas
          donec. Pellentesque egestas semper condimentum eget orci iaculis
          volutpat pellentesque. Nisi quis sed iaculis.
        </p>
        <Button text='Book a Table' />
      </div>
    </section>
  );
};

export default HeroSection;
