import React from "react";
import { Element } from "react-scroll";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import PressButton from "../components/PressButton";

export default function Section2() {
  const images = [
    {
      src: first,
      text: "Select your preferred city and ideal location.",
      letter: "A",
    },
    {
      src: second,
      text: "Select your bed or preferable house type.",
      letter: "B",
    },
    {
      src: third,
      text: "Set your price range from minimum to maximum.",
      letter: "C",
    },
  ];

  return (
    <Element name="section2" className="min-h-screen bg-white">
      <div className="mt-8 sm:mt-12 md:mt-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Doom Scrolling for here?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get in Jor! click the button below, make we match u asap to better
            crip
          </p>
          <div></div>
          {/* ******************************** */}
          {/* ******************************** */}
          {/* <button className="bg-[#02D482] text-white px-6 py-3  font-Poppins text-lg hover:bg-[#02B76F] transition-colors duration-200">
            Get Started
          </button> */}
          <PressButton text="Get Started" color="green" shadow="black" />
        </div>

        {/* How to use section */}
        <div className="space-y-8 sm:space-y-12 bg-[#02D482] p-4 sm:p-6 md:p-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-bold text-white mb-2 sm:mb-4">
            How to use our filters?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 text-left font-Poppins mb-8 sm:mb-12">
            Ours is as simple as ABC. Let us show you.
          </p>

          {/* Steps Container */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col items-center max-w-xs sm:max-w-sm">
                {/* Phone mockup with letter and shadow */}
                <div className="relative mb-4 sm:mb-6">
                  {/* Thick shadow */}
                  <div className="absolute top-2 left-2 w-full h-full bg-black"></div>

                  {/* Phone container */}
                  <div className="relative bg-white p-1 sm:p-2 border-2 sm:border-4">
                    <img
                      src={image.src}
                      alt={`Step ${image.letter}`}
                      className="w-64 sm:w-72 md:w-80 h-auto rounded-2xl"
                    />
                  </div>

                  {/* Letter badge */}
                  <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 font-Poppins bg-red-500 text-white font-bold text-lg sm:text-xl flex items-center justify-center border-2 border-white shadow-lg">
                    {image.letter}
                  </div>
                </div>

                {/* Description text */}
                <p className="text-sm sm:text-base md:text-lg text-white font-Poppins text-center sm:text-left font-light px-2">
                  {image.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
