import { mockProperties } from './mockProperties.jsx';
import React, { useState, useEffect } from "react";
import PressButton from '../../components/PressButton.jsx';
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  BedSingle,
  Bath,
  Ruler,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import VirtualBidForm from './VirtualBidForm.jsx';

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = mockProperties.find(
    (p) => String(p.id) === String(id)
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [showVirtualBidForm, setShowVirtualBidForm] = useState(false);

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Property Not Found
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-[#02D482] text-white rounded-full hover:bg-green-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  const images =
    property.images && property.images.length > 0
      ? property.images.map((img) => (typeof img === "string" ? img : img.url))
      : ["https://via.placeholder.com/1200x400?text=No+Image"];

  // Image navigation
  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slideshow
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(goToNextImage, 4000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  const handleVirtualTourClick = () => {
    setShowVirtualBidForm(true);
  };

  const closeVirtualBidForm = () => {
    setShowVirtualBidForm(false);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col gap-8 p-4 lg:p-8">

      {/* Virtual Bid Form Modal */}
      <div className={`fixed inset-0   flex items-center justify-center z-50 transition-opacity ${showVirtualBidForm ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

      <VirtualBidForm 
        property={property} 
        isOpen={showVirtualBidForm} 
        onClose={closeVirtualBidForm} 
      />
      </div>

      {/* Top Slideshow */}
      <div className="relative w-full h-[400px] overflow-hidden group  shadow-md">
        <img
          src={images[currentImageIndex]}
          alt={`${property.type} in ${property.location}`}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x400/f3f4f6/9ca3af?text=Image";
          }}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white shadow-md"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Image Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                  currentImageIndex === idx
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Property Card & Amenities */}
        <div className="space-y-6 ">
          {/* Property Card */}
          
          <div className="relative transition-transform duration-200 hover:-translate-y-1 w-full group">
            <div className="absolute top-1 left-1 w-full h-full border-2 border-black opacity-0 group-hover:opacity-100 pointer-events-none"></div>
            <div className="relative border-2 border-black bg-white p-4 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-black text-base lg:text-lg">
                  {property.type}
                </h1>
                <span className="font-semibold text-black text-base lg:text-lg">
                  ₦ {property.price.toLocaleString()}/{property.priceUnit}
                </span>
              </div>
              <p className="text-sm text-[#02D482] mt-1">
                Property listed by {property.landlordName}.
              </p>
              <p className="flex items-center text-sm text-gray-500 mt-2">
                <MapPin size={14} className="mr-1" />
                {property.location}
              </p>
            </div>
          </div>

          {/* Amenities Dropdown */}
          <div className='group transition-transform duration-200 hover:-translate-y-1'>
            <h2 className="font-semibold text-lg  mb-2">Amenities</h2>
            <div className="relative inline-block w-full">
              <div className="absolute top-1 left-1 w-full h-full border-2 border-black pointer-events-none opacity-0 group-hover:opacity-100  "></div>
              <button
                onClick={() => setOpen(!open)}
                className="relative border-2 border-black bg-[#02D482] text-white w-full flex justify-between items-center px-4 py-2"
              >
                <span>All Amenities</span>
                <ChevronDown size={16} />
              </button>
              {open && (
                <div className="absolute  left-0 right-0 mt-1 border-2 border-black bg-white shadow-lg z-10">
                  {property.amenities.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setOpen(false)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Description</h2>
          <p className="text-gray-700 leading-relaxed">
            {property.description || "No description available."}
          </p>
        </div>
      </div>

      <div className="bg-white border-2 border-black p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-bold mb-4">Property details</h2>
        
        <div className="divide-y divide-gray-300">
          {/* Row */}
          <div className="flex flex-col sm:flex-row justify-between py-3">
            <span className="font-medium">Application Costs</span>
            <div className="flex items-center gap-3">
              <span>10 Landr Coins</span>
               <div>
                 <PressButton  text="Purchase coin here" shadow='green'  />
            </div>
            </div>
          </div>

          {/* Row */}
          <div className="flex flex-col sm:flex-row justify-between py-3">
            <span className="font-medium">Pets</span>
            <span>Allowed</span>
          </div>

          {/* Row */}
          <div className="flex flex-col sm:flex-row justify-between py-3">
            <span className="font-medium">Application Fee</span>
            <span>100 Landr Coins</span>
          </div>

          {/* Row */}
          <div className="flex flex-col sm:flex-row justify-between py-3">
            <span className="font-medium">Location</span>
            <span className="text-gray-600">
              Philip Adesanya Crescent, Lagos
            </span>
          </div>

          {/* Row */}
          <div className="flex flex-col sm:flex-row justify-between py-3">
            <span className="font-medium">Apartment sharing</span>
            <span>Allowed</span>
          </div>

          {/* Row */}
          <div className="flex flex-col sm:flex-row justify-between py-3">
            <span className="font-medium">Rent Duration</span>
            <span>12 Months</span>
          </div>

          {/* Row — Bid for Virtual Tour */}
          <div className="flex flex-col sm:flex-row justify-between py-3">
            <span className="font-medium">Virtual Tour</span>
            <div>
                 <PressButton text="Bid for virtual tour" shadow='green' onClick={handleVirtualTourClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}