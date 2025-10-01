
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Curriculum from "./pages/Curriculum";
import Admissions from "./pages/Admissions";
import ContactPage  from "./pages/ContactPage ";
import Gallery from "./pages/Gallery";
import Facilities from "./pages/Facilities";
import OurStory from "./pages/OurStory";
import PrinciplesMessage from "./pages/PrinciplesMessage";
import VisionMission from "./pages/VisionMission";
import Sports from "./pages/Sports";
 

 

function App() {

  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/about/our-story" element={<OurStory />} /> */}
          <Route path="/about/principal-message" element={<PrinciplesMessage />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/academics/curriculum" element={<Curriculum />} /> */}
          <Route path="/academics/facilities" element={<Facilities />} />
          <Route path="/academics/activities" element={<Sports />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<ContactPage  />} />
        </Routes>
        <Footer />
      </Router>
      

     
  

    </>
  )
}

export default App
 