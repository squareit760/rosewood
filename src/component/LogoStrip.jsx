import React from 'react';

const LogoStrip = () => {
  // Logo data - you can replace these with your actual logo URLs
  const logos = [
    {
      id: 1,
      name: "Borcelle University",
      src: "/images/logo1.png",
      alt: "Borcelle University Logo"
    },
    {
      id: 2,
      name: "Skyline Institute",
      src: "images/logo2.png",
      alt: "Skyline Institute Logo"
    },
    {
      id: 3,
      name: "Knowledge Center",
      src: "images/logo3.png",
      alt: "Knowledge Center Logo"
    },
    {
      id: 4,
      name: "Literature & Publication",
      src: "images/logo4.png",
      alt: "Literature & Publication Logo"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
       
        
        {/* Logo Slider Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide space-x-8">
            {/* First set of logos */}
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain p-4"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo) => (
              <div
                key={`duplicate-${logo.id}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain p-4"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edge effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
        
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-slide {
            animation-duration: 15s;
          }
        }
        
        @media (max-width: 480px) {
          .animate-slide {
            animation-duration: 12s;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoStrip;