import React from "react";

const SchoolHistory = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-orange-500 font-semibold uppercase mb-2">
          Our Journey
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          History of Our <span className="text-orange-500">School</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mx-auto mt-4"></div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Paragraphs */}
        <div className="text-gray-600 space-y-6 leading-relaxed">
          <p>
            Established in <span className="font-semibold">1985</span>, our
            school has been a cornerstone of academic excellence and holistic
            education for decades. From its humble beginnings with just a few
            classrooms, the institution has grown into a vibrant hub of learning
            and innovation.
          </p>
          <p>
            Guided by a mission to nurture young minds, the school has always
            placed emphasis on a balanced approach to education — blending
            academics, sports, cultural activities, and community engagement.
            Generations of students have walked through our corridors, carrying
            forward the values of integrity, discipline, and creativity.
          </p>
          <p>
            Today, our school stands proud as a modern institution with advanced
            facilities, dedicated faculty, and a reputation for producing
            confident, responsible, and successful individuals.
          </p>
        </div>

        {/* Right Side - Key Highlights */}
        <div className="bg-gray-50 shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Key <span className="text-orange-500">Milestones</span>
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="w-3 h-3 mt-2 rounded-full bg-orange-500 mr-3"></span>
              <p>
                <span className="font-semibold">1985:</span> School founded with
                50 students and 5 teachers.
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 mt-2 rounded-full bg-orange-500 mr-3"></span>
              <p>
                <span className="font-semibold">1995:</span> Expanded to include
                senior secondary classes and science labs.
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 mt-2 rounded-full bg-orange-500 mr-3"></span>
              <p>
                <span className="font-semibold">2005:</span> Introduced
                technology-enabled classrooms and smart learning methods.
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 mt-2 rounded-full bg-orange-500 mr-3"></span>
              <p>
                <span className="font-semibold">2020:</span> Ranked among the top
                schools in the region for excellence in education.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SchoolHistory;
