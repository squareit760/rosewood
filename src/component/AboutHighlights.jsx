import React, { useState, useEffect, useRef } from "react";
import { BookOpen, Globe, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHighlight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (componentRef.current) observer.observe(componentRef.current);
    return () => {
      if (componentRef.current) observer.unobserve(componentRef.current);
    };
  }, []);

  return (
    <div ref={componentRef} className="py-12 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            {/* Main image */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=600&q=80"
                alt="Classroom learning"
                className="w-full h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Top right circular image */}
            <div
              className={`absolute -top-4 right-4 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80"
                  alt="Students group"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom right library image */}
            <div
              className={`absolute bottom-6 right-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="w-48 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=80"
                  alt="School library"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <div
              className={`absolute bottom-4 left-4 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="bg-orange-500 rounded-2xl px-4 py-3 text-white shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold">30 Years Of</div>
                  <div className="text-xs opacity-90">Quality Education</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-5">
            {/* About Us Badge */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                ABOUT US
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Among the Top Schools <br />
              <span className="text-orange-500">in Gonda!</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              At Rosewood International School, we are more than educators—we
              are mentors committed to holistic growth. Our dedicated faculty
              fosters academic excellence through innovative programs that
              nurture creativity and critical thinking. Embracing a vibrant
              community spirit, we celebrate diversity and camaraderie. As one
              of the top schools in Gonda, Rosewood International School is
              devoted to shaping well-rounded individuals. Join us on this
              transformative journey, where education transcends boundaries.
              Apply today and experience the Rosewood difference.
            </p>

            {/* Bottom Section - all in one line */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* Button */}
              <Link
                to="/about-us"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105 shadow-md"
              >
                More About Us →
              </Link>

              {/* Call Section */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-orange-500 font-semibold text-sm">
                    Call Now
                  </div>
                  <a
                    href="tel:+916391000692"
                    className="text-gray-900 font-bold text-base"
                  >
                    +916391000692
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHighlight;
