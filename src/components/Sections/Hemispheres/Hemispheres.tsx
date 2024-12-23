import React, { useEffect } from "react";
import gsap from "gsap";
import "./Hemispheres.css";

const Hemispheres: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      "#hemispheres",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section id="hemispheres">
      <h2>Solstice Across Hemispheres</h2>
      <p>
        While the Northern Hemisphere experiences winter, the Southern
        Hemisphere welcomes summer. The solstice marks a pivotal point in the
        seasonal cycle globally.
      </p>
    </section>
  );
};

export default Hemispheres;
