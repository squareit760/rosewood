import React from "react";
import {
  Trophy,
  Users,
  Target,
  Zap,
  Heart,
  Activity,
  Waves,
  Gamepad2,
} from "lucide-react";
import { BiBasketball } from "react-icons/bi";

const Sports = () => {
  // ✅ Arrays moved here before return
  const sportsData = [
    {
      title: "Basketball",
      icon: <BiBasketball className="w-12 h-12 text-orange-500" />,
      description:
        "Modern basketball courts designed to nurture talent & passion for the game.",
      benefits: [
        "Basketball builds strength, agility, and sharp decision-making skills.",
        "Develops teamwork and competitive spirit among students.",
      ],
      image: "/images/Basketball.jpg",
    },
    {
      title: "Cricket",
      icon: <Activity className="w-12 h-12 text-orange-500" />,
      description:
        "Cricket enhances focus, patience, and strategic thinking in students.",
      benefits: [
        "Exciting inter-school matches build confidence and team spirit.",
        "Develops leadership qualities and sportsmanship.",
      ],
      image: "/images/cricket.jpg",
    },
    {
      title: "Badminton",
      icon: <Zap className="w-12 h-12 text-orange-500" />,
      description:
        "Badminton boosts agility, stamina, and quick reflexes in students.",
      benefits: [
        "Regular practice builds fitness, focus, and sportsmanship.",
        "It nurtures patience, precision and the art of concentration.",
      ],
      image: "/images/Badminton.jpg",
    },
    {
      title: "Shooting",
      icon: <Target className="w-12 h-12 text-orange-500" />,
      description: "Aim, Focus, Achieve - Where Discipline meets Precision.",
      benefits: [
        "Shooting helps students build sharp focus, patience & precision.",
        "Develops mental discipline and concentration skills.",
      ],
      image: "/images/shooting.jpeg",
    },
    {
      title: "Archery",
      icon: <Target className="w-12 h-12 text-orange-500" />,
      description:
        "Archery enhances focus discipline and self-confidence in every child.",
      benefits: [
        "It nurtures patience, precision and the art of concentration.",
        "Builds mental strength and decision-making abilities.",
      ],
      image: "/images/Archery.jpeg",
    },
    {
      title: "Taekwondo",
      icon: <Users className="w-12 h-12 text-orange-500" />,
      description: "Kick High, Aim Higher - Taekwondo for Strength & Focus.",
      benefits: [
        "Confidence that protects, Skills that Empower.",
        "Discipline, Respect & Leadership - The Spirit of Taekwondo.",
      ],
      image: "/images/Taekwondo.jpg",
    },
    {
      title: "Swimming Pool",
      icon: <Waves className="w-12 h-12 text-orange-500" />,
      description: "State-of-the art swimming pool for complete fitness & fun.",
      benefits: [
        "A mark of modern, world-class education facilities.",
        "Building confidence, discipline, and life skills through swimming.",
      ],
      image: "/images/Swimming.jpeg",
    },
    {
      title: "Indoor Games",
      icon: <Gamepad2 className="w-12 h-12 text-orange-500" />,
      description: "Indoor games sharpen the mind while making learning fun.",
      benefits: [
        "Indoor play creates a balance between relaxation & creativity.",
        "Develops strategic thinking and problem-solving skills.",
      ],
      image: "/images/Indoor.jpeg",
    },
    {
      title: "Volleyball",
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      description:
        "It builds strength, stamina, and sharp reflexes through active play.",
      benefits: [
        "Volleyball is an exciting way to stay fit and energized every day.",
        "Promotes teamwork and communication skills.",
      ],
      image: "/images/Volleyball.jpeg",
    },
  ];

  const whySportsMatters = [
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: "Physical Fitness",
      description:
        "Building strong, healthy bodies through regular sports activities.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Teamwork",
      description: "Learning collaboration, communication, and team spirit.",
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Discipline",
      description:
        "Developing focus, dedication, and self-control through sports.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-500" />,
      title: "Leadership",
      description:
        "Building confidence and leadership qualities through competition.",
    },
  ];

  return (
    <div className="w-full">
      {/* 🔹 Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/About.jpg"
            alt="Sports Activities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Sports & <span className="text-orange-500">Activities</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            Building champions through sports - where discipline meets passion,
            and every game shapes character, confidence, and excellence.
          </p>
        </div>
      </section>

      {/* 🔹 Sports Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Sports <span className="text-orange-500">Programs</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of sports activities designed to
            develop physical fitness, mental strength, and character building in
            our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsData.map((sport, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">{sport.icon}</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {sport.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {sport.description}
                </p>

                <div className="space-y-2">
                  {sport.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Sports <span className="text-orange-500">Matters</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Sports education goes beyond physical fitness - it's about
              building character, leadership, and life skills that last forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySportsMatters.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Call to Action */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Sports Community
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Discover your passion, build your strength, and become part of our
            winning sports culture. Every champion starts with a single step.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Explore Our Programs
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sports;
