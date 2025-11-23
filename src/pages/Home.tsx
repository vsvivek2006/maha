import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Star, MapPin, Users, Wifi, Car, Utensils, Heart, Shield, Check, ArrowRight } from "lucide-react";

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

  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_YOUR_KEY_HERE";

  // Beautiful Mathura Vrindavan themed hero images with SEO keywords
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Radhika Sadan Guest House Vrindavan",
      subtitle: "Divine Stay Near Banke Bihari Temple",
      description: "Best budget hotel in Vrindavan near Prem Mandir, ISKCON, and Parikrama Marg. AC/Non-AC rooms with modern amenities for pilgrims.",
      badge: "🏩 Starting at ₹999/Night",
      cta: "Book Your Spiritual Stay"
    },
    {
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Comfort Near All Temples",
      subtitle: "Walking Distance to Prem Mandir & ISKCON",
      description: "Perfect location for international pilgrims. Stay close to Banke Bihari, Prem Mandir, ISKCON Vrindavan, and all major spiritual centers.",
      badge: "🛕 Perfect Pilgrim Accommodation",
      cta: "View Our Rooms"
    },
    {
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Traditional Braj Hospitality",
      subtitle: "Pure Vegetarian Food & Modern Comfort",
      description: "Experience authentic Vrindavan culture with satvik meals, comfortable rooms, and warm hospitality. Ideal for foreign tourists and Indian pilgrims.",
      badge: "🍴 Authentic Braj Cuisine",
      cta: "Check Availability"
    }
  ];

  // Rooms with beautiful images and SEO descriptions
  const rooms = [
    {
      id: "standard_non_ac",
      name: "Standard Non-AC Room Vrindavan",
      price: 999,
      displayPrice: "₹999",
      originalPrice: "₹1299",
      discount: "23% OFF",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Affordable non-AC room near Banke Bihari Temple Vrindavan. Perfect budget accommodation for pilgrims visiting Prem Mandir and ISKCON.",
      features: ["Double Bed", "Attached Bathroom", "24/7 Hot Water", "Free WiFi", "Daily Housekeeping", "Temple View"],
      capacity: "2 Adults",
      size: "120 sq ft",
      view: "Temple View",
      popular: true,
      badge: "Most Popular",
      icon: "🛌",
      seoKeywords: ["budget hotel vrindavan", "cheap rooms near banke bihari", "non ac room vrindavan"]
    },
    {
      id: "deluxe_ac",
      name: "Deluxe AC Room Vrindavan",
      price: 1499,
      displayPrice: "₹1,499",
      originalPrice: "₹1999",
      discount: "25% OFF",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Spacious AC room near Prem Mandir Vrindavan. Modern amenities with traditional decor, perfect for international tourists and families.",
      features: ["King Size Bed", "Attached Bathroom", "Air Conditioning", "24/7 Hot Water", "Free WiFi", "TV", "Sitting Area"],
      capacity: "2 Adults + 1 Child",
      size: "180 sq ft",
      view: "Garden View",
      popular: false,
      badge: "Best Value",
      icon: "❄️",
      seoKeywords: ["ac room vrindavan", "prem mandir nearby hotel", "family room vrindavan"]
    },
    {
      id: "family_suite",
      name: "Family Suite Vrindavan",
      price: 1999,
      displayPrice: "₹1,999",
      originalPrice: "₹2599",
      discount: "23% OFF",
      images: [
        "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Luxurious family suite near ISKCON Vrindavan. Spacious accommodation for group pilgrims and international visitors to Mathura Vrindavan.",
      features: ["Double Bed + Single Bed", "Attached Bathroom", "Air Conditioning", "Living Area", "Free WiFi", "TV", "Mini Fridge"],
      capacity: "3 Adults",
      size: "250 sq ft",
      view: "Temple View",
      popular: true,
      badge: "Family Favorite",
      icon: "👨‍👩‍👧‍👦",
      seoKeywords: ["family hotel vrindavan", "iskcon nearby accommodation", "group pilgrimage stay"]
    },
    {
      id: "premium_ac",
      name: "Premium AC Room Vrindavan",
      price: 1799,
      displayPrice: "₹1,799",
      originalPrice: "₹2299",
      discount: "22% OFF",
      images: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Premium AC accommodation near Parikrama Marg Vrindavan. Elegant rooms with modern facilities for comfortable pilgrimage experience.",
      features: ["King Size Bed", "Attached Bathroom", "Air Conditioning", "Work Desk", "Free WiFi", "TV", "Premium Toiletries"],
      capacity: "2 Adults",
      size: "200 sq ft",
      view: "City View",
      popular: false,
      badge: "Luxury Choice",
      icon: "⭐",
      seoKeywords: ["premium hotel vrindavan", "parikrama marg accommodation", "luxury stay mathura vrindavan"]
    }
  ];

  // Amenities with icons and SEO descriptions
  const amenities = [
    { 
      icon: "🅿️", 
      title: "Free Parking", 
      description: "Secure parking space for cars and two-wheelers - perfect for pilgrims driving to Vrindavan" 
    },
    { 
      icon: "🍴", 
      title: "Pure Vegetarian Food", 
      description: "Delicious satvik meals - authentic Braj cuisine for international and Indian guests" 
    },
    { 
      icon: "📶", 
      title: "Free WiFi", 
      description: "High-speed internet throughout property - stay connected during your pilgrimage" 
    },
    { 
      icon: "🚿", 
      title: "24/7 Hot Water", 
      description: "Continuous hot water supply - essential comfort after temple visits" 
    },
    { 
      icon: "🛕", 
      title: "Temple Proximity", 
      description: "Walking distance to Banke Bihari, Prem Mandir, ISKCON - best location in Vrindavan" 
    },
    { 
      icon: "🧹", 
      title: "Daily Housekeeping", 
      description: "Regular cleaning and maintenance - hygienic stay standards maintained" 
    }
  ];

  // Updated nearby attractions with exact walking distances and SEO descriptions
  const nearbyAttractions = [
    { 
      name: "Banke Bihari Temple", 
      distance: "3 min walk", 
      description: "Most sacred and famous temple in Vrindavan - divine darshan within walking distance",
      image: "https://images.unsplash.com/photo-1587132135055-47c8d67cf3e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      seoKeywords: ["banke bihari temple nearby", "vrindavan darshan accommodation", "thakur ji darshan stay"]
    },
    { 
      name: "Prem Mandir Vrindavan", 
      distance: "5 min walk", 
      description: "Beautiful marble temple with spectacular light shows - closest premium accommodation",
      image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      seoKeywords: ["prem mandir nearby hotel", "vrindavan marble temple stay", "radha krishna temple accommodation"]
    },
    { 
      name: "ISKCON Temple (Sri Sri Krishna Balaram Mandir)", 
      distance: "8 min walk", 
      description: "International Society for Krishna Consciousness - spiritual center for global devotees",
      image: "https://images.unsplash.com/photo-1548913344-66177da94287?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      seoKeywords: ["iskcon vrindavan nearby stay", "international pilgrims accommodation", "krishna balaram mandir hotel"]
    },
    { 
      name: "Parikrama Marg Vrindavan", 
      distance: "2 min walk", 
      description: "Sacred walking path around Vrindavan - perfect for morning and evening spiritual walks",
      image: "https://images.unsplash.com/photo-1587132135055-47c8d67cf3e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      seoKeywords: ["parikrama marg accommodation", "vrindavan circumambulation path", "spiritual walking stay"]
    },
    { 
      name: "Gouri Gopal Vraddhashram", 
      distance: "4 min walk", 
      description: "Peaceful meditation and bhajan ashram - serene spiritual atmosphere nearby",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsggg.in%2F&psig=AOvVaw0dm6tbRsVoHBZthzFyw8jT&ust=1763956257218000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPiJ96Ovh5EDFQAAAAAdAAAAABAE",
      seoKeywords: ["gouri gopal vraddhashram nearby", "meditation stay vrindavan", "bhajan ashram accommodation"]
    },
    { 
      name: "premanand ji maharaj ashram", 
      distance: "3 min walk", 
      description: "Famous spiritual center and ashram - divine blessings and satsang nearby",
      image: "https://images.unsplash.com/photo-1548913344-66177da94287?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      seoKeywords: ["premanand ji maharaj ashram", "spiritual center vrindavan", "satsang accommodation"]
    }
  ];

  // Features highlights with SEO focus
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Secure",
      description: "24/7 security and CCTV surveillance - safe accommodation for international tourists and families"
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "Hygienic Stay",
      description: "Regular sanitization and strict cleanliness standards - premium hygiene for comfortable pilgrimage"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Spiritual Atmosphere",
      description: "Perfect environment for meditation and bhajan - authentic Vrindavan spiritual experience"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Premium Service",
      description: "Multilingual staff serving international pilgrims - dedicated service for global devotees"
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
        amount: formatAmount(room.price),
        currency: 'INR',
        name: 'Radhika Sadan Guest House Vrindavan',
        description: `Booking for ${room.name} near Banke Bihari Temple`,
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
    
    const message = `🏩 *Radhika Sadan Vrindavan - Booking Confirmation*\n\n*Room:* ${selectedRoom.name}\n*Amount Paid:* ${selectedRoom.displayPrice}\n\n*Guest Details:*\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nGuests: ${formData.guests}\nSpecial Request: ${formData.message || "None"}\n\n*Location:* Near Banke Bihari Temple, Vrindavan\nBooking Time: ${new Date().toLocaleString()}`;
    
    const whatsappUrl = `https://wa.me/917044755109?text=${encodeURIComponent(message)}`;
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
    const whatsappUrl = `https://wa.me/917044755109?text=${encodeURIComponent(message)}`;
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
          content="Radhika Sadan Guest House - Premium accommodation in Vrindavan near Banke Bihari Temple, Prem Mandir & ISKCON. AC/Non-AC rooms from ₹999. Walking distance to all major temples. Book online with secure payment."
        />
        <meta 
          name="keywords" 
          content="vrindavan guest house, banke bihari temple accommodation, prem mandir nearby hotel, iskcon vrindavan stay, mathura vrindavan hotel, budget accommodation vrindavan, pilgrimage stay, spiritual accommodation, radhika sadan vrindavan, parikrama marg hotel"
        />
        <meta property="og:title" content="Radhika Sadan Vrindavan - Best Guest House Near All Temples" />
        <meta property="og:description" content="Premium accommodation in Vrindavan walking distance to Banke Bihari Temple, Prem Mandir, ISKCON. AC/Non-AC rooms from ₹999." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://radhikasadan.com/" />
      </Helmet>

      {/* === HERO SECTION WITH BEAUTIFUL IMAGES === */}
      <section className="relative h-screen overflow-hidden">
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
            
            <div className="relative h-full flex items-center justify-center text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                {/* Badge */}
                <div className={`inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-full text-lg font-bold mb-8 ${
                  index === currentSlide ? 'animate-bounce' : ''
                }`}>
                  {slide.badge}
                </div>

                {/* Main Title */}
                <div className="mb-8">
                  <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 ${
                    index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                  }`} style={{ fontFamily: '"Playfair Display", serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    {slide.title}
                  </h1>
                  
                  {/* Subtitle */}
                  <div className={`mb-8 ${
                    index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                  }`}>
                    <span className="text-3xl md:text-5xl lg:text-6xl text-yellow-300 block mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                      {slide.subtitle}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white leading-relaxed ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`} style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  {slide.description}
                </p>
                
                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  <button
                    onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-2xl"
                  >
                    <span>🏩 {slide.cta}</span>
                  </button>
                  <button
                    onClick={() => handleQuickBooking(rooms[0])}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-2xl"
                  >
                    <MessageCircle className="h-6 w-6" />
                    <span>WhatsApp Booking</span>
                  </button>
                </div>

                {/* Location Highlights */}
                <div className={`mt-8 flex flex-wrap justify-center gap-4 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  <span className="bg-green-600 bg-opacity-80 text-white px-4 py-2 rounded-full text-sm font-bold">
                    🛕 3 min to Banke Bihari
                  </span>
                  <span className="bg-blue-600 bg-opacity-80 text-white px-4 py-2 rounded-full text-sm font-bold">
                    💫 5 min to Prem Mandir
                  </span>
                  <span className="bg-purple-600 bg-opacity-80 text-white px-4 py-2 rounded-full text-sm font-bold">
                    🌟 8 min to ISKCON
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* === ROOMS SECTION === */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Best Rooms in Vrindavan Near Temples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comfortable accommodation walking distance to Banke Bihari Temple, Prem Mandir, ISKCON Vrindavan and all major spiritual centers
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                🛕 Closest to Banke Bihari
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                💫 Near Prem Mandir
              </span>
              <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                🌟 ISKCON Walking Distance
              </span>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                🔥 10% Advance Discount
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {rooms.slice(0, 2).map((room, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 ${
                  room.popular ? 'border-orange-500 transform hover:-translate-y-3' : 'border-orange-200 hover:border-orange-400'
                } overflow-hidden group`}
              >
                {room.popular && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 text-center font-bold text-lg">
                    ⭐ {room.badge}
                  </div>
                )}
                
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={room.images[0]}
                    alt={`${room.name} - Radhika Sadan Vrindavan`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-2 rounded-full text-sm font-bold">
                    {room.discount}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    🛕 Temple Nearby
                  </div>
                </div>

                <div className="p-8">
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
                  
                  {/* Room Details */}
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
                      <span className="text-lg mr-3">🛕</span>
                      <span className="font-semibold">Temple Walk</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Room Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <span className="text-green-500 mr-2 text-lg">✓</span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => handlePayment(room)}
                      className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                        room.popular
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
                          : 'bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white'
                      }`}
                    >
                      Pay Now - {room.displayPrice}
                    </button>
                    <button
                      onClick={() => handleQuickBooking(room)}
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

          {/* View More Rooms Button */}
          <div className="text-center">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>View All Vrindavan Rooms</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* === AMENITIES SECTION === */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Guest House Amenities Vrindavan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for comfortable pilgrimage in holy Vrindavan - perfect for international tourists and Indian devotees
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-orange-200 group"
              >
                <div className="text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">{amenity.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-lg text-center leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === LOCATION SECTION === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Prime Vrindavan Location - Walking Distance to All Temples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Best location in Vrindavan - closest accommodation to Banke Bihari Temple, Prem Mandir, ISKCON and all spiritual centers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-orange-200">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={`${attraction.name} - Near Radhika Sadan Vrindavan`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {attraction.distance}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{attraction.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  <div className="flex items-center text-orange-600 font-semibold">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Walking distance from Radhika Sadan</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Location Summary */}
          <div className="mt-12 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-8 border border-orange-200">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
              🛕 Best Located Guest House in Vrindavan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-4 rounded-2xl border border-orange-200">
                <div className="text-2xl mb-2">🚶‍♂️</div>
                <div className="font-bold text-gray-900">3 min walk</div>
                <div className="text-sm text-gray-600">to Banke Bihari Temple</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-orange-200">
                <div className="text-2xl mb-2">🚶‍♀️</div>
                <div className="font-bold text-gray-900">5 min walk</div>
                <div className="text-sm text-gray-600">to Prem Mandir</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-orange-200">
                <div className="text-2xl mb-2">🚶‍♂️</div>
                <div className="font-bold text-gray-900">8 min walk</div>
                <div className="text-sm text-gray-600">to ISKCON Temple</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-orange-200">
                <div className="text-2xl mb-2">🛣️</div>
                <div className="font-bold text-gray-900">2 min walk</div>
                <div className="text-sm text-gray-600">to Parikrama Marg</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FEATURES SECTION === */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Radhika Sadan Vrindavan?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience divine hospitality and traditional comfort in the holy land of Vrindavan - perfect for international pilgrims and Indian devotees</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center group p-8 bg-white rounded-3xl hover:bg-orange-50 hover:shadow-2xl transition-all duration-300 border border-orange-200"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready for Divine Vrindavan Experience?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
            Book your stay at Radhika Sadan - Best location in Vrindavan near Banke Bihari Temple, Prem Mandir & ISKCON
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handlePayment(rooms[0])}
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <span>🏩 Book Now from ₹999</span>
            </button>
            <button
              onClick={() => handleQuickBooking(rooms[0])}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <MessageCircle className="h-6 w-6" />
              <span>WhatsApp Booking</span>
            </button>
            <a
              href="tel:+917044755109"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <Phone className="h-6 w-6" />
              <span>Call Now</span>
            </a>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-orange-200">
            <div className="flex items-center justify-center gap-2">
              <span>🛕</span>
              <span className="text-sm">Banke Bihari 3min</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>💫</span>
              <span className="text-sm">Prem Mandir 5min</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>🌟</span>
              <span className="text-sm">ISKCON 8min</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>🛣️</span>
              <span className="text-sm">Parikrama 2min</span>
            </div>
          </div>
          
          <p className="text-orange-200 mt-8 text-xl flex items-center justify-center gap-3">
            <Heart className="h-6 w-6" />
            <span>Jai Shri Radhe Krishna - Welcome to Vrindavan Dham!</span>
          </p>
        </div>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border-2 border-orange-400">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">🏩 Complete Your Vrindavan Booking</h3>
              <button
                onClick={() => {
                  setShowBookingForm(false);
                  setPaymentSuccess(false);
                }}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>
            
            {paymentSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-6 text-lg">
                ✅ Payment Successful! Please submit your booking details.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">Mobile *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">Check-in *</label>
                  <input
                    type="date"
                    name="checkin"
                    value={formData.checkin}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">Check-out *</label>
                  <input
                    type="date"
                    name="checkout"
                    value={formData.checkout}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Number of Guests *</label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  placeholder="2"
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Special Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg resize-none"
                  placeholder="Any special requirements, food preferences, temple visit plans, etc."
                />
              </div>
              
              {selectedRoom && (
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                  <p className="text-lg font-medium text-gray-700">Selected Room:</p>
                  <p className="text-xl font-bold text-orange-600">{selectedRoom.name}</p>
                  <p className="text-lg text-orange-600">Amount Paid: {selectedRoom.displayPrice}</p>
                  <p className="text-sm text-gray-600 mt-2">📍 Location: Near Banke Bihari Temple, Vrindavan</p>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 px-6 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105"
              >
                🏩 Complete Vrindavan Booking
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