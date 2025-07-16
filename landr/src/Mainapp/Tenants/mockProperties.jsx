import photo1 from '../../assets/Home Makeovers.jpeg';
import photo2 from '../../assets/Modern House Plan 963-00784.jpeg';
import photo3 from '../../assets/Home Makeovers.jpeg';
import photo4 from '../../assets/Plan 623294DJ_ 3 Bed Traditional House Plan Under 1500 Square Feet with Brick Exterior and Storage Above the Garage.jpeg';
import photo5 from '../../assets/_This New Hampshire Log Home Draws on Old Western Style_.jpeg';

export const mockProperties = [
  {
    id: 1,
    type: 'Modern Bungalow',
    price: 2000,
    priceUnit: 'year',
    location: 'Philip Adesanya Crescent, Lagos',
    landlordName: 'Mr Dimeji Obioma',
    landlordAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    documentationStatus: 'Verified',
    rating: 4.8,
    reviewCount: 24,
    bedrooms: 3,
    bathrooms: 2,
    area: '120 sqm',
    furnished: true,
    parking: true,
    garden: true,
    description: 'Beautiful modern bungalow with contemporary finishes and spacious rooms. Features an open-plan living area, modern kitchen with granite countertops, and a lovely garden perfect for relaxation. Located in a serene neighborhood with easy access to major roads.',
    amenities: ['Air Conditioning', 'Generator', 'Security', 'Water Supply', 'Internet Ready', 'Parking Space', 'Garden'],
    images: [
      {
        url: photo1,
        description: 'Front view of the property showing the beautiful exterior and landscaping',
        category: 'exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Spacious living room with modern furniture and natural lighting',
        category: 'living_room'
      },
      {
        url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Modern kitchen with granite countertops and stainless steel appliances',
        category: 'kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Master bedroom with ensuite bathroom and walk-in closet',
        category: 'bedroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Clean and modern bathroom with shower and bathtub',
        category: 'bathroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Beautiful garden area perfect for outdoor relaxation',
        category: 'outdoor'
      }
    ],
    category: 'homes',
    sponsored: true,
    availableFrom: '2025-08-01',
    requirements: {
      religion: 'Any',
      age: '25+',
      occupation: 'Employed',
      maritalStatus: 'Any',
      gender: 'Any'
    }
  },
  {
    id: 2,
    type: 'Luxury Apartment',
    price: 1800,
    priceUnit: 'year',
    location: 'Victoria Island, Lagos',
    landlordName: 'Mrs Adunni Okafor',
    landlordAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b86fb13c?w=100&h=100&fit=crop&crop=face',
    documentationStatus: 'Verified',
    rating: 4.9,
    reviewCount: 18,
    bedrooms: 2,
    bathrooms: 2,
    area: '95 sqm',
    furnished: true,
    parking: true,
    garden: false,
    description: 'Luxurious 2-bedroom apartment in the heart of Victoria Island. Features premium finishes, floor-to-ceiling windows with stunning city views, and access to world-class amenities including a swimming pool and gym. Perfect for young professionals.',
    amenities: ['Air Conditioning', 'Generator', '24/7 Security', 'Swimming Pool', 'Gym', 'Elevator', 'Parking Space', 'Internet'],
    images: [
      {
        url: photo2,
        description: 'Elegant living room with modern furniture and city view',
        category: 'living_room'
      },
      {
        url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Contemporary kitchen with island and premium appliances',
        category: 'kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Master bedroom with king-size bed and wardrobe',
        category: 'bedroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Apartment building exterior with modern architecture',
        category: 'exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Luxury bathroom with marble finishes and modern fixtures',
        category: 'bathroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Dining area with elegant table setting and chandelier',
        category: 'dining'
      }
    ],
    category: 'homes',
    sponsored: false,
    availableFrom: '2025-07-15',
       requirements: {
      religion: 'Any',
      age: '22+',
      occupation: 'Professional',
      maritalStatus: 'Single',
      gender: 'Female'
    }
  },
  {
    id: 3,
    type: 'Executive Duplex',
    price: 3500,
    priceUnit: 'year',
    location: 'Lekki Phase 1, Lagos',
    landlordName: 'Mr Tunde Adebayo',
    landlordAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    documentationStatus: 'Verified',
    rating: 4.7,
    reviewCount: 31,
    bedrooms: 4,
    bathrooms: 3,
    area: '200 sqm',
    furnished: false,
    parking: true,
    garden: true,
    description: 'Stunning 4-bedroom executive duplex in prestigious Lekki Phase 1. Features two floors of luxurious living with spacious rooms, modern fixtures, and a private garden. Located in a gated estate with 24/7 security and close to shopping centers.',
    amenities: ['Air Conditioning', 'Generator', '24/7 Security', 'Water Supply', 'Internet Ready', 'Parking Space', 'Garden', 'Balcony'],
    images: [
      {
        url: photo3,
        description: 'Impressive duplex exterior with modern architectural design',
        category: 'exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Spacious living room with high ceilings and natural light',
        category: 'living_room'
      },
      {
        url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Large kitchen with center island and modern appliances',
        category: 'kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Master bedroom suite with private balcony access',
        category: 'bedroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Formal dining room perfect for entertaining guests',
        category: 'dining'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Elegant bathroom with modern fixtures and marble tiles',
        category: 'bathroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Beautiful balcony with outdoor furniture and garden view',
        category: 'outdoor'
      }
    ],
    category: 'homes',
    sponsored: false,
    availableFrom: '2025-09-01',
    requirements: {
      religion: 'Any',
      age: '30+',
      occupation: 'Executive',
      maritalStatus: 'Any',
      gender: 'Any'
    }
  },
  {
    id: 4,
    type: 'Cozy Studio',
    price: 1200,
    priceUnit: 'year',
    location: 'Ikeja GRA, Lagos',
    landlordName: 'Mrs Kemi Adeleke',
    landlordAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    documentationStatus: 'Verified',
    rating: 4.6,
    reviewCount: 15,
    bedrooms: 1,
    bathrooms: 1,
    area: '45 sqm',
    furnished: true,
    parking: false,
    garden: false,
    description: 'Charming studio apartment perfect for a single professional or student. Efficiently designed with a kitchenette, comfortable living space, and modern bathroom. Located in a quiet area of Ikeja GRA with easy access to transportation.',
    amenities: ['Air Conditioning', 'Generator', 'Security', 'Water Supply', 'Internet Ready'],
    images: [
      {
        url: photo4,
        description: 'Cozy studio layout with living and sleeping area',
        category: 'living_room'
      },
      {
        url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Compact kitchenette with essential appliances',
        category: 'kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Comfortable sleeping area with storage solutions',
        category: 'bedroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Building exterior in quiet residential area',
        category: 'exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Modern bathroom with shower and essential fixtures',
        category: 'bathroom'
      }
    ],
    category: 'homes',
    sponsored: false,
    availableFrom: '2025-08-15',
    requirements: {
      religion: 'Any',
      age: '25+',
      occupation: 'Employed',
      maritalStatus: 'Any',
      gender: 'Any'
    }
  },
  {
    id: 5,
    type: 'Family Townhouse',
    price: 2800,
    priceUnit: 'year',
    location: 'Magodo Phase 2, Lagos',
    landlordName: 'Dr Folake Adeyemi',
    landlordAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    documentationStatus: 'Verified',
    rating: 4.5,
    reviewCount: 22,
    bedrooms: 3,
    bathrooms: 2,
    area: '150 sqm',
    furnished: false,
    parking: true,
    garden: true,
    description: 'Perfect family townhouse in a well-planned estate. Features spacious bedrooms, family lounge, separate dining area, and a private garden. Ideal for families looking for a peaceful environment with good schools nearby.',
    amenities: ['Air Conditioning', 'Generator', '24/7 Security', 'Water Supply', 'Internet Ready', 'Parking Space', 'Garden', 'Playground'],
    images: [
      {
        url: photo5,
        description: 'Townhouse exterior with neat compound and parking area',
        category: 'exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Bright and airy living room with family-friendly layout',
        category: 'living_room'
      },
      {
        url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Separate dining area perfect for family meals',
        category: 'dining'
      },
      {
        url: 'https://images.unsplash.com/photo-1556909195-d8a29d36fe38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Well-equipped kitchen with ample storage space',
        category: 'kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Children bedroom with bunk beds and study area',
        category: 'bedroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Private garden with lawn and outdoor seating',
        category: 'outdoor'
      }
    ],
    category: 'homes',
    sponsored: false,
    availableFrom: '2025-07-30',
    requirements: {
      religion: 'Any',
      age: '30+',
      occupation: 'Professional',
      maritalStatus: 'Married',
      gender: 'Any'
    }
  },
  {
    id: 6,
    type: 'Penthouse Suite',
    price: 5000,
    priceUnit: 'year',
    location: 'Ikoyi, Lagos',
    landlordName: 'Mr Emeka Okonkwo',
    landlordAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    documentationStatus: 'Verified',
    rating: 4.9,
    reviewCount: 12,
    bedrooms: 3,
    bathrooms: 3,
    area: '180 sqm',
    furnished: true,
    parking: true,
    garden: false,
    description: 'Luxury penthouse suite with panoramic views of Lagos. Features premium finishes, spacious terraces, and access to exclusive amenities. Located in the most prestigious area of Ikoyi with concierge service.',
    amenities: ['Air Conditioning', 'Generator', '24/7 Security', 'Swimming Pool', 'Gym', 'Elevator', 'Parking Space', 'Concierge', 'Terrace'],
    images: [
      {
        url: photo1,
        description: 'Luxurious living room with panoramic city views',
        category: 'living_room'
      },
      {
        url: 'https://images.unsplash.com/photo-1556909195-d8a29d36fe38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Gourmet kitchen with premium appliances and marble countertops',
        category: 'kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Master bedroom with walk-in closet and ensuite',
        category: 'bedroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Luxury bathroom with jacuzzi and marble finishes',
        category: 'bathroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Elegant dining room with designer furniture',
        category: 'dining'
      },
      {
        url: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Private terrace with outdoor furniture and city views',
        category: 'outdoor'
      },
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'High-rise building exterior in prestigious Ikoyi area',
        category: 'exterior'
      }
    ],
    category: 'homes',
    sponsored: true,
    availableFrom: '2025-08-10',
    requirements: {
      religion: 'Any',
      age: '25+',
      occupation: 'Employed',
      maritalStatus: 'Any',
      gender: 'Any'
    }
  },
  {
    id: 7,
    type: 'Shared Apartment',
    price: 800,
    priceUnit: 'year',
    location: 'Surulere, Lagos',
    landlordName: 'Mrs Blessing Okoro',
    landlordAvatar: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face',
    documentationStatus: 'Verified',
    rating: 4.3,
    reviewCount: 28,
    bedrooms: 1,
    bathrooms: 1,
    area: '35 sqm',
    furnished: true,
    parking: false,
    garden: false,
    description: 'Affordable shared apartment perfect for students and young professionals. Private bedroom with shared common areas including kitchen and living room. Great for networking and meeting new people in a safe environment.',
    amenities: ['Air Conditioning', 'Generator', 'Security', 'Water Supply', 'Internet', 'Shared Kitchen', 'Shared Living Room'],
    images: [
      {
        url: photo4,
        description: 'Private bedroom with single bed and study desk',
        category: 'bedroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Shared living room with comfortable seating',
        category: 'living_room'
      },
      {
        url: 'https://images.unsplash.com/photo-1556909195-d8a29d36fe38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Shared kitchen with modern appliances',
        category: 'kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Clean shared bathroom with modern fixtures',
        category: 'bathroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Apartment building exterior in Surulere',
        category: 'exterior'
      }
    ],
    category: 'homes',
    sponsored: false,
    availableFrom: '2025-07-20',
    requirements: {
      religion: 'Any',
      age: '18+',
      occupation: 'Student/Young Professional',
      maritalStatus: 'Any',
      gender: 'Any'
    }
  },
  {
    id: 8,
    type: 'Serviced Apartment',
    price: 4200,
    priceUnit: 'year',
    location: 'Banana Island, Lagos',
    landlordName: 'Mr Akin Odunayo',
    landlordAvatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face',
    documentationStatus: 'Verified',
    rating: 4.8,
    reviewCount: 16,
    bedrooms: 2,
    bathrooms: 2,
    area: '110 sqm',
    furnished: true,
    parking: true,
    garden: false,
    description: 'Fully serviced apartment in exclusive Banana Island. Includes housekeeping, laundry service, and 24/7 concierge. Perfect for executives and expats looking for hassle-free luxury living with world-class amenities.',
    amenities: ['Air Conditioning', 'Generator', '24/7 Security', 'Swimming Pool', 'Gym', 'Elevator', 'Parking Space', 'Concierge', 'Housekeeping', 'Laundry'],
    images: [
      {
        url: photo2,
        description: 'Elegantly furnished living room with designer furniture',
        category: 'living_room'
      },
      {
        url: 'https://images.unsplash.com/photo-1556909195-d8a29d36fe38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Fully equipped kitchen with premium appliances',
        category: 'kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Luxurious master bedroom with hotel-quality linens',
        category: 'bedroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Spa-like bathroom with premium fixtures',
        category: 'bathroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Formal dining area with elegant table setting',
        category: 'dining'
      },
      {
        url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Luxury building exterior on prestigious Banana Island',
        category: 'exterior'
      }
    ],
    category: 'homes',
    sponsored: true,
    availableFrom: '2025-08-05',
    requirements: {
      religion: 'Any',
      age: '30+',
      occupation: 'Executive/Expat',
      maritalStatus: 'Any',
      gender: 'Any'
    }
  }
];