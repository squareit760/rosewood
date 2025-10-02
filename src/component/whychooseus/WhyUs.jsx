import React from "react";
import { BookOpen, Building2, Theater, Users, Bus, Key } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "English Medium Education",
      description: "Quality education delivered in English medium",
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art facilities for holistic learning",
    },
    {
      icon: <Theater className="w-10 h-10" />,
      title: "Co-Curricular & Sports",
      description: "Diverse activities for all-round development",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Caring Faculty",
      description: "Experienced teachers committed to student success",
    },
    {
      icon: <Bus className="w-10 h-10" />,
      title: "Safe Transport",
      description: "Safe and reliable transport for students",
    },
    {
      icon: <Key className="w-10 h-10" />,
      title: "Holistic Development",
      description: "Nurturing mind, body, and character together",
    },
  ];

  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden"
              style={{
                border: "1px solid #e5e7eb",
              }}
            >
              {/* Hover Background Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 150, 137, 0.03) 0%, rgba(255, 137, 4, 0.03) 100%)",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-6 inline-block">
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                    style={{
                      backgroundColor: "#FF8904",
                      boxShadow: "0 4px 14px 0 rgba(255, 137, 4, 0.25)",
                    }}
                  >
                    <div style={{ color: "#FFFFFF" }}>{feature.icon}</div>
                  </div>
                </div>

                {/* Title */}
                <h4
                  className="text-xl font-bold mb-3 transition-colors duration-300"
                  style={{ color: "#009689" }}
                >
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Bottom Accent Line */}
                <div
                  className="mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ backgroundColor: "#FF8904" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
