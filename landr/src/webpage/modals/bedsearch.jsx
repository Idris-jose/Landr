
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Bedsearch({ onClose, onSelect, triggerRef }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const bedOptions = ['1', '2', '3', '4', '5+'];
  
  useEffect(() => {
    if (triggerRef && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom - 350,
        left: rect.left - 10
      });
    }
  }, [triggerRef]);

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
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-[#02D482] px-6 py-5 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-white text-lg font-medium leading-tight font-Poppins">
                  How many bedrooms?
                </h2>
              </div>
              <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Bed options */}
          <div className="grid grid-cols-3 gap-2 p-4">
            {bedOptions.map(bed => (
              <button
                key={bed}
                className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => {
                  onSelect(bed);
                  onClose();
                }}
              >
                {bed}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}