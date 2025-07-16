import { useNavigate } from "react-router-dom";
import { MoveLeft, Camera, Upload } from 'lucide-react';

export default function Onboarding() {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/TenantsMainapp/profile/onboarding2");
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md mx-auto"> {/* Changed max-w-4xl to max-w-md for better form width */}
           <button
                            className="flex items-center absolute left-8 gap-2 text-gray-700 hover:text-[#02D482] transition-colors"
                            onClick={() => window.history.back()}
                        >
                            <MoveLeft className="w-10 h-10" />
                        </button>
        <h1 className="text-2xl sm:text-3xl text-center font-bold ">Welcome to Landr!</h1>
        <p className="text-[#02D482] font-Poppins text-center mb-8">
          Let's get you set up with your profile.
        </p>
        
        {/* Profile Setup Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium font-Poppins text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#02D482] transition-all"
              placeholder="123-456-7890"
            />
          </div>
          
           <label className="block text-sm font-medium text-gray-700 items-center">
 
    State
  </label>
  <select
    name="state"
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
    required
  >
    <option value="">Select State</option>
    <option value="lagos">Lagos</option>
    <option value="abuja">Abuja (FCT)</option>
    <option value="kano">Kano</option>
    <option value="rivers">Rivers</option>
    <option value="oyo">Oyo</option>
    <option value="kaduna">Kaduna</option>
    <option value="ogun">Ogun</option>
    <option value="imo">Imo</option>
    <option value="plateau">Plateau</option>
    <option value="delta">Delta</option>
    <option value="edo">Edo</option>
    <option value="anambra">Anambra</option>
    <option value="akwa-ibom">Akwa Ibom</option>
    <option value="osun">Osun</option>
    <option value="ondo">Ondo</option>
    <option value="ekiti">Ekiti</option>
    <option value="kwara">Kwara</option>
    <option value="ogun">Ogun</option>
    <option value="cross-river">Cross River</option>
    <option value="abia">Abia</option>
    <option value="enugu">Enugu</option>
    <option value="bayelsa">Bayelsa</option>
    <option value="benue">Benue</option>
    <option value="borno">Borno</option>
    <option value="adamawa">Adamawa</option>
    <option value="gombe">Gombe</option>
    <option value="taraba">Taraba</option>
    <option value="yobe">Yobe</option>
    <option value="bauchi">Bauchi</option>
    <option value="katsina">Katsina</option>
    <option value="sokoto">Sokoto</option>
    <option value="kebbi">Kebbi</option>
    <option value="niger">Niger</option>
    <option value="zamfara">Zamfara</option>
    <option value="jigawa">Jigawa</option>
    <option value="kogi">Kogi</option>
    <option value="nasarawa">Nasarawa</option>
    <option value="ebonyi">Ebonyi</option>
  </select>

  <label className="block text-sm font-medium text-gray-700  items-center">
            
              Religion
            </label>
            <select
              name="religion"
         
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
            >
              <option value="" disabled>Select Religion</option>
              <option value="christianity">Christianity</option>
              <option value="islam">Islam</option>
              <option value="judaism">Judaism</option>
              <option value="hinduism">Hinduism</option>
              <option value="buddhism">Buddhism</option>
              <option value="other">Other</option>
              <option value="none">No Preference</option>
            </select>

             <label className="block text-sm font-medium text-gray-700  items-center">
                    
                        Occupation
                      </label>
                      <select
                        name="occupation"
                     
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
                      >
                        <option value="" disabled>Select Occupation</option>
                        <option value="student">Student</option>
                        <option value="employed">Employed</option>
                        <option value="self-employed">Self-Employed</option>
                        <option value="retired">Retired</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="other">Other</option>
                        <option value="none">No Preference</option>
                      </select>
          <div>
            <label className="block text-sm font-medium font-Poppins text-gray-700 mb-1">Street of Residence</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#02D482] transition-all"
              placeholder="123 Main St"
            />
          </div>    
          
          <div>
            <label className="block text-sm font-medium font-Poppins text-gray-700 mb-1">LGA of Residence</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#02D482] transition-all"
              placeholder="Lagos Mainland"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium font-Poppins text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#02D482] transition-all"
              placeholder="date of birth"
            />
          </div>
          
          <button
            type="submit"
            onClick={handleNext}
            className="w-full bg-[#02D482] text-white px-6 py-3 font-medium rounded-lg hover:bg-green-600 transition-colors mt-4"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}