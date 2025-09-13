import { ArrowLeft, Coins, History, Plus, MapPin, CheckCircle, Heart } from "lucide-react";
import { useNavigate ,useLocation  } from "react-router-dom";
import PressButton from '../../../components/PressButton';

export default function Profile( ) {
  const navigate = useNavigate();

  const location = useLocation();
  const favorites = location.state?.favorites || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto p-10 sm:p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/TenantsMainapp")}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-gray-200 text-gray-700 hover:text-[#02D482] hover:ring-[#02D482]/40 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Greeting */}
        <div className="mt-6 flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#02D482]/15 flex items-center justify-center text-[#02D482] font-semibold ring-2 ring-white shadow-sm">
              I
            </div>
            <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#02D482] border-2 border-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Good afternoon, Ingrid</h1>
            <p className="text-sm text-gray-500">Welcome back to your tenant dashboard</p>
          </div>
        </div>

        {/* Balance Card */}
        <div className="relative mt-6">
          <div className="relative group">
              <div className="absolute top-2 left-2 w-full h-full border-2 bg-black opacity-0 group-hover:opacity-20 pointer-events-none"></div>
          <div className="relative overflow-hidden bg-[#00D084] text-white shadow-lg ring-1 ring-black/10">
          
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />

            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-white/15 p-3 ring-1 ring-white/20">
                    <Coins className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm/6 text-white/80">Landr coin balance</p>
                    <p className="text-3xl font-bold tracking-tight">1,000</p>
                    <p className="text-sm mt-1">
                      Possible bids: <span className="font-medium underline">21</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-2 bg-gren-800 text-white px-4 py-2 rounded-lg font-medium  transition shadow-[6px_6px_0px_rgba(255,255,255)]  active:shadow-[2px_2px_0px_rgba(255,255,255,0.2)] active:translate-y-[2px]">
                    <Plus className="w-4 h-4" />
                    Top up
                  </button>
                </div>
              </div>

           </div>
            </div>
          </div>
        </div>
      </div>

        <div className="mt-8 p-6 sm:p-8 max-w-7xl  mx-auto">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-6">Your Favorites Houses</h2>
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((property) => {
                const displayImage = property.images && property.images.length > 0
                  ? property.images[0].url
                  : 'https://via.placeholder.com/400x300?text=No+Image';

                return (
                  <div key={property.id} className="group cursor-pointer">
                    {/* Image Container */}
                    <div
                      className="relative h-64 bg-gray-200 overflow-hidden mb-3"
                      onClick={() => navigate(`/property/${property.id}`)}
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

                      {/* Favorite Heart - Filled since it's in favorites */}
                      <div className="absolute top-3 right-3 p-2 rounded-full bg-red-600">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="space-y-2">
                      {/* Location */}
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

                      {/* Price */}
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
                          className="border-[#02D482] border px-4 py-2 text-sm font-poppins hover:bg-[#02D482] hover:text-white transition-colors"
                        >
                          Bid for live tour
                        </button>
                        <button
                          onClick={() => navigate(`/property/${property.id}`)}
                          className="bg-[#02D482] text-white px-4 py-2 text-sm hover:bg-green-600 transition-colors"
                        >
                          View property
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500">No favorites added yet.</p>
          )}
        </div>
    </div>
  );
}
