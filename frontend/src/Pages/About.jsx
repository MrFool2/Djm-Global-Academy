
import AboutSection from "../components/About/About"
import HeroOverlay from "../components/HeroOverlay/HeroOverlay"

export default function About() {
  return (
    <main className="about-page">
          <HeroOverlay
            title={"DJM GLOBAL ACADEMY"}
            page={"About"}
            text={"At DJM Global Academy, we believe that education is not just about academics, but about building character, confidence and a strong foundation for life."}
          />
          <AboutSection />
    </main>
  )
}