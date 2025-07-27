import { motion } from 'framer-motion';
import Frame1 from '../assets/Frame1.png';
import Frame2 from '../assets/Frame2.png';
import Frame3 from '../assets/Frame 3.png';
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';
import {MapPin, BedSingle, Wallet } from 'lucide-react';
import Citysearch from './modals/citysearch';
import { useState } from 'react';

// An
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};


export default function Section1() {
  const navigate = useNavigate();
  const [showCitySearch, setShowCitySearch] = useState(false);

  const handleCitySearch = () => {
    setShowCitySearch(true);
    
   
}
  const handleBedSearch = () => {
  // Logic for searching by bed
  }
  const handleBudgetSearch = () => {
    // Logic for searching by budget
  }
  
  return (
    <Element name="section1">
      <motion.section 
        className='flex flex-col gap-12 px-6 md:px-10 py-8 md:py-12'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className='flex flex-col gap-6 max-w-4xl' variants={containerVariants}>
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            variants={itemVariants}
          >
          Find your next home without  middlemen.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl font-Poppins text-gray-500 leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
           
        Connect directly with landlords and tenants from the comfort of your home. No agents. No fees. Just honest housing.
          </motion.p>
          
          <div className='flex font-Poppins flex-col md:flex-row gap-4 items-start md:items-center'>
            <button 
            onClick={handleCitySearch}
            className='border-2 border-[#02D482] rounded-full px-10 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2'>
              <MapPin className='w-5 h-5'/> City
            </button>
            <button className='border-2 border-[#02D482] rounded-full px-10 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2'>
              <BedSingle className='w-5 h-5'/> Bed
            </button>
            <button className='border-2 border-[#02D482] rounded-full px-10 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2'>
              <Wallet className='w-5 h-5'/> Budget
            </button>

             <button className=' bg-[#02D482] rounded-full px-10 py-2 text-white hover:bg-green-700 transition-colors duration-200'>
              Find your ideal Home
            </button>
          </div>
          {showCitySearch && <Citysearch onClose={() => setShowCitySearch(false)} />}
        
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row gap-10 md:gap-10 items-start justify-items-start"
          variants={containerVariants}
        >
          <motion.div className="flex-1 max-w-sm" variants={imageVariants}>
            <img src={Frame1} alt="Landlord dashboard preview" className="w-full h-auto rounded-lg shadow-sm" />
          </motion.div>
          <motion.div className="flex-1 max-w-sm" variants={imageVariants}>
            <img src={Frame2} alt="Property listing preview" className="w-full h-auto rounded-lg shadow-sm" />
          </motion.div>
          <motion.div className="flex-1 max-w-sm" variants={imageVariants}>
            <img src={Frame3} alt="Tenant dashboard preview" className="w-full h-auto rounded-lg shadow-sm" />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.div 
        className='overflow-hidden bg-[#02D482] text-white p-2'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div
          className="whitespace-nowrap animate-marquee text-center text-lg font-semibold"
          style={{
            display: 'inline-block',
            minWidth: '100%',
            animation: 'marquee 12s linear infinite'
          }}
        >
          Join Landr today &amp; truly live within your means.
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
    </Element>
  )
}