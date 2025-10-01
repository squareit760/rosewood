import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample gallery data - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "/images/gal1.jpg",
      title: "Annual Sports Day 2024",
      description: "Students participating in track and field events",
    },
    {
      id: 2,
      src: "/images/gal2.png",
      title: "Science Laboratory",
      description: "Modern science lab with latest equipment",
    },
    {
      id: 3,
      src: "/images/gal8.png",
      title: "School Campus",
      description: "Beautiful campus grounds and buildings",
    },
    {
      id: 4,
      src: "/images/gal5.png",
      title: "Cultural Festival",
      description: "Students performing traditional dance",
    },
    {
      id: 5,
      src: "/images/gal6.png",
      title: "Basketball Tournament",
      description: "Inter-house basketball championship",
    },
    {
      id: 6,
      src: "/images/gal7.png",
      title: "Graduation Ceremony",
      description: "Class of 2024 graduation celebration",
    },
    {
      id: 7,
      src: "/images/gal9.jpg",
      title: "Art & Craft Room",
      description: "Creative arts and crafts activities",
    },
    {
      id: 8,
      src: "/images/gal10.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 9,
      src: "/images/gal11.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 10,
      src: "/images/gal12.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 11,
      src: "/images/gal13.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 12,
      src: "/images/gal14.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 13,
      src: "/images/gal15.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 14,
      src: "/images/gal16.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 15,
      src: "/images/gal17.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 16,
      src: "/images/gal18.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 17,
      src: "/images/gal19.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 18,
      src: "/images/gal21.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 19,
      src: "/images/gal22.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 20,
      src: "/images/gal23.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 21,
      src: "/images/gal24.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 22,
      src: "/images/gal25.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
    {
      id: 23,
      src: "/images/gal26.jpg",
      title: "School Garden",
      description: "Students learning about nature and environment",
    },
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const prevIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : galleryImages.length - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const goToNext = () => {
    const nextIndex =
      currentImageIndex < galleryImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <>
      {/* Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/About.jpg"
            alt="School Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center text-white px-6"
          >
            <p className="text-orange-400 font-semibold uppercase tracking-wide mb-2">
              Explore Moments
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-orange-500">Gallery</span>
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
              A collection of cherished memories, events, and celebrations that
              reflect the vibrant life of our school community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center mb-12 pt-12">
          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Gallery
          </p>
          <h2 className="text-5xl font-bold">
            Our Photo <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Relive our best school moments through this collection of photos.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(image, index)}
              >
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Navigation Buttons */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-96 md:h-[70vh] object-cover"
                />
              </div>

              {/* Image Info */}
              <div className="p-6 bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {selectedImage.description}
                </p>
                <div className="mt-4 flex items-center justify-end">
                  <span className="text-sm text-gray-500">
                    {currentImageIndex + 1} of {galleryImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
