// import {Route,Routes} from 'react-router-dom';
// import Header from './Pages/Header';
// import Footer from './components/Footer/Footer';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Facilites from './Pages/Facilites';
// import Academics from './Pages/Academics';
// import Activity from './Pages/Activity';
// import "./App.css";
// import ContactUs from './Pages/ContectUs';
// function App()  { 

//   return (
//       <div className='App'>
//         <Header />
//         <Routes>
//           <Route path='/' element={<Home />}/>
//           <Route path='/about' element={<About />}/>
//           <Route path='/activity' element={<Activity />}/>
//           <Route path='/academics' element={<Academics/>}/>
//           <Route path='/facities' element={<Facilites/>}/>
//           <Route path='/contact' element={<ContactUs/>}/>
//         </Routes>
        
//         <section className="Footer">
//           <Footer />
//       </section>
//       </div>
//   );
// }

// export default App;

import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import TrustBar from "./components/TrustBar/TrustBar";
import Header from "./Pages/Header";

const schoolImages = {
  hero:
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",

  campus:
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",

  lab:
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",

  classroom:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",

  sports:
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",

  students:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",

  library:
    "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=900&q=85",

  activity:
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=85",
};

function App() {
  return (
    <div className="school-site">

      <Header />
      {/* ================= HERO ================= */}

      <Hero />


      {/* ================= TRUST BAR ================= */}

      <TrustBar />


      {/* ================= ABOUT ================= */}

      <section id="about" className="about section">

        <div className="about-image">

          <div className="yellow-corner"></div>

          <img
            src={schoolImages.campus}
            alt="DJM Global Academy campus"
          />

          <div className="blue-corner"></div>

        </div>


        <div className="about-content">

          <span className="eyebrow">
            ABOUT DJM GLOBAL ACADEMY
          </span>

          <h2>
            Nurturing Young Minds
            <br />
            <span>for a Better Tomorrow</span>
          </h2>

          <p>
            DJM Global Academy, Aurandh (Mainpuri), is a
            school committed to providing quality education,
            modern facilities and a supportive environment
            where every child can discover their potential
            and achieve their dreams.
          </p>

          <a href="#contact" className="text-button">
            Know More <span>→</span>
          </a>

        </div>


        {/* Mission Card */}

        <div className="mission-card">

          <MissionItem
            icon="◎"
            title="Our Mission"
            text="To provide quality education that builds character, confidence and competence."
          />

          <MissionItem
            icon="◉"
            title="Our Vision"
            text="To be a centre of excellence in education, preparing students for a global future."
          />

          <MissionItem
            icon="👨"
            title="Message from Principal"
            text="Education is not just about learning, it's about becoming the best version of yourself."
          />

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="why-section">

        <div className="why-container">

          <div className="why-intro">

            <span className="eyebrow light">
              WHY CHOOSE US
            </span>

            <h2>
              Why DJM Global
              <br />
              Academy?
            </h2>

            <p>
              We provide a unique blend of academic excellence,
              modern infrastructure and holistic development
              to shape future-ready leaders.
            </p>

            <a href="#campus" className="btn btn-yellow">
              Our Facilities <span>→</span>
            </a>

          </div>


          <div className="facility-grid">

            <Facility
              icon="👨‍🏫"
              title="Experienced Faculty"
              text="Dedicated and qualified teachers who guide, inspire and support."
            />

            <Facility
              icon="⚗"
              title="Science & Computer Labs"
              text="Modern labs with advanced equipment for hands-on learning."
            />

            <Facility
              icon="🏆"
              title="Academic Excellence"
              text="Consistent results and a strong foundation for competitive exams."
            />

            <Facility
              icon="💻"
              title="Digital Learning"
              text="Smart classrooms and technology-enabled learning experiences."
            />

            <Facility
              icon="🏀"
              title="Sports & Activities"
              text="Developing physical fitness, teamwork and leadership skills."
            />

            <Facility
              icon="🚌"
              title="Safe Transportation"
              text="GPS-enabled, secure and reliable transport facility."
            />

          </div>

        </div>

      </section>


      {/* ================= RESULTS ================= */}

      <section id="results" className="results section">

        <div className="section-heading">

          <div>
            <span className="eyebrow">
              OUR RESULTS
            </span>

            <h2>Results & Achievements</h2>

            <p>
              Consistent performance. Countless success stories.
            </p>
          </div>

          <a href="#contact" className="view-link">
            View All Results →
          </a>

        </div>


        <div className="results-grid">

          <div className="big-result-card">

            <span>HIGHEST CLASS X SCORE</span>

            <strong>96%</strong>

            <p>
              Academic excellence that speaks for itself.
            </p>

          </div>


          <div className="achievement-card">

            <div className="student-row">

              {["A", "B", "C", "D", "E", "F"].map(
                (student) => (
                  <div className="student-avatar" key={student}>
                    {student}
                  </div>
                )
              )}

            </div>

            <div className="achievement-bottom">
              <strong>7</strong>

              <div>
                <b>Class X Toppers</b>
                <small>Session 2025–26</small>
              </div>

              <span>+</span>
            </div>

          </div>


          <div className="selection-card">

            <strong>1</strong>

            <span>
              JNV Selection
            </span>

            <small>
              Class 6
            </small>

          </div>


          <div className="selection-card">

            <strong>2</strong>

            <span>
              Atal Awasiya
              <br />
              Selections
            </span>

            <small>
              Class 9
            </small>

          </div>


          <div
            className="trophy-card"
            style={{
              backgroundImage:
                `url(${schoolImages.students})`,
            }}
          >
            <div>
              <span>Academic &</span>
              <strong>Competitive<br />Achievements</strong>
            </div>
          </div>

        </div>

      </section>


      {/* ================= ACADEMIC JOURNEY ================= */}

      <section id="academics" className="journey">

        <div className="journey-heading">

          <div>
            <span className="eyebrow">
              THE ACADEMIC JOURNEY
            </span>

            <h2>
              From Foundation
              <br />
              <span>to Future Ready</span>
            </h2>
          </div>

        </div>


        <div className="journey-line">

          <Journey
            number="01"
            icon="📖"
            title="Foundation"
            text="Strong basics, bright beginnings"
          />

          <Journey
            number="02"
            icon="💡"
            title="Concept Building"
            text="Understanding beyond textbooks"
          />

          <Journey
            number="03"
            icon="⚙"
            title="Skill Development"
            text="Building practical and life skills"
          />

          <Journey
            number="04"
            icon="🎯"
            title="Competitive Preparation"
            text="For bigger dreams"
          />

          <Journey
            number="05"
            icon="📈"
            title="Future Ready"
            text="Confident, capable, compassionate"
          />

        </div>

      </section>


      {/* ================= CAMPUS + ADMISSION ================= */}

      <section id="campus" className="campus-section">

        <div className="campus-intro">

          <span className="eyebrow yellow-text">
            CAMPUS EXPERIENCE
          </span>

          <h2>
            Explore Our
            <br />
            <span>World</span>
          </h2>

          <p>
            A vibrant campus with modern facilities,
            green surroundings and endless opportunities.
          </p>

          <a href="#gallery" className="campus-button">
            View Gallery →
          </a>

        </div>


        <div id="gallery" className="gallery-grid">

          <GalleryImage src={schoolImages.lab} />

          <GalleryImage src={schoolImages.classroom} />

          <GalleryImage src={schoolImages.sports} />

          <GalleryImage src={schoolImages.library} />

          <GalleryImage src={schoolImages.activity} />

          <GalleryImage src={schoolImages.campus} />

        </div>


        {/* ADMISSION CTA */}

        <div id="admissions" className="admission-card">

          <span className="eyebrow">
            ADMISSIONS 2026–27
          </span>

          <h2>
            Give Your Child a
            <br />
            <span>Stronger Beginning.</span>
          </h2>

          <p>
            Quality education. Holistic development.
            A brighter future.
          </p>

          <a href="#contact" className="dark-button">
            Apply for Admission <span>→</span>
          </a>

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}

      <section className="bottom-section section">

        <div className="testimonial">

          <span className="eyebrow">
            WHAT PARENTS & STUDENTS SAY
          </span>

          <div className="testimonial-card">

            <div className="quote">
              “
            </div>

            <p>
              DJM Global Academy has given my child not just
              education, but confidence and values. The teachers
              are truly dedicated and supportive.
            </p>

            <div className="person">
              <div className="person-avatar">
                P
              </div>

              <div>
                <strong>Parent of Class X Student</strong>
                <small>DJM Global Academy</small>
              </div>
            </div>

          </div>

        </div>


        {/* UPDATES */}

        <div id="updates" className="updates">

          <div className="update-heading">

            <span className="eyebrow">
              LATEST UPDATES
            </span>

            <a href="#contact">
              View All →
            </a>

          </div>


          <Update
            type="Notice"
            date="20 Sep 2025"
            title="School Reopening Schedule"
          />

          <Update
            type="Event"
            date="18 Sep 2025"
            title="Annual Sports Day"
          />

          <Update
            type="Result"
            date="15 Sep 2025"
            title="Class X Result (2025–26)"
          />

          <Update
            type="Announcement"
            date="10 Sep 2025"
            title="Admission Open for 2026–27"
          />

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="contact-container">

          <div className="contact-info">

            <span className="eyebrow">
              CONTACT US
            </span>

            <h2>
              Let's Build a
              <br />
              <span>Bright Future Together.</span>
            </h2>

            <div className="contact-item">
              <span>📍</span>
              <p>
                Aurandh, Mainpuri,
                <br />
                Uttar Pradesh – 205267
              </p>
            </div>

            <div className="contact-item">
              <span>📞</span>
              <p>
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="contact-item">
              <span>✉</span>
              <p>
                info@djmglobalacademy.in
              </p>
            </div>

          </div>


          <div className="contact-form">

            <h3>
              Enquire About Admission
            </h3>

            <p>
              Fill in your details and our team will
              get in touch with you.
            </p>

            <form>

              <input
                type="text"
                placeholder="Parent / Student Name"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
              />

              <select defaultValue="">
                <option value="" disabled>
                  Select Class
                </option>

                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 3</option>
                <option>Class 4</option>
                <option>Class 5</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Class 10</option>
              </select>

              <textarea
                placeholder="Your message"
                rows="4"
              ></textarea>

              <button type="submit">
                Send Enquiry →
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <Footer />
      

    </div>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */






function MissionItem({ icon, title, text }) {
  return (
    <div className="mission-item">

      <div className="mission-icon">
        {icon}
      </div>

      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>

    </div>
  );
}


function Facility({ icon, title, text }) {
  return (
    <div className="facility-card">

      <div className="facility-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}


function Journey({ number, icon, title, text }) {
  return (
    <div className="journey-item">

      <span className="journey-number">
        {number}
      </span>

      <div className="journey-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}


function GalleryImage({ src }) {
  return (
    <div className="gallery-image">

      <img src={src} alt="DJM Global Academy" />

      <div className="gallery-overlay">
        <span>View</span>
      </div>

    </div>
  );
}


function Update({ type, date, title }) {
  return (
    <div className="update-item">

      <span className={`update-tag ${type.toLowerCase()}`}>
        {type}
      </span>

      <span className="update-date">
        {date}
      </span>

      <strong>
        {title}
      </strong>

    </div>
  );
}




export default App;