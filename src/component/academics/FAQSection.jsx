import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How Can do I apply ?",
    answer:
      "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire ante odio dignissim quam vitae pulvinar turpis.",
  },
  {
    question: "How Can I Become A Member ?",
    answer:
      "To become a member, simply register through our admission portal and follow the instructions provided by the school office.",
  },
  {
    question: "What Payment Gateway You Support ?",
    answer:
      "We support secure online payment gateways including credit card, debit card, UPI, and net banking.",
  },
  {
    question: "How Can I Cancel My Request ?",
    answer:
      "You can cancel your request by contacting our support team through phone or email. Refunds are processed as per school policy.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500">
              <HelpCircle className="w-5 h-5" />
            </span>
            <span className="uppercase tracking-widest text-sm font-semibold text-orange-500">
              FAQ'S
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
            General <span className="text-orange-500">Frequently</span> Asked
            Questions
          </h2>

          <p className="text-gray-500 mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>
          <p className="text-gray-500 mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition">
            HAVE ANY QUESTION ?
          </button>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    ?
                  </span>
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-14 pb-5 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
