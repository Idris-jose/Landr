import React, { useState, useEffect } from 'react';
import logo from '../../assets/Landr.png';
import { mockProperties } from './mockProperties.jsx';
import { useNavigate } from 'react-router-dom';
import ContactLandlord from './Contactlandlord.jsx';
import { MapPin, User, CheckCircle, Search, X } from 'lucide-react';

// Updated Sponsored Property Slideshow Component
const SponsoredPropertySlideshow = ({ properties, onContact, onMoreInfo, onContactLandlord }) => {
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get current property
  const currentProperty = properties[currentPropertyIndex];
  
  // Get images for current property
  const currentImages = currentProperty?.images && currentProperty.images.length > 0
    ? currentProperty.images.map(img => typeof img === 'string' ? img : img.url)
    : ['https://via.placeholder.com/1200x400?text=No+Image'];

  // Navigation functions for properties
  const goToNextProperty = (e) => {
    e.stopPropagation();
    setCurrentPropertyIndex((prevIndex) => (prevIndex + 1) % properties.length);
    setCurrentImageIndex(0); // Reset image index when changing property
  };

  const goToPrevProperty = (e) => {
    e.stopPropagation();
    setCurrentPropertyIndex((prevIndex) => 
      (prevIndex - 1 + properties.length) % properties.length
    );
    setCurrentImageIndex(0); // Reset image index when changing property
  };

  // Navigation functions for images within current property
  const goToNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const goToPrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + currentImages.length) % currentImages.length
    );
  };

  // Auto-advance slideshow every 8 seconds (for properties)
  useEffect(() => {
    if (properties.length > 1) {
      const interval = setInterval(() => {
        setCurrentPropertyIndex((prevIndex) => (prevIndex + 1) % properties.length);
        setCurrentImageIndex(0);
      }, 8000);
      
      return () => clearInterval(interval);
    }
  }, [properties.length]);

  // Auto-advance images every 4 seconds (within current property)
  useEffect(() => {
    if (currentImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [currentImages.length, currentPropertyIndex]);

  if (!properties || properties.length === 0) return null;

  return (
   <div className="relative w-full max-w-screen-lg mx-auto aspect-[3/4] sm:aspect-[16/9] overflow-hidden mb-8 cursor-pointer group">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={currentImages[currentImageIndex]}
      alt={`${currentProperty.type} in ${currentProperty.location}`}
      className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      style={{ backgroundColor: '#f3f4f6' }}
      onError={(e) => {
        e.target.src =
          'https://via.placeholder.com/1200x400/f3f4f6/9ca3af?text=Property+Image';
      }}
    />
  </div>

  {/* Sponsored Badge */}
  <div className="absolute top-3 right-3 bg-white text-gray-900 px-2 py-1 text-xs sm:text-sm font-semibold shadow">
    Sponsored Post
  </div>

  {/* Property Navigation Arrows */}
  {properties.length > 1 && (
    <>
      <button
        onClick={goToPrevProperty}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#02D482]/80 hover:bg-[#02D482] text-white p-2 sm:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm shadow-lg"
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNextProperty}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#02D482]/80 hover:bg-[#02D482] text-white p-2 sm:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm shadow-lg"
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </>
  )}

  {/* Inner Overlay */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 w-[90%] sm:w-auto">
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 shadow-2xl max-w-lg">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3 text-white">
        {currentProperty.type}
      </h1>
      <p className="text-lg sm:text-2xl mb-2 sm:mb-3 font-semibold text-white">
        ${currentProperty.price.toLocaleString()}/{currentProperty.priceUnit}
      </p>
      <div className="flex items-center mb-2 sm:mb-3">
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" />
        <p className="text-sm sm:text-lg text-white">
          {currentProperty.location}
        </p>
      </div>
      <div className="flex items-center mb-2 sm:mb-3">
        <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" />
        <p className="text-sm sm:text-lg text-white">
          {currentProperty.landlordName}
        </p>
      </div>
      <div className="flex items-center mb-4 sm:mb-6">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" />
        <p className="text-sm sm:text-lg text-white">
          {currentProperty.documentationStatus}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onMoreInfo(currentProperty);
        }}
        className="bg-[#02D482] hover:bg-green-600 text-white w-full py-2 sm:py-3 font-semibold transition-all duration-200 transform hover:scale-105"
      >
        Bid for Virtual Tour
      </button>
    </div>
  </div>
</div>

  );
};



