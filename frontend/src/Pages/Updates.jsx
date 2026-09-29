
import HeroOverlay from "../components/HeroOverlay/HeroOverlay";
import SchoolUpdates from "../components/Updates/Updates";
export default function Updates() {
  return (
     <main className="updates-page">
      <HeroOverlay
        title={"DJM GLOBAL ACADEMY"}
        page={"Updates"}
        text={"Stay updated with important academic activities, celebrations, examinations and school events."}
      />
       <SchoolUpdates />
     </main>
  );
}