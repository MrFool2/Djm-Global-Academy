import React from "react";
import AboutJourneyData from "../../Data/AboutJourneyData";
import "./About.css";
import JourneyCard from "../Journey/JourneyCard";
import TrustBarData from "../../Data/TrustBarData";
import Stat from "../Stat/State";
const values = [
  {
    icon: "🤝",
    title: "Integrity",
    text: "Do what is right, always.",
  },
  {
    icon: "💡",
    title: "Excellence",
    text: "Strive for the best, always.",
  },
  {
    icon: "👥",
    title: "Respect",
    text: "Value every individual.",
  },
  {
    icon: "🌱",
    title: "Compassion",
    text: "Care for our community.",
  },
  {
    icon: "🛡",
    title: "Responsibility",
    text: "Build a better tomorrow.",
  },
];



const facilities = [
  {
    icon: "▣",
    title: "Smart Classrooms",
    text: "Technology-enabled learning spaces",
  },
  {
    icon: "⚗",
    title: "Science Labs",
    text: "Hands-on scientific learning",
  },
  {
    icon: "📚",
    title: "Library",
    text: "Resources for curious minds",
  },
  {
    icon: "⚽",
    title: "Sports Complex",
    text: "Fitness, teamwork and sports",
  },
  {
    icon: "🎵",
    title: "Music & Arts",
    text: "Creativity beyond academics",
  },
  {
    icon: "🌳",
    title: "Green Campus",
    text: "Safe and welcoming surroundings",
  },
];

const reasons = [
  {
    icon: "🎓",
    title: "Expert Faculty",
    text: "Mentors and guides for life.",
  },
  {
    icon: "♡",
    title: "Safe Environment",
    text: "Your child's safety is our priority.",
  },
  {
    icon: "★",
    title: "Holistic Growth",
    text: "Academics, sports, arts and values.",
  },
  {
    icon: "◎",
    title: "Global Outlook",
    text: "Preparing students for a brighter future.",
  },
];

