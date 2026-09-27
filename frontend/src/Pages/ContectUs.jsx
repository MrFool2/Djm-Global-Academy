import ContactMap from "../components/Contact-Us/ContactMap";
import Contact  from "../components/Contact-Us/ContactUs";
export default function ContactUs() {
  const styles = {

    'margin-top': "1%",
     gap:'20px'
  };
  return (
    <section className="ContactUs"  style={styles}>
      <Contact />
      <ContactMap />
    </section>
  )
}