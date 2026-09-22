import OverviewFrame from "../components/OverViewFrame/OverviewFrame";
import WelcomeSection from "../components/welcomeSection/WelcomeSection";
import Carriculam from "../components/Carriculam/Carriculam";
import FeatureGrid from "../components/FeatureGrid/FeaturesSection";
import SliderVideo1 from "../Assests/ImageSlider/video/SliderVideo.mp4";
import RewardsFinale from "../components/Rewards/ActivitiesCarousel";
import DirectorMessage from "../components/DirectorMessage/DirectorMessage";
const videos = [
    {
      src: "https://hacktoskill.com/opsteam/AiBuilderCup/AiBuilderVideo.webm",
      type: "video/webm",
    },
    {
      src: "https://hacktoskill.com/opsteam/AiBuilderCup/AiBuilderVideo.webm",
      type: "video/webm",
    },
    {
      src: SliderVideo1,
      type: "video/mp4",
    },
  ];
export default function Home() {
  return (
    <>
        <section id="Main " className="Main">
          <OverviewFrame
            videos={videos}
            interval={5000}
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