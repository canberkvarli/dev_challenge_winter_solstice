import React, { useEffect } from "react";
import gsap from "gsap";
import "./Celebrations.css";

const Celebrations: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      "#celebrations",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section id="celebrations">
      <h2>Global Celebrations</h2>
      <p>
        Cultures around the world celebrate the solstice with festivals, feasts,
        and traditions that honor the rebirth of light and the changing seasons.
      </p>
    </section>
  );
};

export default Celebrations;
