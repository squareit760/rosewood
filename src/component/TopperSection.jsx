import React from "react";
import { motion } from "framer-motion";

const toppers = [
  {
    name: "Aarav Sharma",
    achievement: "Scored 98% in Class 12 Board Exams",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500",
  },
  {
    name: "Isha Patel",
    achievement: "Gold Medalist – National Science Olympiad",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500",
  },
  {
    name: "Rohan Gupta",
    achievement: "State Topper in Mathematics",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
  },
];

const TopperSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our <span className="text-orange-500">Toppers</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base md:text-lg">
          We are proud of our bright minds who have brought laurels to the
          school with their exceptional performance in academics and co-curricular
          activities.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {toppers.map((topper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={topper.img}
                alt={topper.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {topper.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {topper.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TopperSection;
