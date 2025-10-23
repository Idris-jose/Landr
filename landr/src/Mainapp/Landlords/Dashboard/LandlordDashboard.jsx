import React, { useState } from 'react';
import { Plus, Edit, Eye, Home, MapPin, Bed, Bath, DollarSign, X } from 'lucide-react';
import EditPropertyForm from './EditPropertyForm';
import AddPropertyForm from './AddPropertyForm';
import PropertyDetailView from './PropertyDetailView'; 


const StatusBadge = ({ status }) => {
  const statusColors = {
    vacant: 'bg-green-100 text-green-800',
    occupied: 'bg-blue-100 text-blue-800',
    maintenance: 'bg-yellow-100 text-yellow-800'
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
      {status ? status.charAt(0).toUpperCase() + status.slice(1) : 'Unknown'}
    </span>
  );
};


const PropertyCard = ({ property, onSelect, onEdit, onDelete }) => {
  const images = property.images || [];
  const mainImage = images[0] || { 
    url: '/placeholder-property.jpg', 
    description: 'Property image' 
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={mainImage.url}
          alt={mainImage.description}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = '/placeholder-property.jpg';
            e.target.alt = 'Property image';
          }}
        />
        <div className="absolute top-2 right-2">
          <StatusBadge status={property.status} />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{property.type}</h3>
          <p className="text-gray-900 font-medium flex items-center">
            <DollarSign size={16} className="mr-1" />
            {property.price}/{property.priceUnit}
          </p>
        </div>
        
        <p className="text-gray-600 flex items-center mb-2">
          <MapPin size={14} className="mr-1" />
          {property.location}
        </p>

        <div className="flex space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <Bed size={14} className="mr-1" />
            {property.bedrooms}
          </span>
          <span className="flex items-center">
            <Bath size={14} className="mr-1" />
            {property.bathrooms}
          </span>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onDelete(property);
              }}
              className="px-3 bg-red-600 font-Poppins rounded text-white hover:bg-red-700"
              aria-label="delete property"
            >
              Delete lease
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onEdit(property);
              }}
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full"
              aria-label="Edit property"
            >
              <Edit size={18} />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onSelect(property);
              }}
              className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full"
              aria-label="View details"
            >
              <Eye size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Search and Filter Component (unchanged)
const SearchAndFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onSearch(e.target.value);
          }}
        />
        <div className="absolute left-3 top-2.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <select 
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => onFilter('status', e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="vacant">Vacant</option>
          <option value="occupied">Occupied</option>
          <option value="maintenance">Maintenance</option>
        </select>
        
        <select 
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => onFilter('type', e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Condo">Condo</option>
          <option value="Townhouse">Townhouse</option>
        </select>
      </div>
    </div>
  );
};


const EmptyState = ({ onAddProperty }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-12 text-center">
      <div className="max-w-md mx-auto">
        <Home size={64} className="mx-auto text-gray-400 mb-6" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">No Properties Yet</h3>
        <p className="text-gray-600 mb-6">
          Get started by adding your first property to the dashboard. You can manage all your rental properties from here.
        </p>
        <button
          onClick={onAddProperty}
          className="inline-flex items-center gap-2 bg-[#02D482] text-white px-6 py-3 rounded-lg hover:bg-[#02c075] transition-colors font-medium"
        >
          <Plus size={20} />
          Add Your First Property
        </button>
      </div>
    </div>
  );
};

