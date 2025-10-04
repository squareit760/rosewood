import React from "react";
import { motion } from "framer-motion";

const VisionMissionSection = () => {
  return (
    <section className="bg-gray-50 lg:mt-0 mt-6 py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* 🔹 Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800"
            alt="Vision"
            className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          />
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-orange-500">Vision</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              At Rosewood College, our vision is to be a pioneering institution
              that sets the benchmark for excellence in education. We envision a
              future where every student emerges as a confident leader, equipped
              with the knowledge, skills, and values to make meaningful
              contributions to society. By cultivating a culture of innovation,
              collaboration, and inclusivity, we aim to empower our students to
              shape a better world for generations to come.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                To empower students with confidence and leadership skills.
              </li>
              <li>
                To nurture innovation, creativity, and independent thinking.
              </li>
              <li>
                To build a strong value system with integrity and empathy.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 🔹 Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse md:flex-row items-center gap-10"
        >
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-orange-500">Mission</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              Our mission at Rosewood College is to foster a dynamic learning
              community where students are empowered to become compassionate,
              curious, and responsible global citizens. Through a rigorous
              academic curriculum, diverse co-curricular activities, and
              personalized support, we strive to ignite a lifelong love for
              learning and instil values of integrity, empathy, and resilience
              in our students.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Deliver student-centered education with modern pedagogy.</li>
              <li>
                Encourage participation in sports, arts, and cultural programs.
              </li>
              <li>
                Provide opportunities for community service and social
                responsibility.
              </li>
              <li>
                Foster an inclusive environment that respects diversity and
                individuality.
              </li>
            </ul>
          </div>
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="Mission"
            className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
