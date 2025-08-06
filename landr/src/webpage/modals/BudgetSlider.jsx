import { Wallet, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BudgetSlider({ onClose, onBudgetChange, triggerRef }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [minBudget, setMinBudget] = useState(50000);
  const [maxBudget, setMaxBudget] = useState(500000);
  
  // Budget range limits in Naira
  const MIN_LIMIT = 10000;
  const MAX_LIMIT = 1000000;
  
  useEffect(() => {
    if (triggerRef && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom - 350,
        left: rect.left - 300
      });
    }
  }, [triggerRef]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

   const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= maxBudget - 10000) {
      setMinBudget(value);
      onBudgetChange(value, maxBudget);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= minBudget + 10000) {
      setMaxBudget(value);
      onBudgetChange(minBudget, value);
    }
  };

  const minPercent = ((minBudget - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100;
  const maxPercent = ((maxBudget - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="absolute z-50 w-96"
        style={{
          top: position.top + window.scrollY,
          left: position.left
        }}
      >
        <div className="bg-white  shadow-2xl overflow-hidden border border-gray-100">
          {/* Green header section */}
          <div className="bg-[#02D482] px-6 py-5 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-white text-lg font-medium leading-tight font-Poppins">
                  What's your budget?
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Budget content */}
          <div className="p-6 bg-[#02D482]">
            <div 
              className="rounded-xl border border-white border-opacity-30 p-6 shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {/* Budget Input Fields */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2 font-Poppins">
                    Min rent
                  </label>
                  <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2 border border-white border-opacity-30">
                    <span className="text-green-500 font-semibold text-sm font-Poppins">
                      {formatCurrency(minBudget)}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2 font-Poppins">
                    Max rent
                  </label>
                  <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2 border border-white border-opacity-30">
                    <span className="text-green-500 font-semibold text-sm font-Poppins">
                      {formatCurrency(maxBudget)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dual Range Slider */}
              <div className="mb-4 relative">
                <div className="relative h-2 bg-white bg-opacity-30 rounded-full">
                  {/* Active range */}
                  <div 
                    className="absolute h-2 bg-white rounded-full"
                    style={{
                      left: `${minPercent}%`,
                      width: `${maxPercent - minPercent}%`
                    }}
                  />
                </div>
                
                {/* Slider container with proper positioning */}
                <div className="relative -mt-2">
                  {/* Min slider */}
                  <input
                    type="range"
                    min={MIN_LIMIT}
                    max={MAX_LIMIT}
                    step={5000}
                    value={minBudget}
                    onChange={handleMinChange}
                    className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb pointer-events-none"
                    style={{ 
                      zIndex: minBudget > maxBudget - 10000 ? 5 : 2,
                      pointerEvents: 'auto'
                    }}
                  />
                  
                  {/* Max slider */}
                  <input
                    type="range"
                    min={MIN_LIMIT}
                    max={MAX_LIMIT}
                    step={5000}
                    value={maxBudget}
                    onChange={handleMaxChange}
                    className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb pointer-events-none"
                    style={{ 
                      zIndex: maxBudget < minBudget + 10000 ? 5 : 3,
                      pointerEvents: 'auto'
                    }}
                  />
                </div>

                {/* Range labels */}
                <div className="flex justify-between mt-3 text-xs text-white text-opacity-80 font-Poppins">
                  <span>{formatCurrency(MIN_LIMIT)}</span>
                  <span>{formatCurrency(MAX_LIMIT)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom slider styles */}
      <style jsx>{`
        .slider-thumb {
          outline: none;
        }
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          transition: all 0.2s;
          pointer-events: auto;
        }
        .slider-thumb:hover::-webkit-slider-thumb {
          transform: scale(1.1);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
        }
        .slider-thumb::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          transition: all 0.2s;
          pointer-events: auto;
        }
        .slider-thumb:hover::-moz-range-thumb {
          transform: scale(1.1);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
        }
        .slider-thumb::-webkit-slider-track {
          background: transparent;
          border: none;
        }
        .slider-thumb::-moz-range-track {
          background: transparent;
          border: none;
        }
        .slider-thumb::-webkit-slider-runnable-track {
          background: transparent;
          border: none;
        }
        .slider-thumb::-moz-range-progress {
          background: transparent;
        }
      `}</style>
    </>
  );
}