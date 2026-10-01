import Carriculam from "../components/Carriculam/Carriculam";
import AdmissionInfo from "../components/Admission_Info/AdmissionInfo";
import HeroOverlay from "../components/HeroOverlay/HeroOverlay";
export default function Academics() {
  return (
    <>
      <HeroOverlay
              title={"DJM GLOBAL ACADEMY"}
              page={"Academic"}
              text={"Stay updated with important academic activities, celebrations, examinations and school events."}
            />
       <Carriculam />
      
    </>
  )
}