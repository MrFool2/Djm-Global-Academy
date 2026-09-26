import { NavLink } from "react-router-dom";
export default function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">

      <h4>{title}</h4>

      {links.map((link) => (
        
        <NavLink to={`/${link}`} >
            {link}
        </NavLink>
      ))}

    </div>
  );
}