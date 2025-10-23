import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRound, Mail, LockKeyhole, Eye, EyeOff } from 'lucide-react';
import background from '../assets/architecture-1719526_1920.jpg';
import logo from '../assets/Landr.png';

export default function SignupPage({ onClose }) {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    accountType: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Fallback images for demo purposes
  const backgroundFallback = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
  const logoFallback = "https://via.placeholder.com/60x40/02D482/FFFFFF?text=LANDR";

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const NavigateUser = (accountType) => {
    if (accountType === 'tenant') {
      navigate('/TenantsMainapp/landrCoin');
    } else if (accountType === 'landlord') {
      navigate('/LandlordMainapp');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (!signupData.accountType) {
      setError("Please select an account type.");
      setIsLoading(false);
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    const payload = {
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      email: signupData.email,
      password: signupData.password,
      role: signupData.accountType,
    };

     try {
            const response = await fetch('https://landrentals.azurewebsites.net/api/Authentications/CreateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            console.log(0, JSON.stringify(payload))
            const data = await response.json();
            console.log(9, JSON.stringify(data))

            if (data.message) {
                throw new Error(data.message || 'Something went wrong');
            }

            console.log('Success:', data);
            // Optionally redirect or show success toast
            NavigateUser(signupData.accountType)
        } catch (err) {
            // console.error('Error:', JSON.stringify(err));
            console.error('Error:', {
    name: err.name,
    message: err.message,
    stack: err.stack,
});
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

  const handleClose = () => {
    onClose();
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
  };

  const goToLogin = () => {
    console.log('Navigate to login page');
    onClose(); // Close modal when navigating
  };


  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full bg-white">
      
      {/* Background Image Section */}
      <div className="hidden lg:flex lg:w-1/2 min-h-screen relative">
        <div 
          className="w-full h-full bg-cover bg-center flex-1"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute mb-10 bottom-8 left-8 z-10 text-white">
            <p className="text-2xl font-bold drop-shadow-lg">Finding your next home made easy.</p>
            <p className="text-sm mt-2 opacity-90 drop-shadow-md">Join us today and start your journey.</p>
          </div>
        </div>
      </div>
      
      {/* Form Section */}
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Header with Logo */}
          <div className="flex justify-center items-center mb-6">
            <img src={logo} className="h-10" alt="Landr Logo" />
          </div>
          
          {/* Title and Description */}
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Create your Landr account</h2>
          <p className="text-center mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600">
            Create your account, purchase landr coins & start bidding for your dream home.
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Signup Form */}
          <div className="flex flex-col gap-4">
            
            {/* First Name */}
            <div className="relative group transform hover:scale-[1.01] transition-transform duration-200">
              <div className="absolute top-1 left-1 w-full h-full bg-gray-400 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative bg-white flex items-center rounded">
                <UserRound className="absolute left-3 text-white z-10 w-5 h-5 drop-shadow-sm" />
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="bg-[#02D482] placeholder-white text-white px-4 py-3 pl-10 focus:outline-none transition-all duration-300 w-full rounded shadow-md hover:shadow-lg"
                  value={signupData.firstName}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="relative group transform hover:scale-[1.01] transition-transform duration-200">
              <div className="absolute top-1 left-1 w-full h-full bg-gray-300 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative bg-white flex items-center rounded">
                <UserRound className="absolute left-3 text-[#02D482] z-10 w-5 h-5 drop-shadow-sm" />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="border-2 border-[#02D482] placeholder-[#02D482] text-[#02D482] px-4 py-3 pl-10 focus:outline-none transition-all duration-300 w-full rounded bg-white shadow-md hover:shadow-lg"
                  value={signupData.lastName}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Account Type */}
            <div className="relative group transform hover:scale-[1.01] transition-transform duration-200">
              <div className="absolute top-2 left-2 w-full h-full border-[#02D482] border-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative bg-white flex items-center rounded">
                <select
                  name="accountType"
                  value={signupData.accountType}
                  onChange={handleInputChange}
                  required
                  className="bg-[#02D482] text-white p-3 w-full rounded focus:outline-none appearance-none cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
                  disabled={isLoading}
                >
                  <option value="" disabled>Are you a landlord or a tenant?</option>
                  <option value="tenant">Tenant</option>
                  <option value="landlord">Landlord</option>
                </select>
                <div className="absolute right-3 pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="relative group transform hover:scale-[1.01] transition-transform duration-200">
              <div className="absolute top-2 left-2 w-full h-full border-[#02D482] border-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative bg-white flex items-center rounded">
                <Mail className="absolute left-3 text-gray-400 z-10 w-5 h-5 drop-shadow-sm" />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="border-2 border-gray-300 bg-white px-4 py-3 pl-10 focus:outline-none transition-all duration-300 w-full rounded shadow-md hover:shadow-lg"
                  value={signupData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative group transform hover:scale-[1.01] transition-transform duration-200">
              <div className="absolute top-2 left-2 w-full h-full border-[#02D482] border-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative bg-white flex items-center rounded">
                <LockKeyhole className="absolute left-3 text-gray-400 z-10 w-5 h-5 drop-shadow-sm" />
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="border-2 bg-white px-4 py-3 pl-10 pr-10 focus:outline-none transition-all duration-300 w-full rounded"
                  value={signupData.password}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 cursor-pointer z-10 p-1 rounded transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="text-gray-400 w-5 h-5" /> : <Eye className="text-gray-400 w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative group transform hover:scale-[1.01] transition-transform duration-200">
              <div className="absolute top-2 left-2 w-full h-full border-[#02D482] border-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative bg-white flex items-center rounded">
                <LockKeyhole className="absolute left-3 text-gray-400 z-10 w-5 h-5 drop-shadow-sm" />
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="border-2 bg-white px-4 py-3 pl-10 focus:outline-none transition-all duration-300 w-full rounded shadow-md hover:shadow-lg"
                  value={signupData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2 mt-2">
              <input
                id="terms"
                name="termsAccepted"
                type="checkbox"
                className="h-4 w-4 mt-0.5 border-gray-300 text-[#02D482] rounded focus:ring-[#02D482] transition-all"
                checked={signupData.termsAccepted}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the <a href="#" className="text-[#02D482] hover:underline">Terms of Use</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className={`w-full py-3 mt-2 text-sm font-medium transition-all ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#02D482] hover:bg-[#02C474] active:bg-[#02B467]'
              } text-white disabled:opacity-50 rounded`}
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Continue'}
            </button>

            <div className="text-sm text-gray-500 text-center mt-4">or</div>

            {/* Sign in with Google Button */}
            <div className="relative group">
              <div className="absolute top-1 left-1 w-full h-full border border-[#02D482] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full py-3 relative text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all border border-black"
                disabled={isLoading}
              >
                Sign in with Google
              </button>
            </div>

            {/* Already Have Account */}
            <div className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <button
                type="button"
                onClick={goToLogin}
                className="text-[#02D482] hover:underline font-medium"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}