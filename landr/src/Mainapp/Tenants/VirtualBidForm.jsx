import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, CircleX, Edit } from "lucide-react";
import image1 from "../../assets/hugging face.png";
import idea from "../../assets/Idea yellow lamp.png";
import Celebration from "../../assets/Group 90.png"
import coins from "../../assets/coins.png";
import GlassEffect from "../../components/GlassEffect";
import PressButton from "../../components/PressButton";

const VirtualBidForm = ({ property, onClose }) => {
  if (!property) return null;

  const [step, setStep] = useState(1);
  const [message, setMessage] = useState(`Hi, ${property.landlordName} I'm interested in Scheduling a tour with your property. Thanks`);
  const [isEditingMessage, setIsEditingMessage] = useState(false);
  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };

  // Use the first imported image as the display image
  const displayImage = property.images && property.images.length > 0
    ? property.images[0].url
    : 'https://via.placeholder.com/400x300?text=No+Image';

  return (
    <div className="m-20">
    <div className="fixed inset-0 z-40 flex justify-center items-center p-10  bg-gray-800/80 text-white">
      <GlassEffect>
         <div className="max-w-lg w-full max-h-[100vh] overflow-y-auto p-6 ">
        {/* Step 1 - Property Details */}
        {step === 1 && (
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-end">
              <CircleX className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-red-400 transition-colors" onClick={onClose} />
            </div>

            <img
              src={displayImage}
              alt={property.title}
              className="w-full h-48 sm:h-60 object-cover "
            />

            {/* Location and Rating */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1 text-xs sm:text-sm text-white">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-green-300 flex-shrink-0" />
                <span className="truncate">{property.location}</span>
              </div>
            </div>

            {/* Property Type */}
            <h3 className="font-light text-lg sm:text-xl mb-3 font-Poppins text-white group-hover:text-[#02D482] transition-colors">
              {property.type}
            </h3>

            {/* Landlord Info */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white">
              <img
                src={property.landlordAvatar}
                alt={property.landlordName}
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover flex-shrink-0"
              />
              <span>Hosted by {property.landlordName}</span>
            </div>

            {/* Property Features */}
            <div className="flex mt-3 items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white">
              <span>
                {property.bedrooms} Bed{property.bedrooms > 1 ? "s" : ""}
              </span>
              <span>•</span>
              <span>
                {property.bathrooms} Bath{property.bathrooms > 1 ? "s" : ""}
              </span>
            </div>

            {/* Price and Buttons */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg sm:text-xl font-semibold text-white">
                  ${property.price}
                </span>
                <span className="text-xs sm:text-sm text-white">
                  /{property.priceUnit}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <PressButton
                onClick={nextStep}
                text="Bid for live tour for 100 Landr coins"
                shadow="white"
              />
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="flex flex-col space-y-3 sm:space-y-6">
             <div className="flex justify-end">
              <CircleX className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-red-400 transition-colors" onClick={onClose} />
            </div>

            <div>
              <h1 className="text-lg sm:text-xl leading-tight">
                Request a virtual tour
                <br />
                for {property.landlordName}'s {property.bedrooms} Bedroom{" "}
                {property.type}.
              </h1>
            </div>

            <div className="border-t border-gray-200" />

            <div>
            <div className="bg-[#02D482] p-3 sm:p-4 md:p-6 rounded-lg">
                <div className="flex items-center mb-3 sm:mb-4 md:mb-6 gap-2 text-xs sm:text-sm text-white">
                  <img
                    src={property.landlordAvatar}
                    alt={property.landlordName}
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover flex-shrink-0"
                  />
                  <span className="font-medium">{property.landlordName}</span>
                </div>
                {isEditingMessage ? (
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="font-light text-xs sm:text-sm md:text-base mb-3 sm:mb-4 w-full bg-transparent text-white border border-white/30 rounded px-2 py-1 outline-none resize-none"
                    rows={5}
                    autoFocus
                  />
                ) : (
                  <p className="font-light text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                    {message}
                  </p>
                )}
                <PressButton onClick={() => setIsEditingMessage(!isEditingMessage)} text={isEditingMessage ? "Save" : "Edit"} shadow="white" />
              </div>
            </div>

            <div className="border-t border-gray-200" />

            <div className="flex flex-col gap-3">

              <div>
              <h1 className="text-base sm:text-lg mb-2">Schedule your date</h1>
              <div>
                <input
                  type="date"
                  className="w-full p-3 sm:p-4 text-white bg-[#1f473a]  shadow-md focus:outline-none focus:ring-2 focus:ring-[#02D482] focus:ring-opacity-50 text-sm sm:text-base"
                />
              </div>
              </div>
              
              <div>
              <h1 className="text-base sm:text-lg mb-2">Schedule your Time</h1>
              <div>
                <input
                  type="time"
                  className="w-full p-3 sm:p-4 text-white bg-[#1f473a]  shadow-md focus:outline-none focus:ring-2 focus:ring-[#02D482] focus:ring-opacity-50 text-sm sm:text-base"
                />
              </div>
              </div>
               <PressButton onClick={nextStep} text="Proceed" shadow="white" />
            </div>

          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="flex flex-col  space-y-4 sm:space-y-6">
             <div className="flex justify-end">
              <CircleX className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-red-400 transition-colors" onClick={onClose} />
            </div>

            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl mb-2">Add your contact information</h1>
            <p className="text-sm sm:text-base text-white">enter your contact information</p>
            </div>
           

          <input type="number" placeholder="Input Phone Number" className="bg-[#02D482] p-4 sm:p-5  text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"/>
          <div className="border-t border-gray-200" />

          <div className="bg-emerald-800 p-3 sm:p-4  flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <img src={idea} alt="idea" className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-0 flex-shrink-0"/>
           <h1 className="text-xs sm:text-sm text-center sm:text-left">Including your phone number inyour tour request bid,increases your chance of landing the house by 30%</h1>
          </div>

           <div className="border-t border-gray-200" />

            <PressButton onClick={nextStep} text="Proceed" shadow="white" />
             <PressButton onClick={nextStep} text="Send Bid without contact info" shadow="white" />
           
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="text-center">
             <div className="flex justify-end">
              <CircleX className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-red-400 transition-colors" onClick={onClose} />
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6">
              <img src={Celebration} alt="celebration" className="w-32 sm:w-48 md:w-56 mx-auto"/>
              <h2 className="text-xl sm:text-2xl font-semibold">Voilaaa!</h2>
              <p className="text-white text-sm sm:text-base">
                Your bid to view {property.landlordName}'s<br/> home is on its way!'.
              </p>
            </div>
            
            <PressButton onClick={onClose} text="Proceed to dashboard" shadow="white" />
          </div>
        )}
        </div>
      </GlassEffect>
    </div>
    </div>
  );
};

export default VirtualBidForm;