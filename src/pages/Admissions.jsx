import React from "react";
import { Home, ChevronRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import FAQSection from "../component/academics/FAQSection";
import { Link } from "react-router-dom";

const Admissions = () => {
  return (
    <>
      {/* 🔹 Hero Section */}
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
                      How to Apply
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
                          Admission
                        </span>
                      </li>
                    </ol>
                  </nav>
                </motion.div>
              </div>
            </section>

      {/* 🔹 Admissions / How To Apply Section */}
      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div>
            <p className="text-orange-500 font-semibold uppercase flex items-center gap-2 mb-2">
              <span className="text-lg">📋</span> Admissions Info
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              How to Join{" "}
              <span className="text-orange-500">
                Rosewood International School
              </span>
            </h2>
            <p className="text-gray-600 mb-4">
              Rosewood International School in Gonda is committed to nurturing
              holistic growth, academic excellence, and character building. Our
              admissions process is designed to be straightforward and
              transparent.
            </p>
            <p className="text-gray-600 mb-6">
              We welcome students from early years through senior levels, and
              encourage prospective families to review our offerings, values,
              infrastructure, and academic philosophy before applying.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                "Obtain Application Form (Offline/Download PDF)",
                "Submit Filled Form at Campus",
                "Document Verification & Review",
                "Attend Personal Interaction / Assessment",
                "Final Admission Decision",
                "Complete Admission Formalities",
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>

            {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all">
              Download Form / Visit Campus
            </button> */}
          </div>

          {/* Right Side Image */}
          <div className="relative">
            <img
              src="/images/apply.jpg"
              alt="Admissions at Rosewood International School"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* 🔹 Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">What to Know First</h3>
            <p className="text-gray-600 mb-3">
              At Rosewood International School, we emphasize that your child’s
              development is as important as academic achievement. We strive for
              balance between rigorous curriculum and fostering creativity,
              values, leadership, and social responsibility.
            </p>
            <p className="text-gray-600">
              We recommend that prospective families visit our campus, meet our
              faculty, and understand the journey we offer—academically,
              co-curricularly, and in student life.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Required Documents & Policies
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" /> Birth
                certificate (original + copy)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" /> Previous
                school report card / transfer certificate
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />{" "}
                Passport-size photographs
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle classsize="w-5 h-5 text-green-500 mt-1" /> Proof of
                residence / address
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" /> Any
                other academic or identity documents
              </li>
            </ul>
          </div>
        </div>

        <FAQSection />
      </section>
    </>
  );
};

export default Admissions;
