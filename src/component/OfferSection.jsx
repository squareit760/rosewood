import React from "react";

export default function OfferSection() {
  return (
    <section
      className="w-full h-[450px] bg-cover bg-center flex items-center mt-16"
      style={{
        backgroundImage:
          "url('/images/slider-1.jpg')", // replace with your uploaded image
      }}
     >
      <div className="container mx-auto flex justify-end ">
        {/* Offer Card */}
        <div className="bg-orange-400 text-white max-w-lg p-8 rounded-tl-[40px] rounded-br-[40px] shadow-lg border-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Our 20% Offer Running - Join Today For Your Course
          </h2>
          <p className="text-base md:text-lg mb-6 text-white/90">
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour randomised
            words which don’t look even slightly believable.
          </p>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-teal-700 transition">
            APPLY NOW →
          </button>
        </div>
      </div>
    </section>
  );
}
