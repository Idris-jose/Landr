import React from 'react';
import { X } from 'lucide-react';
import logo from '../../../assets/Landr.png';
import { useNavigate } from 'react-router-dom';

const SetupModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
        <div className="flex items-center justify-between mb-6">
          <img src={logo} className='w-15 mb-4' alt="Logo" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-left mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Complete your account setup</h2>
          <p className="text-[#02D482] font-Poppins">
            To view homes & send offers, you need to complete your account setup in your profile
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              navigate("/TenantsMainapp/profile");
            }}
            className="bg-[#02D482] text-white py-3 rounded-full font-Poppins font-medium hover:bg-green-600 transition-colors"
          >
            Go to Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupModal;
