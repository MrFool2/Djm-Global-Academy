import React, { useEffect, useState } from "react";
import "./Admission.css";

const admissionSteps = [
  {
    number: "01",
    icon: "⌕",
    title: "Enquire",
    text: "Get in touch with our admission team and ask your questions.",
  },
  {
    number: "02",
    icon: "▤",
    title: "Apply",
    text: "Complete the admission application form with the required details.",
  },
  {
    number: "03",
    icon: "♙",
    title: "Interaction",
    text: "Attend the interaction or assessment as required for the class.",
  },
  {
    number: "04",
    icon: "✓",
    title: "Confirm",
    text: "Complete the admission formalities and secure your child's seat.",
  },
];

const eligibility = [
  {
    icon: "♙",
    title: "Nursery – UKG",
    text: "Age-based admission",
  },
  {
    icon: "▣",
    title: "Classes I – V",
    text: "Previous class academic record",
  },
  {
    icon: "🎓",
    title: "Classes VI – IX",
    text: "Academic assessment",
  },
  {
    icon: "▤",
    title: "Class X",
    text: "As per school norms",
  },
];

const documents = [
  "Birth Certificate (original + copy)",
  "Previous School Transfer Certificate",
  "Previous Class Report Card",
  "Aadhaar / Identity Proof",
  "Passport-size Photographs",
  "Address Proof",
  "Medical / Health Information",
];

const dates = [
  {
    month: "APR",
    date: "01",
    title: "Admissions Open",
    text: "2026 – 27",
  },
  {
    month: "APR",
    date: "15",
    title: "Application Review",
    text: "& Shortlisting",
  },
  {
    month: "APR",
    date: "30",
    title: "Interaction /",
    text: "Assessment",
  },
  {
    month: "MAY",
    date: "10",
    title: "Admission",
    text: "Confirmation",
  },
];