const PropertyCard = ({ property, onContact, onMoreInfo, onContactLandlord }) => {
  const navigate = useNavigate();
  // Use the first imported image as the display image
  const displayImage = property.images && property.images.length > 0 
    ? property.images[0].url 
    : 'https://via.placeholder.com/400x300?text=No+Image';

  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div 
        onClick={(e) => {
          e.stopPropagation();
          onMoreInfo(property);
        }}
        className="relative h-64 bg-gray-200 overflow-hidden mb-3"
      >
        <img
          src={displayImage}
          alt={`${property.type} in ${property.location}`}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        
        {/* Verification Badge */}
        {property.documentationStatus === 'Verified' && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-[#02D482]" />
            <span className="text-xs text-gray-700">Verified</span>
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="space-y-2">
        {/* Location and Rating */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{property.location}</span>
          </div>
        </div>

        {/* Property Type */}
        <h3 className="font-medium font-Poppins text-gray-900 group-hover:text-[#02D482] transition-colors">
          {property.type}
        </h3>

        {/* Landlord Info */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <img 
            src={property.landlordAvatar} 
            alt={property.landlordName}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span>Hosted by {property.landlordName}</span>
        </div>

        {/* Property Features */}
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <span>{property.bedrooms} bed{property.bedrooms > 1 ? 's' : ''}</span>
          <span>•</span>
          <span>{property.bathrooms} bath{property.bathrooms > 1 ? 's' : ''}</span>
        </div>

        {/* Price and Buttons */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold text-gray-900">
              ${property.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-600">/{property.priceUnit}</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
           onClick={(e) => {
              e.stopPropagation();
              onContactLandlord(property);
            }}
           
            className="border-[#02D482] border-1 px-4 py-2 text-sm font-medium hover:bg-[#02D482] hover:text-amber-50 transition-colors"
          >
            Bid for live tour
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onMoreInfo(property);
            }}
            className="bg-[#02D482] text-white px-4 py-2 text-sm font-medium hover:bg-green-600 transition-colors"
          >
            View property
          </button>
        </div>
      </div>
    </div>
  );
};

const TenantsMainapp = () => {
  // State management
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showSetupModal, setShowSetupModal] = useState(false);

  const navigate = useNavigate();

  // Event handlers
  const handleContactLandlord = (property) => {
    setSelectedProperty(property);
    setShowContactModal(true);
  };

  const handleMoreInfo = (property) => {
    console.log('More info for property:', property);
    navigate(`/property/${property.id}`);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCloseModal = () => {
    setShowSetupModal(false);
  };

  // Fetch properties data
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProperties(mockProperties);
      } catch (err) {
        setError('Failed to fetch properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Filter properties based on search query
  const filteredProperties = properties.filter(property =>
    property.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.landlordName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sponsoredProperties = filteredProperties.filter(property => property.sponsored);
  const regularProperties = filteredProperties.filter(property => !property.sponsored);

  return (
    <div className="bg-white min-h-screen">
      {/* Contact Modal */}
      {showContactModal && selectedProperty && (
        <ContactLandlord 
          landlord={{
            landlordName: selectedProperty.landlordName,
            landlordAvatar: selectedProperty.landlordAvatar
          }}
          property={{
            type: selectedProperty.type,
            location: selectedProperty.location
          }}
          onClose={() => setShowContactModal(false)}
        />
      )}
     
      {/* Setup Modal */}
      {showSetupModal && (
        <div className="fixed inset-0 bg-gray-600/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <div className="flex items-center justify-between mb-6">
              <img src={logo} className='w-15 mb-4' alt="Logo" />
              <button 
                onClick={handleCloseModal}
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
      )}

      {/* Navigation Bar */}
      <nav className='flex justify-between items-center bg-white px-8 py-4 shadow-sm border-b'>
        <div className="flex items-center">
          <img src={logo} className='w-20' alt="Logo" />
        </div>
        <div className='flex items-center gap-6'>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              placeholder='Search properties, locations, or landlords'
              value={searchQuery}
              onChange={handleSearch}
              className='bg-gray-50 border border-gray-200 rounded-full pl-12 pr-6 py-3 text-sm w-80 focus:outline-none focus:ring-2 focus:ring-[#02D482] focus:border-transparent'
            />
          </div>
          <div className="flex items-center gap-2">
            <div 
              onClick={() => {navigate("/TenantsMainapp/profile")}}
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
            >
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Sponsored Properties - New Banner Style */}
        {sponsoredProperties.length > 0 && (
          <div className="mb-8">
            <SponsoredPropertySlideshow
              properties={sponsoredProperties}
              onContact={handleContactLandlord}
              onMoreInfo={handleMoreInfo}
              onContactLandlord={handleContactLandlord}
            />
          </div>
        )}

        {/* Regular Properties */}
        <div>
          <h2 className="text-2xl font-normal mb-6 text-gray-900">
            Home according <span className='text-[#02D482]'>to your Search</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onContact={handleContactLandlord}
                onMoreInfo={handleMoreInfo}
                onContactLandlord={handleContactLandlord}
              />
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 text-lg mb-2">No properties found</div>
            <div className="text-gray-400">Try adjusting your search criteria</div>
          </div>
       
        )}
      </div>
    </div>
  );
};

export default TenantsMainapp;