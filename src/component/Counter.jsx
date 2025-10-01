import { BookOpen, Users, GraduationCap, Award } from "lucide-react";

const Counter = () => {
  const counters = [
    
    {
      icon: <Users size={40} className="text-white" />,
      number: "1900",
      label: "Our Students",
    },
    {
      icon: <GraduationCap size={40} className="text-white" />,
      number: "750",
      label: "Skilled Lecturers",
    },
    {
      icon: <Award size={40} className="text-white" />,
      number: "10",
      label: "Win Awards",
    },
    {
      icon: <BookOpen size={40} className="text-white" />,
      number: "500",
      label: "Books In Library",
    },
  ];

  return (
    <section
      className="py-4 bg-fixed relative"
      style={{
        backgroundImage:
          'url("https://live.themewild.com/eduka/assets/img/counter/01.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/70"></div>

      <div className="container relative mx-auto px-6 lg:px-20 z-20">
        {/* Grid of Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {counters.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-white"
            >
              {/* Orange Circle Icon */}
              <div className="flex items-center justify-center bg-orange-500 rounded-full w-20 h-20 mb-4 shadow-lg">
                {item.icon}
              </div>
              {/* Number */}
              <h3 className="text-3xl font-bold">{item.number}</h3>
              {/* Label */}
              <p className="text-sm mt-1">+ {item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
