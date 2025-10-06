import { GraduationCap, Building, Monitor, Car } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "English Medium Education",
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      bgColor: "bg-orange-500",
    },
    {
      id: 2,
      title: "Modern Infrastructure",
      icon: <Building className="w-8 h-8 text-white" />,
      bgColor: "bg-green-500",
    },
    {
      id: 3,
      title: "Dedicated Faculty",
      icon: <Monitor className="w-8 h-8 text-white" />,
      bgColor: "bg-purple-500",
    },
    {
      id: 4,
      title: "Transportation Facilities",
      icon: <Car className="w-8 h-8 text-white" />,
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <section
      className="relative bg-fixed py-16 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url("/images/choose-bg.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute bg-black/50 inset-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-orange-500 rounded"></div>
                <span className="text-orange-500 font-medium uppercase tracking-wide text-sm">
                  WHY CHOOSE US
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                We Are Expert & <span className="text-orange-500">Do Our</span>
                <br />
                <span className="text-orange-500">Best</span> For Your Goal
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed max-w-lg">
                At Rosewood International School, Gonda, we nurture young minds
                through a balanced blend of academics, creativity, and real-life
                skills to prepare them for a bright future.
              </p>
            </div>
          </div>

          {/* RIGHT: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full max-w-xs text-center"
              >
                <div
                  className={`${feature.bgColor} rounded-xl p-4 inline-flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg leading-snug">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
