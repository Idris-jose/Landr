import React from 'react';
import { Element } from 'react-scroll';
import first from '../assets/first.png';
import second from '../assets/second.png';
import third from '../assets/third.png';


export default function Section2() {
   
    const images = [{
        src: first,
        text: "Select your preferred city and ideal location.",
        letter: "A"
    }, {
        src: second,
        text: "Select your bed or preferable house type.",
        letter: "B"
    }, {
        src: third,
        text: "Set your price range from minimum to maximum.",
        letter: "C"
    }];

    return (
        <Element name="section2" className="min-h-screen bg-white ">
            <div className="mt-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Doom Scrolling for here?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Get in Jor! click the button below, make we match u asap to better crip
                    </p>
                    <div>
                        
                    </div>
                    <button className="bg-[#02D482] text-white px-6 py-3  font-Poppins text-lg hover:bg-[#02B76F] transition-colors duration-200">
                        Get Started
                    </button>
                </div>

                {/* How to use section */}
                <div className="space-y-12 bg-[#02D482] p-8 ">

                    <h3 className="text-3xl md:text-4xl text-left font-bold text-white mb-4">
                        How to use our filters?
                    </h3>
                    <p className="text-xl text-gray-200 text-left font-Poppins mb-12">
                        Ours is as simple as ABC. Let us show you.
                    </p>

                    {/* Steps Container */}
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
                        {images.map((image, index) => (
                            <div key={index} className="flex flex-col items-center max-w-sm">
                                {/* Phone mockup with letter and shadow */}
                                <div className="relative mb-6">
                                    {/* Thick shadow */}
                                    <div className="absolute top-2 left-2 w-full h-full bg-black "></div>
                                    
                                    {/* Phone container */}
                                    <div className="relative bg-white  p-2 border-4 ">
                                        <img 
                                            src={image.src}
                                            alt={`Step ${image.letter}`}
                                            className="w-80 h-auto rounded-2xl"
                                        />
                                    </div>
                                    
                                    {/* Letter badge */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 font-Poppins bg-red-500 text-white font-bold text-xl flex items-center justify-center border-2 border-white shadow-lg">
                                        {image.letter}
                                    </div>
                                </div>

                                {/* Description text */}
                                <p className="text-lg text-white font-Poppins  text-left font-light">
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