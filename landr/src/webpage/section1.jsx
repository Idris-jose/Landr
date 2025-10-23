import { motion } from "framer-motion";
import Frame1 from "../assets/Frame1.png";
import background from "../assets/main.png";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";
import { MapPin, BedSingle, Wallet } from "lucide-react";
import BudgetSlider from "./modals/BudgetSlider";
import Citysearch from "./modals/citysearch";
import Bedsearch from "./modals/bedsearch";
import { useState, useRef } from "react";
import PressButton from "../components/PressButton";
// An
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Section1() {
  const [showCitySearch, setShowCitySearch] = useState(false);
  const [showBedSearch, setShowBedSearch] = useState(false);
  const [showBudgetSearch, setShowBudgetSearch] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedBed, setSelectedBed] = useState(null);
  const [budgetRange, setBudgetRange] = useState({
    min: 50000,
    max: 500000,
  });

  const cityButtonRef = useRef(null);
  const bedButtonRef = useRef(null);
  const budgetButtonRef = useRef(null);

  const handleCitySearch = () => {
    setShowCitySearch(true);
    setShowBedSearch(false); // Close other modal
  };

  const handleBedSearch = () => {
    setShowBedSearch(true);
    setShowCitySearch(false); // Close other modal
  };

  const handleBudgetSearch = () => {
    setShowBudgetSearch(true);
    setShowCitySearch(false);
    setShowBedSearch(false);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowCitySearch(false);
  };

  const handleBedSelect = (bed) => {
    setSelectedBed(bed);
    setShowBedSearch(false);
  };

  const handleBudgetChange = (min, max) => {
    setBudgetRange({ min, max });
  };

  // Format currency for budget display
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section name="section1">
      <motion.section
        className="flex flex-col gap-8 sm:gap-12 px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col gap-4 sm:gap-6 max-w-4xl"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            variants={itemVariants}
          >
            Find your next home without middlemen.
          </motion.h1>

          {/* ***********************removing the font-poppins class ************************* */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
            Connect directly with landlords and tenants from the comfort of your
            home. No agents. No fees. Just honest housing.
          </motion.p>

          <div className="flex font-Poppins flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center relative">
            <div className="flex font-Poppins flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center relative w-full sm:w-auto">
              {/* City Button */}
              <div className="relative w-full sm:w-auto">
                <button
                  ref={cityButtonRef}
                  onClick={handleCitySearch}
                  className="border-2 border-[#02D482] px-3 sm:px-4 md:px-10 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-base"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  {selectedCity || "City"}
                </button>
                {showCitySearch && (
                  <Citysearch
                    onClose={() => setShowCitySearch(false)}
                    onSelect={handleCitySelect}
                    triggerRef={cityButtonRef}
                  />
                )}
              </div>

              {/* Bed Button */}
              <div className="relative w-full sm:w-auto">
                <button
                  ref={bedButtonRef}
                  onClick={handleBedSearch}
                  className="border-2 border-[#02D482] px-3 sm:px-4 md:px-10 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-base"
                >
                  <BedSingle className="w-4 h-4 sm:w-5 sm:h-5" />
                  {selectedBed || "Bed"}
                </button>
                {showBedSearch && (
                  <Bedsearch
                    onClose={() => setShowBedSearch(false)}
                    onSelect={handleBedSelect}
                    triggerRef={bedButtonRef}
                  />
                )}
              </div>

              {/* Budget Button */}
              <div className="relative w-full sm:w-auto">
                <button
                  ref={budgetButtonRef}
                  onClick={handleBudgetSearch}
                  className="border-2 border-[#02D482] px-3 sm:px-4 md:px-10 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-base"
                >
                  <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />
                  {budgetRange.min === 50000 && budgetRange.max === 500000
                    ? "Budget"
                    : `${formatCurrency(budgetRange.min)} - ${formatCurrency(
                        budgetRange.max
                      )}`}
                </button>
                {showBudgetSearch && (
                  <BudgetSlider
                    onClose={() => setShowBudgetSearch(false)}
                    onBudgetChange={handleBudgetChange}
                    triggerRef={budgetButtonRef}
                  />
                )}
              </div>
              {/* ************commenting the initial button out to replace it with the press button************** */}

              {/* <div className='relative'>
         <div className="absolute top-2 left-2 w-full h-full bg-black "></div>
      <button className='bg-[#02D482] relative px-10 py-2 shadow-black  text-white hover:bg-green-700 transition-colors duration-200'>
            Find your ideal Home
          </button>
       </div> */}
              <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                <PressButton
                  text="Find your ideal Home"
                  color="green"
                  shadow="black"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <img
          src={background}
          alt="Landlord dashboard preview"
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </motion.section>

      <motion.div
        className="overflow-hidden bg-[#02D482] text-white p-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div
          className="whitespace-nowrap animate-marquee text-center text-lg font-semibold"
          style={{
            display: "inline-block",
            minWidth: "100%",
            animation: "marquee 12s linear infinite",
          }}
        >
          Join Landr today & truly live within your means.
        </div>
      </motion.div>

      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
        `}
      </style>
    </section>
  );
}
