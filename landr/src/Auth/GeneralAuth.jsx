import logo from '../assets/Landr.png'
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import axios from 'axios';

export default function GeneralAuth() {
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState('tenant');

    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     termsAccepted: false,
    //     privacyAccepted: false
    // });
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
        privacyAccepted: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChangev = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const NavigateUser = async (role) => {
        switch (role) {
            case 'tenant':
                navigate('/TenantsMainapp');

                break
            default:
                navigate('')
        }
    }

    const handleLoginn = async (e) => {
        e.preventDefault();
        setError('');

        // Skip API logic, just route based on accountType
        if (accountType === 'tenant') {
            navigate('/TenantsMainapp');
        } else if (accountType === 'landlord') {
            navigate('/LandlordMainapp');
        } else if (accountType === 'enterprise') {
            navigate('/EnterpriseMainapp');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Optional: Basic validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            setIsLoading(false);
            return;
        }
        {
            //   "firstName": "string",
            //   "lastName": "string",
            //   "email": "string",
            //   "role": "string",
            //   "password": "string"
        }
        const payload = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            role: accountType,

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
            NavigateUser(accountType)
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
    return (
        <>
            <div>
                <button
                    className="flex items-center absolute left-8 gap-2  text-gray-700 hover:text-[#02D482] transition-colors"
                    onClick={() => window.history.back()}
                >
                    <MoveLeft className="w-10 h-10" />
                </button>
                <ToastContainer />
                <img src={logo} alt="Landr Logo" className="mx-auto mt-8" />
                <h1 className="text-[20px] font-bold text-center mt-4">Create your Landr account</h1>
                <p className='text-center font-Poppins text-[14px] text-[#02D482]'>Fill in the information to get started</p>

                {error && (
                    <div className="max-w-md mx-auto mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <form className="flex flex-col gap-5 max-w-md mx-auto mt-8 bg-white p-8 rounded-3xl shadow-lg" onSubmit={handleLogin}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="firstName" className="text-sm font-medium font-Poppins text-gray-700">First name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            className="border-gray-300 border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#02D482] transition-all"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="lastName" className="text-sm font-medium font-Poppins text-gray-700">Last name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Enter your Last name"
                            className="border-gray-300 border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#02D482] transition-all"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium font-Poppins text-gray-700">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="border-gray-300 border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#02D482] transition-all"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="Account" className="text-sm font-medium font-Poppins text-gray-700">Account Type</label>
                        <select
                            required
                            onChange={(e) => setAccountType(e.target.value)}
                            className="border-gray-300 border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#02D482] transition-all"
                            value={accountType}
                        >
                            <option value="tenant">Tenant</option>
                            <option value="landlord">Landlord</option>
                            <option value="enterprise">Enterprise</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm font-medium font-Poppins text-gray-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="border-gray-300 border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#02D482] transition-all"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            minLength={6}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="confirmPassword" className="text-sm font-medium font-Poppins text-gray-700">Confirm password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            className="border-gray-300 border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#02D482] transition-all"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            id="terms"
                            name="termsAccepted"
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 text-[#02D482] rounded focus:ring-[#02D482] transition-all"
                            checked={formData.termsAccepted}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="terms" className="text-sm font-Poppins text-gray-700">
                            I agree to the <a href="#" className="text-[#02D482] hover:underline">Terms of Use</a>
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            id="newsletter"
                            name="privacyAccepted"
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded focus:ring-[#02D482] transition-all"
                            checked={formData.privacyAccepted}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="newsletter" className="text-sm font-Poppins text-gray-700">
                            Your personal data will be processed according to our <a href="#" className="text-[#02D482] hover:underline">Privacy notice</a>
                        </label>
                    </div>

                    <button
                        className={`rounded-[100px] ${isLoading ? 'bg-gray-400' : 'bg-[#02D482]'} text-white px-4 py-3 text-[13px] font-Poppins`}
                        // type='        '
                        type='submit'

                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating Account...' : 'Next'}
                    </button>
                </form>
            </div>
        </>
    )
}
