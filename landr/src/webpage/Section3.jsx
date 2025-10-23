import React, { useState } from 'react';
import { Link, Element, scroller } from 'react-scroll';

export default function Section3() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "How do landlords make money off the site ?",
      answer: "Vitae purus consequat orci cursus. Laoreet volutpat nulla venus dui in scelerisque velit eget. Morbi proin ipsum tellus ultricies lectus nunc fusce turpis. Commodo ornare nunc nec ut vulputate sit et. Ut quis lorem interdum nibh dui."
    },
    {
      question: "How do landlords make money off the site ?",
      answer: "Vitae purus consequat orci cursus. Laoreet volutpat nulla venus dui in scelerisque velit eget. Morbi proin ipsum tellus ultricies lectus nunc fusce turpis. Commodo ornare nunc nec ut vulputate sit et. Ut quis lorem interdum nibh dui."
    },
    {
      question: "How do landlords make money off the site ?",
      answer: "Vitae purus consequat orci cursus. Laoreet volutpat nulla venus dui in scelerisque velit eget. Morbi proin ipsum tellus ultricies lectus nunc fusce turpis. Commodo ornare nunc nec ut vulputate sit et. Ut quis lorem interdum nibh dui."
    },
    {
      question: "How do landlords make money off the site ?",
      answer: "Vitae purus consequat orci cursus. Laoreet volutpat nulla venus dui in scelerisque velit eget. Morbi proin ipsum tellus ultricies lectus nunc fusce turpis. Commodo ornare nunc nec ut vulputate sit et. Ut quis lorem interdum nibh dui."
    },
    {
      question: "How do landlords make money off the site ?",
      answer: "Vitae purus consequat orci cursus. Laoreet volutpat nulla venus dui in scelerisque velit eget. Morbi proin ipsum tellus ultricies lectus nunc fusce turpis. Commodo ornare nunc nec ut vulputate sit et. Ut quis lorem interdum nibh dui."
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <Element name="section3" className="min-h-screen bg-white py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light font-Poppins">
            We know you have questions, and we have answers too.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              {/* Shadow outline */}
              <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-full h-full border-2 border-black"></div>

              {/* Main FAQ Container */}
              <div className="relative bg-white border-2 border-black">
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-3 sm:p-4 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 text-left pr-2">
                    {faq.question}
                  </h3>

                  {/* Toggle Icon */}
                  <div className="flex-shrink-0 ml-2 sm:ml-4">
                    {expandedIndex === index ? (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm sm:text-lg">−</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-sm sm:text-lg">+</span>
                      </div>
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                {expandedIndex === index && (
                  <div className="border-black bg-gray-50 p-3 sm:p-4">
                    <p className="text-sm sm:text-base text-gray-700 font-Poppins leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}