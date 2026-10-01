import {Route,Routes} from 'react-router-dom';
import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Academics from "./Pages/Academics";
import Facilites from './Pages/Facilites';
import ContactUs from './Pages/ContectUs';
import Updates from './Pages/Updates';
import Admission from './Pages/Admission';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <div className="school-site">

      <Header />
      {/* ================= HERO ================= */}
      
     <Routes>
          <Route path='/' element={<Home />}/>
           <Route path='/about' element={<About />}/>
           <Route path='/gallery' element={<Gallery/>}/>
           <Route path='/academics' element={<Academics/>}/>
           <Route path='/admissions' element={<Admission />}/>
           <Route path='/Updates' element={<Updates />}/>
           <Route path='/contact' element={<ContactUs/>}/>
           <Route path='*' element={<Home />}/>
      </Routes>
        
      {/* ================= FOOTER ================= */}
      <Footer />
      

    </div>
  );
}

export default App;