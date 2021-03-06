import React from "react";
import Hero from "./Hero";
import About from "./About";
import "./LandingPage.css";
import CardCarousel from "./CardCarousel";

const Landing = () => {
  return (
    <main>
      <Hero />

      <About />
      <CardCarousel />
    </main>
  );
};

export default Landing;
