import React from "react";
import { ArrowRight } from "lucide-react"; // ✅ using lucide-react for arrow icon

const GalleryHome = () => {
  const images = [
    "/images/G1.jpg",
    "/images/G2.jpg",
    "/images/G7.jpg",
  ];

  return (
    <section className="py-12 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
          Gallery
        </p>
        <h2 className="text-5xl font-bold">
          Our Photo <span className="text-orange-500">Gallery</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
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

            {/* Orange Overlay with Plus Icon */}
            <div className="absolute inset-0 bg-orange-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-5xl font-bold">+</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/gallery" // 🔹 Replace with your actual gallery route
          className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition-all duration-300"
        >
          View All Facilities
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default GalleryHome;
