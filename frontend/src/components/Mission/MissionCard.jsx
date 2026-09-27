import { NavLink } from "react-router-dom";

export default function MissionItem({ icon, title, text ,route}) {
  return (
    <NavLink to={`${route}`} className="mission-item">

      <div className="mission-icon">
        {icon}
      </div>

      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>

    </NavLink>
  );
}