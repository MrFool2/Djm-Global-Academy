import Mission from "../components/Mission/Mission";
import WhySection from "../components/WhySection/WhySection";
import Result from "../components/Results/Result";
import Journey from "../components/Journey/Journey";
import Campus from "../components/Campus/Campus";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactUs from "../components/Contact-Us/ContactUs";
import Hero from "../components/Hero/Hero";
import TrustBar from "../components/TrustBar/TrustBar";
import AboutHome from "../components/About/AboutHome";

export default function Home() {
  return (
    <>
      
      <Hero />

      {/* ================= TRUST BAR ================= */}

      <TrustBar />


      {/* ================= ABOUT ================= */}
      <section id="about" className="about section">
        <AboutHome/>
        {/* Mission Card */}
        <Mission />
      </section>

      


      {/* ================= WHY CHOOSE US ================= */}


      <WhySection />

      {/* ================= RESULTS ================= */}

      <Result />


      {/* ================= ACADEMIC JOURNEY ================= */}

      <Journey />
      

      {/* ================= CAMPUS + ADMISSION ================= */}

      

      <Campus />


      {/* ================= TESTIMONIALS ================= */}

      <Testimonials />


      {/* ================= CONTACT ================= */}

      <ContactUs />


      </>
  )
}