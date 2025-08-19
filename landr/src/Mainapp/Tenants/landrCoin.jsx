import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/black-white-photo-buildings-crane 1.png";
import image1 from  "../../assets/hugging face.png" 
import coins from "../../assets/coins.png" 
import { use } from "react";

export default function MultiStepForm() {
    const navigate = useNavigate()
  const [step, setStep] = useState(1);

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    billingAddress: "",
    cardNumber: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted ✅");
  };

  return (
    <div 
   style={{
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}
    className="min-h-screen flex justify-center items-center  text-white">
      <div className="bg-[#1A3E32] p-6  w-[500px] shadow-xl">
        {/* Step indicator */}
        <p className="mb-4 text-center text-sm">Step {step} of 5</p>

        {/* Steps */}
        {step === 1 && (
          <div className="text-center flex flex-col items-center justify-center">
          <img src={image1} className="w-[50%]" />
          <h2 className="text-xl mb-4">You are 99 % done.</h2>
          <p className="mb-6 font-Poppins text-sm">Just a few steps left, so you can enjoy our full potential.</p>
          
          <div className="relative group w-full">
             <div className="absolute top-1 left-1 w-full h-full border-2 bg-amber-50 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
          <button className="relative bg-[#02D482] w-full py-2" onClick={nextStep}>
            Proceed
          </button>
          </div>
          </div>

        )}

        {step === 2 && (
          <div className="text-center flex flex-col items-center justify-center">
          <img src={coins} className="w-[50%]" />
          <h2 className="text-xl mb-4">Landr Coins</h2>
          <p className="mb-6 font-Poppins font-light">Landr coins is a special token that allows you to bid for multiple homes without having to worry about extra fees.</p>
          
          <div className=" flex flex-col gap-2 w-full">

          <div className="relative group w-full">
             <div className="absolute top-1 left-1 w-full h-full border-2 bg-amber-50 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
          <button className="relative bg-[#02D482] w-full py-2" onClick={nextStep}>
           Get Token Here
          </button>
          </div>

           <div className="relative group w-full">
             <div className="absolute top-1 left-1 w-full h-full  bg-[#02D482] opacity-0 group-hover:opacity-100 pointer-events-none"></div>
          <button className="relative bg-white text-[#02D482] w-full py-2"  onClick={() => navigate('/TenantsMainapp')}>
           Skip the process
          </button>
          </div>
          </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl mb-4">📦 Billing Info</h2>
            <input
              type="text"
              name="billingAddress"
              placeholder="Billing Address"
              className="w-full p-2 mb-3 rounded-lg text-black"
              value={formData.billingAddress}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              className="w-full p-2 mb-3 rounded-lg text-black"
              value={formData.cardNumber}
              onChange={handleChange}
            />
            <div className="flex justify-between">
              <button className="bg-gray-500 px-4 py-2 rounded-lg" onClick={prevStep}>
                Back
              </button>
              <button className="bg-green-500 px-4 py-2 rounded-lg" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <h2 className="text-xl mb-4">✅ Review</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Billing Address: {formData.billingAddress}</p>
            <p>Card: **** **** **** {formData.cardNumber.slice(-4)}</p>

            <div className="flex justify-between mt-6">
              <button className="bg-gray-500 px-4 py-2 rounded-lg" onClick={prevStep}>
                Back
              </button>
              <button className="bg-green-500 px-4 py-2 rounded-lg" onClick={nextStep}>
                Confirm
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="text-center">
            <h2 className="text-xl mb-4">🎉 All Done!</h2>
            <p>Thank you, {formData.name}. Your account is ready.</p>
            <button className="bg-green-500 w-full py-2 mt-6 rounded-lg" onClick={handleSubmit}>
              Finish
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
