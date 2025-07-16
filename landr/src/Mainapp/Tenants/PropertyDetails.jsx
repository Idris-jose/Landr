import { useState } from 'react';
import logo from '../../assets/Landr.png'
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, User, CheckCircle, Star, ArrowLeft, Heart, Bed, Bath, Ruler, Car } from 'lucide-react';
import { mockProperties } from './mockProperties';
import ContactLandlord from './Contactlandlord';

const PropertyDetails = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the property with the matching ID
  const property = mockProperties.find(prop => prop.id === parseInt(id));
  
  if (!property) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Property not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-[#02D482] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header with back button */}
      <nav className='flex justify-between items-center bg-white px-8 py-4 shadow-sm border-b sticky top-0 z-50'>
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-Poppins text-gray-700 hover:text-[#02D482] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span >Back</span>
        </button>
        <img src={logo} className='w-20' alt="Logo" />
      
      </nav>

      {/* Property Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {showContactModal && (
               <ContactLandlord 
               landlord={{
                landlordName: property.landlordName,
              landlordAvatar: property.landlordAvatar
               }}
               property={{
             type: property.type,
              location: property.location
              }}
             onClose={() => setShowContactModal(false)}
           />
           )}
        {/* Property Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
           <h1 className="text-3xl font-bold font-Poppins text-gray-900 mb-2">{property.type}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{property.location}</span>
            </div>
         
           
          </div>
          </div>
         
           {property.documentationStatus === 'Verified' && (
              <div className="flex items-center gap-1 bg-[#02D482] rounded-full px-4 py-2 text-white">
                <CheckCircle className="w-4 h-4" />
                <span>Verified</span>
              </div>
            )}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="col-span-1 h-96 rounded-xl overflow-hidden">
            <img 
              src={property.images[0].url} 
              alt={property.images[0].description}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index} className="h-48 rounded-xl overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.description}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">About this property</h2>
              <p className="text-gray-700 font-Poppins">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-[#02D482]" />
                    </div>
                    <span className="text-gray-700 font-Poppins">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* All Images */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">All images</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.images.map((image, index) => (
                  <div key={index} className="h-48 rounded-xl overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.description}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              {/* Price */}
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  ${property.price.toLocaleString()}
                  <span className="text-base font-normal text-gray-600">/{property.priceUnit}</span>
                </div>
                {property.sponsored && (
                  <div className="text-sm text-[#02D482] font-medium">Special sponsored price</div>
                )}
              </div>

              {/* Quick Facts */}
              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="text-sm text-gray-500">Bedrooms</div>
                      <div className="font-medium">{property.bedrooms}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="text-sm text-gray-500">Bathrooms</div>
                      <div className="font-medium">{property.bathrooms}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="text-sm text-gray-500">Area</div>
                      <div className="font-medium">{property.area}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="text-sm text-gray-500">Parking</div>
                      <div className="font-medium">{property.parking ? 'Yes' : 'No'}</div>
                    </div>
                  </div>
                </div>
              </div>
              
                           {/* Requirements */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-3">Tenant Requirements</h3>
  <div className="grid grid-cols-2 gap-4">
    <div>
      <div className="text-sm text-gray-500">Religion</div>
      <div className="font-medium">{property.requirements.religion}</div>
    </div>
    <div>
      <div className="text-sm text-gray-500">Age</div>
      <div className="font-medium">{property.requirements.age}</div>
    </div>
    <div>
      <div className="text-sm text-gray-500">Occupation</div>
      <div className="font-medium">{property.requirements.occupation}</div>
    </div>
    <div>
      <div className="text-sm text-gray-500">Gender</div>
      <div className="font-medium">{property.requirements.gender}</div>
    </div>
    {property.requirements.maritalStatus && (
      <div className="col-span-2">
        <div className="text-sm text-gray-500">Marital Status</div>
        <div className="font-medium">{property.requirements.maritalStatus}</div>
      </div>
    )}
  </div>
</div>

              {/* Landlord Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Landlord</h3>
                <div className="flex items-center gap-3">
                  <img 
                    src={property.landlordAvatar} 
                    alt={property.landlordName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{property.landlordName}</div>
                    <div className="text-sm text-gray-500">Verified landlord</div>
                  </div>
                </div>
              </div>

 

              {/* Action Buttons */}
              <div className="space-y-3">
               <button 
               onClick={() => setShowContactModal(true)}
                 className="w-full bg-[#02D482] text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                 Contact Landlord
               </button>
                <button className="w-full border border-[#02D482] text-[#02D482] py-3 rounded-lg font-medium hover:bg-[#02D482]/10 transition-colors">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;