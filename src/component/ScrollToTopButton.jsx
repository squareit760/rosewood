import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-50
            w-12 h-12 sm:w-14 sm:h-14
            bg-gradient-to-r from-orange-400 to-orange-500
            hover:from-orange-500 hover:to-orange-600
            text-white rounded-full
            shadow-lg hover:shadow-xl
            transition-all duration-300 ease-in-out
            transform hover:scale-110 hover:-translate-y-1
            flex items-center justify-center
            focus:outline-none focus:ring-4 focus:ring-orange-300
            animate-bounce hover:animate-none
            group
          `}
          aria-label="Scroll to top"
        >
          <ArrowUp 
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:scale-110" 
          />
          
          {/* Ripple effect on hover */}
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
        </button>
      )}
    </>
  );
}

// Demo page content to test the scroll functionality
export function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Scroll Down to See the Button
        </h1>
        
        {/* Demo content sections */}
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Section {i + 1}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind', 'JavaScript', 'UI/UX'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Include the ScrollToTop button */}
      <ScrollToTopButton />
    </div>
  );
}