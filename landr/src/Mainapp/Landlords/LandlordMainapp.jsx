import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import LandlordDashboard from './Dashboard/LandlordDashboard';

export default function LandlordMainapp() {
  const navigate = useNavigate();
  const [showmodel, setShowModel] = useState(true);
  const [kycCompleted, setKycCompleted] = useState(false);

  const handleCloseModal = () => {
    setShowModel(false);
  };

  // For demo, assume KYC is completed when modal is closed
  const handleKycComplete = () => {
    setKycCompleted(true);
    setShowModel(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        {showmodel && (
          <div className="fixed inset-0 bg-gray-600/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-4 sm:p-6 max-w-md w-full relative">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <div className="text-left mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Complete your KYC </h2>
                <p className="text-sm sm:text-base text-[#02D482] font-Poppins">
                  To proceed & access your dashboard, you’d need to complete your kyc to verify your identity.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    navigate('/LandlordsMainapp/kyc');
                  }}
                  className="bg-[#02D482] text-white py-2 sm:py-3 rounded-full font-Poppins font-medium hover:bg-green-600 transition-colors text-sm sm:text-base"
                >
                  Proceed to KYC
                </button>
                <button
                  onClick={handleKycComplete}
                  className="mt-2 bg-gray-300 text-gray-800 py-2 sm:py-3 rounded-full font-Poppins font-medium hover:bg-gray-400 transition-colors text-sm sm:text-base"
                >
                  Skip KYC (Demo)
                </button>
              </div>
            </div>
          </div>
        )}
        {kycCompleted && <LandlordDashboard />}
        {!showmodel && !kycCompleted && (
      <LandlordDashboard />
        )}
      </div>
    </>
  );
}
