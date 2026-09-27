import { NavLink } from "react-router-dom";
import AchievementData from "../../Data/AchievementsData";
import schoolImages from "../../Data/LinkData";

export default function Result() {
  return (
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

          <NavLink to={"/Results"} className="view-link">
            View All Results →
          </NavLink>

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
          {

            AchievementData.map((item)=>(

                <div className="selection-card">

                    <strong>{item.id}</strong>
                    <span>{item.title}</span>
                    <small>{item.text}</small>

                </div>
            ))
          }


          


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
  )
}