export default function About() {
  return (
    <>




      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="about-story about-section">

        <div className="about-container story-grid">

          <div className="story-image">

            <div className="school-image-placeholder">
             
            </div>

          </div>


          <div className="story-content">

            <div className="about-kicker">
              OUR STORY
            </div>

            <h2>
              About DJM Global Academy
            </h2>

            <p>
              DJM Global Academy is a CBSE affiliated co-educational
              school committed to providing quality education in a
              safe, supportive and inspiring environment.
            </p>

            <p>
              We nurture every child's unique talent, encourage
              curiosity and help them grow into responsible,
              confident and compassionate global citizens.
            </p>


            <div className="story-highlights">

              <StoryHighlight
                icon="▤"
                title="CBSE"
                text="Affiliated"
              />

              <StoryHighlight
                icon="♧"
                title="Experienced"
                text="Faculty"
              />

              <StoryHighlight
                icon="★"
                title="Modern"
                text="Infrastructure"
              />

              <StoryHighlight
                icon="✓"
                title="Safe & Supportive"
                text="Environment"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION / MISSION
      ===================================================== */}

      <section className="vision-section">

        <div className="about-container vision-grid">

          <div className="vision-card">

            <div className="vision-icon">
              ◉
            </div>

            <div>
              <h3>Our Vision</h3>

              <p>
                To be a leading institution in education,
                empowering every child to achieve their full
                potential and make a positive impact in the world.
              </p>
            </div>

          </div>


          <div className="vision-divider"></div>


          <div className="vision-card">

            <div className="vision-icon">
              ◎
            </div>

            <div>
              <h3>Our Mission</h3>

              <p>
                To provide holistic education that combines
                academic excellence with moral values, creativity
                and leadership skills for a brighter future.
              </p>
            </div>

          </div>


          <div className="learn-grow-lead">
            Learn
            <br />
            Grow
            <br />
            <span>Lead</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          IMPACT
      ===================================================== */}
      {/** 
      <section className="impact-section">

        <div className="impact-bg"></div>

        <div className="about-container impact-content">

          <div className="about-kicker light">
            OUR IMPACT
          </div>

          <h2>
            A Legacy of
            <br />
            <span>Excellence</span>
          </h2>


          <div className="impact-stats">

            {
              TrustBarData.map((item)=>(
                <Stat 
                  number={item.number}
                  icon={item.icon}
                  label={item.text}
                 

                  
                />
              ))
            }

          </div>

        </div>

      </section>
      */}
      

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="values-section about-section">

        <div className="about-container values-grid">

          <div className="values-intro">

            <div className="about-kicker">
              OUR VALUES
            </div>

            <h2>
              What We
              <br />
              Stand For
            </h2>

            <p>
              Our values guide everything we do — from the
              classroom to the community. They shape our culture,
              our relationships and our commitment to excellence.
            </p>

            <a href="#about-facilities" className="yellow-about-btn">
              Our Values <span>→</span>
            </a>

          </div>


          <div className="values-cards">

            {values.map((value) => (

              <div
                className="value-card"
                key={value.title}
              >

                <div className="value-icon">
                  {value.icon}
                </div>

                <h3>{value.title}</h3>

                <p>{value.text}</p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="journey-section">

        <div className="about-container journey-grid">

          <div className="journey-image">

            <div className="journey-image-placeholder">

            </div>

          </div>


          <div className="journey-content">

            <div className="about-kicker">
              OUR JOURNEY
            </div>

            <h2>
              Building Dreams Since Day One
            </h2>

            <p>
              From a small beginning to a growing community,
              our journey has always been guided by a single
              purpose — to provide the best education for every child.
            </p>


            <div className="journey-line">

              {
                AboutJourneyData.map((item)=>(
                  <JourneyCard 
                    number={item.number}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                ))
              }

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section
        className="facilities-section about-section"
        id="about-facilities"
      >

        <div className="about-container facilities-grid">

          <div className="facilities-intro">

            <div className="about-kicker">
              FACILITIES & ACHIEVEMENTS
            </div>

            <h2>
              World-Class
              <br />
              Facilities
            </h2>

            <p>
              We provide modern facilities and a vibrant campus
              life to ensure the best learning experience for
              every student.
            </p>


            <div className="facility-list">

              <FacilityList text="Spacious Classrooms" />
              <FacilityList text="Science & Computer Labs" />
              <FacilityList text="Library with Digital Resources" />
              <FacilityList text="Sports Complex" />
              <FacilityList text="Art & Music Rooms" />
              <FacilityList text="Safe & Secure Campus" />

            </div>

          </div>


          <div className="facility-cards">

            {facilities.map((facility, index) => (

              <div
                className="facility-card"
                key={facility.title}
              >

                <div className={`facility-photo photo-${index + 1}`}>
                  <span>{facility.icon}</span>
                </div>

                <div className="facility-card-content">
                  <h3>{facility.title}</h3>
                  <p>{facility.text}</p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY DJM
      ===================================================== */}

      <section className="why-about-section">

        <div className="about-container why-about-grid">

          <div>

            <div className="about-kicker">
              WHY CHOOSE DJM
            </div>

            <h2>
              More Than Just a School
            </h2>

            <p>
              We go beyond textbooks to build confident,
              kind and future-ready individuals.
            </p>

            <a href="/admissions" className="yellow-about-btn">
              Explore Our Campus <span>→</span>
            </a>

          </div>


          <div className="reason-grid">

            {reasons.map((reason) => (

              <div
                className="reason-card"
                key={reason.title}
              >

                <div className="reason-icon">
                  {reason.icon}
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.text}</p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final-cta">

        <div className="about-final-bg"></div>

        <div className="about-container final-about-content">

          <div className="about-kicker light">
            LET'S BUILD THE FUTURE TOGETHER
          </div>

          <h2>
            Be a Part of
            <br />
            DJM Global Academy
          </h2>

          <p>
            Join our growing family and give your child the gift
            of quality education, strong values and endless
            opportunities.
          </p>


          <div className="final-about-buttons">

            <a
              href="/admissions"
              className="yellow-about-btn"
            >
              Apply Now <span>→</span>
            </a>

            <a
              href="/contact"
              className="outline-about-btn"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

    </>
  );
}


/* =========================================================
   SMALL COMPONENTS
========================================================= */

function StoryHighlight({ icon, title, text }) {
  return (
    <div className="story-highlight">

      <div className="story-highlight-icon">
        {icon}
      </div>

      <strong>{title}</strong>
      <span>{text}</span>

    </div>
  );
}


function ImpactStat({ icon, number, label }) {
  return (
    <div className="impact-stat">

      <div className="impact-icon">
        {icon}
      </div>

      <strong>{number}</strong>

      <span>{label}</span>

    </div>
  );
}


function FacilityList({ text }) {
  return (
    <div className="facility-list-item">
      <span>✓</span>
      <p>{text}</p>
    </div>
  );
}