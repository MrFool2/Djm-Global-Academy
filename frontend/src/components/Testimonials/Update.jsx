import { NavLink } from "react-router-dom";
import UpdateData from "../../Data/UpdateData";
function UpdateCard({ type, date, title }) {
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
export default function Update() {
  return (
    
        <div id="updates" className="updates">

          <div className="update-heading">

            <span className="eyebrow">
              LATEST UPDATES
            </span>

            <NavLink to={"/contact"}>
              View All →
            </NavLink>

          </div>
            {
                UpdateData.map((item)=>(
                    <UpdateCard 
                        type={item.type}
                        date={item.date}
                        title={item.title}
                    />
                ))
            }



        </div>
  )
}