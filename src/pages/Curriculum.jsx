import React from "react";

import FeaturesSection from "../component/academics/FeaturesSection";
import FacilitiesSection from "../component/academics/FacilitiesSection";
import CurriculumSection from "../component/academics/CurriculumSection";
import Department from "../component/Department";
import { motion } from "framer-motion";
import {
  BookOpen,
  Globe,
  Award,
  Calendar,
  Users,
  Phone,
  Download
} from "lucide-react";



export default function Academics() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section
      className="relative h-56 sm:h-72 lg:h-96 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/About.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // start right side
        animate={{ opacity: 1, x: 0 }}   // slide to center
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
      >
        <p className="text-sm text-orange-400 font-semibold uppercase mb-2">
          Academics
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight">
          Excellence in Teaching —{" "}
          <span className="text-orange-400">Learning for Life</span>
        </h1>
        <p className="text-gray-200 mt-3 max-w-2xl">
          A comprehensive academic program with strong focus on fundamentals,
          lab-practice and holistic development.
        </p>
      </motion.div>
    </section>

     
      <CurriculumSection />
      
      <CourseData />

      <FeaturesSection />

      <FacilitiesSection />

      {/* <FAQSection /> */}
      {/* <Gallery /> */}

      <Department />

      {/* FOOTER CTA */}
      <section className="py-12 bg-white mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold">Interested in Admission?</h4>
            <p className="text-gray-600">Contact our academic office for details on admissions and scholarships.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#enquire" className="bg-orange-500 text-white px-5 py-3 rounded-full shadow hover:bg-orange-600 transition">Enquire Now</a>
            <a href="tel:+911234567890" className="text-green-700 font-semibold flex items-center gap-2">
              <Phone className="w-5 h-5" /> Call: +91 12345 67890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
