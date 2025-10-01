import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Trophy,
  Book,
} from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample gallery data - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
      title: "Annual Sports Day 2024",
      category: "sports",
      description: "Students participating in track and field events",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      title: "Science Laboratory",
      category: "academics",
      description: "Modern science lab with latest equipment",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
      title: "School Campus",
      category: "campus",
      description: "Beautiful campus grounds and buildings",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      title: "Cultural Festival",
      category: "events",
      description: "Students performing traditional dance",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
      title: "Basketball Tournament",
      category: "sports",
      description: "Inter-house basketball championship",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      title: "Graduation Ceremony",
      category: "events",
      description: "Class of 2024 graduation celebration",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=800&h=600&fit=crop",
      title: "Art & Craft Room",
      category: "academics",
      description: "Creative arts and crafts activities",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop",
      title: "School Garden",
      category: "campus",
      description: "Students learning about nature and environment",
    },
  ];

  const categories = [
    { id: "all", name: "All Photos", icon: null },
    { id: "academics", name: "Academics", icon: Book },
    { id: "sports", name: "Sports", icon: Trophy },
    { id: "events", name: "Events", icon: Calendar },
    { id: "campus", name: "Campus", icon: Users },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const prevIndex =
      currentImageIndex > 0
        ? currentImageIndex - 1
        : filteredImages.length - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const goToNext = () => {
    const nextIndex =
      currentImageIndex < filteredImages.length - 1
        ? currentImageIndex + 1
        : 0;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <>
      {/* Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/About.jpg"
            alt="School Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Animated Text */}
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
        {/* Header */}
        <div className="text-center mb-12 pt-12">
          <p className="text-orange-500 font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            Gallery
          </p>
          <h2 className="text-5xl font-bold">
            Our Photo <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
                  }`}
                >
                  {IconComponent && <IconComponent size={18} />}
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
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

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No images found for this category.
              </p>
            </div>
          )}
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
              {filteredImages.length > 1 && (
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
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full capitalize">
                    {selectedImage.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {currentImageIndex + 1} of {filteredImages.length}
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
