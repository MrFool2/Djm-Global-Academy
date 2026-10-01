import { NavLink } from "react-router-dom";

export default function HeroContainer({ tag, title, text, buttons }) {
  return (
    <div className="hero-content">

      <div className="school-tag">
        {tag}
      </div>

      <h1>
        {title}
      </h1>

      <p>
        {text}
      </p>

      {
        <div className="hero-buttons">

          {buttons.map((items, index) => (
            <NavLink
              key={index}
              to={items.link}
              className={items.classname}
            >
              {items.text}
            </NavLink>
          ))}

        </div>
      }

    </div>
  );
}