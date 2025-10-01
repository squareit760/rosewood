import React from "react";
import { Home, ChevronRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import FAQSection from "../component/academics/FAQSection";

const Admissions = () => {
  return (
    <>
      {/* 🔹 Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/About.jpg')`, // apni admissions wali image ka path dalna
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Pattern Overlay */}
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

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              How To Apply
            </h1>
            <div className="flex justify-center mb-6">
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
            </div>

            {/* Breadcrumb */}
            <nav
              className="flex items-center justify-center space-x-2 text-sm sm:text-base"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center space-x-2">
                <li className="flex items-center">
                  <a
                    href="/"
                    className="group flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200"
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
                    Admissions
                  </span>
                </li>
              </ol>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* 🔹 How To Apply Section */}
      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-orange-500 font-semibold uppercase flex items-center gap-2 mb-2">
              <span className="text-lg">📑</span> How To Apply
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Details About{" "}
              <span className="text-orange-500">How To Apply</span> rOsewd.
            </h2>
            <p className="text-gray-600 mb-4">
              There are many variations of passages available but the majority
              have suffered alteration in some form by injected humour
              randomised words which don’t look even slightly believable. If you
              are going to use a passage you need sure there isn’t anything
              embarrassing first true generator on the Internet.
            </p>
            <p className="text-gray-600 mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                "Start Online Submission",
                "Submit The Form",
                "Review The Submission",
                "Gather Necessary Documents",
                "Interviewing Process",
                "Last Decision",
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all">
              Apply Now →
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/images/admission.jpg" 
              alt="How To Apply"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* 🔹 Bottom Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Things To Know First</h3>
            <p className="text-gray-600 mb-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable.
            </p>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here making
              it look like readable English.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Documents And Financial Aid
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" /> Sed ut
                perspiciatis unde omnis iste natus error sit doloremque
                laudantium.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" /> Totam
                rem aperiam eaque ipsa quae ab illo inventore veritatis.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" /> Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" /> Dolores
                eos qui ratione voluptatem sequi nesciunt porro quisquam est.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" /> Adipisci
                velit sed quia non numquam eius modi tempora incidunt.
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
