import React, { useEffect } from "react";
import gsap from "gsap";
import "./Science.css";

const Science: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      "#science",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <section id="science">
      <h2>The Science Behind the Solstice</h2>
      <p>
        The solstices occur due to the Earth's axial tilt of approximately 23.5
        degrees. During the Winter Solstice, one hemisphere tilts away from the
        Sun, resulting in the shortest day.
      </p>
    </section>
  );
};

export default Science;
