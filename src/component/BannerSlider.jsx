import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  BookOpen,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const bannerData = [
    {
      id: 1,
      backgroundImage: "/images/slider-1.jpg",
      title: "Nurturing Young Minds,",
      highlight: "Inspiring",
      subtitle: "Bright Futures",
      description:
        "An environment where learning is joyful, curiosity is encouraged, and every child grows with confidence and compassion.",
    },
    {
      id: 2,
      backgroundImage: "/images/slider-2.jpg",
      title: "Where Education Meets",
      highlight: "Values",
      subtitle: "and Excellence",
      description:
        "Dedicated to holistic development — empowering students with strong academics, discipline, and a sense of responsibility.",
    },
    {
      id: 3,
      backgroundImage: "/images/slider-3.jpg",
      title: "Building Character,",
      highlight: "Confidence,",
      subtitle: "and Creativity",
      description:
        "A place for every learner to explore, discover, and shine — preparing them to lead tomorrow with knowledge and kindness.",
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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentBanner = bannerData[currentSlide];

  return (
    <div className="relative w-full min-h-[88vh] lg:mt-20 mt-4 overflow-hidden">
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/70 bg-opacity-60"></div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-300
        left-1/4 bottom-6 md:left-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-300
        right-1/4 bottom-6 md:right-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div
          key={`title-${animationKey}`}
          className="mb-8 animate-[slideInRight_0.8s_ease-out_0.2s_both]"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
            {currentBanner.title}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-orange-400">{currentBanner.highlight}</span>{" "}
            {currentBanner.subtitle}
          </h1>
        </div>

        <p
          key={`desc-${animationKey}`}
          className="text-gray-200 text-center text-lg mb-8 max-w-2xl mx-auto animate-[slideInRight_0.8s_ease-out_0.4s_both]"
        >
          {currentBanner.description}
        </p>

        <div
          key={`buttons-${animationKey}`}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-[slideInRight_0.8s_ease-out_0.6s_both]"
        >
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Contact Us →
          </Link>
          <Link
            to="/admissions"
            className="border-2 border-white border-opacity-50 hover:border-opacity-100 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black"
          >
            How To Apply →
          </Link>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-orange-500 w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-70"
              }`}
            />
          ))}
        </div>
      </div>

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
