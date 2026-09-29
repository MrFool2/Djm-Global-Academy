
import "./HeroOverlay.css";
export default function HeroOverlay({title,page,text}) {
  return (
    
      <section className="updates-hero">

        <div className="updates-hero-overlay">

          <span className="updates-eyebrow">
            {title}
          </span>

          <h1>
            School <span>{page}</span>
          </h1>

          <p>
            {text}
          </p>

        </div>

      </section>
  )
}