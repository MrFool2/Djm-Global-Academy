import React from "react";
import "./DirectorMessage.css";
import DirectorImg from "../../Assests/Assests/image.png";
const DirectorMessage = () => {
  return (
    <section className="director-section" id="director">

      {/* Background glow */}
      <div className="director-glow director-glow-one"></div>
      <div className="director-glow director-glow-two"></div>

      <div className="director-container">

        {/* Section heading */}
        <div className="director-heading">

          <span className="director-eyebrow">
            LEADERSHIP
          </span>

          <h2>
            A Message from the
            <span> Director</span>
          </h2>

          <p>
            Education is not just about preparing students for exams.
            It is about preparing them for life.
          </p>

        </div>


        {/* Main card */}
        <div className="director-card">

          {/* Image side */}
          <div className="director-image-wrapper">

            <div className="director-image-glow"></div>

            <div className="director-image-border">

              <img
                src={DirectorImg}
                alt="Director of DJM Global Academy"
                className="director-image"
              />

            </div>

            {/* Image floating label */}
            <div className="director-image-label">
              <span className="label-dot"></span>

              <div>
                <strong>Director</strong>
                <small>DJM Global Academy</small>
              </div>
            </div>

          </div>


          {/* Message side */}
          <div className="director-content">

            <div className="quote-mark">
              “
            </div>

            <h3>
              Building minds.
              <br />
              Shaping futures.
            </h3>

            <div className="director-line"></div>

            <div className="director-message">

              <p>
                At DJM Global Academy, we believe that every child
                carries a unique potential waiting to be discovered.
                Our responsibility is not simply to provide knowledge,
                but to create an environment where students can
                question, explore, create, and grow with confidence.
              </p>

              <p>
                We strive to combine strong academic foundations with
                values, discipline, creativity, technology, and
                practical learning. Our teachers work closely with
                students to understand their individual strengths and
                encourage them to become independent and responsible
                learners.
              </p>

              <p>
                As we move forward, our vision remains simple —
                to nurture young minds who are confident in their
                abilities, respectful towards others, and prepared
                to contribute positively to society.
              </p>

            </div>


            {/* Signature */}
            <div className="director-signature">

              <div className="signature-line"></div>

              <div className="signature-info">
                <strong>
                  Director
                </strong>

                <span>
                  DJM Global Academy
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DirectorMessage;