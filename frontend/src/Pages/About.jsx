
import AboutData from "../components/About/About"
import HeroOverlay from "../components/HeroOverlay/HeroOverlay"
export default function About() {
  return (
    <>
      <HeroOverlay
        title={"DJM GLOBAL ACADEMY"}
        page={"About"}
        text={"Stay updated with important academic activities, celebrations, examinations and school events."}
      />
      <AboutData/>
    </>
  )
}