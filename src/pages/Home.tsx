import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Star, MapPin, Users, Heart, Shield, Check, ArrowRight } from "lucide-react";

// Razorpay utility functions
const loadRazorpay = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    
    document.body.appendChild(script);
  });
};

const formatAmount = (amount) => {
  return Math.round(amount * 100);
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    checkin: "",
    checkout: "",
    guests: "",
    message: ""
  });

  const RAZORPAY_KEY_ID = "rzp_live_Rjg2D4BxOBtrmR";

  // Hero slides with local images
  const heroSlides = [
    {
      image: "/prem.png",
      title: "Radhika Sadan Guest House",
      subtitle: "Divine Stay Near Banke Bihari Temple",
      description: "Best budget hotel in Vrindavan near Prem Mandir, ISKCON, and Parikrama Marg. AC/Non-AC rooms with modern amenities.",
      badge: "🏩 Starting at ₹999/Night",
      cta: "Book Your Spiritual Stay"
    },
    {
      image: "/bankebihari.png",
      title: "Comfort Near All Temples",
      subtitle: "Walking Distance to Prem Mandir & ISKCON",
      description: "Perfect location for international pilgrims. Stay close to Banke Bihari, Prem Mandir, ISKCON Vrindavan.",
      badge: "🛕 Perfect Pilgrim Accommodation",
      cta: "View Our Rooms"
    },
    {
      image: "/mathura.png",
      title: "Traditional Braj Hospitality",
      subtitle: "Pure Vegetarian Food & Modern Comfort",
      description: "Experience authentic Vrindavan culture with satvik meals, comfortable rooms, and warm hospitality.",
      badge: "🍴 Authentic Braj Cuisine",
      cta: "Check Availability"
    }
  ];

  // Rooms with local images and fixed prices
  const rooms = [
    {
      id: "standard_non_ac",
      name: "Standard Non-AC Room",
      price: 999,
      displayPrice: "₹999",
      originalPrice: "₹1,299",
      discount: "23% OFF",
      images: ["/room100.png"],
      description: "Affordable non-AC room near Banke Bihari Temple. Perfect budget accommodation for pilgrims.",
      features: ["Double Bed", "Attached Bathroom", "24/7 Hot Water", "Free WiFi", "Daily Housekeeping", "Temple View"],
      capacity: "2 Adults",
      size: "120 sq ft",
      view: "Temple View",
      popular: true,
      badge: "Most Popular",
      icon: "🛌",
      advanceDiscount: 899
    },
    {
      id: "deluxe_ac",
      name: "Deluxe AC Room",
      price: 1499,
      displayPrice: "₹1,499",
      originalPrice: "₹1,999",
      discount: "25% OFF",
      images: ["/ac.png"],
      description: "Spacious AC room near Prem Mandir. Modern amenities with traditional decor, perfect for families.",
      features: ["King Size Bed", "Attached Bathroom", "Air Conditioning", "24/7 Hot Water", "Free WiFi", "TV", "Sitting Area"],
      capacity: "2 Adults + 1 Child",
      size: "180 sq ft",
      view: "Garden View",
      popular: false,
      badge: "Best Value",
      icon: "❄️",
      advanceDiscount: 1349
    },
    {
      id: "family_suite",
      name: "Family Suite",
      price: 1999,
      displayPrice: "₹1,999",
      originalPrice: "₹2,599",
      discount: "23% OFF",
      images: ["/rate.png"],
      description: "Luxurious family suite near ISKCON. Spacious accommodation for group pilgrims and families.",
      features: ["Double Bed + Single Bed", "Attached Bathroom", "Air Conditioning", "Living Area", "Free WiFi", "TV", "Mini Fridge"],
      capacity: "3 Adults",
      size: "250 sq ft",
      view: "Temple View",
      popular: true,
      badge: "Family Favorite",
      icon: "👨‍👩‍👧‍👦",
      advanceDiscount: 1799
    },
    {
      id: "premium_ac",
      name: "Premium AC Room",
      price: 1799,
      displayPrice: "₹1,799",
      originalPrice: "₹2,299",
      discount: "22% OFF",
      images: ["/rate.png"],
      description: "Premium AC accommodation near Parikrama Marg. Elegant rooms with modern facilities.",
      features: ["King Size Bed", "Attached Bathroom", "Air Conditioning", "Work Desk", "Free WiFi", "TV", "Premium Toiletries"],
      capacity: "2 Adults",
      size: "200 sq ft",
      view: "City View",
      popular: false,
      badge: "Luxury Choice",
      icon: "⭐",
      advanceDiscount: 1619
    }
  ];

  // Amenities with icons and SEO descriptions
  const amenities = [
    { 
      icon: "🅿️", 
      title: "Free Parking", 
      description: "Secure parking space for cars and two-wheelers" 
    },
    { 
      icon: "🍴", 
      title: "Pure Vegetarian Food", 
      description: "Delicious satvik meals - authentic Braj cuisine" 
    },
    { 
      icon: "📶", 
      title: "Free WiFi", 
      description: "High-speed internet throughout property" 
    },
    { 
      icon: "🚿", 
      title: "24/7 Hot Water", 
      description: "Continuous hot water supply" 
    },
    { 
      icon: "🛕", 
      title: "Temple Proximity", 
      description: "Walking distance to Banke Bihari, Prem Mandir, ISKCON" 
    },
    { 
      icon: "🧹", 
      title: "Daily Housekeeping", 
      description: "Regular cleaning and maintenance" 
    }
  ];

  // Nearby attractions
  const nearbyAttractions = [
    { 
      name: "Banke Bihari Temple", 
      distance: "3 min walk", 
      description: "Most sacred and famous temple in Vrindavan - divine darshan within walking distance."
    },
    { 
      name: "Prem Mandir Vrindavan", 
      distance: "5 min walk", 
      description: "Beautiful marble temple with spectacular light shows - closest premium accommodation."
    },
    { 
      name: "ISKCON Temple", 
      distance: "8 min walk", 
      description: "International Society for Krishna Consciousness - spiritual center for global devotees."
    },
    { 
      name: "Parikrama Marg", 
      distance: "2 min walk", 
      description: "Sacred walking path around Vrindavan - perfect for morning and evening spiritual walks."
    },
    { 
      name: "Gouri Gopal Vraddhashram", 
      distance: "4 min walk", 
      description: "Peaceful meditation and bhajan ashram - serene spiritual atmosphere nearby."
    },
    { 
      name: "Premanand Ji Maharaj Ashram", 
      distance: "3 min walk", 
      description: "Famous spiritual center and ashram - divine blessings and satsang nearby."
    }
  ];

  // Features highlights
  const features = [
    {
      icon: <Shield className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Safe & Secure",
      description: "24/7 security and CCTV surveillance"
    },
    {
      icon: <Check className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Hygienic Stay",
      description: "Regular sanitization and strict cleanliness"
    },
    {
      icon: <Heart className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Spiritual Atmosphere",
      description: "Perfect environment for meditation and bhajan"
    },
    {
      icon: <Star className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Premium Service",
      description: "Multilingual staff serving international pilgrims"
    }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle payment
  const handlePayment = async (room) => {
    setSelectedRoom(room);
    
    try {
      const isLoaded = await loadRazorpay();
      if (!isLoaded) {
        alert('Payment gateway loading failed. Please try again.');
        return;
      }

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: formatAmount(room.advanceDiscount),
        currency: 'INR',
        name: 'Radhika Sadan Guest House Vrindavan',
        description: `Advance Booking for ${room.name}`,
        image: '/logo.png',
        handler: function (response) {
          setPaymentSuccess(true);
          setShowBookingForm(true);
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        notes: {
          room: room.name,
          guesthouse: 'Radhika Sadan Vrindavan',
          location: 'Near Banke Bihari Temple'
        },
        theme: {
          color: '#F97316'
        },
        modal: {
          ondismiss: function() {
            alert('Payment was cancelled. You can try again anytime.');
          }
        }
      };

      const razorpayInstance = new window.Razorpay(options);
      
      razorpayInstance.on('payment.failed', function (response) {
        alert(`Payment failed: ${response.error.description}. Please try again.`);
      });

      razorpayInstance.open();
      
    } catch (error) {
      alert('Error initializing payment. Please try again or contact us directly.');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `🏩 *Radhika Sadan Vrindavan - Booking Confirmation*\n\n*Room:* ${selectedRoom.name}\n*Amount Paid:* ₹${selectedRoom.advanceDiscount}\n*Regular Price:* ${selectedRoom.displayPrice}\n\n*Guest Details:*\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nGuests: ${formData.guests}\nSpecial Request: ${formData.message || "None"}\n\n*Location:* Near Banke Bihari Temple, Vrindavan\nBooking Time: ${new Date().toLocaleString()}`;
    
    const whatsappUrl = `https://wa.me/919286755109?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setShowBookingForm(false);
    setPaymentSuccess(false);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      checkin: "",
      checkout: "",
      guests: "",
      message: ""
    });
    setSelectedRoom(null);

    alert('🎉 Booking Confirmed! We have received your details. Our team will contact you shortly.');
  };

  // Quick WhatsApp booking
  const handleQuickBooking = (room) => {
    const message = `Hello Radhika Sadan Vrindavan! I want to book ${room.name} for my pilgrimage. I'm interested in staying near Banke Bihari Temple/Prem Mandir. Please share availability and booking procedure.`;
    const whatsappUrl = `https://wa.me/919286755109?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Helmet>
        <title>Radhika Sadan Vrindavan | Best Guest House Near Banke Bihari Temple & Prem Mandir</title>
        <meta 
          name="description" 
          content="Radhika Sadan Guest House - Premium accommodation in Vrindavan near Banke Bihari Temple, Prem Mandir & ISKCON. AC/Non-AC rooms from ₹999. Walking distance to all major temples."
        />
        <meta 
          name="keywords" 
          content="vrindavan guest house, banke bihari temple accommodation, prem mandir nearby hotel, iskcon vrindavan stay, mathura vrindavan hotel, budget accommodation vrindavan"
        />
        <meta property="og:title" content="Radhika Sadan Vrindavan - Best Guest House Near All Temples" />
        <meta property="og:description" content="Premium accommodation in Vrindavan walking distance to Banke Bihari Temple, Prem Mandir, ISKCON. AC/Non-AC rooms from ₹999." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://radhikasadan.com/" />
      </Helmet>

      {/* === HERO SECTION - Mobile Optimized === */}
      <section className="relative h-screen md:h-[80vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            
            <div className="relative h-full flex items-center justify-center text-white px-4">
              <div className="max-w-4xl mx-auto text-center w-full">
                {/* Badge */}
                <div className={`inline-flex items-center bg-white text-orange-600 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-bold mb-6 md:mb-8 ${
                  index === currentSlide ? 'animate-bounce' : ''
                }`}>
                  {slide.badge}
                </div>

                {/* Main Title */}
                <div className="mb-6 md:mb-8">
                  <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 ${
                    index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                  }`} style={{ fontFamily: '"Playfair Display", serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    {slide.title}
                  </h1>
                  
                  {/* Subtitle */}
                  <div className={`mb-6 md:mb-8 ${
                    index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                  }`}>
                    <span className="text-xl md:text-3xl lg:text-4xl text-yellow-300 block mb-3 md:mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                      {slide.subtitle}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className={`text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-white leading-relaxed ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`} style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  {slide.description}
                </p>
                
                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  <button
                    onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white hover:bg-gray-100 text-orange-600 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
                  >
                    <span>🏩 {slide.cta}</span>
                  </button>
                  <button
                    onClick={() => handleQuickBooking(rooms[0])}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
                  >
                    <MessageCircle className="h-4 w-4 md:h-6 md:w-6" />
                    <span>WhatsApp Booking</span>
                  </button>
                </div>

                {/* Location Highlights */}
                <div className={`mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-4 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  <span className="bg-green-600 bg-opacity-80 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
                    🛕 3 min to Banke Bihari
                  </span>
                  <span className="bg-blue-600 bg-opacity-80 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
                    💫 5 min to Prem Mandir
                  </span>
                  <span className="bg-purple-600 bg-opacity-80 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
                    🌟 8 min to ISKCON
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* === ROOMS SECTION - Mobile Optimized === */}
      <section id="rooms" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Best Rooms in Vrindavan
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Comfortable accommodation walking distance to all major temples
            </p>
            <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-2 md:gap-3">
              <span className="bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
                🛕 Closest to Banke Bihari
              </span>
              <span className="bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
                💫 Near Prem Mandir
              </span>
              <span className="bg-orange-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
                🔥 10% Advance Discount
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {rooms.map((room, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transition-all duration-500 border-2 md:border-4 ${
                  room.popular ? 'border-orange-500 transform hover:-translate-y-1 md:hover:-translate-y-3' : 'border-orange-200 hover:border-orange-400'
                } overflow-hidden group`}
              >
                {room.popular && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:py-4 px-4 md:px-6 text-center font-bold text-sm md:text-lg">
                    ⭐ {room.badge}
                  </div>
                )}
                
                <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
                  <img
                    src={room.images[0]}
                    alt={`${room.name} - Radhika Sadan Vrindavan`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black bg-opacity-60 text-white px-2 py-1 md:px-3 md:py-2 rounded-full text-xs md:text-sm font-bold">
                    {room.discount}
                  </div>
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs md:text-sm font-bold">
                    🛕 Temple Nearby
                  </div>
                </div>

                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-3 md:mb-4 gap-2 md:gap-0">
                    <div className="flex-1">
                      <div className="text-2xl md:text-3xl mb-1 md:mb-2">{room.icon}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{room.name}</h3>
                      <p className="text-gray-600 text-sm md:text-lg leading-relaxed">{room.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline gap-1 md:gap-2 mb-1">
                        <span className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-600">{room.displayPrice}</span>
                        <span className="text-sm md:text-lg text-gray-400 line-through">{room.originalPrice}</span>
                      </div>
                      <span className="text-xs md:text-sm text-gray-500">per night</span>
                      <div className="text-green-600 font-bold text-xs md:text-sm mt-1">
                        Advance: ₹{room.advanceDiscount} (10% OFF)
                      </div>
                    </div>
                  </div>
                  
                  {/* Room Details */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 mb-3 md:mb-6 text-gray-600 text-sm md:text-base">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-orange-500" />
                      <span className="font-semibold">{room.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-base md:text-lg mr-2 md:mr-3">📐</span>
                      <span className="font-semibold">{room.size}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-base md:text-lg mr-2 md:mr-3">🌄</span>
                      <span className="font-semibold">{room.view}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-base md:text-lg mr-2 md:mr-3">🛕</span>
                      <span className="font-semibold">Temple Walk</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-3 md:mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">Room Features:</h4>
                    <div className="grid grid-cols-2 gap-1 md:gap-2">
                      {room.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700 text-xs md:text-sm">
                          <span className="text-green-500 mr-1 md:mr-2 text-sm md:text-lg">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                    <button
                      onClick={() => handlePayment(room)}
                      className={`flex-1 py-2 md:py-3 lg:py-4 px-3 md:px-4 lg:px-6 rounded-xl font-bold text-sm md:text-base lg:text-lg transition-all duration-300 hover:scale-105 ${
                        room.popular
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
                          : 'bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white'
                      }`}
                    >
                      Pay Advance - ₹{room.advanceDiscount}
                    </button>
                    <button
                      onClick={() => handleQuickBooking(room)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 md:py-3 lg:py-4 px-3 md:px-4 lg:px-6 rounded-xl font-bold text-sm md:text-base lg:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1 md:gap-2"
                    >
                      <MessageCircle className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === AMENITIES SECTION - Mobile Optimized === */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Guest House Amenities
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Everything you need for comfortable pilgrimage in holy Vrindavan
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 border-2 border-orange-200 group"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 lg:mb-6 text-center group-hover:scale-110 transition-transform duration-300">{amenity.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4 text-center">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg text-center leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === LOCATION SECTION - Mobile Optimized === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Prime Vrindavan Location
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Walking distance to all major temples and spiritual centers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 overflow-hidden border border-orange-200 p-4 md:p-6 lg:p-8">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{attraction.name}</h3>
                  <span className="bg-green-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
                    {attraction.distance}
                  </span>
                </div>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-4">{attraction.description}</p>
                <div className="flex items-center text-orange-600 font-semibold text-xs md:text-sm">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 mr-1 md:mr-2" />
                  <span>Walking distance from Radhika Sadan</span>
                </div>
              </div>
            ))}
          </div>

          {/* Location Summary */}
          <div className="mt-8 md:mt-12 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 border border-orange-200">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-4 md:mb-6">
              🛕 Best Located Guest House in Vrindavan
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 text-center">
              <div className="bg-white p-2 md:p-3 lg:p-4 rounded-xl md:rounded-2xl border border-orange-200">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">🚶‍♂️</div>
                <div className="font-bold text-gray-900 text-sm md:text-base">3 min walk</div>
                <div className="text-xs md:text-sm text-gray-600">to Banke Bihari</div>
              </div>
              <div className="bg-white p-2 md:p-3 lg:p-4 rounded-xl md:rounded-2xl border border-orange-200">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">🚶‍♀️</div>
                <div className="font-bold text-gray-900 text-sm md:text-base">5 min walk</div>
                <div className="text-xs md:text-sm text-gray-600">to Prem Mandir</div>
              </div>
              <div className="bg-white p-2 md:p-3 lg:p-4 rounded-xl md:rounded-2xl border border-orange-200">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">🚶‍♂️</div>
                <div className="font-bold text-gray-900 text-sm md:text-base">8 min walk</div>
                <div className="text-xs md:text-sm text-gray-600">to ISKCON</div>
              </div>
              <div className="bg-white p-2 md:p-3 lg:p-4 rounded-xl md:rounded-2xl border border-orange-200">
                <div className="text-xl md:text-2xl mb-1 md:mb-2">🛣️</div>
                <div className="font-bold text-gray-900 text-sm md:text-base">2 min walk</div>
                <div className="text-xs md:text-sm text-gray-600">to Parikrama</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FEATURES SECTION - Mobile Optimized === */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Why Choose Radhika Sadan?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">Experience divine hospitality and traditional comfort in Vrindavan</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center group p-4 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl lg:rounded-3xl hover:bg-orange-50 hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 border border-orange-200"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 md:p-3 lg:p-4 rounded-xl md:rounded-2xl w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-3 md:mb-4 lg:mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 lg:mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA - Mobile Optimized === */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready for Divine Experience?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-orange-100 leading-relaxed px-2">
            Book your stay at Radhika Sadan - Best location in Vrindavan
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <button
              onClick={() => handlePayment(rooms[0])}
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-orange-600 px-6 py-3 md:px-8 md:py-4 rounded-xl text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 md:gap-3 shadow-2xl"
            >
              <span>🏩 Book Now from ₹999</span>
            </button>
            <button
              onClick={() => handleQuickBooking(rooms[0])}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 md:gap-3 shadow-2xl"
            >
              <MessageCircle className="h-4 w-4 md:h-6 md:w-6" />
              <span>WhatsApp Booking</span>
            </button>
            <a
              href="tel:+919286755109"
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-xl text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 md:gap-3 shadow-2xl"
            >
              <Phone className="h-4 w-4 md:h-6 md:w-6" />
              <span>Call Now</span>
            </a>
          </div>
          
          <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-orange-200 text-xs md:text-sm">
            <div className="flex items-center justify-center gap-1 md:gap-2">
              <span>🛕</span>
              <span>Banke Bihari 3min</span>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2">
              <span>💫</span>
              <span>Prem Mandir 5min</span>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2">
              <span>🌟</span>
              <span>ISKCON 8min</span>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2">
              <span>🛣️</span>
              <span>Parikrama 2min</span>
            </div>
          </div>
          
          <p className="text-orange-200 mt-6 md:mt-8 text-base md:text-xl flex items-center justify-center gap-2 md:gap-3">
            <Heart className="h-4 w-4 md:h-6 md:w-6" />
            <span>Jai Shri Radhe Krishna - Welcome to Vrindavan Dham!</span>
          </p>
        </div>
      </section>

      {/* Booking Form Modal - Mobile Optimized */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
          <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border-2 border-orange-400">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">🏩 Complete Your Booking</h3>
              <button
                onClick={() => {
                  setShowBookingForm(false);
                  setPaymentSuccess(false);
                }}
                className="text-gray-500 hover:text-gray-700 text-lg md:text-xl"
              >
                ✕
              </button>
            </div>
            
            {paymentSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-3 py-2 md:px-4 md:py-3 rounded-xl mb-4 md:mb-6 text-base md:text-lg">
                ✅ Payment Successful! Please submit your booking details.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-base md:text-lg font-medium text-gray-700 mb-1 md:mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base md:text-lg"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-base md:text-lg font-medium text-gray-700 mb-1 md:mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base md:text-lg"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-base md:text-lg font-medium text-gray-700 mb-1 md:mb-2">Mobile *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base md:text-lg"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-base md:text-lg font-medium text-gray-700 mb-1 md:mb-2">Check-in *</label>
                  <input
                    type="date"
                    name="checkin"
                    value={formData.checkin}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base md:text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-base md:text-lg font-medium text-gray-700 mb-1 md:mb-2">Check-out *</label>
                  <input
                    type="date"
                    name="checkout"
                    value={formData.checkout}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base md:text-lg"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-base md:text-lg font-medium text-gray-700 mb-1 md:mb-2">Number of Guests *</label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base md:text-lg"
                  placeholder="2"
                />
              </div>
              
              <div>
                <label className="block text-base md:text-lg font-medium text-gray-700 mb-1 md:mb-2">Special Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base md:text-lg resize-none"
                  placeholder="Any special requirements, food preferences, temple visit plans, etc."
                />
              </div>
              
              {selectedRoom && (
                <div className="bg-orange-50 p-3 md:p-4 rounded-xl border border-orange-200">
                  <p className="text-base md:text-lg font-medium text-gray-700">Selected Room:</p>
                  <p className="text-lg md:text-xl font-bold text-orange-600">{selectedRoom.name}</p>
                  <p className="text-base md:text-lg text-orange-600">Amount Paid: ₹{selectedRoom.advanceDiscount}</p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">📍 Location: Near Banke Bihari Temple, Vrindavan</p>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 md:py-4 px-4 md:px-6 rounded-xl font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105"
              >
                🏩 Complete Booking
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Home;
