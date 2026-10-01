import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function FooterColumn({ title, links }) {

  const isContact = title.toLowerCase() === "contact";

  const renderContactItem = (link, index) => {

    // ================= EMAIL =================
    if (link.includes("@")) {
      return (
        <a
          key={index}
          href={`mailto:${link}`}
          className="footer-contact-link"
        >
          {link}
        </a>
      );
    }


    // ================= PHONE =================
    // Detects numbers such as:
    // +91 9876543210
    // 9876543210
    // 05673-123456

    const phonePattern = /^[+\d][\d\s\-()]{7,}$/;

    if (phonePattern.test(link)) {
      return (
        <a
          key={index}
          href={`tel:${link.replace(/[\s\-()]/g, "")}`}
          className="footer-contact-link"
        >
          {link}
        </a>
      );
    }


    // ================= NORMAL CONTACT TEXT =================
    return (
      <p key={index}>
        {link}
      </p>
    );
  };


  return (
    <div className="footer-column">

      <h4>{title}</h4>

      {isContact
        ? links.map((link, index) =>
            renderContactItem(link, index)
          )

        : links.map((link, index) => (
            <NavLink
              key={index}
              to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link}
            </NavLink>
          ))
      }

    </div>
  );
}