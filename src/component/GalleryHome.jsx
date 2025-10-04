import React from "react";
import { ArrowRight } from "lucide-react"; // ✅ using lucide-react for arrow icon
import { Link } from "react-router-dom";

const GalleryHome = () => {
  const images = [
    "/images/gal3.png",
    "/images/gal20.jpg",
    "/images/gal4.png",
  ];

  return (
    <section className="py-12 bg-white mb-10">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
          Gallery
        </p>
        <h2 className="text-5xl font-bold">
          Our Photo <span className="text-orange-500">Gallery</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
         "Our gallery captures the vibrant spirit of Rosewood International School. From academics to activities, explore the moments that make learning joyful."
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md"
          >
            {/* Image */}
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Orange Overlay with Plus Icon
            <div className="absolute inset-0 bg-orange-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-5xl font-bold">+</span>
            </div> */}
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link
          to="/gallery" // 🔹 Replace with your actual gallery route
          className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition-all duration-300"
        >
          View All 
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default GalleryHome;
