import React from "react";
import imageOne from "../assets/Mario and Adrian A.jpg";
import imageTwo from "../assets/Mario and Adrian b.jpg";
import imageThree from "../assets/restaurant chef B.jpg";

import "../styles/sections/about.css";

const AboutSection = () => {
  return (
    <section className="container" id="about" >
      <div className="about-text">
        <h2 className="display-title">Little Lemon</h2>
        <h3 className="subtitle" >Chicago</h3>
        <p className="content" >
          Lorem ipsum dolor sit amet consectetur. Odio quis eget venenatis enim
          in risus. Nulla nunc enim habitant nunc ultrices adipiscing cursus at
          mus. Donec facilisis vitae iaculis sit nullam mauris risus. Nisl in at
          scelerisque ante venenatis lectus facilisis magnis vulputate. Id
          scelerisque morbi eget adipiscing sem volutpat enim.
        </p>
      </div>
      <div className="about-images" >
        <img src={imageOne} alt="" className="image-one" />
        <img src={imageTwo} className='about-image image-two' alt="" />
        <img src={imageThree} className='about-image image-three' alt="" />
      </div>
    </section>
  );
};

export default AboutSection;
