import {Route,Routes} from 'react-router-dom';
import Header from './Pages/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Facilites from './Pages/Facilites';
import Academics from './Pages/Academics';
import Activity from './Pages/Activity';
import "./App.css";
import ContactUs from './Pages/ContectUs';
function App()  { 

  return (
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/activity' element={<Activity />}/>
          <Route path='/academics' element={<Academics/>}/>
          <Route path='/facities' element={<Facilites/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        
        <section className="Footer">
          <Footer />
      </section>
      </div>
  );
}

export default App;