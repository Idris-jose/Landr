import React, { useState, useEffect } from 'react';
import logo from '../../assets/Landr.png';
import { mockProperties } from './mockProperties.jsx';
import { useNavigate } from 'react-router-dom';
import ContactLandlord from './Contactlandlord.jsx';
import { MapPin, User, CheckCircle, Search, Star, Heart, X } from 'lucide-react';

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
      className="relative h-64 bg-gray-200 rounded-xl  overflow-hidden mb-3">
        <img
          src={displayImage}
          alt={`${property.type} in ${property.location}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Sponsored Badge */}
        {property.sponsored && (
          <div className="absolute top-3 left-3 bg-[#02D482] text-white px-3 py-1 rounded-full text-xs font-medium">
            Sponsored
          </div>
        )}

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
          <div className="flex gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onMoreInfo(property);
              }}
              className="border-[#02D482] border-1 text-[#02D482] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#02D482] hover:text-amber-50 transition-colors"
            >
              More info
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onContactLandlord(property);
              }}
              className="bg-[#02D482] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const TenantsMainapp = () => {
  // State for properties data
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const navigate = useNavigate();

  // State for filters
  const [activeCategory, setActiveCategory] = useState('homes');
  const [sortBy, setSortBy] = useState('recency');
  
  // Modal state - removed auto-show for setup modal
  const [showSetupModal, setShowSetupModal] = useState(false);

  // Categories configuration
  const categories = [
    { id: 'homes', label: 'Homes', active: true },
    { id: 'properties', label: 'Properties', active: false },
    { id: 'lands', label: 'Lands', active: false },
    { id: 'shops', label: 'Shops', active: false },
    { id: 'flats', label: 'Flats', active: false }
  ];

  // Sort options
  const sortOptions = [
    { value: 'recency', label: 'Recency' },
    { value: 'popularity', label: 'Popularity' },
    { value: 'price', label: 'Price' }
  ];

  const handleContactLandlord = (property) => {
    setSelectedProperty(property);
    setShowContactModal(true);
  };

  const handleMoreInfo = (property) => {
   
    console.log('More info for property:', property);
    navigate(`/property/${property.id}`)
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCloseModal = () => {
    setShowSetupModal(false);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
  };

  // Simulate API call
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
  }, [activeCategory, sortBy]);

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

      {/* Navbar */}
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
            onClick={()=>{navigate("/TenantsMainapp/profile")}}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Categories */}
        <div className="mb-8 flex md:flex lg:flex justify-between">
          <h1 className="text-2xl font-semibold font-Poppins text-gray-900 mb-6">Categories</h1>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#02D482] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter and Sort Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-medium text-gray-900">
            {filteredProperties.length} properties available
          </h2>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <div className="flex gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSortChange(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    sortBy === option.value
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsored Properties */}
        {sponsoredProperties.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">Sponsored Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sponsoredProperties.map((property) => (
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
        )}

        {/* Regular Properties */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-900">Available Properties</h2>
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

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className='overflow-hidden bg-[#02D482] text-white p-2'>
          <div
            className="whitespace-nowrap animate-marquee text-center text-lg font-semibold"
            style={{
              display: 'inline-block',
              minWidth: '100%',
              animation: 'marquee 12s linear infinite'
            }}
          >
            Sponsored post here 
          </div>
        </div>
        <style>
          {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 12s linear infinite;
          }
          `}
        </style>
      </footer>
    </div>
  );
};

export default TenantsMainapp;