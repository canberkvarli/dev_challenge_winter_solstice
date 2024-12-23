import React, { useEffect } from "react";
import gsap from "gsap";
import "./Introduction.css";

const Introduction: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      "#introduction",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);

  return (
    <section id="introduction">
      <h2>Introduction</h2>
      <p>
        December marks the Winter Solstice, the shortest day and longest night
        of the year in the Northern Hemisphere. This astronomical event has
        inspired traditions and celebrations worldwide.
      </p>
    </section>
  );
};

export default Introduction;
