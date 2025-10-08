import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const bannerData = [
    {
      id: 1,
      backgroundImage: "/images/banner-1.webp",
      title: "Nurturing Young Minds,",
      highlight: "Inspiring",
      subtitle: "Bright Futures",
      description:
        "An environment where learning is joyful, curiosity is encouraged, and every child grows with confidence and compassion.",
    },
    {
      id: 2,
      backgroundImage: "/images/banner-2.webp",
      title: "Where Education Meets",
      highlight: "Values",
      subtitle: "and Excellence",
      description:
        "Dedicated to holistic development — empowering students with strong academics, discipline, and a sense of responsibility.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    setAnimationKey((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerData.length) % bannerData.length
    );
    setAnimationKey((prev) => prev + 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAnimationKey((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentBanner = bannerData[currentSlide];

  return (
    <div className="relative w-full min-h-[80vh] lg:min-h-[100vh] mt-2 overflow-hidden">
      {/* Background Images */}
      {bannerData.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={banner.backgroundImage}
            alt={`Banner ${index + 1}`}
            className="w-full h-[75vh] sm:h-[85vh] md:h-[95vh] lg:h-[100vh] object-cover object-top"
          />
          <div className="absolute inset-0 bg-green-900/70 bg-opacity-60"></div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300
        left-5 bottom-6 sm:left-6 sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto"
      >
        <ChevronLeft className="w-5 h-5 text-black sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300
        right-5 bottom-6 sm:right-6 sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto"
      >
        <ChevronRight className="w-5 h-5 text-black sm:w-6 sm:h-6" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center items-center text-center text-white min-h-[75vh] sm:min-h-[85vh] md:min-h-[90vh]">
        <div
          key={`title-${animationKey}`}
          className="mb-6 sm:mb-8 animate-[slideInRight_0.8s_ease-out_0.2s_both]"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-2">
            {currentBanner.title}
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
            <span className="text-orange-400">{currentBanner.highlight}</span>{" "}
            {currentBanner.subtitle}
          </h1>
        </div>

        <p
          key={`desc-${animationKey}`}
          className="text-gray-200 text-sm sm:text-base md:text-lg mb-8 max-w-xl sm:max-w-2xl mx-auto animate-[slideInRight_0.8s_ease-out_0.4s_both]"
        >
          {currentBanner.description}
        </p>

        <div
          key={`buttons-${animationKey}`}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-16 animate-[slideInRight_0.8s_ease-out_0.6s_both]"
        >
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
          >
            Contact Us →
          </Link>
          <Link
            to="/admissions"
            className="border-2 border-white border-opacity-60 hover:border-opacity-100 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black w-full sm:w-auto text-sm sm:text-base"
          >
            How To Apply →
          </Link>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-4 sm:mt-8 space-x-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-orange-500 w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;
