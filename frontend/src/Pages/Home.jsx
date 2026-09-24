import OverviewFrame from "../components/OverViewFrame/OverviewFrame";
import WelcomeSection from "../components/welcomeSection/WelcomeSection";
import Carriculam from "../components/Carriculam/Carriculam";
import FeatureGrid from "../components/FeatureGrid/FeaturesSection";
import RewardsFinale from "../components/Rewards/ActivitiesCarousel";
import DirectorMessage from "../components/DirectorMessage/DirectorMessage";
import CultralVideo from "../Assests/welcomeImg/CultralVideo (1).mp4";
import Toppers from "../Assests/welcomeImg/Toppers.mp4";

const videos = [
    {
      src: Toppers,
      type: "video/mp4",
    },
    {
      src: CultralVideo,
      type: "video/mp4",
    },
    
    
  ];
export default function Home() {
  return (
    <>
        <section id="Main " className="Main">
          <OverviewFrame
            videos={videos}
            interval={45000}
          />
        </section>
        <section className='welcome'>
          <WelcomeSection />
        </section>
        <section id="Carriculam" className="Carriculam">
          <Carriculam />
        </section>

        <section className="FeatureGrid">
          <FeatureGrid />
        </section> 
        <section className="Rewards">
          <RewardsFinale />
        </section>
        <section className="Director-Message">
            <DirectorMessage />
        </section>
      </>
  )
}