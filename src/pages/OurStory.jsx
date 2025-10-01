import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  // 🔹 Story sections in an array
  const storySections = [
    {
      id: 1,
      title: "Our Beginning",
      desc: "Our institution was founded with the belief that every child deserves quality education. What began as a small initiative has now transformed into a vibrant community of learners and leaders.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
      reverse: false,
    },
    {
      id: 2,
      title: "Growing Together",
      desc: "Over the years, we have expanded our facilities, enhanced our teaching methods, and welcomed students from diverse backgrounds, all working together towards excellence.",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
      reverse: true,
    },
    {
      id: 3,
      title: "A Strong Community",
      desc: "Our story is incomplete without our teachers, parents, and students, who together build a strong foundation for future generations.",
      img: "/images/community.jpg",
      reverse: false,
    },
    {
      id: 4,
      title: "Looking Ahead",
      desc: "As we continue our journey, we aim to set higher standards in education and prepare our students for the challenges of the future.",
      img: "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?w=800",
      reverse: true,
    },
  ];

  return (
    <div className="w-full">
      {/* 🔹 Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/About.jpg"
            alt="Our Story"
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
              Our <span className="text-orange-500">Story</span>
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
              A journey of dedication, growth, and excellence in education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔹 About Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="lg:text-5xl md:text-5xl text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed max-w-7xl mx-auto text-base md:text-lg">
            For decades, we have been nurturing young minds with knowledge,
            values, and a vision for the future. Our school is not just a place
            of learning, but a family where every student grows with confidence
            and curiosity. We take pride in creating an environment where dreams
            are shaped and leaders are born. Guided by a mission to nurture
            young minds, the school has always placed emphasis on a balanced
            approach to education — blending academics, sports, cultural
            activities, and community engagement. Generations of students have
            walked through our corridors, carrying forward the values of
            integrity, discipline, and creativity. Today, our school stands
            proud as a modern institution with advanced facilities, dedicated
            faculty, and a reputation for producing confident, responsible, and
            successful individuals.
          </p>
        </motion.div>
      </section>

      {/* 🔹 Dynamic Story Sections */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {storySections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: section.reverse ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${
              section.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-start gap-10`}
          >
            <img
              src={section.img}
              alt={section.title}
              className="w-full md:w-1/3 rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default OurStory;
