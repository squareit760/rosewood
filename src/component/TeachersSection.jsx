import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function TeachersSection() {
  const teachersData = [
    {
      id: 1,
      name: "Angela T. Vigil",
      position: "ASSOCIATE PROFESSOR",
      image: "/images/T4.jpg",
      bgColor: "bg-gray-300",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      id: 2,
      name: "Frank A. Mitchell",
      position: "ASSOCIATE PROFESSOR",
      image: "/images/T2.jpg",
      bgColor: "bg-orange-200",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      id: 3,
      name: "Susan D. Lunsford",
      position: "CEO & FOUNDER",
      image: "/images/T3.jpg",
      bgColor: "bg-gray-600",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      id: 4,
      name: "Dennis A. Pruitt",
      position: "ASSOCIATE PROFESSOR",
      image: "/images/T1.jpg",
      bgColor: "bg-[#F79769]",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      }
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            {/* <div className="w-6 h-6 bg-orange-500 rounded"></div> */}
            <span className="text-orange-500 font-medium uppercase tracking-wide text-sm">
              OUR TEACHERS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet With Our <span className="text-orange-500">Teachers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {teachersData.map((teacher) => (
            <div
              key={teacher.id}
              className="group relative overflow-hidden rounded-3xl transition-all duration-300"
            >
              {/* Main Card */}
              <div className={`${teacher.bgColor} rounded-3xl p-4 pb-6 relative h-64 w-72 mx-auto`}>
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-38 h-38 rounded-full object-cover mx-auto mb-3 transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Social Media Icons - Hidden by default, shown on hover */}
                  <div className="absolute top-0 right-0 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <a
                      href={teacher.socialLinks.facebook}
                      className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <Facebook className="w-3 h-3" />
                    </a>
                    <a
                      href={teacher.socialLinks.instagram}
                      className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <Instagram className="w-3 h-3" />
                    </a>
                    <a
                      href={teacher.socialLinks.linkedin}
                      className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <Linkedin className="w-3 h-3" />
                    </a>
                    <a
                      href={teacher.socialLinks.youtube}
                      className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <Youtube className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Teacher Info */}
                <div className="text-center">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                    {teacher.position}
                  </p>
                </div>

                {/* Bottom Right Circle - matches the design */}
                <div className="absolute bottom-3 right-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}