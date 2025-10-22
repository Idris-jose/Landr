import React, { useState, useEffect } from 'react';
import { mockProperties } from './mockProperties.jsx';
import { useNavigate,useParams } from 'react-router-dom';
import ContactLandlord from './Contactlandlord.jsx'
import { Search, User } from 'lucide-react';
import SponsoredPropertySlideshow from './components/SponsoredPropertySlideshow.jsx';
import PropertyCard from './components/PropertyCard.jsx';
import VirtualBidForm from './VirtualBidForm.jsx';
import SetupModal from './components/SetupModal.jsx';
import logo from '../../assets/Landr.png';

const TenantsMainapp = () => {
  // State management
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [favorites, setFavorites] = useState([]);
    const [open, setOpen] = useState(false);
    const [showVirtualBidForm, setShowVirtualBidForm] = useState(false);
    const [selectedPropertyForVirtual, setSelectedPropertyForVirtual] = useState(null);

  const handleToggleFavorite =(property) => {
     setFavorites((prevFavorites) => {
     
      if (prevFavorites.some((fav) => fav.id === property.id)){
      
        return prevFavorites.filter((fav) => fav.id !== property.id)
      }else{
        return  [...prevFavorites,property]

      }
  

     })
  }

  const navigate = useNavigate();

  // Event handlers
  const handleContactLandlord = (property) => {
    setSelectedProperty(property);
    setShowContactModal(true);
  };

  const handleMoreInfo = (property) => {

    navigate(`/property/${property.id}`);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCloseModal = () => {
    setShowSetupModal(false);
  };

  const handleVirtualTourClick = (property) => {
    setSelectedPropertyForVirtual(property);
    setShowVirtualBidForm(true);
  };

  const closeVirtualBidForm = () => {
    setShowVirtualBidForm(false);
    setSelectedPropertyForVirtual(null);
  };

  const { id } = useParams();

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

    const property = mockProperties.find(
      (p) => String(p.id) === String(id)
    );

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

        {/* Virtual Bid Form Modal */}
        {showVirtualBidForm && (
          <VirtualBidForm
            property={selectedPropertyForVirtual}
            onClose={closeVirtualBidForm}
          />
        )}
     
      {/* Setup Modal */}
      <SetupModal isOpen={showSetupModal} onClose={handleCloseModal} />

      {/* Navigation Bar */}
      <nav className='flex justify-between items-center bg-white px-8 py-4 '>
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
              onClick={() => navigate("/TenantsMainapp/profile", { state: { favorites } })}
                className=" shadow-[6px_6px_0px_rgba(2,212,130,0.4)]  active:shadow-[2px_2px_0px_rgba(2,212,130,0.2)] active:translate-y-[2px] bg-[#02D482]/80 hover:bg-[#02D482] text-white p-2 sm:p-3  z-20 transition-all duration-300 backdrop-blur-sm"
            >
              <User className="w-4 h-4 text-white" />
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
              onVirtualTour={handleVirtualTourClick}
            />
          </div>
        )}
       
       <div  className="overflow-hidden mb-5 bg-[#02D482] text-white p-2">
        <div
          className="whitespace-nowrap animate-marquee text-center text-lg font-semibold"
          style={{
            display: "inline-block",
            minWidth: "100%",
            animation: "marquee 12s linear infinite",
          }}
        >
          Join Landr today & truly live within your means.
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
                onToggleFavorite={handleToggleFavorite}
                onContact={handleContactLandlord}
                onMoreInfo={handleMoreInfo}
                onContactLandlord={handleContactLandlord}
                favorites={favorites}
                onVirtualTour={handleVirtualTourClick}
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