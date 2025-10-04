import React from "react";
import { ArrowRight } from "lucide-react";

export default function FacilitiesSection({ limit }) {
  // Array of objects inside component
  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Digital smart boards and interactive tools make lessons engaging and fun. Technology-driven learning enhances understanding and interest in every subject.",
      img: "/images/Classroom.jpg",
    },
    {
      title: "Safe Transport",
      desc: "Our secure and reliable transport ensures worry-free travel for students. Buses are well-maintained and supervised for safety and comfort.",
      img: "/images/Transport.jpg",
    },
    {
      title: "Science & Computer Labs",
      desc: "quipped with modern tools and technology, our labs make learning practical and interactive. Students explore, experiment, and innovate with hands-on experiences.",
      img: "/images/com-sci.jpg",
    },
    {
      title: "Transport Facility",
      desc: "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      img: "/images/F4.jpg",
    },
    {
      title: "Lab Facility",
      desc: "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      img: "/images/F5.jpg",
    },
    {
      title: "Gymnasium Facility",
      desc: "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
      img: "/images/F6.jpg",
    },
  ];

  // Agar limit pass hua hai to slice karo warna pura dikhado
  const displayedFacilities = limit ? facilities.slice(0, limit) : facilities;

  return (
    <section
      className="py-12 bg-fixed relative"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1647451963111-fc00cc4ae830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNjaG9vbCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
        <p className="text-[#f59e0b] font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
          🏫 Our Facilities
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
          Let’s Check Our <span className="text-orange-500">Facilities</span>
        </h2>
        <p className="text-white mt-3">
          “Discover world-class facilities at Rosewood International School
          designed to nurture learning and growth.”
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 relative z-10">
        {displayedFacilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={facility.img}
                alt={facility.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold">{facility.title}</h3>
              <p className="text-gray-900 text-sm mt-2">{facility.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show "View More" only if limited */}
      {limit && facilities.length > limit && (
        <div className="text-center mt-10 relative z-10">
          <a
            href="/academics/facilities"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            View All Facilities <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      )}
    </section>
  );
}
