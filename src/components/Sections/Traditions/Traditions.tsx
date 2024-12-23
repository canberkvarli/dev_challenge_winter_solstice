import React, { useEffect } from "react";
import gsap from "gsap";
import "./Traditions.css";

const Traditions: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      "#traditions",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section id="traditions">
      <h2>Solstice Traditions</h2>
      <p>
        Ancient traditions such as Yule logs, gift-giving, and feasting have
        been carried into modern celebrations of the Winter Solstice.
      </p>
    </section>
  );
};

export default Traditions;
