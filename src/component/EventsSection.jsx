import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const EventsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  },);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const events = [
    {
      id: 1,
      title: "High School Program 2024",
      date: "16 June, 2024",
      time: "10.00AM - 04.00PM",
      location: "25/B Milford Road, New York",
      description: "There are many variations of passages the majority have some injected humour.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "High School Program 2024",
      date: "16 June, 2024",
      time: "10.00AM - 04.00PM",
      location: "25/B Milford Road, New York",
      description: "There are many variations of passages the majority have some injected humour.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "High School Program 2024",
      date: "16 June, 2024",
      time: "10.00AM - 04.00PM",
      location: "25/B Milford Road, New York",
      description: "There are many variations of passages the majority have some injected humour.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "High School Program 2024",
      date: "16 June, 2024",
      time: "10.00AM - 04.00PM",
      location: "25/B Milford Road, New York",
      description: "There are many variations of passages the majority have some injected humour.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "High School Program 2024",
      date: "16 June, 2024",
      time: "10.00AM - 04.00PM",
      location: "25/B Milford Road, New York",
      description: "There are many variations of passages the majority have some injected humour.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "High School Program 2024",
      date: "16 June, 2024",
      time: "10.00AM - 04.00PM",
      location: "25/B Milford Road, New York",
      description: "There are many variations of passages the majority have some injected humour.",
      image: "/images/event1.jpg"
    },
    {
      id: 6,
      title: "High School Program 2024",
      date: "16 June, 2024",
      time: "10.00AM - 04.00PM",
      location: "25/B Milford Road, New York",
      description: "There are many variations of passages the majority have some injected humour.",
      image: "images/event2.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-6 animate-pulse">
            <Users className="w-4 h-4" />
            EVENTS
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Upcoming <span className=" bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Events Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-orange-500 hover:bg-teal-700 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-orange-500 hover:bg-teal-700 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Slider Wrapper */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div
                    className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index % 3) * 200}ms` }}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-50">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700 transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                          Featured Event
                        </div>
                      </div>
                      {/* Location Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          <MapPin className="w-3 h-3" />
                          NYC
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Event Details */}
                      <div className="space-y-2 mb-5">
                        <div className="flex items-center gap-2 text-orange-500 text-sm font-medium">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                        <div className="flex items-start gap-2 text-gray-500 text-sm">
                          <MapPin className="w-4 h-4 mt-0.5" />
                          {event.location}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        {event.description}
                      </p>

                      {/* CTA Button */}
                      <button className="group/btn bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 hover:gap-3 shadow-lg hover:shadow-xl">
                        JOIN EVENT
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: Math.ceil(events.length / 3) }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentSlide / 3) === index || (currentSlide >= events.length - 3 && index === Math.ceil(events.length / 3) - 1)
                  ? 'bg-orange-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
              }`}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-40 right-16 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default EventsSection;