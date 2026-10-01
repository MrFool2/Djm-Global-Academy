import React from "react";
import "./Carriculam.css";

const curriculumData = [
  {
    level: "01",
    title: "Primary School",
    classes: "Classes I – V",
    description:
      "Building strong foundations through engaging, activity-based and concept-focused learning.",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Environmental Studies",
      "Computer",
      "General Knowledge",
      "Art & Craft",
      "Physical Education",
    ],
  },
  {
    level: "02",
    title: "Middle School",
    classes: "Classes VI – VIII",
    description:
      "Developing deeper understanding, logical thinking and independent learning skills.",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Science",
      "Social Science",
      "Computer Science",
      "Sanskrit",
      "Physical Education",
    ],
  },
  {
    level: "03",
    title: "Secondary School",
    classes: "Classes IX – X",
    description:
      "Strengthening academic concepts and preparing students for board examinations and future pathways.",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Science",
      "Social Science",
      "Information Technology",
      "Physical Education",
      "Art & Activities",
    ],
  },
];

const subjectHighlights = [
  {
    icon: "∑",
    title: "Mathematics",
    text: "Logical thinking, problem solving and mathematical reasoning.",
  },
  {
    icon: "⚗",
    title: "Science",
    text: "Explore concepts through experiments and practical learning.",
  },
  {
    icon: "⌘",
    title: "Computer Science",
    text: "Digital literacy, computational thinking and technology.",
  },
  {
    icon: "अ",
    title: "Languages",
    text: "Strong communication, reading, writing and expression.",
  },
  {
    icon: "◈",
    title: "Social Science",
    text: "Understanding society, history, geography and citizenship.",
  },
  {
    icon: "✦",
    title: "Arts & Activities",
    text: "Creativity, imagination, confidence and self-expression.",
  },
];

export default function Carriculam() {
  return (
    <section className="curriculum-section">

      {/* ================= HEADER ================= */}

      <div className="curriculum-container">

        <div className="curriculum-header">

          <div>
            <span className="curriculum-kicker">
              ACADEMIC EXCELLENCE
            </span>

            <h2>
              Our Curriculum &
              <span> Subjects Offered</span>
            </h2>
          </div>

          <p>
            A balanced curriculum designed to develop strong
            academic foundations, practical skills, creativity
            and confidence at every stage of learning.
          </p>

        </div>


        {/* ================= CURRICULUM CARDS ================= */}

        <div className="curriculum-cards">

          {curriculumData.map((item) => (

            <article
              className="curriculum-card"
              key={item.level}
            >

              <div className="curriculum-card-top">

                <span className="curriculum-number">
                  {item.level}
                </span>

                <span className="curriculum-classes">
                  {item.classes}
                </span>

              </div>


              <h3>{item.title}</h3>

              <p className="curriculum-description">
                {item.description}
              </p>


              <div className="subject-list">

                {item.subjects.map((subject) => (

                  <div
                    className="subject-item"
                    key={subject}
                  >
                    <span>✓</span>
                    {subject}
                  </div>

                ))}

              </div>

            </article>

          ))}

        </div>


        {/* ================= SUBJECT HIGHLIGHTS ================= */}

        <div className="subjects-heading">

          <div>
            <span className="curriculum-kicker">
              SUBJECT AREAS
            </span>

            <h3>
              Learning Beyond
              <span> Textbooks</span>
            </h3>
          </div>

          <p>
            We encourage students to understand, explore and
            apply what they learn in real-world situations.
          </p>

        </div>


        <div className="subject-highlight-grid">

          {subjectHighlights.map((subject) => (

            <div
              className="subject-highlight"
              key={subject.title}
            >

              <div className="subject-icon">
                {subject.icon}
              </div>

              <div>
                <h4>{subject.title}</h4>

                <p>{subject.text}</p>
              </div>

              <span className="subject-arrow">
                →
              </span>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM NOTE ================= */}

        <div className="curriculum-note">

          <div className="curriculum-note-icon">
            ★
          </div>

          <div>
            <strong>
              A balanced approach to education
            </strong>

            <p>
              Along with core academic subjects, students get
              opportunities to participate in sports, arts,
              cultural activities, competitions and technology-based
              learning.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}