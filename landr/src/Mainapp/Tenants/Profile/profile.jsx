import { useNavigate } from "react-router-dom";
import { MoveLeft, Camera, Upload,ArrowLeft } from 'lucide-react';

export default function Profile() {
    const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen p-6 max-w-4xl mx-auto">
     <button 
          onClick={() => navigate("/TenantsMainapp")}
          className="flex items-center gap-2 font-Poppins text-gray-700 hover:text-[#02D482] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span >Back</span>
        </button>
      
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <p className="text-[#02D482] mb-6">Manage your account here.</p>
        <div className="border-t border-gray-200"></div>
      </div>

      <div className="space-y-8">
         
        {/* Account Section */}
        <div>
          <h3 className="text-lg font-medium mb-2">Account</h3>
          
          
            <div className="py-4 flex justify-between bg-gray-100 rounded-2xl p-5 items-center">
                <div>
                    <h1 className="text-lg font-semibold">Profile</h1>
                    <p className="text-gray-600" >Manage your profile information</p>
                    <div className=" bg-[#02D482] px-3 p-2 font-Poppins rounded-full mt-2">
                        <button className="text-white hover:underline" onClick={() => navigate("/TenantsMainapp/profile/onboarding")}>Complete your Profile Here</button>
                    </div>

                </div>
                <div className="flex-col items-center gap-4">
                    <h1 className="text-lg font-semibold font-Poppins">First Name</h1>
                    <p className="text-gray-600">Jhonson</p>
                    
                </div>
                       <div className="flex-col items-center gap-4">
                    <h1 className="text-lg font-semibold font-Poppins">Last Name</h1>
                    <p className="text-gray-600">Jhon</p>
                    
                </div>
                <div className="flex-col items-center gap-4">
                    <h1 className="text-lg font-semibold font-Poppins">Email</h1>
                    <p className="text-gray-600">jhon@example.com</p>

                </div>
          </div>
          </div>
        </div>

        
    </div>
  
  );
}