import logo from '../assets/Landr.png'
import { Link } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import SignupModal from '../Auth/GeneralAuth.jsx';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    function handleLoginOpen() {
        setShowLogin(true);
        setError('');
    }

    function handleSignupOpen() {
        setShowSignup(true);
    }

    function handleLoginClose() {
        setShowLogin(false);
        setLoginData({ email: '', password: '' });
        setError('');
    }

    function handleSignupClose() {
        setShowSignup(false);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleLoginSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('https://landrentals.azurewebsites.net/api/Authentications/UserLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: loginData.email,
                    password: loginData.password
                })
            });
            const data = await response.json();

            console.log("User logging:::" + JSON.stringify(data))
            console.log("User logging error:::" + data.message)
            
            if (data.message) {
                throw new Error(` ${data.message}`);
            }

            console.log('Login successful:', data);
            toast.success("Welcome back " + data.firstName + " " + data.lastName, {
                position: "top-right",
                autoClose: 5000,
            });

            handleLoginClose();
            navigate("/TenantsMainapp");

        } catch (err) {
            console.error('Login error:', err);
            setError(err.message || 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="flex justify-between items-center p-4 ml-10 mr-10">
                <img src={logo} className='w-20' alt="Logo" />
                <ToastContainer />

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center font-Poppins gap-2">
                    <Link
                        to="section1"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setMenuOpen(false)}
                        spy={true}
                    >
                        Home
                    </Link>
                    <Link
                        to="section2"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setMenuOpen(false)}
                        spy={true}
                    >
                        About Us
                    </Link>
                    <Link
                        to="section3"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setMenuOpen(false)}
                        spy={true}
                    >
                        Features
                    </Link>
                    <Link
                        to="section4"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setMenuOpen(false)}
                        spy={true}
                    >
                        Services
                    </Link>
                    <Link
                        to="section5"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setMenuOpen(false)}
                        spy={true}
                    >
                        Contact
                    </Link>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-2">
                    <button
                        className=" border-black border py-3 px-6 text-[13px] font-Poppins"
                        onClick={handleLoginOpen}
                    >
                        Login
                    </button>
                     <div className='relative'>
         <div className="absolute top-2 left-2 w-full h-full bg-black "></div>
      <button
                        className=" bg-[#02D482] relative text-white px-4 py-3 text-[13px] font-Poppins"
                        onClick={() => {
                            setMenuOpen(false);
                            handleSignupOpen();
                        }}
                    >
                        Create an account
                    </button>

       </div>
                </div>

                {/* Hamburger Icon */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-1 w-6 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-1 w-6 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-1 w-6 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center pt-24 gap-6">
                    <Link
                        to="section1"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setMenuOpen(false)}
                        spy={true}
                    >
                        Home
                    </Link>
                    <Link
                        to="section2"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setMenuOpen(false)}
                        spy={true}
                    >
                        About Us
                    </Link>
                    <Link
                        to="section3"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setMenuOpen(false)}
                        spy={true}
                    >
                        Features
                    </Link>
                    <Link
                        to="section4"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setMenuOpen(false)}
                        spy={true}
                    >
                        Services
                    </Link>
                    <Link
                        to="section5"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setMenuOpen(false)}
                        spy={true}
                    >
                        Contact
                    </Link>
                    <button
                        className=" border-black border py-3 px-6 text-[13px] font-Poppins"
                        onClick={() => {
                            setMenuOpen(false);
                            handleLoginOpen();
                        }}
                    >
                        Login
                    </button>
                   
                    
       <div className='relative'>
         <div className="absolute top-2 left-2 w-full h-full bg-black "></div>
      <button
                        className=" bg-[#02D482] text-white px-4 py-3 text-[13px] font-Poppins"
                        onClick={() => {
                            setMenuOpen(false);
                            handleSignupOpen();
                        }}
                    >
                        Create an account
                    </button>

       </div>
                    <button
                        className="absolute top-4 right-6 text-2xl"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                </div>
            )}

            {/* Login Modal */}
            {showLogin && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700/45">
                    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm relative">
                        <div className='flex items-center justify-between mb-6'>
                            <img src={logo} className='w-15' alt="Logo" />
                            <button
                                onClick={handleLoginClose}
                                aria-label="Close"
                            >
                                <X className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors" />
                            </button>
                        </div>
                        <h2 className="font-bold mb-4 text-left">Login your account Here.</h2>

                        {error && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={loginData.email}
                                onChange={handleInputChange}
                                className="border-gray-600 border rounded-[100px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#02D482]"
                                required
                                disabled={isLoading}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={loginData.password}
                                onChange={handleInputChange}
                                className="border-gray-600 border rounded-[100px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#02D482]"
                                required
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                className="rounded-[100px] bg-[#02D482] text-white px-6 py-2 font-Poppins hover:bg-[#02C478] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-600 mt-4">
                            Don't have an account?{' '}
                            <button
                                className="text-[#02D482] hover:underline"
                                onClick={() => {
                                    handleLoginClose();
                                    handleSignupOpen();
                                }}
                            >
                                Sign up
                            </button>
                        </p>
                    </div>
                </div>
            )}

           <SignupModal 
    showSignup={showSignup} 
    onClose={handleSignupClose} 
/>
        </>
    );
}