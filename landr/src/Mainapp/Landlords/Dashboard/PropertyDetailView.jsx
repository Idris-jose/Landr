import React from 'react';
import { Edit, X, User, Star, MapPin, Calendar, Briefcase, Heart, Users } from 'lucide-react';

const PropertyDetailView = ({ property, onClose, onEdit }) => {
  if (!property) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'occupied': return 'bg-green-100 text-green-800';
      case 'vacant': return 'bg-yellow-100 text-yellow-800';
      case 'maintenance': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const status = property.tenant ? 'occupied' : 'vacant';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{property.type} Details</h2>
            <div className="flex items-center gap-2 text-gray-600 mt-1">
              <MapPin size={16} />
              <p>
                {property.townCity && property.lga && property.state 
                  ? `${property.townCity}, ${property.lga}, ${property.state}`
                  : property.location
                }
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onEdit(property)}
              className="p-2 bg-[#02D482] text-white rounded-lg hover:bg-[#02b36d] transition-colors"
            >
              <Edit size={20} />
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Property Image */}
          <div className="mb-6">
            <img
              src={property.images && property.images[0]?.url}
              alt={property.images && property.images[0]?.description || 'Property image'}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Property Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Basic Info - First Column */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Property Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium text-green-600">₦{property.price?.toLocaleString()}/{property.priceUnit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bedrooms:</span>
                    <span className="font-medium">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bathrooms:</span>
                    <span className="font-medium">{property.bathrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Square Footage:</span>
                    <span className="font-medium">{property.squareFootage} sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Furnished:</span>
                    <span className="font-medium">{property.furnished ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pet Friendly:</span>
                    <span className="font-medium">{property.petFriendly ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities?.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#02D482] bg-opacity-10 text-[#02D482] rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Requirements - Second Column */}
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Users size={18} />
                  Tenant Requirements
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-700 flex items-center gap-1">
                      <Heart size={14} />
                      Religion:
                    </span>
                    <span className="font-medium">
                      {property.religion ? 
                        property.religion.charAt(0).toUpperCase() + property.religion.slice(1) : 
                        'No Preference'
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700 flex items-center gap-1">
                      <Briefcase size={14} />
                      Occupation:
                    </span>
                    <span className="font-medium">
                      {property.occupation ? 
                        property.occupation.charAt(0).toUpperCase() + property.occupation.slice(1) : 
                        'No Preference'
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700 flex items-center gap-1">
                      <Users size={14} />
                      Marital Status:
                    </span>
                    <span className="font-medium">
                      {property.maritalStatus ? 
                        property.maritalStatus.charAt(0).toUpperCase() + property.maritalStatus.slice(1) : 
                        'No Preference'
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700 flex items-center gap-1">
                      <Calendar size={14} />
                      Age Range:
                    </span>
                    <span className="font-medium">
                      {property.ageRange ? 
                        property.ageRange : 
                        'No Preference'
                      }
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Requirements */}
              {property.additionalRequirements && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Additional Requirements</h3>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    {property.additionalRequirements}
                  </p>
                </div>
              )}

              {/* Rating */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Property Rating</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={20}
                        className={`${
                          star <= property.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{property.rating}</span>
                </div>
              </div>
            </div>

            {/* Tenant Info - Third Column */}
            <div className="space-y-4">
              {property.tenant ? (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <User size={18} />
                    Tenant Information
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-green-700">Name:</span>
                      <span className="font-medium">{property.tenant}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Phone:</span>
                      <span className="font-medium">{property.tenantPhone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Email:</span>
                      <span className="font-medium">{property.tenantEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Lease Start:</span>
                      <span className="font-medium">{property.leaseStart}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Lease End:</span>
                      <span className="font-medium">{property.leaseEnd}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Property Vacant</h3>
                  <p className="text-yellow-700">This property is currently available for rent.</p>
                </div>
              )}

              {/* Location Details */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin size={18} />
                  Location Details
                </h3>
                <div className="space-y-2">
                  {property.state && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">State:</span>
                      <span className="font-medium">{property.state.charAt(0).toUpperCase() + property.state.slice(1)}</span>
                    </div>
                  )}
                  {property.lga && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">LGA:</span>
                      <span className="font-medium">{property.lga}</span>
                    </div>
                  )}
                  {property.townCity && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Town/City:</span>
                      <span className="font-medium">{property.townCity}</span>
                    </div>
                  )}
                  {!property.state && !property.lga && !property.townCity && property.location && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Address:</span>
                      <span className="font-medium">{property.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailView;