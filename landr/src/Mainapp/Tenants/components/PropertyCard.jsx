import React, { useState } from 'react';
import { MapPin, CheckCircle, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property, onContact, onMoreInfo, onContactLandlord, onToggleFavorite, favorites, onVirtualTour }) => {
  const navigate = useNavigate();

  // Use the first imported image as the display image
  const displayImage = property.images && property.images.length > 0
    ? property.images[0].url
    : 'https://via.placeholder.com/400x300?text=No+Image';

  const isFavorite = favorites.some((fav) => fav.id === property.id);

  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div
        className="relative h-64 bg-gray-200 overflow-hidden mb-3"
      >
        <img
          src={displayImage}
          onClick={(e) => {
            e.stopPropagation();
            onMoreInfo(property);
          }}
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

        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(property);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full cursor-pointer transition ${
            isFavorite ? "bg-red-600" : "bg-white/90"
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "text-white" : "text-gray-600"}`} />
        </div>
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
              onVirtualTour(property);
            }}
            className="border-[#02D482] border-1  px-4 py-2 text-sm font-poppins  hover:bg-[#02D482] hover:text-amber-50 transition-colors"
          >
            Bid for live tour
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoreInfo(property);
            }}
            className="bg-[#02D482] text-white px-4 py-2 text-sm  hover:bg-green-600 transition-colors"
          >
            View property
          </button>
        </div>
      </div>
    </div>
  );
};



export default PropertyCard