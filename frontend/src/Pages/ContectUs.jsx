import ContactMap from "../components/Contact-Us/ContactMap";
import Contact  from "../components/Contact-Us/ContactUs";
import HeroOverlay from "../components/HeroOverlay/HeroOverlay";
export default function ContactUs() {
  const styles = {

    'margin-top': "1%",
     gap:'20px'
  };
  return (
    <>
      <HeroOverlay
              title={"DJM GLOBAL ACADEMY"}
              page={"Contact Us"}
              text={"Stay updated with important academic activities, celebrations, examinations and school events."}
            />
      <section className="ContactUs"  style={styles}>
        <Contact />
        <ContactMap />
      </section>
    </>
  )
}