// Main Dashboard Component
const LandlordDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [viewMode, setViewMode] = useState(false); // New state for view mode

  const handleSearch = (term) => {
    if (!term) {
      setFilteredProperties(properties);
      return;
    }
    
    const lowerTerm = term.toLowerCase();
    const filtered = properties.filter(property => 
      property.type.toLowerCase().includes(lowerTerm) || 
      property.location.toLowerCase().includes(lowerTerm) ||
      property.description?.toLowerCase().includes(lowerTerm)
    );
    
    setFilteredProperties(filtered);
  };

  const handleFilter = (field, value) => {
    if (!value) {
      setFilteredProperties(properties);
      return;
    }
    
    const filtered = properties.filter(property => property[field] === value);
    setFilteredProperties(filtered);
  };

  const handleSelectProperty = (property) => {
    setSelectedProperty(property);
    setViewMode(true); // Set view mode to true when viewing details
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleCloseDetail = () => {
    setSelectedProperty(null);
    setViewMode(false);
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleEditProperty = (property) => {
    setSelectedProperty(property);
    setViewMode(false);
    setIsEditing(true);
    setIsAdding(false);
  };

  const handleUpdateProperty = (updatedProperty) => {
    setProperties(prev => 
      prev.map(prop => prop.id === updatedProperty.id ? updatedProperty : prop)
    );
    setFilteredProperties(prev => 
      prev.map(prop => prop.id === updatedProperty.id ? updatedProperty : prop)
    );
    setSelectedProperty(updatedProperty);
    setIsEditing(false);
    setViewMode(true); // Switch back to view mode after editing
  };

  const handleAddProperty = (newProperty) => {
    const newId = properties.length > 0 ? Math.max(...properties.map(p => p.id)) + 1 : 1;
    const propertyWithId = { 
      ...newProperty, 
      id: newId,
      status: newProperty.status || 'vacant'
    };
    setProperties(prev => [...prev, propertyWithId]);
    setFilteredProperties(prev => [...prev, propertyWithId]);
    setSelectedProperty(propertyWithId);
    setIsAdding(false);
    setViewMode(true); // Show the newly added property in view mode
  };

  const handleStartAdd = () => {
    setIsAdding(true);
    setSelectedProperty(null);
    setIsEditing(false);
    setViewMode(false);
  };

  const handleDelete = (propertyToDelete) => {
    setProperties(prev => prev.filter(prop => prop.id !== propertyToDelete.id));
    setFilteredProperties(prev => prev.filter(prop => prop.id !== propertyToDelete.id));
    if (selectedProperty && selectedProperty.id === propertyToDelete.id) {
      setSelectedProperty(null);
      setViewMode(false);
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">My Properties</h1>
            <p className="text-gray-600 text-sm sm:text-base">{filteredProperties.length} properties listed</p>
          </div>
          <button
            onClick={handleStartAdd}
            className="flex items-center gap-2 bg-[#02D482] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#72cf7a] transition-colors text-sm sm:text-base"
          >
            <Plus size={18} className="sm:w-5 sm:h-5" />
            Add Property
          </button>
        </div>

        {properties.length > 0 && (
          <SearchAndFilter 
            onSearch={handleSearch} 
            onFilter={handleFilter} 
          />
        )}

        {properties.length === 0 ? (
          <EmptyState onAddProperty={handleStartAdd} />
        ) : filteredProperties.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <Home size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or add a new property</p>
            <button
              onClick={handleStartAdd}
              className="inline-flex items-center gap-2 bg-[#02D482] text-white px-4 py-2 rounded-lg hover:bg-[#02c075] transition-colors"
            >
              <Plus size={20} />
              Add Property
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={handleSelectProperty}
                onEdit={handleEditProperty}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Property Detail View Modal */}
        {viewMode && selectedProperty && (
          <PropertyDetailView
            property={selectedProperty}
            onClose={handleCloseDetail}
            onEdit={handleEditProperty}
          />
        )}

        {isEditing && selectedProperty && (
          <EditPropertyForm
            property={selectedProperty}
            onClose={handleCloseDetail}
            onUpdate={handleUpdateProperty}
          />
        )}

        {isAdding && (
          <AddPropertyForm
            onClose={() => setIsAdding(false)}
            onAdd={handleAddProperty}
          />
        )}
      </div>
    </div>
  );
};

export default LandlordDashboard;