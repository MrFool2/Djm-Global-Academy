import './App.css';
import NavBar from './components/NavBar/NavBar';
import OverviewFrame from './components/OverViewFrame/OverviewFrame';
import SliderVideo1 from './Assests/ImageSlider/video/SliderVideo.mp4';
import FeatureGrid from './components/FeatureGrid/FeaturesSection.jsx';
import About from './components/About/About.jsx';
import Carriculam from './components/Carriculam/Carriculam.jsx';
import './components/About/About.css';
import Footer from './components/Footer/Footer.jsx';
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
function Router() {
  return (
    <>
    
      <section className="header-nav">
        <div id="NavBar" className="Navbar">
          <NavBar />
        </div>
      </section>
      <section id="Main " className="Main">
        <OverviewFrame
          videos={videos}
          interval={5000}
        />
      </section>
      <section id="About" className="About">
        <About />
      </section>
      <section id="Carriculam" className="Carriculam">
        <Carriculam />
      </section>
      <section className="FeatureGrid">
        <FeatureGrid />
      </section> 
      <section className="Footer">
        <Footer />
      </section>
      
    </>
  );
}


export default Router;
