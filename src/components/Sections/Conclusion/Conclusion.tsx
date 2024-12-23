import React, { useEffect } from "react";
import gsap from "gsap";
import "./Conclusion.css";

const Conclusion: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      "#conclusion",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section id="conclusion">
      <h2>Conclusion</h2>
      <p>
        The Winter Solstice reminds us of the cyclical nature of life and the
        interconnectedness of humanity. It's a time for reflection, gratitude,
        and renewal.
      </p>
    </section>
  );
};

export default Conclusion;
