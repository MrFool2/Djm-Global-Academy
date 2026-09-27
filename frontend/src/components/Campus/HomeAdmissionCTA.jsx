import { NavLink } from "react-router-dom";

export default function HomeAdmissionCTA() {
  return (
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
    
              <NavLink to={"/contact"} className="dark-button">
                Apply for Admission <span>→</span>
              </NavLink>
    
            </div>
    
  )
}