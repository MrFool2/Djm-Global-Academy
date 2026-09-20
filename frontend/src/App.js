import './App.css';
import NavBar from './components/NavBar/NavBar';
import OverviewFrame from './components/OverViewFrame/OverviewFrame';
import SliderVideo1 from './Assests/ImageSlider/video/SliderVideo.mp4';
import FeatureGrid from './components/FeatureGrid/FeaturesSection.jsx';
import About from './components/About/About.jsx';
import './components/About/About.css';
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
function App() {
  return (
    <div className="App">
      <section id="NavBar" className="Navbar">
        <NavBar />
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
      <section className="FeatureGrid">
        <FeatureGrid />
      </section>
      
    </div>
  );
}


export default App;
