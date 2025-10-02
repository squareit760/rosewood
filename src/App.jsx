import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
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
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import MainLayout from "./pages/layout";


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
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainLayout />} >

            
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
            </Route>


            <Route path="/thanks" element={<ThankYou />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

          </Routes>
          <EnquiryFormPopup />
      </Router>
    </>
  );
}

export default App;
