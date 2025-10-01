import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import Counter from "../component/Counter";
import AboutHighlights from "../component/AboutHighlights";
import VisionMission from "../component/VisionMissionSection";
import Testimonials from "../component/Testimonials";
import TeachersSection from "../component/TeachersSection";
import SchoolHistory from "../component/SchoolHistory";

export default function AboutUs() {
  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] w-full overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/About.jpg')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>

          {/* Alternative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
        </div>

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // right side se start
          animate={{ opacity: 1, x: 0 }} // beech me aa jaye
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
              About Us
            </h1>
            <div className="flex justify-center">
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* Breadcrumb */}
          <nav
            className="flex items-center space-x-2 text-sm sm:text-base"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2">
              <li className="flex items-center">
                <a
                  href="/"
                  className="group flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  aria-label="Go to homepage"
                >
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-1 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">Home</span>
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
              </li>
              <li className="flex items-center">
                <span
                  className="text-orange-400 font-semibold"
                  aria-current="page"
                >
                  About Us
                </span>
              </li>
            </ol>
          </nav>
        </motion.div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-40"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse opacity-50 animation-delay-1000"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-8 pb-4 text-center">
        <h2 className="lg:text-5xl md:text-5xl text-3xl font-bold mb-6">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-7xl mx-auto text-base md:text-lg">
          Nestled in the heart of Gonda, Rosewood International School is a
          beacon of educational excellence and holistic growth. Ranked among the
          top CBSE schools in the region, we offer a vibrant campus, dedicated
          faculty, and innovative programs that inspire students to discover
          their passions and achieve their highest potential. At Rosewood, we
          are committed to nurturing well-rounded individuals prepared to excel
          in an ever-changing world.
        </p>
      </section>

      {/* <AboutHighlights /> */}
      <SchoolHistory />
      {/* <Testimonials /> */}
      {/* <VisionMission /> */}
      {/* <TeachersSection /> */}
      <Counter />
    </>
  );
}
