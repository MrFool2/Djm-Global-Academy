import React, { useEffect, useState } from "react";
import "./Carriculam.css";

import carriculamData from "./CarriculamData";


const Carriculam = () => {

  const [typedText, setTypedText] = useState("");

  const typewriterText = "Building knowledge, skills, and confidence for tomorrow.";

  /* Typewriter effect */
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(typewriterText.slice(0, index + 1));
      index++;

      if (index >= typewriterText.length) {
        clearInterval(interval);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);


  return (
    <section
      id="ai-builder-cup-participants"
      className="participants-section"
    >
      <div className="participants-container">

        {/* Heading */}
        <div className="typewriter-lockup">
          <h2 className="typewriter-title">
            Our Carriculam
          </h2>

          <p className="typewriter-line">
            {typedText}
            <span
              className="typewriter-title__cursor"
              aria-hidden="true"
            />
          </p>
        </div>

        {/* Cards */}
        <div className="audience-grid">
          <div className="audience-carousel">

            {carriculamData.map((item, index) => (
              <article
                key={item.title}
                className={`audience-card `}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    className="audience-card__people"
                  />
                )}

                <img
                  src={item.pixels}
                  alt=""
                  className="audience-card__pixels"
                />

                

                <div className="audience-card__content">
                  <h3 className="audience-card__title">
                    {item.title}
                  </h3>

                  <p className="audience-card__body">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}

          </div>
        </div>

        

      </div>
    </section>
  );
};

export default Carriculam;