import { Star, Users, Clock } from "lucide-react";

export default function CourseData() {
  const coursesData = [
    {
      id: 1,
      title: "Blooming Buds (Playgroup) ",
      description: "Foundation of curiosity & fun learning.",
      image:
        "https://media.istockphoto.com/id/2150364938/photo/reading-is-fun.jpg?s=612x612&w=0&k=20&c=0Xk20ZPtD5cgoAcD2IFQgn-Fq5IvCd2vHNsLqELcx00=", // ✅ Random Image
      category: "Drama",
      categoryColor: "bg-orange-500",
      lessons: 10,
      duration: "04 Years",
      seats: 75,
      rating: 4.0,
      price: "$750",
    },
    {
      id: 2,
      title: "Exploration Stage",
      description: "Hands-on learning, creativity      .",
      image:
        "https://img.freepik.com/free-photo/happy-kids-elementary-school_53876-138141.jpg",
      category: "Design",
      categoryColor: "bg-yellow-500",
      lessons: 10,
      duration: "04 Years",
      seats: 75,
      rating: 4.0,
      price: "$750",
    },
    {
      id: 3,
      title: "Sublime Stage",
      description: "Academic excellence + leadership.",
      image:
        "https://media.istockphoto.com/id/918576744/photo/education-is-the-key-to-our-future.jpg?s=612x612&w=0&k=20&c=meW955zYtlkMr0UWDSIOICtvJX7IKt-uKiudTrbljJQ=",
      category: "Science",
      categoryColor: "bg-blue-500",
      lessons: 10,
      duration: "04 Years",
      seats: 75,
      rating: 4.0,
      price: "$750",
    },
  ];

  // const renderStars = (rating) => {
  //   return [...Array(5)].map((_, index) => (
  //     <Star
  //       key={index}
  //       className={`w-3 h-3 ${
  //         index < Math.floor(rating)
  //           ? "text-yellow-400 fill-yellow-400"
  //           : "text-gray-300"
  //       }`}
  //     />
  //   ));
  // };

  return (
    <section className="py-14 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-medium uppercase tracking-wide text-sm">
            Academic Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Check Our <span className="text-orange-500">Programs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our academic programs are designed to nurture curiosity, critical
            thinking, and creativity in every student.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl  transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div
                  className={`absolute top-4 left-4 ${course.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                >
                  📚 {course.category}
                </div> */}
              </div>

              {/* Content */}
              <div className="p-2">
                {/* <div className="flex items-center gap-1 text-orange-500 text-sm font-medium mb-1">
                  📖 {course.lessons} Lessons
                </div> */}

                {/* <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {renderStars(course.rating)}
                  </div>
                  <span className="text-gray-600 text-xs">
                    ({course.rating})
                  </span>
                </div> */}

                <h3 className="text-lg font-bold text-orange-600">
                  {course.title}
                </h3>

                <p className="text-gray-900 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
