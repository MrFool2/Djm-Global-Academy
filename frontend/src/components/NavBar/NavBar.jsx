import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import "./NavBar.css";

function NavList({ mobile = false }) {
  return (
    <ul className={mobile ? "dock-nav dock-nav-mobile" : "dock-nav"}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/academics">Academics</NavLink>
      </li>

      <li>
        <NavLink to="/activity">Activity</NavLink>
      </li>

      <li>
        <NavLink to="/facilities">Facilities</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="dock">
      <div className="dock-container">

        <a href="#home" className="dock-logo">
          
         <Logo width="190px" height="auto" />
          
        </a>

        <div className="dock-desktop-nav">
          <NavList />
        </div>

        <button
          type="button"
          className="dock-menu-button"
          onClick={() => setOpenNav(!openNav)}
          aria-label={openNav ? "Close menu" : "Open menu"}
        >
          {openNav ? (
            <XMarkIcon />
          ) : (
            <Bars3Icon />
          )}
        </button>
      </div>

      {openNav && (
        <div className="dock-mobile-nav">
          <NavList mobile />
        </div>
      )}
    </nav>
  );
};

export default NavBar;