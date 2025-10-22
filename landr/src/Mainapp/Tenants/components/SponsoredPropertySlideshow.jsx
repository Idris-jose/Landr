import React, { useState, useEffect } from 'react';
import { MapPin, User, CheckCircle, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { mockProperties } from '../mockProperties';

const SponsoredPropertySlideshow = ({ properties, onContact, onMoreInfo, onContactLandlord, onVirtualTour }) => {
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get current property
  const currentProperty = properties[currentPropertyIndex];

  // Get images for current property
  const currentImages = currentProperty?.images && currentProperty.images.length > 0
    ? currentProperty.images.map(img => typeof img === 'string' ? img : img.url)
    : ['https://via.placeholder.com/1200x400?text=No+Image'];

  // Navigation functions for properties
  const goToNextProperty = (e) => {
    e.stopPropagation();
    setCurrentPropertyIndex((prevIndex) => (prevIndex + 1) % properties.length);
    setCurrentImageIndex(0);
  };

  const goToPrevProperty = (e) => {
    e.stopPropagation();
    setCurrentPropertyIndex((prevIndex) =>
      (prevIndex - 1 + properties.length) % properties.length
    );
    setCurrentImageIndex(0);
  };

  // Navigation functions for images within current property
  const goToNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const goToPrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + currentImages.length) % currentImages.length
    );
  };

  // Auto-advance slideshow every 8 seconds (for properties)
  useEffect(() => {
    if (properties.length > 1) {
      const interval = setInterval(() => {
        setCurrentPropertyIndex((prevIndex) => (prevIndex + 1) % properties.length);
        setCurrentImageIndex(0);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [properties.length]);

  // Auto-advance images every 4 seconds (within current property)
  useEffect(() => {
    if (currentImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [currentImages.length, currentPropertyIndex]);

  if (!properties || properties.length === 0) return null;

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src={currentImages[currentImageIndex]}
            alt={`${currentProperty.type} in ${currentProperty.location}`}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x600/1a1a1a/02D482?text=Property+Image';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Sponsored Badge */}
        <div className="absolute top-6 right-6 z-30">
          <div className="bg-white/95 backdrop-blur-xl px-5 py-2 rounded-full shadow-lg border border-white/20">
            <span className="text-sm font-semibold bg-gradient-to-r from-[#02D482] to-emerald-500 bg-clip-text text-transparent">
              ✨ Sponsored
            </span>
          </div>
        </div>

        {/* Image Navigation Dots */}
        {currentImages.length > 1 && (
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
            {currentImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'w-8 bg-[#02D482]'
                    : 'w-1.5 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        )}

        {/* Image Navigation Arrows */}
        {currentImages.length > 1 && (
          <>
            <button
              onClick={goToPrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </>
        )}

        {/* Content Card */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl transform transition-all duration-300 hover:bg-white/15">
              {/* Property Type and Price */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-4">
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                    {currentProperty.type}
                  </h1>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-[#02D482]">
                      ${currentProperty.price.toLocaleString()}
                    </span>
                    <span className="text-xl text-white/80">/{currentProperty.priceUnit}</span>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="bg-[#02D482]/20 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#02D482]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-medium mb-0.5">Location</p>
                    <p className="text-sm text-white font-semibold">{currentProperty.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="bg-[#02D482]/20 p-2 rounded-lg">
                    <User className="w-5 h-5 text-[#02D482]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-medium mb-0.5">Landlord</p>
                    <p className="text-sm text-white font-semibold">{currentProperty.landlordName}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-medium mb-0.5">Status</p>
                    <p className="text-sm text-white font-semibold">{currentProperty.documentationStatus}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onVirtualTour(currentProperty);
                }}
                className="w-full bg-gradient-to-r from-[#02D482] to-emerald-500 hover:from-[#02D482] hover:to-[#02D482] text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group"
              >
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Book Virtual Tour</span>
              </button>
            </div>
          </div>
        </div>
      </div>

        <div className='mt-4'>
      {properties.length > 1 && (
        <>
          <div className='flex gap-4 items-center justify-end'>
            <div className='border border-[#02D482] w-full'/>
            <button
              onClick={goToPrevProperty}
              className=" shadow-[6px_6px_0px_rgba(2,212,130,0.4)]  active:shadow-[2px_2px_0px_rgba(2,212,130,0.2)] active:translate-y-[2px] bg-[#02D482]/80 hover:bg-[#02D482] text-white p-2 sm:p-3  z-20 transition-all duration-300 backdrop-blur-sm "
            >
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNextProperty}
              className=" shadow-[6px_6px_0px_rgba(2,212,130,0.4)]  active:shadow-[2px_2px_0px_rgba(2,212,130,0.2)] active:translate-y-[2px] bg-[#02D482]/80 hover:bg-[#02D482] text-white p-2 sm:p-3  z-20 transition-all duration-300 backdrop-blur-sm "
            >
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </>
      )}
         </div>
    </div>
  );
};

  
     

// Demo component with sample data
const Demo = () => {

  const handleVirtualTour = (property) => {
    alert(`Booking virtual tour for ${property.type}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <SponsoredPropertySlideshow
        properties={mockProperties}
        onVirtualTour={handleVirtualTour}
      />
    </div>
  );
};

export default Demo;