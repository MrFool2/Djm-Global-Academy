import {Route,Routes} from 'react-router-dom';
import "./App.css";
import Hero from './components/Hero/Hero';
import Footer from "./components/Footer/Footer";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Activity from "./Pages/Activity"
import Academics from "./Pages/Academics";
import Facilites from './Pages/Facilites';
import ContactUs from './Pages/ContectUs';

function App() {
  return (
    <div className="school-site">

      <Header />
      {/* ================= HERO ================= */}
      <Hero />
     <Routes>
          <Route path='/' element={<Home />}/>
           <Route path='/about' element={<About />}/>
           <Route path='/activity' element={<Activity />}/>
           <Route path='/academics' element={<Academics/>}/>
           <Route path='/facities' element={<Facilites/>}/>
           <Route path='/contact' element={<ContactUs/>}/>
           <Route path='*' element={<Home />}/>
      </Routes>
        
      {/* ================= FOOTER ================= */}
      <Footer />
      

    </div>
  );
}

export default App;