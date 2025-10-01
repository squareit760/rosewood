import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, Scale, Building2, Heart, Laptop, FlaskConical, BookOpen, Globe } from 'lucide-react';

const Department = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const departments = [
    {
      id: 1,
      icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
      title: "Business And Finance",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
      id: 2,
      icon: <Scale className="w-12 h-12 text-orange-500" />,
      title: "Law And Criminology",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
      id: 3,
      icon: <Building2 className="w-12 h-12 text-orange-500" />,
      title: "IT And Data Science",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
      id: 4,
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      title: "Health And Medicine",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
      id: 5,
      icon: <Laptop className="w-12 h-12 text-orange-500" />,
      title: "Computer Science",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
      id: 6,
      icon: <FlaskConical className="w-12 h-12 text-orange-500" />,
      title: "Science & Research",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
      id: 7,
      icon: <BookOpen className="w-12 h-12 text-orange-500" />,
      title: "Arts & Literature",
      description: "There are many variations of passages the majority have some injected humour.",
    },
    {
      id: 8,
      icon: <Globe className="w-12 h-12 text-orange-500" />,
      title: "International Studies",
      description: "There are many variations of passages the majority have some injected humour.",
    }
  ];

  // Responsive items per slide - automatically handled by CSS grid
  const itemsPerSlide = 4; // Max items per slide (desktop)
  const totalSlides = Math.ceil(departments.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

//   const getCurrentDepartments = () => {
//     const start = currentSlide * itemsPerSlide;
//     return departments.slice(start, start + itemsPerSlide);
//   };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded mr-3 flex items-center justify-center">
              <span className="text-white text-sm font-bold">🏢</span>
            </div>
            <span className="text-orange-500 uppercase tracking-wider text-sm font-semibold">Department</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Browse Our <span className="text-orange-500">Department</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4">
                    {departments
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((department) => (
                        <div
                          key={department.id}
                          className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                          <div className="mb-4 lg:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            {department.icon}
                          </div>
                          
                          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-orange-500 transition-colors duration-300">
                            {department.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed">
                            {department.description}
                          </p>
                          
                          <button className="inline-flex items-center text-gray-900 font-semibold hover:text-orange-500 transition-colors duration-300 group text-sm lg:text-base">
                            READ MORE 
                            <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-12 h-12 lg:w-14 lg:h-14 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center z-10 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-12 h-12 lg:w-14 lg:h-14 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center z-10 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 lg:mt-12">
          <div className="flex space-x-2 lg:space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentSlide 
                    ? 'bg-orange-500 w-8 lg:w-10' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-6">
          <span className="text-sm text-gray-500 font-medium">
            {currentSlide + 1} of {totalSlides}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Department;