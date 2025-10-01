import React, { useState, useEffect } from "react";
import { Star, Crown } from "lucide-react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      rating: 99,
      text: "Rosewood International has made learning exciting for my son. The smart classrooms and caring teachers keep him motivated every day.",
      name: "Dinesh Kumar",
      role: "Student",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format",
    },
    {
      id: 2,
      rating: 99,
      text: "My daughter is excelling not just in academics but also in cultural and sports activities. The school truly ensures all-round growth.",
      name: "Hirday Narayan Mishra",
      role: "Student",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format",
    },
    {
      id: 3,
      rating: 99,
      text: "The teachers here are so supportive, and I enjoy both studies and co-curricular activities. Rosewood feels like my second home.",
      name: "Apurva Soni",
      role: "Student",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=64&h=64&fit=crop&crop=face&auto=format",
    },
    {
      id: 4,
      rating: 99,
      text: "My little one loves going to school daily. The Kids Play Zone and fun-based learning make education enjoyable right from the start.",
      name: "Pawan Kumar Soni",
      role: "Student",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=face&auto=format",
    },
    {
      id: 5,
      rating: 99,
      text: "“From robotics to dance, my son gets exposure to everything. Rosewood is shaping him into a confident and curious learner.",
      name: "Priti Rawat",
      role: "Student",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face&auto=format",
    },
    {
      id: 6,
      rating: 99,
      text: "Rosewood gave me strong values and confidence for life. I will always be grateful to my teachers and this wonderful school.",
      name: "Anuj kumar",
      role: "Student",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format",
    },
  ]);

  // Slide har 3 second me
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonials((prev) => {
        const newArr = [...prev];
        const first = newArr.shift(); // pehla card nikaal do
        newArr.push(first); // usko last me daal do
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = () =>
    Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className="w-4 h-4 sm:w-5 sm:h-5 fill-orange-400 text-orange-400"
      />
    ));

  return (
    <section
      className="relative py-16 sm:py-20 px-4 
      bg-white
      overflow-hidden"
      // style={{
      //   backgroundImage:
      //     'url("/images/test.jpg")',
      // }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#273F62]/80"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-10">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Crown className="w-7 h-7 sm:w-8 sm:h-8 text-orange-400 mr-2" />
            <span className="text-orange-400 uppercase tracking-wider text-sm sm:text-base font-semibold">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold text-black mb-6 sm:mb-8">
            Voices Of <span className="text-orange-400">Trust</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex">
          {testimonials.slice(0, 4).map((t) => ( // sirf 4 ek row me dikhane ke liye
            <div key={t.id} className="w-1/4 flex-shrink-0 px-2 sm:px-3">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 relative">
                {/* Badge */}
                <div className="absolute -top-3 -right-3 bg-orange-400 text-white font-bold text-lg sm:text-xl px-3 py-2 rounded-full shadow-md">
                  {t.rating}
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-4">{renderStars()}</div>

                {/* Text */}
                <p className="text-gray-600 text-sm sm:text-base mb-6 italic leading-relaxed text-center">
                  "{t.text}"
                </p>

                {/* User */}
                <div className="flex items-center justify-center">
                  {/* <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-orange-400 object-cover mr-3"
                  /> */}
                  <div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                      {t.name}
                    </h4>
                    <p className="text-orange-400 font-medium text-sm sm:text-base">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
