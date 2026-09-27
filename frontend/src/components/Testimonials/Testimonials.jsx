import Update from "./Update";


export default function Testimonials() {
  return (
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
        <Update />

      </section>
  )
}