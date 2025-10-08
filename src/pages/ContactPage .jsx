import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Home,
  ChevronRight,
} from "lucide-react";
import { ref, push } from "firebase/database";
import { database } from "../../firebase"; // ✅ adjust import path if needed
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^\d]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      const entry = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        timestamp: Date.now(),
        source: "contact_page_form", // 👈 to identify submissions
      };

      try {
        await push(ref(database, "contactEnquiries"), entry);
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        navigate("/thanks");
      } catch (error) {
        console.error("Error submitting message:", error);
        toast.error("Error submitting form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 639 100 0692"],
      href: "tel:+916391000692",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["rosewoodinternationalschools@gmail.com"],
      href: "mailto:rosewoodinternationalschools@gmail.com",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Lucknow Road, Balpur Jat - Gonda (U.P.)"],
      color: "text-red-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sat: 8:00 AM - 4:00 PM"],
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 🔹 Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/About.jpg"
            alt="School Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, x: 100 }} // right side se start
            animate={{ opacity: 1, x: 0 }} // beech me aa jaye
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-4">
                Contact Us
              </h1>
              <div className="flex justify-center">
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
              </div>
            </div>

            {/* Breadcrumb */}
            <nav
              className="flex items-center space-x-2 text-sm sm:text-base"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center space-x-2">
                <li className="flex items-center">
                  <Link
                    to="/"
                    className="group flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    aria-label="Go to homepage"
                  >
                    <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-1 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">Home</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                </li>
                <li className="flex items-center">
                  <span
                    className="text-orange-400 font-semibold"
                    aria-current="page"
                  >
                    Contact
                  </span>
                </li>
              </ol>
            </nav>
          </motion.div>
        </div>
      </section>
      {/* 🔹 End Banner Section */}

      {/* 🔹 Contact Info + Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white flex items-center gap-3 rounded-xl shadow-lg p-2 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-full ${info.color} flex gap-x-3 items-center bg-opacity-10`}
                      >
                        <div className="flex gap-x-2">
                          <IconComponent className={`w-6 h-6 ${info.color}`} />
                          <h3 className="text-lg font-semibold text-gray-900">
                            {info.title}
                          </h3>
                        </div>
                        {info.details.map((detail, idx) => {
  const formattedDetail = detail.includes("@")
    ? detail.replace("@", "<wbr/>@")
    : detail;
  return (
    <a
      href={info.href}
      key={idx}
      className="text-gray-600 text-md break-words"
      dangerouslySetInnerHTML={{ __html: formattedDetail }}
    />
  );
})}

                      </div>
                    </div>
                    <div className=""></div>
                  </div>
                );
              })}
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  Find Us Here
                </h3>
              </div>
              <div className="relative h-64 md:h-80">
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5971.67895449492!2d81.94100149271935!3d27.131689692805093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999ef72447d929f%3A0xcb977401e34cf0e0!2sRosewood%20Inter%20College%20-%20Best%20Schools%20In%20Gonda%20%7C%20Top%2010%20Schools%20In%20Gonda%20%7C%20Schools%20In%20Gonda%20%7C%20CBSE%20Schools!5e0!3m2!1sen!2sin!4v1759562670337!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>

            {isSubmitting && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <p className="text-green-700">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your message here..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-green-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Visit Our Campus
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We welcome visitors to our campus. Please feel free to schedule a
              tour or visit us during our office hours. Our friendly staff will
              be happy to show you around and answer any questions about our
              programs and facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
              <p className="text-gray-600 text-sm">
                Available during office hours
              </p>
            </div>

            <div className="p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-600 text-sm">
                We'll respond within 24 hours
              </p>
            </div>

            <div className="p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
              <p className="text-gray-600 text-sm">Schedule a campus tour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
