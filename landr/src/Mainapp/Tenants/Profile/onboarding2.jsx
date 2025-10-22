
import { useState } from 'react';
import { MoveLeft, Camera, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding2(){
    const [selectedFile, setSelectedFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);
     const [showSetupModal, setShowSetupModal] = useState(false);
     
     const handleCompleteSetup = () => {
        setShowSetupModal(true);

    };

    const navigate = useNavigate()

    const handleFileSelect = (file) => {
        if (file && (file.type.startsWith('image/') || file.type === 'application/pdf')) {
            setSelectedFile(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        const file = e.dataTransfer.files[0];
        handleFileSelect(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragActive(false);
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        handleFileSelect(file);
    };

    return(
        <>
            <div>
                {showSetupModal && (
                        <div className="fixed inset-0 bg-gray-600/70 flex items-center justify-center z-50 p-4">
                          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
                          
                            
                            <div className="text-left mb-6">
                              <h2 className="text-xl font-semibold text-gray-900 mb-2">Congratulations</h2>
                              <p className="text-[#02D482] font-Poppins">
                              Your account has been updated succesfully! Go ahead and secure your new home. 
                              </p>
                            </div>
                            
                            <div className="flex flex-col gap-3">
                              <button
                                onClick={() => {
                                    setShowSetupModal(false);
                                    navigate('/tenantsMainapp/profile');
                                }}
                                className="bg-[#02D482]  text-white py-3 rounded-full font-Poppins font-medium hover:bg-green-600 transition-colors"
                              >
                                Go to Profile
                              </button>
                           
                            </div>
                          </div>
                        </div>
                      )}
                <button
                    className="flex items-center absolute left-8 gap-2 text-gray-700 hover:text-[#02D482] transition-colors"
                    onClick={() => window.history.back()}
                >
                    <MoveLeft className="w-10 h-10" />
                </button>
                
                <div className="flex justify-center mt-8">
                    
                </div>
                
                <h1 className="text-[20px] font-bold text-center mt-4">Create your Landr tenant account</h1>
                <p className='text-center font-Poppins text-[14px] text-[#02D482]'>Fill in the information to complete your profile</p>
                
                <div className="flex flex-col gap-5 max-w-md mx-auto mt-8 bg-white p-8 rounded-3xl shadow-lg">
                    <div className="flex flex-col gap-1">
                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*,.pdf"
                            onChange={handleFileInputChange}
                            className="hidden"
                        />
                        
                        <div
                            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                                dragActive 
                                    ? 'border-[#02D482] bg-green-50' 
                                    : selectedFile 
                                        ? 'border-[#02D482] bg-green-50' 
                                        : 'border-gray-300 hover:border-[#02D482]'
                            }`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onClick={() => document.getElementById('fileInput').click()}
                        >
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 bg-[#02D482] rounded-full flex items-center justify-center">
                                    <Camera className="w-6 h-6 text-white" />
                                </div>
                                
                                {selectedFile ? (
                                    <div className="text-center">
                                        <p className="text-[#02D482] font-medium">{selectedFile.name}</p>
                                        <p className="text-gray-500 text-sm">Click to change document</p>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <p className="text-gray-700 font-medium">Click to upload document</p>
                                        <p className="text-gray-500 text-sm">or drag and drop</p>
                                        <p className="text-gray-400 text-xs mt-1">PNG, JPG, PDF up to 10MB</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                         <ul className="list-disc pl-6 text-gray-500 font-Poppins space-y-2 text-[13px] md:text-[12px] leading-relaxed mb-10">
                    <li>Take a picture of your ID’s front side & make sure your name & photo are clearly visible.</li>
                    <li>Adjust the direction to avoid light reflections.</li>
                    <li>If your is expired, your account may be locked.</li>
                </ul>

                    <button 
                        className="rounded-[100px] bg-[#02D482] text-white px-4 py-3 text-[13px] font-Poppins hover:bg-green-600 transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            handleCompleteSetup();
                        }}
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </>
    )
}