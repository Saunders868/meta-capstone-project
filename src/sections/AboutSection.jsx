import React from "react";
import imageOne from "../assets/Mario and Adrian A.jpg";
import imageTwo from "../assets/Mario and Adrian b.jpg";
import imageThree from "../assets/restaurant chef B.jpg";

const AboutSection = () => {
  return (
    <section>
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Odio quis eget venenatis enim
          in risus. Nulla nunc enim habitant nunc ultrices adipiscing cursus at
          mus. Donec facilisis vitae iaculis sit nullam mauris risus. Nisl in at
          scelerisque ante venenatis lectus facilisis magnis vulputate. Id
          scelerisque morbi eget adipiscing sem volutpat enim.
        </p>
      </div>
      <div>
        <img src={imageOne} alt="" />
        <img src={imageTwo} alt="" />
        <img src={imageThree} alt="" />
      </div>
    </section>
  );
};

export default AboutSection;
