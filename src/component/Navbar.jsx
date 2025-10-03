import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  MapPin,
  Mail,
  Phone,
  Search,
  Menu,
  X,
  ChevronDown,
  Edit3,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

let scrollListenersAdded = false;


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
   const [isScrolled, setIsScrolled] = useState(false);

  if (!scrollListenersAdded) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    scrollListenersAdded = true;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // ✅ Routes for pages
  const navItems = [
    { name: "Home", path: "/", hasDropdown: false },
    {
      name: "About",
      path: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "About Us", path: "/about-us" },
        // { name: "Our Story", path: "/about/our-story" },
        { name: "Principal's Message", path: "/about/principal-message" },
        { name: "Vision & Mission", path: "/about/vision-mission" },
        
      ],
    },
    {
      name: "Academics",
      path: "#",
      hasDropdown: true,
      dropdownItems: [

        // { name: "Curriculum", path: "/academics/curriculum" },
        { name: "Activities", path: "/academics/activities" },
        { name: "Facilities", path: "/academics/facilities" },
      ],
    },
    { name: "Admissions", path: "/admissions", hasDropdown: false },
    { name: "Gallery", path: "/gallery", hasDropdown: false },
    { name: "Contact", path: "/contact", hasDropdown: false },
  ];

  return (
    <nav className="w-full">
      {/* Top Contact Bar */}
      <div className="flex">
        <div className="bg-orange-400 flex-shrink-0">
          <div className="px-4 py-3">
            <div className="flex items-center space-x-3 text-white text-sm">
              <span className="font-medium">Follow Us:</span>
              <div className="flex space-x-2">
                <a
                  href="https://www.facebook.com/RosewoodInterCollege"
                  className="bg-teal-700 hover:bg-teal-800 p-1.5 rounded-full transition-colors"
                >
                  <FaFacebook size={14} />
                </a>
                <a
                  href="https://www.instagram.com/rosewood_inter_college_gonda/"
                  className="bg-teal-700 hover:bg-teal-800 p-1.5 rounded-full transition-colors"
                >
                  <FaInstagram size={14} />
                </a>
                <a
                  href="https://www.youtube.com/@rosewoodintercollegegonda1459"
                  className="bg-teal-700 hover:bg-teal-800 p-1.5 rounded-full transition-colors"
                >
                  <FaYoutube size={14} />
                </a>
                {/* <a href="#" className="bg-teal-700 hover:bg-teal-800 p-1.5 rounded-full transition-colors">
                  <MessageCircle size={14} />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Teal contact info */}
        <div className="bg-teal-600 flex-1">
          <div className="px-4 py-3">
            <div className="flex justify-end items-center space-x-8 text-white text-sm">
              <div className="hidden lg:flex items-center space-x-2">
                <MapPin size={16} className="text-yellow-300" />
                <span>Lucknow Road, Balpur Jat - Gonda (U.P.)</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <Mail size={16} className="text-yellow-300" />
                <a href="mailto:rosewoodinternationalschools@gmail.com">
                  rosewoodinternationalschools@gmail.com
                </a>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <Phone size={16} className="text-yellow-300" />
                <a href="tel:+916391000692">+91 639 100 0692</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`fixed right-0 left-0 z-50 lg:mt-0 sm:mt-2 bg-white shadow-sm border-b border-gray-100 transition-all duration-300 ${
          isScrolled ? "top-0" : "top-12"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/images/logo.webp"
                  className="w-16 h-16 object-cover"
                  alt=""
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 font-medium transition-colors ${
                      item.name === "Home"
                        ? "text-teal-600"
                        : "text-gray-700 hover:text-teal-600"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </Link>

                  {/* Dropdown placeholder */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-teal-600 shadow-xl rounded-lg py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                      {item.dropdownItems.map((drop) => (
                        <Link
                          key={drop.name}
                          to={drop.path}
                          className="block px-4 py-2 text-md text-white hover:bg-teal-700 hover:text-orange-400"
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* <button className="text-gray-600 hover:text-teal-600 transition-colors p-2 rounded-full hover:bg-gray-50">
                <Search size={20} />
              </button> */}
              <Link
                to="/contact"
                className="bg-orange-400 cursor-pointer hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Edit3 size={16} />
                <span className="hidden sm:inline">APPLY NOW</span>
              </Link>
              <button
                className="lg:hidden text-gray-600 hover:text-teal-600 p-2"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      item.hasDropdown
                        ? toggleDropdown(item.name)
                        : setIsMobileMenuOpen(false)
                    }
                    className={`flex items-center justify-between w-full px-4 py-3 text-left rounded-lg transition-colors ${
                      item.name === "Home"
                        ? "text-teal-600 bg-teal-50"
                        : "text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    }`}
                  >
                    <Link to={item.path} className="w-full">
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.hasDropdown && openDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems.map((drop) => (
                        <Link
                          key={drop.name}
                          to={drop.path}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-teal-600 rounded-lg"
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <MapPin size={16} className="text-teal-600" />
                  <span>25/B Milford Road, New York</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Mail size={16} className="text-teal-600" />
                  <span>info@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Phone size={16} className="text-teal-600" />
                  <span>+2 123 654 7898</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
