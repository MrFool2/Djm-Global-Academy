
import { NavLink } from "react-router-dom";
import schoolImages from "../../Data/LinkData";
import OverviewFrame from "../OverViewFrame/OverviewFrame";
import VideoData from "../../Data/VideoData";
export default function AboutHome() {
  return (
     <>

        <div className="about-image">

          <div className="yellow-corner"></div>

            <OverviewFrame
                videos={VideoData}
                interval={45000}
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
            Devta Ji Maharaj Global Academy, Aurandh (Mainpuri), is a
            school committed to providing quality education,
            modern facilities and a supportive environment
            where every child can discover their potential
            and achieve their dreams.
          </p>

          <NavLink to={"/About"} className="text-button">
            Know More <span>→</span>
          </NavLink>

        </div>
    </>
  )
}