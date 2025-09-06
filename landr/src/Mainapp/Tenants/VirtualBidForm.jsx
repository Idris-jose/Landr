import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, CircleX, Edit } from "lucide-react";
import image1 from "../../assets/hugging face.png";
import idea from "../../assets/Idea yellow lamp.png";
import Celebration from "../../assets/Group 90.png"
import coins from "../../assets/coins.png";
import GlassEffect from "../../components/GlassEffect";
import PressButton from "../../components/PressButton";

export default function VirtualBidForm({ property, isOpen, onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const displayImage =
    property.images && property.images.length > 0
      ? property.images[0].url
      : "https://via.placeholder.com/400x300?text=No+Image";

  const coinPacks = [
    { id: "pack10", coins: 10, price: 1.2 },
    { id: "pack20", coins: 20, price: 2.2 },
    { id: "pack30", coins: 30, price: 3.0 },
    { id: "pack40", coins: 40, price: 3.8 },
  ];
  const [selectedPack, setSelectedPack] = useState(coinPacks[0]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    navigate("/TenantsMainapp");
    alert("Form submitted ✅");
  };

  return (
    <div className="absolute inset-0 z-40 flex justify-center items-center p-4 text-white">
      <GlassEffect>
        {/* Step 1 - Property Details */}
        {step === 1 && (
          <div className="space-y-2">
            <CircleX className="justify-end cursor-pointer" onClick={onClose} />

            <img
              src={displayImage}
              alt={property.title}
              className="w-full h-60 object-cover"
            />

            {/* Location and Rating */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1 text-sm text-white">
                <MapPin className="w-4 h-4 text-green-300" />
                <span className="truncate">{property.location}</span>
              </div>
            </div>

            {/* Property Type */}
            <h3 className="font-light mb-3 font-Poppins text-white group-hover:text-[#02D482] transition-colors">
              {property.type}
            </h3>

            {/* Landlord Info */}
            <div className="flex items-center gap-2 text-sm text-white">
              <img
                src={property.landlordAvatar}
                alt={property.landlordName}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span>Hosted by {property.landlordName}</span>
            </div>

            {/* Property Features */}
            <div className="flex mt-3 items-center gap-3 text-sm text-white">
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
                <span className="text-lg font-semibold text-white">
                  ${property.price}
                </span>
                <span className="text-sm text-white">
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
          <div className="flex flex-col space-y-6">
            <div>
              <h1>
                Request a virtual tour
                <br />
                for {property.landlordName}'s {property.bedrooms} Bedroom{" "}
                {property.type}.
              </h1>
            </div>

            <div className="border-t border-gray-200" />

            <div>
              <div className="bg-[#02D482] p-8">
                <div className="flex items-center mb-6 gap-2 text-sm text-white">
                  <img
                    src={property.landlordAvatar}
                    alt={property.landlordName}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="font-medium">{property.landlordName}</span>
                </div>
                <p className="font-light">
                  Hi, Sandles I'm interested in Scheduling a tour with <br />{" "}
                  your property. Thanks
                </p>
                <PressButton onClick={nextStep} text="Edit" shadow="white" />
              </div>
            </div>

            <div className="border-t border-gray-200" />

            <div className="flex flex-col gap-3">

              <div>
              <h1 className="">Schedule your date</h1>
              <div>
                <input
                  type="date"
                  className="w-full p-4 text-white bg-[#1f473a] shadow-md focus:outline-none focus:ring-2 focus:ring-[#02D482] focus:ring-opacity-50"
                />
              </div>
              </div>
              
              <div>
              <h1>Schedule your Time</h1>
              <div>
                <input
                  type="time"
                  className="w-full p-4 text-white bg-[#1f473a] shadow-md focus:outline-none focus:ring-2 focus:ring-[#02D482] focus:ring-opacity-50"
                />
              </div>
              </div>
               <PressButton onClick={nextStep} text="Proceed" shadow="white" />
            </div>

          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-2xl ">Add your contact information</h1>
            <p>enter your contact information</p>
            </div>
           

          <input type="number" placeholder="Input Phone Number" className="bg-[#02D482] p-5"/>
          <div className="border-t border-gray-200" />

          <div className="bg-emerald-800 p-3 flex items-center justify-center gap-1">
            <img src={idea} alt="idea" className="w-15 h-15 mb-4"/>
           <h1>Including your phone number inyour tour request bid,increases your chance of landing the house by 30%</h1>
          </div>

           <div className="border-t border-gray-200" />

            <PressButton onClick={nextStep} text="Proceed" shadow="white" />
             <PressButton onClick={nextStep} text="Send Bid without contact info" shadow="white" />
           
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="text-center ">
            <div className="space-y-2 mb-5">
              <img src={Celebration} alt="celebration" className="w-70 mx-auto"/>
              <h2 className="text-2xl font-semibold">Voilaaa!</h2>
              <p className="text-white">
                Your bid to view {property.landlordName}'s<br/> home is on its way!'.
              </p>
            </div>
            
            <PressButton onClick={nextStep} text="Proceed to dashboard" shadow="white" />
          </div>
        )}
      </GlassEffect>
    </div>
  );
}
