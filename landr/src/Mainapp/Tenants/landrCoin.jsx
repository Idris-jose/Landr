import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/black-white-photo-buildings-crane 1.png";
import image1 from "../../assets/hugging face.png";
import coins from "../../assets/coins.png";
import GlassEffect from "../../components/GlassEffect";
import PressButton from "../../components/PressButton";
import { ChevronDown, GlassWater} from "lucide-react"

export default function MultiStepForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [card, setCard] = useState({
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  const formatCardNumber = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  };

  const handleChangeCard = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === "cardNumber") v = formatCardNumber(value);
    if (name === "expMonth") v = value.replace(/\D/g, "").slice(0, 2);
    if (name === "expYear") v = value.replace(/\D/g, "").slice(0, 2);
    if (name === "cvc") v = value.replace(/\D/g, "").slice(0, 3);
    setCard({ ...card, [name]: v });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    billingAddress: "",
    cardNumber: "",
  });

  const coinPacks = [
    { id: "pack10", coins: 10, price: 1.2 },
    { id: "pack20", coins: 20, price: 2.2 },
    { id: "pack30", coins: 30, price: 3.0 },
    { id: "pack40", coins: 40, price: 3.8 },
  ];
  const [selectedPack, setSelectedPack] = useState(coinPacks[0]);

  // Pricing and validation helpers
  const taxRate = 0.0917; // ~9.17%
  const cardDigits = card.cardNumber.replace(/\s/g, "");
  const isCardValid =
    cardDigits.length === 16 &&
    card.expMonth.length === 2 &&
    Number(card.expMonth) >= 1 &&
    Number(card.expMonth) <= 12 &&
    card.expYear.length === 2 &&
    card.cvc.length === 3;

  const subtotal = selectedPack ? selectedPack.price : 1.2;
  const taxes = Number((subtotal * taxRate).toFixed(2));
  const total = Number((subtotal + taxes).toFixed(2));

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
 
   const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        // changed to "bottom" from "center"
        backgroundPosition: "bottom",
      }}
      className="min-h-screen flex justify-center items-center p-4 text-white"
    >
      {/* <div className="bg-[#1A3E32] p-8 w-full max-w-2xl shadow-xl"> */}
      {/* ******************************************* */}
      {/* ******************ADDING GLASS EFFECT************************* */}
      <GlassEffect>
        {/* Step indicator */}
       
        {/* Steps */}
        {step === 1 && (
          <div className="text-center flex flex-col items-center justify-center space-y-6">
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                src={image1}
                className="w-full h-full object-contain"
                alt="Progress illustration"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">You are 99% done.</h2>
              <p className="font-Poppins text-sm text-gray max-w-md">
                Just a few steps left, so you can enjoy our full potential.
              </p>
            </div>

            {/* <div className="relative group w-full max-w-sm">
              <div className="absolute top-1 left-1 w-full h-full border-2 bg-amber-50 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              <button
                className="relative bg-[#02D482] w-full py-3 px-6 font-medium text-white hover:bg-[#02D482] hover:bg-opacity-90 transition-all duration-200"
                onClick={nextStep}
              >
                Proceed
              </button>
            </div> */}
            <PressButton onClick={nextStep} text="Proceed" shadow="white" />
          </div>
        )}

        {step === 2 && (
          <div className="text-center flex flex-col items-center justify-center space-y-6">
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                src={coins}
                className="w-full h-full object-contain"
                alt="Landr coins illustration"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Landr Coins</h2>
              <p className="font-Poppins font-light text-gray-300 max-w-md leading-relaxed">
                Landr coins is a special token that allows you to bid for
                multiple homes without having to worry about extra fees.
              </p>
            </div>
            {/* ********************** */}
            {/* ***********ADDING PRESS BUTTON*********** */}
            <div className="flex flex-col gap-3 w-full max-w-sm">
              {/* <div className="relative group w-full">
                <div className="absolute top-1 left-1 w-full h-full border-2 bg-amber-50 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                <button
                  className="relative bg-[#02D482] w-full py-3 px-6 font-medium text-white hover:bg-[#02D482] hover:bg-opacity-90 transition-all duration-200"
                  onClick={nextStep}
                >
                  Get Token Here
                </button>
              </div> */}

              {/* <div className="relative group w-full">
                <div className="absolute top-1 left-1 w-full h-full bg-[#02D482] opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                <button
                  className="relative bg-white text-[#02D482] w-full py-3 px-6 font-medium hover:bg-gray-100 transition-all duration-200"
                  onClick={() => navigate("/TenantsMainapp")}
                >
                  Skip the process
                </button>
              </div> */}
              <PressButton
                onClick={nextStep}
                text="Get Token Here"
                shadow="white"
              />

              <button
                className="relative text-[#fff] w-full py-3 px-6 font-medium hover:bg-gray-100 transition-all duration-200"
                onClick={() => navigate("/TenantsMainapp")}
              >
                Skip the process
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
           <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">Select Your Package</h2>
        <p className="text-gray-300">
          Choose the number of Landr coins you'd like to purchase
        </p>
      </div>

      {/* Dropdown */}
      <div className="group transition-transform duration-200 hover:-translate-y-1">
        <div className="relative inline-block w-full group">
          {/* hover border effect */}
          

          {/* Dropdown button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative border-2 border-black bg-[#02D482] text-white w-full flex justify-between items-center px-4 py-3 rounded"
          >
            <span>
              {selectedPack
                ? `${selectedPack.coins} Landr coins for $${selectedPack.price.toFixed(2)}`
                : "Select Landr Coin Package"}
            </span>
            <ChevronDown size={16} />
          </button>

          {/* Dropdown menu */}
          {open && (
            <GlassEffect>
            <div className=" mt-1 bg-white shadow-lg z-10 rounded">
              {coinPacks.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    setSelectedPack(p);
                    setOpen(false);
                  }}
                  className={`px-4 py-2 text-sm cursor-pointer 
                    hover:bg-green-600 hover:text-white
                    ${selectedPack?.id === p.id ? "bg-[#02D482] font-semibold" : "text-gray-700"}`}
                >
                  {p.coins} Landr coins for ${p.price.toFixed(2)}
                </div>
              ))}
            </div>
            </GlassEffect>
          )}
        </div>
      </div>

      {/* Selected Package Preview */}
      {selectedPack && (
        <div className="bg-[#1f473a] p-4 shadow-md rounded">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Selected Package:</span>
            <span className="font-semibold">
              {selectedPack.coins} coins – ${selectedPack.price.toFixed(2)}
            </span>
          </div>
        </div>
      )}

      {/* Proceed Button */}
      <div className="relative group w-full">
        
   <PressButton text="proceed to payment" shadow="white" onClick={nextStep}/>
      </div>
    </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold">Payment Details</h2>
              <p className="text-gray-300">Complete your purchase securely</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 text-white w-full">
              {/* Left - Payment Form */}
              <div className="flex-1 bg-gradient-to-b from-[#1a3e32] to-[#0f1f1a] p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-6">
                  Add a Billing Method
                </h3>

                <div className="mb-6 p-4 bg-[#1f473a] shadow-sm">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      defaultChecked
                      aria-label="Payment with card"
                      className="w-4 h-4"
                    />
                    <div className="flex-1">
                      <span className="font-medium block">Payment Card</span>
                      <span className="text-sm text-gray-300">
                        Visa, Mastercard, Verve
                      </span>
                    </div>
                  </label>
                  <p className="text-sm text-gray-400 mt-2">
                    Input your card details to purchase tokens.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Card Number */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="1234 5678 2345 2345"
                      value={card.cardNumber}
                      onChange={handleChangeCard}
                      inputMode="numeric"
                      autoComplete="cc-number"
                      maxLength={19}
                      required
                      className="w-full p-3 bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#02D482] focus:ring-opacity-50"
                    />
                  </div>

                  {/* Expiration Date */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-2">
                        Month
                      </label>
                      <input
                        type="text"
                        name="expMonth"
                        placeholder="MM"
                        value={card.expMonth}
                        onChange={handleChangeCard}
                        inputMode="numeric"
                        autoComplete="cc-exp-month"
                        maxLength={2}
                        required
                        className="w-full p-3 bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#02D482] focus:ring-opacity-50"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-2">
                        Year
                      </label>
                      <input
                        type="text"
                        name="expYear"
                        placeholder="YY"
                        value={card.expYear}
                        onChange={handleChangeCard}
                        inputMode="numeric"
                        autoComplete="cc-exp-year"
                        maxLength={2}
                        required
                        className="w-full p-3 bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#02D482] focus:ring-opacity-50"
                      />
                    </div>
                  </div>

                  {/* Security Code */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Security Code
                    </label>
                    <input
                      type="text"
                      name="cvc"
                      placeholder="3 Digits"
                      value={card.cvc}
                      onChange={handleChangeCard}
                      inputMode="numeric"
                      autoComplete="cc-csc"
                      maxLength={3}
                      required
                      className="w-full p-3 bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#02D482] focus:ring-opacity-50"
                    />
                  </div>

                  <button
                    onClick={nextStep}
                    disabled={!isCardValid}
                    className={`w-full py-3 px-6 font-medium transition-all duration-200 ${
                      isCardValid
                        ? "bg-[#02D482] text-white hover:bg-[#02D482] hover:bg-opacity-90"
                        : "bg-gray-600 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Save & Proceed
                  </button>
                </div>
              </div>

              {/* Right - Summary */}
              <div className="bg-[#1f473a] w-full lg:w-80 p-6 shadow-lg self-start">
                <h3 className="flex items-center gap-2 text-lg font-medium mb-6">
                  <span className="text-yellow-400">🟡</span> Buy{" "}
                  {selectedPack?.coins ?? 10} Landr Coins
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Sub-total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Estimated Taxes</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>

                  <hr className="border-gray-600 my-4" />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Estimated Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

             <PressButton text="Proceed to payment" shadow="green"/>

                <div className="bg-[#0f1f1a] p-3 mt-5 shadow-sm">
                  <p className="text-xs text-gray-300 leading-relaxed">
                    These tokens would expire on <b>31 July, 2025</b> & unused
                    tokens would be rolled over for the next month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-semibold">All Done!</h2>
              <p className="text-gray-300">
                Thank you, {formData.name}. Your account is ready.
              </p>
            </div>
            <button
              className="bg-[#02D482] w-full max-w-sm py-3 px-6 font-medium text-white hover:bg-[#02D482] hover:bg-opacity-90 transition-all duration-200"
              onClick={handleSubmit}
            >
              Finish
            </button>
          </div>
        )}
         <div className="mt-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((stepNum) => (
              <div
                key={stepNum}
                className={`w-8 h-8 flex items-center justify-center text-sm font-medium ${
                  stepNum === step
                    ? "bg-[#02D482] text-white"
                    : stepNum < step
                    ? "bg-[#02D482] bg-opacity-50 text-white"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                {stepNum}
              </div>
            ))}
          </div>
         
        </div>

      </GlassEffect>
    </div>
  );
}
