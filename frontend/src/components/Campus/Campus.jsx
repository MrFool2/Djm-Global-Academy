import { NavLink } from "react-router-dom"
import HomeGallery from "./HomeGallery"
import HomeAdmissionCTA from "./HomeAdmissionCTA"

export default function Campus() {
  return (
    <section id="campus" className="campus-section">
    
            <div className="campus-intro">
    
              <span className="eyebrow yellow-text">
                CAMPUS EXPERIENCE
              </span>
    
              <h2>
                Explore Our
                <br />
                <span>World</span>
              </h2>
    
              <p>
                A vibrant campus with modern facilities,
                green surroundings and endless opportunities.
              </p>
    
              <NavLink to={"/gallery"} className="campus-button">
                View Gallery →
              </NavLink>
    
            </div>
    
    
            <HomeGallery />
    
            {/* ADMISSION CTA */}
    
            <HomeAdmissionCTA />
            
          </section>
  )
}