import React from "react";
import FooterColumn from "./FooterColumn";
import Logo from "../../Assests/NavLogo/djmlogo.png"
import FooterData from "../../Data/FooterData";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <div className="footer-logo">
                <img src={Logo} alt="DJM Global Academy" />
            </div>

            <p>
              Empowering young minds with knowledge,
              character and confidence.
            </p>

          </div>


          {
            FooterData.map((item)=>(
              < FooterColumn 
                  title={item.title}
                  links={item.links}
              />
            ))
          }
        </div>


        <div className="footer-bottom">

          <span>
            © 2026 DJM Global Academy. All rights reserved.
          </span>

          <span>
            Educate • Empower • Transform
          </span>

        </div>

      </footer>
  );
};

export default Footer;