import React, { useState } from 'react';
import { Save, X, Camera, Home, MapPin, Bed, Bath, DollarSign, Ruler, Sofa, PawPrint, Calendar, User, Phone, Mail, Video } from 'lucide-react';

const AddPropertyForm = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    type: '',
    state: '',
  lga: '',
  townCity: '',
    price: '',
    priceUnit: 'month',
    bedrooms: '',
    bathrooms: '',
    description: '',
    images: [], 
    squareFootage: '',
    furnished: false,
    petFriendly: false,
    amenities: [],
    status: 'vacant',
    religion: '',
  occupation: '',
  maritalStatus: '',
  ageRange: '',
  additionalRequirements: ''
  });

  const [mediaPreviews, setMediaPreviews] = useState([]);
  const [newAmenity, setNewAmenity] = useState('');
  const [activeSection, setActiveSection] = useState('basic');

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.type || !formData.state || !formData.lga || !formData.townCity || !formData.price || !formData.bedrooms || !formData.bathrooms) {
    alert('Please fill in all required fields');
    return;
  }
  
  
  const combinedLocation = `${formData.townCity}, ${formData.lga}, ${formData.state}`;
  
    onAdd({
      ...formData,
       location: combinedLocation,
      price: parseFloat(formData.price),
      bedrooms: parseInt(formData.bedrooms),
      bathrooms: parseFloat(formData.bathrooms),
      squareFootage: parseInt(formData.squareFootage) || 0,
      rating: 0
    });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const validFiles = files.filter(file => 
        file.type.startsWith('image/') || file.type.startsWith('video/')
      );
      
      if (validFiles.length !== files.length) {
        alert('Please select valid image or video files');
        return;
      }

      const newMediaPreviews = [];
      const newImages = []; // Changed from newMedia to newImages

      validFiles.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const mediaItem = {
            url: e.target.result,
            type: file.type.startsWith('image/') ? 'image' : 'video',
            description: file.type.startsWith('image/') 
              ? `Property image ${formData.images.filter(m => m.type === 'image' || !m.type).length + 1}`
              : `Property video ${formData.images.filter(m => m.type === 'video').length + 1}`
          };
          
          newMediaPreviews.push({
            url: e.target.result,
            type: mediaItem.type
          });
          
          newImages.push(mediaItem);

          if (index === validFiles.length - 1) {
            setMediaPreviews([...mediaPreviews, ...newMediaPreviews]);
            setFormData({
              ...formData,
              images: [...formData.images, ...newImages] // Changed from media to images
            });
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeMedia = (index) => {
    const newMediaPreviews = [...mediaPreviews];
    newMediaPreviews.splice(index, 1);
    setMediaPreviews(newMediaPreviews);

    const newImages = [...formData.images]; // Changed from media to images
    newImages.splice(index, 1);
    setFormData({
      ...formData,
      images: newImages // Changed from media to images
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const addAmenity = () => {
    if (newAmenity.trim() && !formData.amenities.includes(newAmenity.trim())) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, newAmenity.trim()]
      });
      setNewAmenity('');
    }
  };

  const removeAmenity = (amenityToRemove) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.filter(amenity => amenity !== amenityToRemove)
    });
  };

  const renderFormSection = () => {
    switch (activeSection) {
      case 'basic':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Property Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Condo">Condo</option>
                  <option value="Townhouse">Townhouse</option>
                </select>
              </div>
             <div className="space-y-1">
  <label className="block text-sm font-medium text-gray-700 flex items-center">
    <MapPin className="mr-2 h-4 w-4" />
    State
  </label>
  <select
    name="state"
    value={formData.state}
    onChange={handleChange}
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
    required
  >
    <option value="">Select State</option>
    <option value="lagos">Lagos</option>
    <option value="abuja">Abuja (FCT)</option>
    <option value="kano">Kano</option>
    <option value="rivers">Rivers</option>
    <option value="oyo">Oyo</option>
    <option value="kaduna">Kaduna</option>
    <option value="ogun">Ogun</option>
    <option value="imo">Imo</option>
    <option value="plateau">Plateau</option>
    <option value="delta">Delta</option>
    <option value="edo">Edo</option>
    <option value="anambra">Anambra</option>
    <option value="akwa-ibom">Akwa Ibom</option>
    <option value="osun">Osun</option>
    <option value="ondo">Ondo</option>
    <option value="ekiti">Ekiti</option>
    <option value="kwara">Kwara</option>
    <option value="ogun">Ogun</option>
    <option value="cross-river">Cross River</option>
    <option value="abia">Abia</option>
    <option value="enugu">Enugu</option>
    <option value="bayelsa">Bayelsa</option>
    <option value="benue">Benue</option>
    <option value="borno">Borno</option>
    <option value="adamawa">Adamawa</option>
    <option value="gombe">Gombe</option>
    <option value="taraba">Taraba</option>
    <option value="yobe">Yobe</option>
    <option value="bauchi">Bauchi</option>
    <option value="katsina">Katsina</option>
    <option value="sokoto">Sokoto</option>
    <option value="kebbi">Kebbi</option>
    <option value="niger">Niger</option>
    <option value="zamfara">Zamfara</option>
    <option value="jigawa">Jigawa</option>
    <option value="kogi">Kogi</option>
    <option value="nasarawa">Nasarawa</option>
    <option value="ebonyi">Ebonyi</option>
  </select>
</div>

<div className="space-y-1">
  <label className="block text-sm font-medium text-gray-700 flex items-center">
    <MapPin className="mr-2 h-4 w-4" />
    LGA (Local Government Area)
  </label>
  <input
    type="text"
    name="lga"
    value={formData.lga}
    onChange={handleChange}
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
    placeholder="Enter LGA"
    required
  />
</div>

<div className="space-y-1">
  <label className="block text-sm font-medium text-gray-700 flex items-center">
    <MapPin className="mr-2 h-4 w-4" />
    Town/City
  </label>
  <input
    type="text"
    name="townCity"
    value={formData.townCity}
    onChange={handleChange}
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
    placeholder="Enter town or city"
    required
  />
</div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Price
                </label>
                <div className="flex">
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
                    placeholder="Enter price"
                    required
                  />
                  <select
                    name="priceUnit"
                    value={formData.priceUnit}
                    onChange={handleChange}
                    className="p-3 border border-l-0 border-gray-300 rounded-r-lg bg-gray-50 focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
                  >
                    <option value="bi annually">/bi annually</option>
                    <option value="monthly">/monthly</option>
                    <option value="quaterly">/quaterly</option>
                      <option value="Yearly">/Yearly</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
                >
                  <option value="vacant">Vacant</option>
                  <option value="occupied">Occupied</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  <Bed className="mr-2 h-4 w-4" />
                  Bedrooms
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
                  min="0"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  <Bath className="mr-2 h-4 w-4" />
                  Bathrooms
                </label>
                <input
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
                  min="0"
                  step="0.5"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  <Ruler className="mr-2 h-4 w-4" />
                  Square Footage
                </label>
                <input
                  type="number"
                  name="squareFootage"
                  value={formData.squareFootage}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
                  min="0"
                />
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Features</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="furnished"
                      checked={formData.furnished}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#02D482] focus:ring-[#02d46b] border-gray-300 rounded"
                    />
                    <span className="flex items-center text-sm text-gray-700">
                      <Sofa className="mr-1 h-4 w-4" /> Furnished
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="petFriendly"
                      checked={formData.petFriendly}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#02D482] focus:ring-[#02D482] border-gray-300 rounded"
                    />
                    <span className="flex items-center text-sm text-gray-700">
                      <PawPrint className="mr-1 h-4 w-4" /> Pet Friendly
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
                placeholder="Enter property description"
              />
            </div>
          </div>
        );
      
      case 'amenities':
        return (
          <div className="space-y-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Add Amenities</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newAmenity}
                  onChange={(e) => setNewAmenity(e.target.value)}
                  placeholder="Enter amenity (e.g. Swimming Pool)"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAmenity())}
                />
                <button
                  type="button"
                  onClick={addAmenity}
                  className="px-4 py-2 bg-[#02D482] text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Amenities</h4>
              {formData.amenities.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {formData.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-[#02D482] rounded-full text-sm flex items-center gap-1"
                    >
                      {amenity}
                      <button
                        type="button"
                        onClick={() => removeAmenity(amenity)}
                        className="text-[#02D482] hover:text-blue-800"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No amenities added yet</p>
              )}
            </div>
          </div>
        );
      
      case 'requirements':
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 flex items-center">
            <User className="mr-2 h-4 w-4" />
            Religion
          </label>
          <select
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
          >
            <option value="" disabled>Select Religion</option>
            <option value="christianity">Christianity</option>
            <option value="islam">Islam</option>
            <option value="judaism">Judaism</option>
            <option value="hinduism">Hinduism</option>
            <option value="buddhism">Buddhism</option>
            <option value="other">Other</option>
            <option value="none">No Preference</option>
          </select>
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 flex items-center">
            <User className="mr-2 h-4 w-4" />
            Occupation
          </label>
          <select
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
          >
            <option value="" disabled>Select Occupation</option>
            <option value="student">Student</option>
            <option value="employed">Employed</option>
            <option value="self-employed">Self-Employed</option>
            <option value="retired">Retired</option>
            <option value="unemployed">Unemployed</option>
            <option value="other">Other</option>
            <option value="none">No Preference</option>
          </select>
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 flex items-center">
            <User className="mr-2 h-4 w-4" />
            Marital Status
          </label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
          >
            <option value="" disabled>Select Marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
            <option value="separated">Separated</option>
            <option value="none">No Preference</option>
          </select>
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            Age Range
          </label>
          <select
            name="ageRange"
            value={formData.ageRange}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
          >
            <option value="" disabled>Select Age Range</option>
            <option value="18-25">18-25 years</option>
            <option value="26-35">26-35 years</option>
            <option value="36-45">36-45 years</option>
            <option value="46-55">46-55 years</option>
            <option value="56-65">56-65 years</option>
            <option value="65+">65+ years</option>
            <option value="none">No Preference</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700 flex items-center">
          <User className="mr-2 h-4 w-4" />
          Additional Requirements
        </label>
        <textarea
          name="additionalRequirements"
          value={formData.additionalRequirements}
          onChange={handleChange}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02D482] focus:border-transparent"
          placeholder="Any other specific requirements or preferences..."
        />
      </div>
    </div>
  );
      
    case 'images':
        return (
          <div className="space-y-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Upload Images & Videos</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <div className="flex gap-2 mb-2">
                      <Camera className="w-8 h-8 text-gray-500" />
                      <Video className="w-8 h-8 text-gray-500" />
                    </div>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">Images (PNG, JPG, JPEG) or Videos (MP4, MOV) (MAX. 10MB each)</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    multiple
                  />
                </label>
              </div>
            </div>
            
            {mediaPreviews.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Media</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {mediaPreviews.map((preview, index) => (
                    <div key={index} className="relative group">
                      {preview.type === 'image' ? (
                        <img
                          src={preview.url}
                          alt={`Property preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border border-gray-200"
                        />
                      ) : (
                        <video
                          src={preview.url}
                          className="w-full h-32 object-cover rounded-lg border border-gray-200"
                          controls={false}
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => removeMedia(index)}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={16} />
                      </button>
                      <div className="absolute bottom-2 left-2 p-1 bg-black bg-opacity-50 text-white text-xs rounded">
                        {preview.type === 'image' ? 'Image' : 'Video'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Add New Property</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveSection('basic')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'basic' ? 'border-[#02D482] text-[#02D482]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Basic Info
              </button>
              <button
                onClick={() => setActiveSection('amenities')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'amenities' ? 'border-[#02D482] text-[#02D482]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Amenities
              </button>
              <button
                onClick={() => setActiveSection('requirements')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'requirements' ? 'border-[#02D482] text-[#02D482]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
             requirements
              </button>
              <button
                onClick={() => setActiveSection('images')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'images' ? 'border-[#02D482] text-[#02D482]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Images
              </button>
            </nav>
          </div>
          
          {/* Form Content */}
          {renderFormSection()}
          
          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <div className="flex space-x-4">
              {activeSection !== 'basic' && (
                <button
                  type="button"
                  onClick={() => setActiveSection(prev => {
                    const sections = ['basic', 'amenities', 'tenant', 'images'];
                    const currentIndex = sections.indexOf(prev);
                    return sections[currentIndex - 1];
                  })}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
              )}
              {activeSection !== 'images' ? (
                <button
                  type="button"
                  onClick={() => setActiveSection(prev => {
                    const sections = ['basic', 'amenities', 'Reguirements', 'images'];
                    const currentIndex = sections.indexOf(prev);
                    return sections[currentIndex + 1];
                  })}
                  className="px-6 py-2 bg-[#02D482] text-white rounded-lg hover:bg-[#02D482] transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Save size={18} />
                  Add Property
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;