import React from "react";
import {
  GraduationCap,
  Sprout,
  Monitor,
  Puzzle,
} from "lucide-react";

const features = [
  {
    id: "01",
    title: "Dedicated Faculty",
    desc: "Experienced teachers who nurture students with care and innovation.",
    icon: <GraduationCap size={32} />,
  },
  {
    id: "02",
    title: "Balanced Learning",
    desc: "Equal focus on academics, arts, sports, and co-curricular growth.",
    icon: <Puzzle size={32} />,
  },
  {
    id: "03",
    title: " Smart & Modern Classrooms",
    desc: "Technology-enabled learning for a future-ready education.",
    icon: <Monitor size={32} />,
  },
  {
    id: "04",
    title: "Holistic Development",
    desc: "Building character, confidence, and values alongside knowledge..",
    icon: <Sprout size={32} />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-[#f59e0b] font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
          <span>📑</span> Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
         What Makes Us  <span className="text-orange-500">Stand Out</span>
        </h2>
        <p className="text-gray-500 mt-3">
         “Education at Rosewood goes beyond textbooks — fostering knowledge, creativity, and character in every child.”
        </p>
      </div>

      {/* Features Grid */}
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center relative hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center">
              <div className="bg-[#0f766e] text-white p-4 rounded-full shadow-md">
                {feature.icon}
              </div>
            </div>

            {/* Number */}
            <span className="absolute top-4 right-6 text-2xl font-bold text-[#0f766e] opacity-80">
              {feature.id}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
