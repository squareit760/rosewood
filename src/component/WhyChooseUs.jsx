import { GraduationCap, BookOpen, Monitor, DollarSign, Car, Building } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "English Medium Education",
      icon: <GraduationCap className="w-8 h-8" />,
      bgColor: "bg-orange-500",
    },
    {
      id: 2,
      title: "Modern Infrastructure",
      icon: <Building className="w-8 h-8" />,
      bgColor: "bg-yellow-500",
    },
    {
      id: 3,
      title: "Dedicated faculty",
      icon: <Monitor className="w-8 h-8" />,
      bgColor: "bg-orange-500",
    },
    {
      id: 4,
      title: "Transportation Facilities",
      icon: <Car className="w-8 h-8" />,
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <section className="relative bg-fixed py-16 px-4 overflow-hidden" 
    style={{ backgroundImage: 'url("/images/choose-bg.webp")',
       backgroundSize: 'cover',
        backgroundPosition: 'center' }}
    >
      {/* Background Pattern */}
      <div className="absolute bg-black/50 inset-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Header */}
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
                At Rosewood International School, Gonda, we focus on nurturing
                young minds with a perfect balance of academics, co-curricular
                activities, and life skills.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs"
                >
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div
                      className={`${feature.bgColor}rounded-xl p-2 flex-shrink-0`}
                    >
                      <div className="text-green-500">{feature.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="">
                      <h3 className="font-bold text-gray-900 text-md  leading-tight text-center">
                        {feature.title}
                      </h3>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 rounded-3xl p-1 max-w-md mx-auto">
                <div className="bg-white rounded-3xl overflow-hidden">
                  <img
                    src="/images/whychoose.jpg"
                    alt="Students walking together"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full opacity-60"></div>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-orange-300 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
