import React, { useState, useEffect } from 'react';
import { MapPin, X } from 'lucide-react';


export default function Citysearch({ onClose, onSelect, triggerRef }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample cities - replace with your actual data
  const cities = ['Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan', 'Enugu', 'Benin'];
  
  useEffect(() => {
    if (triggerRef && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom - 350,
        left: rect.left - 10
      });
    }
  }, [triggerRef]);

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="absolute inset-0 z-40" onClick={onClose} />
      
      <div 
        className="absolute z-50 w-80"
        style={{
          top: position.top + window.scrollY,
          left: position.left
        }}
      >
        <div className="bg-white  shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-[#02D482] px-6 py-5 relative">
            {/* ... (keep existing header) */}
            
            <div className="mt-4 relative">
              <div className="rounded-xl border border-white border-opacity-30 flex items-center px-4 py-3 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <MapPin size={18} className="mr-3 text-white flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search by city or neighborhood"
                  className="flex-1 bg-transparent text-white placeholder-white placeholder-opacity-80 text-sm border-none outline-none font-Poppins"
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* City list */}
          <div className="max-h-60 overflow-y-auto">
            {filteredCities.map(city => (
              <div 
                key={city}
                className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => {
                  onSelect(city);
                  onClose();
                }}
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}