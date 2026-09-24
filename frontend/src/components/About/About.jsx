import React from "react";
import "./About.css";
import SchoolImg from "../../Assests/Gallery/BuildingImg/SchoolBuildingImg7.png";
import SchoolImg2 from "../../Assests/Gallery/Class10/DJM Global Academy (6).png";
import SchoolImg3 from "../../Assests/Gallery/Class10/class10Topper5.jpeg";
const About = () => {
  const values = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      text: "We build strong academic foundations and encourage students to develop curiosity, discipline, and a lifelong love for learning.",
    },
    {
      icon: "💡",
      title: "Innovation & Creativity",
      text: "Students are encouraged to think differently, explore ideas, solve problems, and express their creativity.",
    },
    {
      icon: "🤝",
      title: "Values & Character",
      text: "We believe education should develop responsible, respectful, confident, and compassionate individuals.",
    },
    {
      icon: "🌱",
      title: "Holistic Growth",
      text: "Our approach focuses on academic, physical, social, emotional, and creative development.",
    },
    {
      icon: "🏆",
      title: "Achievement",
      text: "We motivate students to set meaningful goals and develop the confidence and perseverance needed to achieve them.",
    },
    {
      icon: "🌍",
      title: "Future Ready",
      text: "We prepare students with knowledge, skills, confidence, and adaptability for a changing world.",
    },
  ];

  const highlights = [
    {
      number: "01",
      title: "Strong Foundations",
      text: "Building fundamental concepts from the early years.",
    },
    {
      number: "02",
      title: "Experienced Teachers",
      text: "Dedicated educators focused on student understanding and growth.",
    },
    {
      number: "03",
      title: "Beyond the Classroom",
      text: "Learning through activities, sports, creativity, and practical experiences.",
    },
    {
      number: "04",
      title: "Student Focused",
      text: "Every learner is encouraged to discover their strengths and potential.",
    },
  ];

  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-glow about-glow-one"></div>
        <div className="about-hero-glow about-glow-two"></div>

        <div className="about-hero-container">

          <div className="about-hero-content">

            <span className="about-eyebrow">
              ABOUT DJM GLOBAL ACADEMY
            </span>

            <h1>
              Inspiring Minds.
              <br />
              <span>Shaping Futures.</span>
            </h1>

            <p>
              At DJM Global Academy, we believe education is
              not simply about learning facts. It is about
              developing curious minds, strong character,
              confidence, and the ability to make a meaningful
              difference in the world.
            </p>

            <div className="about-hero-actions">

              <a
                href="#our-story"
                className="about-primary-btn"
              >
                Discover Our Story
                <span>→</span>
              </a>

              <a
                href="#mission"
                className="about-secondary-btn"
              >
                Our Mission
              </a>

            </div>

          </div>


          <div className="about-hero-visual">

            <div className="about-visual-glow"></div>

            <div className="about-visual-card">

              <img
                src={SchoolImg}
                alt="DJM Global Academy"
              />

              <div className="about-visual-overlay"></div>

              <div className="about-visual-text">

                <span>DJM</span>

                <strong>
                  Global Academy
                </strong>

                <small>
                  Learning • Growing • Achieving
                </small>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section
        className="about-story"
        id="our-story"
      >

        <div className="about-container">

          <div className="section-heading left">

            <span className="section-eyebrow">
              OUR STORY
            </span>

            <h2>
              More Than a School.
              <br />
              <span>A Place to Grow.</span>
            </h2>

          </div>


          <div className="story-grid">

            <div className="story-image">

              <img
                src={SchoolImg2}
                alt="DJM Global Academy campus"
              />

              <div className="story-image-glow"></div>

            </div>


            <div className="story-content">

              <p className="story-lead">
                DJM Global Academy is committed to
                creating an environment where students
                can learn with confidence, explore their
                interests, and develop into responsible
                individuals.
              </p>

              <p>
                We understand that every child is unique.
                Each student has different interests,
                abilities, learning styles, and aspirations.
                Our role as educators is to recognize
                those differences and provide an environment
                where every learner can progress.
              </p>

              <p>
                Through academics, activities, sports,
                technology, creativity, and meaningful
                interaction, we aim to provide students
                with opportunities to discover their
                strengths and develop the skills required
                for their future.
              </p>

              <p>
                At DJM, learning extends beyond textbooks.
                We encourage students to ask questions,
                think independently, work together, and
                approach challenges with confidence.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION + MISSION
      ===================================================== */}

      <section
        className="vision-mission"
        id="mission"
      >

        <div className="about-container">

          <div className="section-heading center">

            <span className="section-eyebrow">
              OUR PURPOSE
            </span>

            <h2>
              Vision & <span>Mission</span>
            </h2>

            <p>
              The principles that guide everything
              we do at DJM Global Academy.
            </p>

          </div>


          <div className="vm-grid">

            {/* Vision */}

            <article className="vm-card vision-card">

              <div className="vm-number">
                01
              </div>

              <div className="vm-icon">
                👁
              </div>

              <span className="vm-label">
                OUR VISION
              </span>

              <h3>
                Building Confident
                <br />
                Future Leaders
              </h3>

              <p>
                To create a learning environment where
                students develop knowledge, confidence,
                creativity, values, and the ability to
                contribute positively to society.
              </p>

            </article>


            {/* Mission */}

            <article className="vm-card mission-card">

              <div className="vm-number">
                02
              </div>

              <div className="vm-icon">
                🚀
              </div>

              <span className="vm-label">
                OUR MISSION
              </span>

              <h3>
                Empowering Every
                <br />
                Learner
              </h3>

              <p>
                To provide quality education supported by
                dedicated teachers, meaningful experiences,
                technology, discipline, and opportunities
                that help every student discover and develop
                their potential.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          CORE VALUES
      ===================================================== */}

      <section className="values-section">

        <div className="about-container">

          <div className="section-heading center">

            <span className="section-eyebrow">
              WHAT WE BELIEVE
            </span>

            <h2>
              Our Core <span>Values</span>
            </h2>

            <p>
              The values that shape our students,
              our classrooms, and our community.
            </p>

          </div>


          <div className="values-grid">

            {values.map((value, index) => (

              <article
                className="value-card"
                key={index}
              >

                <div className="value-top">

                  <span className="value-icon">
                    {value.icon}
                  </span>

                  <span className="value-number">
                    0{index + 1}
                  </span>

                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY DJM
      ===================================================== */}

      <section className="why-djm">

        <div className="about-container">

          <div className="why-djm-grid">

            <div className="why-content">

              <span className="section-eyebrow">
                WHY DJM
              </span>

              <h2>
                Learning That Goes
                <br />
                <span>Beyond the Classroom.</span>
              </h2>

              <p className="why-intro">
                We believe meaningful education happens
                when students are given opportunities to
                learn, experience, create, collaborate,
                and reflect.
              </p>


              <div className="highlight-list">

                {highlights.map(
                  (item, index) => (

                    <div
                      className="highlight-item"
                      key={index}
                    >

                      <span className="highlight-number">
                        {item.number}
                      </span>

                      <div>

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.text}
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>


            <div className="why-image">

              <div className="why-image-frame">

                <img
                  src={SchoolImg3}
                  alt="Students at DJM Global Academy"
                />

                <div className="why-image-overlay"></div>

              </div>


              <div className="floating-stat">

                <strong>
                  Learn
                </strong>

                <span>
                  Explore
                </span>

                <span>
                  Achieve
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EDUCATIONAL APPROACH
      ===================================================== */}

      <section className="approach-section">

        <div className="about-container">

          <div className="section-heading center">

            <span className="section-eyebrow">
              OUR APPROACH
            </span>

            <h2>
              How We Help Students
              <br />
              <span>Grow</span>
            </h2>

          </div>


          <div className="approach-grid">

            <div className="approach-card">

              <span>01</span>

              <h3>
                Understand
              </h3>

              <p>
                We help students build strong concepts
                and understand the fundamentals of what
                they learn.
              </p>

            </div>


            <div className="approach-card">

              <span>02</span>

              <h3>
                Explore
              </h3>

              <p>
                Students are encouraged to ask questions,
                experiment, participate, and discover
                new possibilities.
              </p>

            </div>


            <div className="approach-card">

              <span>03</span>

              <h3>
                Create
              </h3>

              <p>
                We provide opportunities for students
                to apply their knowledge through
                creativity and practical activities.
              </p>

            </div>


            <div className="approach-card">

              <span>04</span>

              <h3>
                Achieve
              </h3>

              <p>
                Students develop confidence and
                perseverance to work towards their
                academic and personal goals.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="about-cta-glow"></div>

        <div className="about-cta-content">

          <span className="section-eyebrow">
            JOIN THE DJM COMMUNITY
          </span>

          <h2>
            Give Your Child
            <br />
            <span>A Place to Shine.</span>
          </h2>

          <p>
            Discover an environment where learning,
            character, creativity, and confidence
            come together.
          </p>

          <a
            href="/admissions"
            className="cta-button"
          >
            Explore Admissions
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
};

export default About;