import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Send,
  Facebook,
  Linkedin,
  MessageCircle,
  Youtube,
} from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function EdukaFooter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.name.trim() && form.email.trim() && form.message.trim()) {
      console.log("Enquiry submitted:", form);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <footer className="bg-[#012758] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded transform rotate-12"></div>
              </div>
              <span className="text-2xl font-bold">
                rOse<span className="text-orange-400">wd</span>
              </span>
            </div>
            <p className="text-blue-200 mb-8 leading-relaxed">
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour words
              believable.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="tel:+916391000692" className="text-blue-100">
                  +91 63910 00692
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a
                  href="mailto:rosewoodinternationalschools@gmail.com"
                  className="text-blue-100"
                >
                  rosewoodinternationalschools@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-100">
                  Lucknow Road, Balpur Jat - Gonda (U.P.)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-400 rounded"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Mission & Vision", href: "/about/vision-mission" },
                { name: "Activities", href: "/academics/activities" },
                { name: "Facilities", href: "/academics/facilities" },
                { name: "Admissions", href: "/admissions" },
                { name: "Gallery", href: "/gallery" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Campus */}
          {/* <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative">
              Our Campus
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-400 rounded"></div>
            </h3>
            <ul className="space-y-3">
              {[
                'Campus Safety',
                'Student Activities',
                'Academic Department',
                'Planning & Administration',
                'Office Of The Chancellor',
                'Facility Services'
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Enquiry Form (replaced Newsletter) */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative">
              Enquiry Form
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-400 rounded"></div>
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="3"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>SEND ENQUIRY</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-blue-200 text-center sm:text-left">
              © Copyright 2025{" "}
              <span className="text-orange-400 font-semibold">Rosewood</span>{" "}
              All Rights Reserved.
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/RosewoodInterCollege"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/rosewood_inter_college_gonda/"
                className="w-10 h-10 bg-white/10 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center text-white transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
              </a> */}
              <a
                href="https://www.youtube.com/@rosewoodintercollegegonda1459"
                className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-lg flex items-center justify-center text-white transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
