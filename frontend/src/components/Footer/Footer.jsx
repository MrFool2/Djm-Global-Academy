import React from "react";
import "./Footer.css";
import CornerPlus from "../CornerPlus/CornerPlus";

const Footer = () => {
  return (
    <footer className="site-footer">
       
      <div className="footer-container">

        {/* Top divider */}
        <div className="footer-divider" />

        <div className="footer-grid">
        

          {/* Brand Section */}
          <div className="footer-brand">

            <a href="/" className="footer-logo">
              <div className="footer-logo-mark">
                DJM
              </div>

              <span>DJM Global Academy</span>
            </a>

            <p className="footer-description">
              Empowering students with quality education, modern learning,
              strong values, and the confidence to build a brighter future.
            </p>

            {/* Social Links */}
            <div className="footer-socials">

              <a
                href="#"
                className="footer-social"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="#"
                className="footer-social"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="footer-social"
                aria-label="YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.4 3.8-6.4 3.8Z" />
                </svg>
              </a>

              <a href="#" className="footer-social" aria-label="WhatsApp">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
                  <path d="M8.5 8.5c.3-.5.6-.5.9-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c.7 1.2 1.6 2.1 2.8 2.8l.7-.6c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.3.4.5v.5c0 .3 0 .6-.5.9-.4.3-1.1.4-1.7.2-1.1-.3-2.7-1.1-4.1-2.5s-2.2-3-2.5-4.1c-.2-.6-.1-1.3.2-1.7Z" />
                </svg>
              </a>

            </div>
          </div>


          {/* Academics */}
          <div className="footer-column">
            <span className="footer-column-title">
              Academics
            </span>

            <div className="footer-links">
              <a href="#academics">Classes</a>
              <a href="#academics">Curriculum</a>
              <a href="#results">Results</a>
              <a href="#facilities">Facilities</a>
            </div>
          </div>


          {/* School */}
          <div className="footer-column">
            <span className="footer-column-title">
              School
            </span>

            <div className="footer-links">
              <a href="#about">About Us</a>
              <a href="#activities">Activities</a>
              <a href="#admission">Admissions</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

        </div>


        {/* Bottom divider */}
        <div className="footer-divider" />

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} DJM Global Academy.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;