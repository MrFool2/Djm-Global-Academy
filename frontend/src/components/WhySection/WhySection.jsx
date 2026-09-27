import Facility from "./Facility";
import WhySectionData from "../../Data/whyChooseData";
import { NavLink } from "react-router-dom";
export default function WhySection() {
  return (
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

            <NavLink to={"/campus"} className="btn btn-yellow">
              Our Facilities <span>→</span>
            </NavLink>

          </div>


          <div className="facility-grid">
            {
              WhySectionData.map((item)=>(
                <Facility
                  icon={item.icon}
                  title={item.title}
                  text={item.text} 
                />
              ))
            }
          </div>

        </div>

      </section>
  )
}