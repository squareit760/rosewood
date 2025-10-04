import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import Counter from "../component/Counter";
import AboutHighlights from "../component/AboutHighlights";
import VisionMission from "../component/VisionMissionSection";
import Testimonials from "../component/Testimonials";
import TeachersSection from "../component/TeachersSection";
import SchoolHistory from "../component/SchoolHistory";
import WhyUs from "../component/whychooseus/WhyUs";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/images/About.jpg"
                  alt="School Gallery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
      
              <div className="relative z-10 flex items-center justify-center h-full">
                <motion.div
                  initial={{ opacity: 0, x: 100 }} // right side se start
                  animate={{ opacity: 1, x: 0 }} // beech me aa jaye
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8"
                >
                  <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-4">
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
                        <Link
                          to="/"
                          className="group flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200"
                          aria-label="Go to homepage"
                        >
                          <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-1 group-hover:scale-110 transition-transform duration-200" />
                          <span className="font-medium">Home</span>
                        </Link>
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
              </div>
            </section>

      <section className="max-w-7xl mx-auto px-6 pt-8 pb-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold lg:mb-6 mb-3">
          About
          <span className="text-orange-500"> Us</span>
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-7xl mx-auto text-base md:text-lg">
          Nestled in the heart of Gonda, Rosewood International School is a
          beacon of educational excellence and holistic growth. Ranked among the
          top CBSE schools in the region, we offer a vibrant campus, dedicated
          faculty, and innovative programs that inspire students to discover
          their passions and achieve their highest potential. At Rosewood, we
          believe that every child is unique, with untapped potential waiting to
          flourish. Our student-centric approach goes beyond textbooks,
          fostering critical thinking, creativity, and emotional intelligence.
          We create an environment where curiosity is celebrated, questions are
          encouraged, and learning becomes a joyful journey of discovery. With
          state-of-the-art facilities and a nurturing atmosphere, we provide
          students with the tools and confidence to face tomorrow's challenges
          with courage and conviction. Our commitment extends beyond
          academics—we instill strong values, ethical responsibility, and a
          spirit of compassion that prepares students to become responsible
          global citizens. At Rosewood, we are committed to nurturing
          well-rounded individuals prepared to excel in an ever-changing world.
          Join us in shaping futures, building dreams, and creating leaders who
          will make a meaningful difference in society.
        </p>
      </section>

      <section className="py-16 px-6 bg-white">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center ">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose
            <span className="text-orange-500"> Us?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Content Grid */}
        <WhyUs />
      </section>

      {/* <AboutHighlights /> */}
      {/* <SchoolHistory /> */}
      {/* <Testimonials /> */}
      {/* <VisionMission /> */}
      {/* <TeachersSection /> */}
      {/* <Counter /> */}
    </>
  );
}
