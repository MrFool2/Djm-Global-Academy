import React from "react";
import "./WelcomeSection.css";
import WelocmeImg from "../../Assests/welcomeImg/DjmFront.jpeg";
const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">

        {/* LEFT — School Image */}
        <div className="welcome-image-wrapper">
          <img
            src={WelocmeImg}
            alt="DJM Global Academy"
            className="welcome-image"
          />

          {/* Black cinematic mask */}
          <div className="welcome-image-overlay"></div>

          {/* Extra gradient toward the text */}
          <div className="welcome-image-gradient"></div>
        </div>

        {/* RIGHT — Content */}
        <div className="welcome-content">

          <p className="welcome-small-title">
            Welcome to
          </p>

          <h2 className="welcome-title">
            <span>DJM Global</span>
            <strong>Academy</strong>
          </h2>

          <div className="welcome-line"></div>

          <p className="welcome-description">
            At DJM Global Academy, we believe in nurturing curious minds,
            building strong values, and preparing students for a brighter
            future. Our holistic approach to education focuses on academic
            excellence, character development, and global readiness.
          </p>

          <div className="welcome-points">

            <div className="welcome-point">
              <span className="welcome-point-dot"></span>
              <div>
                <h3>Academic Excellence</h3>
                <p>
                  Building strong foundations through meaningful and
                  concept-focused learning.
                </p>
              </div>
            </div>

            <div className="welcome-point">
              <span className="welcome-point-dot"></span>
              <div>
                <h3>Character & Values</h3>
                <p>
                  Encouraging discipline, confidence, responsibility,
                  and respect.
                </p>
              </div>
            </div>

            <div className="welcome-point">
              <span className="welcome-point-dot"></span>
              <div>
                <h3>Future Ready</h3>
                <p>
                  Helping students develop creativity, curiosity,
                  communication, and problem-solving skills.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;