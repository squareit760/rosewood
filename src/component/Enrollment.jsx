import React, { useState } from "react";
import { database } from "../../firebase";
import { ref, push } from "firebase/database"; // ✅ we’ll use push() with Date.now() instead of serverTimestamp
import { useNavigate } from "react-router-dom";

const Enrollment = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); 

    // ✅ handle input changes
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

    // ✅ validation
    const validateForm = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.message.trim()) newErrors.message = "Message is required";
      return newErrors;
    };

    // ✅ form submit
    const handleSubmit = async () => {
      const newErrors = validateForm();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const entry = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        source: "enrollment_form",
        timestamp: Date.now(),
      };

      try {
        await push(ref(database, "enrollmentEnquiries"), entry);

        // ✅ show success + reset form
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // ✅ redirect to thanks page
        navigate("/thanks");
      } catch (error) {
        console.error("Error submitting enrollment:", error);
        alert("Error submitting form. Please try again.");
      }
    };

  return (
    <div
      className="min-h-screen relative overflow-hidden mt-12 mb-12"
      style={{
        backgroundImage: 'url("/images/enroll.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#273F62]/90 bg-opacity-60"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 items-center gap-y-10 min-h-screen lg:min-h-0">
          {/* Left side - Enrollment Form */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
              <div className="mb-8">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-t-2xl -mx-8 -mt-8 mb-6">
                  <h2 className="text-xl font-bold">Start Your Enrollment</h2>
                  <p className="text-orange-100 text-sm mt-1">
                    We are variations of passages that have suffered
                  </p>
                </div>
              </div>

              {isSubmitted && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-green-700">
                  Enrollment submitted successfully!
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all duration-200"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all duration-200"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Type Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all duration-200 resize-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:from-teal-700 hover:to-teal-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  ENROLL NOW →
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Skills Section */}
          <div className="text-white space-y-2">
            <div>
              <div className="flex items-center ">
                <div className="w-8 h-8 bg-orange-400 rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <span className="text-orange-400 uppercase tracking-wider text-sm font-semibold">
                  Our Skills
                </span>
              </div>

              <h1 className="text-3xl lg:text-5xl xl:text-5xl font-bold leading-tight mb-2">
                Explore Your <span className="text-orange-400">Creativity</span>
                <br />
                <span className="text-orange-400">And Talent</span> With Us
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-2">
                There are many variations of passages available but the majority
                have suffered alteration in some form by injected humour
                randomised words which don't look even slightly believable. If
                you are going to use passage you need sure there anything
                embarrassing first true generator on the Internet.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold uppercase tracking-wide">
                  Our Students
                </span>
                <span className="text-white font-bold">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white font-semibold uppercase tracking-wide">
                  Our Teachers
                </span>
                <span className="text-white font-bold">65%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white font-semibold uppercase tracking-wide">
                  Our Courses
                </span>
                <span className="text-white font-bold">75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:from-orange-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              LEARN MORE →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
