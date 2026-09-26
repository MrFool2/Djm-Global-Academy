/* ================= HEADER ================= */
import { NavLink } from "react-router-dom";
import Logo from "../../Assests/NavLogo/djmlogo.png";
import "./NavBar.css";


const NavBar = () => {
  return (
      <header className="navbar">
        <div className="nav-container">

          <NavLink to={"/"} className="logo">
            <img src={Logo} alt="Djm Global Academy" />
          </NavLink>

          <nav className="nav-links">
            <NavLink to={"/"} className="active">Home</NavLink>
            <NavLink to={"/about"} >About</NavLink>
            <NavLink to={"/academics"} >Academics</NavLink>
            <NavLink to={"/admissions"} >Admissions</NavLink>
            <NavLink to={"/results"} >Results</NavLink>
            <NavLink to={"/campus"} >Campus</NavLink>
            <NavLink to={"/gallery"} >Gallery</NavLink>
            <NavLink to={"/Updates"} >Updates</NavLink>
            <NavLink to={"/contact"} >Contact</NavLink>
            
          </nav>


          <NavLink to={"/admission"}  className="nav-apply">
            Apply Now <span>→</span>
          </NavLink>

          <button className="mobile-menu">
            ☰
          </button>

        </div>
      </header>


  );
};

export default NavBar;