const faqs = [
  {
    question: "Which classes are open for admission?",
    answer:
      "Admissions are available for selected classes depending on seat availability. Please contact the school office for the current admission availability.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "You can submit the online application form available on this page or contact the school admission office directly.",
  },
  {
    question: "Is there an entrance assessment?",
    answer:
      "Depending on the class and school admission policy, students may be required to participate in an interaction or academic assessment.",
  },
  {
    question: "What documents are required?",
    answer:
      "The commonly required documents include birth certificate, previous school records, identity proof, photographs and address proof.",
  },
  {
    question: "Can I visit the school before applying?",
    answer:
      "Yes. Parents can contact the school office to enquire about visiting the campus and discussing the admission process.",
  },
  {
    question: "How will I know the status of my application?",
    answer:
      "The school admission team can provide application status updates after reviewing the submitted information.",
  },
];

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".admission-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="admission-page">

      {/* =========================================
          HERO
      ========================================= */}
      <section className="admission-hero">
        <div className="admission-hero-overlay"></div>

        <div className="admission-hero-content admission-reveal">
          <span className="admission-eyebrow">
            ADMISSIONS 2026 – 27
          </span>

          <h1>
            Begin Your Journey
            <br />
            With <span>DJM Global Academy.</span>
          </h1>

          <p>
            A place where curiosity grows, character develops,
            <br />
            and every child gets the opportunity to shine.
          </p>

          <div className="admission-hero-buttons">
            <a href="#application-form" className="admission-btn primary">
              Apply Now <span>→</span>
            </a>

            <a href="#important-dates" className="admission-btn outline">
              View Admission Details
            </a>
          </div>
        </div>

       

        <div className="hero-scroll">
          <span></span>
          Scroll to explore
        </div>
      </section>

      {/* =========================================
          QUICK INFO
      ========================================= */}
      <section className="admission-info-strip">
        <div className="info-item">
          <div className="info-icon">▣</div>
          <div>
            <strong>2026 – 27</strong>
            <span>Admissions</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">▤</div>
          <div>
            <strong>CBSE</strong>
            <span>Curriculum</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">♙</div>
          <div>
            <strong>Nursery – X</strong>
            <span>Classes</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">✓</div>
          <div>
            <strong>Limited</strong>
            <span>Seats</span>
          </div>
        </div>
      </section>

      {/* =========================================
          WHY CHOOSE DJM
      ========================================= */}
      <section className="why-djm section-padding">
        <div className="section-container">

          <div className="why-content admission-reveal">
            <span className="section-label">WHY CHOOSE DJM</span>

            <h2>
              More Than
              <br />
              <span>Just Education.</span>
            </h2>

            <p>
              We provide a nurturing environment where students
              learn, grow and become future-ready individuals.
            </p>

            <a href="/about" className="yellow-link">
              Learn More <span>→</span>
            </a>
          </div>

          <div className="why-grid admission-reveal">

            <div className="why-card">
              <div className="why-card-icon">♙</div>
              <h3>Experienced Faculty</h3>
              <p>
                Our teachers are mentors, guides and inspiring educators.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">▥</div>
              <h3>Modern Infrastructure</h3>
              <p>
                Learning spaces designed to support holistic development.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">✓</div>
              <h3>Safe Environment</h3>
              <p>
                Your child's safety and well-being remain our priority.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">★</div>
              <h3>Holistic Development</h3>
              <p>
                Academics, sports, creativity, discipline and values.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          ADMISSION PROCESS
      ========================================= */}
      <section className="process-section section-padding">
        <div className="section-container">

          <div className="center-heading admission-reveal">
            <span className="section-label">ADMISSION PROCESS</span>

            <h2>
              Simple Steps to a
              <br />
              <span>Brighter Future</span>
            </h2>

            <p>
              Our admission process is designed to be smooth,
              transparent and student-friendly.
            </p>
          </div>

          <div className="process-grid">
            {admissionSteps.map((step, index) => (
              <div
                className="process-item admission-reveal"
                key={step.number}
              >
                <div className="process-top">
                  <div className="process-icon">
                    {step.icon}
                  </div>

                  {index !== admissionSteps.length - 1 && (
                    <div className="process-arrow">→</div>
                  )}
                </div>

                <span className="process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          ELIGIBILITY
      ========================================= */}
      <section className="eligibility-section section-padding">
        <div className="section-container eligibility-layout">

          <div className="eligibility-image admission-reveal">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span>DJM</span>
                <strong>GLOBAL ACADEMY</strong>
                <small>Learning • Growing • Leading</small>
              </div>
            </div>
          </div>

          <div className="eligibility-content admission-reveal">

            <span className="section-label">
              ELIGIBILITY & CLASSES
            </span>

            <h2>
              Who Can
              <br />
              <span>Apply?</span>
            </h2>

            <p>
              We welcome applications from students across different
              age groups and classes, subject to school admission
              policies and seat availability.
            </p>

            <div className="eligibility-grid">
              {eligibility.map((item) => (
                <div className="eligibility-card" key={item.title}>
                  <div className="eligibility-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          DOCUMENTS
      ========================================= */}
      <section className="documents-section section-padding">
        <div className="section-container documents-layout">

          <div className="documents-content admission-reveal">

            <span className="section-label">
              DOCUMENTS REQUIRED
            </span>

            <h2>
              Prepare These
              <br />
              <span>Documents</span>
            </h2>

            <p>
              Keeping the following documents ready can help make
              the admission process smoother.
            </p>

            <div className="documents-list">
              {documents.map((document, index) => (
                <div className="document-item" key={index}>
                  <span>✓</span>
                  <p>{document}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="documents-visual admission-reveal">
            <div className="document-note">
              <span>Small steps today.</span>
              <strong>Big dreams<br />tomorrow.</strong>
            </div>

            <div className="document-decoration">
              ✦
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          APPLICATION FORM
      ========================================= */}
      <section
        id="application-form"
        className="application-section section-padding"
      >
        <div className="section-container application-layout">

          <div className="application-intro admission-reveal">

            <span className="section-label light">
              START YOUR APPLICATION
            </span>

            <h2>
              Let's Get
              <br />
              <span>Started.</span>
            </h2>

            <p>
              Fill in the form below and take the first step
              towards your child's bright future.
            </p>

            <div className="application-contact">

              <div>
                <span>☎</span>
                <div>
                  <small>Need help? Call us</small>
                  <strong>+91 XXXXX XXXXX</strong>
                </div>
              </div>

              <div>
                <span>✉</span>
                <div>
                  <small>Email us</small>
                  <strong>admissions@djmglobalacademy.com</strong>
                </div>
              </div>

            </div>

            <div className="application-note">
              We look forward to
              <br />
              welcoming you!
            </div>

          </div>

          <form
            className="application-form admission-reveal"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label>Student Name *</label>
                <input
                  type="text"
                  placeholder="Enter student name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Date of Birth *</label>
                <input
                  type="date"
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Applying For *</label>

                <select required defaultValue="">
                  <option value="" disabled>
                    Select Class
                  </option>
                  <option>Nursery</option>
                  <option>LKG</option>
                  <option>UKG</option>
                  <option>Class I</option>
                  <option>Class II</option>
                  <option>Class III</option>
                  <option>Class IV</option>
                  <option>Class V</option>
                  <option>Class VI</option>
                  <option>Class VII</option>
                  <option>Class VIII</option>
                  <option>Class IX</option>
                  <option>Class X</option>
                </select>
              </div>

              <div className="form-group">
                <label>Previous School</label>
                <input
                  type="text"
                  placeholder="Enter previous school"
                />
              </div>

            </div>

            <div className="form-heading">
              Parent / Guardian Information
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Parent Name *</label>
                <input
                  type="text"
                  placeholder="Enter parent name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                />
              </div>

              <div className="form-group">
                <label>Address *</label>
                <input
                  type="text"
                  placeholder="Enter address"
                  required
                />
              </div>

            </div>

            <button className="submit-btn" type="submit">
              Submit Application
              <span>→</span>
            </button>

            {submitted && (
              <div className="form-success">
                ✓ Application submitted successfully!
              </div>
            )}

          </form>

        </div>
      </section>

      {/* =========================================
          IMPORTANT DATES
      ========================================= */}
      <section
        id="important-dates"
        className="dates-section section-padding"
      >
        <div className="section-container">

          <div className="dates-heading admission-reveal">

            <span className="section-label">
              IMPORTANT DATES
            </span>

            <h2>
              Mark Your
              <br />
              <span>Calendar.</span>
            </h2>

            <p>
              Stay updated with key admission milestones and
              important application dates.
            </p>

          </div>

          <div className="dates-grid">

            {dates.map((item) => (
              <div className="date-card admission-reveal" key={item.date}>

                <div className="date-number">
                  <small>{item.month}</small>
                  <strong>{item.date}</strong>
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================
          FAQ
      ========================================= */}
      <section className="faq-section section-padding">
        <div className="section-container faq-layout">

          <div className="faq-intro admission-reveal">

            <span className="section-label">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              Got
              <br />
              <span>Questions?</span>
            </h2>

            <p>
              Find answers to some of the most common questions
              about the admission process.
            </p>

            <div className="faq-student">
              <div className="faq-circle">
                🎓
              </div>
            </div>

          </div>

          <div className="faq-list admission-reveal">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "active" : ""}`}
                  key={index}
                >

                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                  >
                    <span>{faq.question}</span>

                    <span className="faq-plus">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>

                </div>
              );

            })}

          </div>

        </div>
      </section>

      {/* =========================================
          FINAL CTA
      ========================================= */}
      <section className="final-cta">

        <div className="final-cta-overlay"></div>

        <div className="final-cta-content admission-reveal">

          <span className="section-label light">
            READY TO TAKE THE NEXT STEP?
          </span>

          <h2>
            Give Your Child an Environment
            <br />
            Where <span>Learning Meets Opportunity.</span>
          </h2>

          <p>
            Start the admission journey with DJM Global Academy.
          </p>

          <a
            href="#application-form"
            className="admission-btn primary"
          >
            Apply Now <span>→</span>
          </a>

          <div className="cta-brand">
            DJM Global Academy
            <small>Learn • Grow • Lead</small>
          </div>

        </div>

      </section>

    </main>
  );
}