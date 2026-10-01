import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assests/NavLogo/djmlogo.png";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="navbar">
        <div className="nav-container">

          {/* LOGO */}
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <img src={Logo} alt="DJM Global Academy" />
          </NavLink>


          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="nav-links">

            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/academics">
              Academics
            </NavLink>

            <NavLink to="/admissions">
              Admissions
            </NavLink>

            <NavLink to="/results">
              Results
            </NavLink>

            {/* Campus is a section on Home */}
            <a href="/#campus">
              Campus
            </a>

            <NavLink to="/gallery">
              Gallery
            </NavLink>

            <NavLink to="/Updates">
              Updates
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>

          </nav>


          {/* ================= APPLY BUTTON ================= */}
          <NavLink to="/admission" className="nav-apply">
            Apply Now <span>→</span>
          </NavLink>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            className="mobile-menu"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>

        </div>
      </header>


      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />


      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`mobile-sidebar ${menuOpen ? "open" : "closed-menu"}`}
      >

        {/* SIDEBAR HEADER */}
        <div className="mobile-sidebar-header">

          <NavLink
            to="/"
            className="mobile-logo"
            onClick={closeMenu}
          >
            <img
              src={Logo}
              alt="DJM Global Academy"
            />
          </NavLink>

          <button
            type="button"
            className="mobile-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>

        </div>


        {/* ================= MOBILE NAVIGATION ================= */}
        <nav className="mobile-nav">

          <NavLink to="/" onClick={closeMenu}>
            <span>01</span>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            <span>02</span>
            About
          </NavLink>

          <NavLink to="/academics" onClick={closeMenu}>
            <span>03</span>
            Academics
          </NavLink>

          <NavLink to="/admissions" onClick={closeMenu}>
            <span>04</span>
            Admissions
          </NavLink>

          <a href="/#results" onClick={closeMenu}>
            <span>05</span>
            Results
          </a>

          <a href="/#campus" onClick={closeMenu}>
            <span>06</span>
            Campus
          </a>

          <NavLink to="/gallery" onClick={closeMenu}>
            <span>07</span>
            Gallery
          </NavLink>

          <NavLink to="/Updates" onClick={closeMenu}>
            <span>08</span>
            Updates
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            <span>09</span>
            Contact
          </NavLink>

        </nav>


        {/* ================= MOBILE APPLY ================= */}
        <div className="mobile-apply-wrapper">

          <NavLink
            to="/admission"
            className="mobile-apply"
            onClick={closeMenu}
          >
            Apply Now
            <span>→</span>
          </NavLink>

        </div>


        {/* ================= SIDEBAR FOOTER ================= */}
        <div className="mobile-sidebar-footer">
          <p>DJM Global Academy</p>
          <span>Learn • Grow • Lead</span>
        </div>

      </aside>
    </>
  );
};

export default NavBar;