import React from "react";
import HeroSection from "../sections/HeroSection";
import HighlightsSection from "../sections/HighlightsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import AboutSection from "../sections/AboutSection";

const Home = () => {
  return (
    <>
      <HeroSection button={true} />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  );
};

export default Home;
