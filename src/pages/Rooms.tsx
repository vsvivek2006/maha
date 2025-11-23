import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Phone, MessageCircle, Star, Users, Wifi, Car, Utensils, Heart, Shield, Check, ArrowLeft, ArrowRight, MapPin, Clock } from "lucide-react";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  // All rooms data with multiple images
  const rooms = [
    {
      id: "standard_non_ac",
      name: "Standard Non-AC Room",
      price: 999,
      displayPrice: "₹999",
      originalPrice: "₹1299",
      discount: "23% OFF",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Comfortable non-AC room with traditional decor, perfect for spiritual seekers looking for affordable accommodation near Prikarma Marg.",
      features: [
        "Double Bed with Orthopedic Mattress",
        "Attached Bathroom with Geyser",
        "24/7 Hot Water Supply",
        "Free High-Speed WiFi",
        "Daily Housekeeping Service",
        "Temple View Window",
        "LED Television",
        "Room Service Available"
      ],
      amenities: ["🛌", "🚿", "📶", "🧹", "📺", "🪟"],
      capacity: "2 Adults",
      size: "120 sq ft",
      view: "Street & Temple View",
      roomType: "non-ac",
      popular: true,
      badge: "Most Popular",
      icon: "🛌"
    },
    {
      id: "deluxe_ac",
      name: "Deluxe AC Room",
      price: 1499,
      displayPrice: "₹1,499",
      originalPrice: "₹1999",
      discount: "25% OFF",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Spacious AC room with modern amenities and traditional touches, perfect for families and couples seeking comfort during pilgrimage.",
      features: [
        "King Size Bed with Premium Mattress",
        "Split Air Conditioning",
        "Attached Modern Bathroom",
        "24/7 Hot Water Supply",
        "Free High-Speed WiFi",
        "32-inch LED TV",
        "Sitting Area with Chairs",
        "Room Service Available",
        "Daily Newspaper"
      ],
      amenities: ["🛌", "❄️", "🚿", "📶", "📺", "💺"],
      capacity: "2 Adults + 1 Child",
      size: "180 sq ft",
      view: "Garden & Building View",
      roomType: "ac",
      popular: false,
      badge: "Best Value",
      icon: "❄️"
    },
    {
      id: "family_suite",
      name: "Family Suite",
      price: 1999,
      displayPrice: "₹1,999",
      originalPrice: "₹2599",
      discount: "23% OFF",
      images: [
        "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Luxurious family suite with separate living area, traditional decor, and modern amenities. Ideal for families and group pilgrims.",
      features: [
        "Double Bed + Single Bed",
        "Split Air Conditioning",
        "Spacious Attached Bathroom",
        "Separate Living Area with Sofa",
        "Mini Refrigerator",
        "Free High-Speed WiFi",
        "32-inch LED TV",
        "24/7 Hot Water Supply",
        "Room Service Available",
        "Extra Pillows & Blankets"
      ],
      amenities: ["🛌", "❄️", "🚿", "🛋️", "🧊", "📶"],
      capacity: "3 Adults",
      size: "250 sq ft",
      view: "Temple & City View",
      roomType: "ac",
      popular: true,
      badge: "Family Favorite",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      id: "premium_ac",
      name: "Premium AC Room",
      price: 1799,
      displayPrice: "₹1,799",
      originalPrice: "₹2299",
      discount: "22% OFF",
      images: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Premium AC room with elegant traditional decor, extra comfort features and beautiful views of Vrindavan.",
      features: [
        "King Size Bed with Luxury Mattress",
        "Split Air Conditioning",
        "Premium Attached Bathroom",
        "Work Desk with Chair",
        "Free High-Speed WiFi",
        "32-inch Smart TV",
        "24/7 Hot Water Supply",
        "Premium Toiletries",
        "Tea/Coffee Maker",
        "Room Service Available"
      ],
      amenities: ["🛌", "❄️", "🚿", "💼", "📶", "📺"],
      capacity: "2 Adults",
      size: "200 sq ft",
      view: "City & Temple View",
      roomType: "ac",
      popular: false,
      badge: "Luxury Choice",
      icon: "⭐"
    }
  ];

  // Guest house amenities
  const guestHouseAmenities = [
    { icon: "🅿️", name: "Free Parking", description: "Secure parking space for cars and two-wheelers" },
    { icon: "🍴", name: "Pure Vegetarian Food", description: "Delicious and hygienic satvik meals" },
    { icon: "📶", name: "Free WiFi", description: "High-speed internet throughout the property" },
    { icon: "🚿", name: "24/7 Hot Water", description: "Continuous hot water supply" },
    { icon: "🙏", name: "Temple Proximity", description: "Walking distance to all major temples" },
    { icon: "🧹", name: "Daily Housekeeping", description: "Regular cleaning and maintenance" },
    { icon: "🛎️", name: "24/7 Reception", description: "Round-the-clock front desk service" },
    { icon: "🎯", name: "Tour Guidance", description: "Help with temple visits and local guidance" }
  ];

  // Room filters
  const filters = [
    { id: "all", label: "All Rooms", count: rooms.length },
    { id: "ac", label: "AC Rooms", count: rooms.filter(room => room.roomType === "ac").length },
    { id: "non-ac", label: "Non-AC Rooms", count: rooms.filter(room => room.roomType === "non-ac").length },
    { id: "family", label: "Family Rooms", count: rooms.filter(room => room.capacity.includes("3")).length }
  ];

  // Filtered rooms
  const filteredRooms = activeFilter === "all" 
    ? rooms 
    : rooms.filter(room => 
        activeFilter === "ac" ? room.roomType === "ac" :
        activeFilter === "non-ac" ? room.roomType === "non-ac" :
        room.capacity.includes("3")
      );

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
  };

  const handleWhatsAppBooking = (room) => {
    const message = `🏩 *Radhika Sadan - Room Booking Inquiry*\n\n*Room Type:* ${room.name}\n*Price:* ${room.displayPrice}/night\n*Original Price:* ${room.originalPrice}\n*Discount:* ${room.discount}\n\nHello! I would like to book the ${room.name} at Radhika Sadan. Please share availability and booking procedure.`;
    const whatsappUrl = `https://wa.me/917044755109?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallBooking = () => {
    window.open('tel:+917044755109');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedRoom.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedRoom.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Helmet>
        <title>Our Rooms - Radhika Sadan Guest House Vrindavan | AC & Non-AC Rooms</title>
        <meta 
          name="description" 
          content="Explore our comfortable rooms at Radhika Sadan Vrindavan. AC & Non-AC rooms starting at ₹999 near Prikarma Marg. Family suites, premium rooms with modern amenities."
        />
        <meta 
          name="keywords" 
          content="Radhika Sadan rooms, Vrindavan guest house rooms, AC rooms Vrindavan, budget stay Mathura, family rooms Vrindavan, premium accommodation, Prikarma Marg stay"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Our Rooms
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto">
            Comfortable accommodations in the heart of Vrindavan, designed for your spiritual journey
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white text-orange-600 px-4 py-2 rounded-full font-bold">🏩 Starting at ₹999</span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">🔖 10% OFF Advance Payment</span>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold">📍 Near Prikarma Marg</span>
          </div>
        </div>
      </section>

      {/* Room Filters */}
      <section className="py-12 bg-white border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredRooms.map((room, index) => (
              <div 
                key={room.id} 
                className={`bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 ${
                  room.popular ? 'border-orange-500 transform hover:-translate-y-3' : 'border-orange-200 hover:border-orange-400'
                } overflow-hidden group`}
              >
                {room.popular && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 text-center font-bold text-lg">
                    ⭐ {room.badge}
                  </div>
                )}
                
                {/* Room Image Carousel */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-2 rounded-full text-sm font-bold">
                    {room.discount}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm">
                    📷 {room.images.length} Photos
                  </div>
                </div>

                <div className="p-8">
                  {/* Room Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-3xl mb-2">{room.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{room.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl font-bold text-orange-600">{room.displayPrice}</span>
                        <span className="text-lg text-gray-400 line-through">{room.originalPrice}</span>
                      </div>
                      <span className="text-sm text-gray-500">per night</span>
                    </div>
                  </div>
                  
                  {/* Room Specifications */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-orange-500" />
                      <span className="font-semibold">{room.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg mr-3">📐</span>
                      <span className="font-semibold">{room.size}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg mr-3">🌄</span>
                      <span className="font-semibold">{room.view}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{room.roomType === 'ac' ? '❄️' : '🌬️'}</span>
                      <span className="font-semibold">{room.roomType === 'ac' ? 'Air Conditioned' : 'Non-AC'}</span>
                    </div>
                  </div>
                  
                  {/* Quick Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Room Amenities:</h4>
                    <div className="flex flex-wrap gap-3">
                      {room.amenities.map((amenity, idx) => (
                        <span key={idx} className="text-2xl" title={room.features[idx]}>
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleBookNow(room)}
                      className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                        room.popular
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
                          : 'bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white'
                      }`}
                    >
                      View Details & Book
                    </button>
                    <button
                      onClick={() => handleWhatsAppBooking(room)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredRooms.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No rooms found</h3>
              <p className="text-gray-600">Try selecting a different filter to see available rooms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Guest House Amenities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Guest House Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a comfortable and memorable spiritual journey in Vrindavan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guestHouseAmenities.map((amenity, index) => (
              <div 
                key={index}
                className="text-center group p-6 bg-orange-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{amenity.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{amenity.name}</h3>
                <p className="text-gray-600 text-lg">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-300">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                Special Offers
              </h2>
              <p className="text-xl text-gray-600">Exclusive deals for our valued guests</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border border-green-200">
                <div className="text-3xl mb-4">🎁</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">10% OFF on Advance Payment</h3>
                <p className="text-gray-600">Book and pay in advance to get extra discount</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-2xl border border-blue-200">
                <div className="text-3xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Family Package</h3>
                <p className="text-gray-600">Special rates for family bookings and group pilgrims</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-2xl border border-purple-200">
                <div className="text-3xl mb-4">📅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Long Stay Discount</h3>
                <p className="text-gray-600">Reduced rates for weekly and monthly stays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready to Book Your Spiritual Stay?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
            Choose from our comfortable rooms and experience divine hospitality in Vrindavan
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <span>View All Rooms Again</span>
            </button>
            <button
              onClick={handleCallBooking}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <MessageCircle className="h-6 w-6" />
              <span>WhatsApp Inquiry</span>
            </button>
            <a
              href="tel:+917044755109"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <Phone className="h-6 w-6" />
              <span>Call: +91 70447 55109</span>
            </a>
          </div>
          
          <p className="text-orange-200 mt-8 text-xl flex items-center justify-center gap-3">
            <Heart className="h-6 w-6" />
            <span>Jai Shri Radhe Krishna - Welcome to Vrindavan!</span>
          </p>
        </div>
      </section>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Image Carousel */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <img
                  src={selectedRoom.images[currentImageIndex]}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg"
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedRoom.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedRoom.images.length}
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {selectedRoom.name}
                    </h2>
                    <p className="text-gray-600 text-lg">{selectedRoom.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-bold text-orange-600">{selectedRoom.displayPrice}</span>
                      <span className="text-xl text-gray-400 line-through">{selectedRoom.originalPrice}</span>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                      {selectedRoom.discount}
                    </span>
                  </div>
                </div>

                {/* Room Specifications */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-orange-50 rounded-2xl">
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                    <div className="font-bold text-gray-900 text-lg">{selectedRoom.capacity}</div>
                    <div className="text-sm text-gray-600">Capacity</div>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl mb-2 block">📐</span>
                    <div className="font-bold text-gray-900 text-lg">{selectedRoom.size}</div>
                    <div className="text-sm text-gray-600">Room Size</div>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl mb-2 block">🌄</span>
                    <div className="font-bold text-gray-900 text-lg">{selectedRoom.view}</div>
                    <div className="text-sm text-gray-600">View</div>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl mb-2 block">{selectedRoom.roomType === 'ac' ? '❄️' : '🌬️'}</span>
                    <div className="font-bold text-gray-900 text-lg">{selectedRoom.roomType === 'ac' ? 'AC Room' : 'Non-AC'}</div>
                    <div className="text-sm text-gray-600">Type</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Room Features & Amenities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedRoom.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700 text-lg">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Offer */}
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-2xl mb-8 text-center">
                  <h4 className="font-bold text-gray-900 text-xl mb-2">🎁 Special Offer</h4>
                  <p className="text-gray-900 font-semibold text-lg">
                    Get <span className="text-red-600">10% EXTRA DISCOUNT</span> when you pay in advance
                  </p>
                  <p className="text-gray-800 text-md mt-1">
                    Final Price: <span className="font-bold text-lg">₹{Math.round(selectedRoom.price * 0.9)}</span> per night
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleWhatsAppBooking(selectedRoom)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="h-6 w-6" />
                    Book on WhatsApp
                  </button>
                  <button
                    onClick={handleCallBooking}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Phone className="h-6 w-6" />
                    Call Now
                  </button>
                  <button
                    onClick={() => setSelectedRoom(null)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;