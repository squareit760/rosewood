import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Users, BookOpen, DollarSign } from 'lucide-react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const bannerData = [
    {
      id: 1,
      backgroundImage: "/images/slider-1.jpg",
      title: "Start Your Beautiful",
      highlight: "And Bright",
      subtitle: "Future",
      description: "There are many variations of passages orem psum available but the majority have suffered alteration in some repeat predefined chunks form injected humour.",
      features: [
        { 
          icon: GraduationCap, 
          title: "Scholarship Facility", 
          desc: "It is a long established fact that a reader will be distracted.",
          number: "01"
        },
        { 
          icon: Users, 
          title: "Skilled Lecturers", 
          desc: "It is a long established fact that a reader will be distracted.",
          number: "02"
        },
        { 
          icon: BookOpen, 
          title: "Book Library Facility", 
          desc: "It is a long established fact that a reader will be distracted.",
          number: "03"
        },
        { 
          icon: DollarSign, 
          title: "Affordable Price", 
          desc: "It is a long established fact that a reader will be distracted.",
          number: "04"
        }
      ]
    },
    {
      id: 2,
      backgroundImage: "/images/slider-2.jpg",
      title: "Excellence in",
      highlight: "Education",
      subtitle: "Awaits You",
      description: "Discover world-class education with our comprehensive learning programs designed to shape your future and unlock your potential.",
      // features: [
      //   { 
      //     icon: GraduationCap, 
      //     title: "Premium Courses", 
      //     desc: "Access to premium educational content and advanced curriculum.",
      //     number: "01"
      //   },
      //   { 
      //     icon: Users, 
      //     title: "Expert Faculty", 
      //     desc: "Learn from industry experts and experienced professionals.",
      //     number: "02"
      //   },
      //   { 
      //     icon: BookOpen, 
      //     title: "Digital Resources", 
      //     desc: "Comprehensive digital library and learning materials.",
      //     number: "03"
      //   },
      //   { 
      //     icon: DollarSign, 
      //     title: "Flexible Payment", 
      //     desc: "Easy payment plans and scholarship opportunities.",
      //     number: "04"
      //   }
      // ]
    },
    {
      id: 3,
      backgroundImage: "/images/slider-3.jpg",
      title: "Transform Your",
      highlight: "Career",
      subtitle: "Today",
      description: "Join thousands of successful graduates who have transformed their careers through our innovative learning approach.",
      features: [
        { 
          icon: GraduationCap, 
          title: "Career Guidance", 
          desc: "Professional career counseling and guidance services.",
          number: "01"
        },
        { 
          icon: Users, 
          title: "Industry Mentors", 
          desc: "Connect with industry mentors and professionals.",
          number: "02"
        },
        { 
          icon: BookOpen, 
          title: "Practical Training", 
          desc: "Hands-on training and real-world project experience.",
          number: "03"
        },
        { 
          icon: DollarSign, 
          title: "Job Placement", 
          desc: "Dedicated placement support and job assistance.",
          number: "04"
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    setAnimationKey(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
    setAnimationKey(prev => prev + 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAnimationKey(prev => prev + 1);
  };

  // Auto slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, );

  const currentBanner = bannerData[currentSlide];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Images with Transition */}
      {bannerData.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
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

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl text-left text-white">
          
          {/* Welcome Badge */}
          <div 
            key={`badge-${animationKey}`}
            className="inline-flex items-center gap-2 bg-orange-500 bg-opacity-20 border border-orange-400 border-opacity-30 rounded-full px-4 py-2 text-orange-white text-sm font-medium mb-8 animate-[slideInRight_0.8s_ease-out]"
          >
            <GraduationCap className="w-4 h-4" />
            ⚓ WELCOME TO RoseWood International School!
          </div>

          {/* Main Title */}
          <div 
            key={`title-${animationKey}`}
            className="mb-8 animate-[slideInRight_0.8s_ease-out_0.2s_both]"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
              {currentBanner.title}
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-orange-400">{currentBanner.highlight}</span> {currentBanner.subtitle}
            </h1>
          </div>

          {/* Description */}
          <p 
            key={`desc-${animationKey}`}
            className="text-gray-300 text-lg mb-8 max-w-2xl animate-[slideInRight_0.8s_ease-out_0.4s_both]"
          >
            {currentBanner.description}
          </p>

          {/* Action Buttons */}
          <div 
            key={`buttons-${animationKey}`}
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-[slideInRight_0.8s_ease-out_0.6s_both]"
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              ABOUT MORE →
            </button>
            <button className="bg-transparent border-2 border-white border-opacity-50 hover:border-opacity-100 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:bg-opacity-10">
              LEARN MORE →
            </button>
          </div>
        </div>

        {/* Features Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {currentBanner.features.map((feature, index) => (
            <div
              key={`feature-${animationKey}-${index}`}
              className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-[slideInRight_0.8s_ease-out_${0.8 + index * 0.1}s_both]`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-6xl font-bold text-teal-600 opacity-20 leading-none mb-2">
                    {feature.number}
                  </div>
                  <h3 className="text-gray-800 font-semibold text-lg mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
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