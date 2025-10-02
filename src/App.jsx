
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
// import Admissions from "./pages/Admissions";
// import ContactPage  from "./pages/ContactPage ";
// import Gallery from "./pages/Gallery";
// import Facilities from "./pages/Facilities";
// import PrinciplesMessage from "./pages/PrinciplesMessage";
// import VisionMission from "./pages/VisionMission";
// import Sports from "./pages/Sports";
// import { FaWhatsapp } from "react-icons/fa";
// import { PhoneCall } from "lucide-react";
// import EnquiryFormPopup from "./component/EnquiryForm";
// import ScrollToTop from "./component/ScrollToTop";
// import ThankYou from "./pages/Thanks";
 

 

// function App() {

//   return (
//     <>
//       {/* Floating CTA Buttons */}
//       <div className="fixed bottom-4 left-4 flex flex-col gap-3 z-50">
//         <a
//           href="tel:+916391000692"
//           className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
//         >
//           <PhoneCall className="w-5 h-5" />
//         </a>

//         <a
//           href="https://wa.me/916391000692"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
//         >
//           <FaWhatsapp className="w-5 h-5" />
//         </a>
//       </div>

//       <Router>
//         <Navbar />
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/about" element={<AboutUs />} /> */}
//           <Route path="/about-us" element={<AboutUs />} />
//           {/* <Route path="/about/our-story" element={<OurStory />} /> */}
//           <Route
//             path="/about/principal-message"
//             element={<PrinciplesMessage />}
//           />
//           <Route path="/about/vision-mission" element={<VisionMission />} />
//           <Route path="/gallery" element={<Gallery />} />
//           {/* <Route path="/academics/curriculum" element={<Curriculum />} /> */}
//           <Route path="/academics/facilities" element={<Facilities />} />
//           <Route path="/academics/activities" element={<Sports />} />
//           <Route path="/admissions" element={<Admissions />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/thanks" element={<ThankYou />} />
//         </Routes>
//         <EnquiryFormPopup />
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App
 



import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Admissions from "./pages/Admissions";
import ContactPage  from "./pages/ContactPage ";

import Gallery from "./pages/Gallery";
import Facilities from "./pages/Facilities";
import PrinciplesMessage from "./pages/PrinciplesMessage";
import VisionMission from "./pages/VisionMission";
import Sports from "./pages/Sports";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";
import EnquiryFormPopup from "./component/EnquiryForm";
import ScrollToTop from "./component/ScrollToTop";
import ThankYou from "./pages/Thanks";

// 👇 Layout wrapper to conditionally hide Navbar/Footer
function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/thanks";

  return (
    <>
      {!hideLayout && <Navbar />}
      <ScrollToTop />
      {children}
      {!hideLayout && <EnquiryFormPopup />}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <>
      {/* Floating CTA Buttons */}
      <div className="fixed bottom-4 left-4 flex flex-col gap-3 z-50">
        <a
          href="tel:+916391000692"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        >
          <PhoneCall className="w-5 h-5" />
        </a>

        <a
          href="https://wa.me/916391000692"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        >
          <FaWhatsapp className="w-5 h-5" />
        </a>
      </div>

      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="/about/principal-message"
              element={<PrinciplesMessage />}
            />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/academics/facilities" element={<Facilities />} />
            <Route path="/academics/activities" element={<Sports />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thanks" element={<ThankYou />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
