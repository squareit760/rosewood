import React from "react";
import { motion } from "framer-motion";
import { Music, Gamepad2, Laptop, Bot, Library } from "lucide-react";
import { GiRollerSkate } from "react-icons/gi";

const Facilities = () => {
  const facilitiesData = [
    {
      title: "Smart / Digital Classroom",
      description:
        "Digital smart boards and interactive tools make lessons engaging and fun. Technology-driven learning enhances understanding and interest in every subject.",
      image: "/images/F1.jpg",
      icon: <Laptop className="w-12 h-12 text-orange-500 mb-4" />,
      reverse: false,
    },
    {
      title: "Music & Dance",
      description:
        "Students explore rhythm, melody, and movement through structured music and dance sessions. These activities enhance creativity, confidence, and cultural appreciation.",
      image: "/images/Dance.jpg",
      icon: <Music className="w-12 h-12 text-orange-500 mb-4" />,
      reverse: true,
    },
    {
      title: "Skating Activity",
      description:
        "Our skating programs promote balance, coordination, and physical fitness in a fun and safe environment. Students learn skills that build confidence and agility.",
      image: "/images/Skating.jpg",
      icon: <GiRollerSkate className="w-12 h-12 text-orange-500 mb-4" />,
      reverse: false,
    },
    {
      title: "Kids Play Zone",
      description:
        "A vibrant, safe play area designed for younger children to explore, socialize, and develop motor skills. It encourages fun, learning, and healthy interaction.",
      image: "/images/kids.jpg",
      icon: <Gamepad2 className="w-12 h-12 text-orange-500 mb-4" />,
      reverse: true,
    },
    {
      title: "Computer Lab",
      description:
        "Our hi-tech Computer Lab offers the latest systems with advanced software, enhancing technological skills through hands-on practical learning.",
      image: "/images/computer-lab.jpg",
      icon: <Laptop className="w-12 h-12 text-orange-500 mb-4" />,
      reverse: false,
    },
    {
      title: "Robotic Lab",
      description:
        "Hands-on robotics sessions foster innovation, problem-solving, and technical skills. Students design, build, and program robots for practical learning.",
      image: "/images/Robotic-lab.jpg",
      icon: <Bot className="w-12 h-12 text-orange-500 mb-4" />,
      reverse: true,
    },
    {
      title: "Digital Library",
      description:
        "State-of-the-art digital library provides vast e-resources, journals, and research material. Students enhance their knowledge and digital literacy for the future.",
      image: "/images/Digital-Library.jpg",
      icon: <Library className="w-12 h-12 text-orange-500 mb-4" />,
      reverse: false,
    },
  ];

  return (
    <div className="w-full">
      {/* 🔹 Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/About.jpg"
            alt="School Facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center text-white px-6"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-orange-500">Facilities</span>
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
              We provide world-class facilities to ensure holistic growth,
              creativity, and innovation among our students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Facilities Sections */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {facilitiesData.map((facility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: facility.reverse ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${
              facility.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10`}
          >
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full md:w-1/3 rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2">
              {facility.icon}
              <h2 className="text-3xl font-bold mb-4">{facility.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Facilities;
