import React, { useEffect } from "react";
import Home from "./components/Home";
import Particles from "particlesjs";
import Nav from "./components/Nav";

function App() {
  useEffect(() => {
    Particles.init({
      selector: ".background",
      color: ["#FDCA08"],
      connectParticles: true,
      speed: 0.15,
      sizeVariations: 2,
      maxParticles: 120,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 200,
            color: "#48F2E3",
            connectParticles: false,
          },
        },
        {
          breakpoint: 425,
          options: {
            maxParticles: 100,
            connectParticles: true,
          },
        },
        {
          breakpoint: 320,
          options: {
            maxParticles: 0,

            // disables particles.js
          },
        },
      ],
    });
  }, []);

  return (
    <div>
      <canvas className="background opacity-[0.9] fixed top-0 left-0 right-0 bottom-0 z-[-1]"></canvas>
      <Nav/>
      <Home />
    </div>
  );
}

export default App;
