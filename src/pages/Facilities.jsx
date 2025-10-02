import React from "react";
import { motion } from "framer-motion";
import { Music, Gamepad2, Laptop, Bot, Library, Home, ChevronRight } from "lucide-react";
import { GiRollerSkate } from "react-icons/gi";
import { Link } from "react-router-dom";

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
            alt="School Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, x: 100 }} // right side se start
            animate={{ opacity: 1, x: 0 }} // beech me aa jaye
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-4">
                Facilities
              </h1>
              <div className="flex justify-center">
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
              </div>
            </div>

            {/* Breadcrumb */}
            <nav
              className="flex items-center space-x-2 text-sm sm:text-base"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center space-x-2">
                <li className="flex items-center">
                  <Link
                    to="/"
                    className="group flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    aria-label="Go to homepage"
                  >
                    <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-1 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">Home</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                </li>
                <li className="flex items-center">
                  <span
                    className="text-orange-400 font-semibold"
                    aria-current="page"
                  >
                    Facilities
                  </span>
                </li>
              </ol>
            </nav>
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
