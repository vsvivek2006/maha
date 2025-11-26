import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Star, Heart, Calendar, Users, Navigation } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '',
    checkin: '',
    checkout: '',
    roomType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `🏩 *Radhika Sadan - Room Booking Inquiry*

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Number of Guests:* ${formData.guests}
*Check-in Date:* ${formData.checkin}
*Check-out Date:* ${formData.checkout}
*Room Type:* ${formData.roomType}
*Special Request:* ${formData.message}

Hello! I would like to book a room at Radhika Sadan Guest House near Prikarma Marg and Paramhans Ji Maharaj. Please share available rooms and rates.`;

    const whatsappUrl = `https://wa.me/919286759109?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const roomTypes = [
    'AC Room',
    'Non-AC Room',
    'Deluxe Room',
    'Family Suite',
    'Not Sure - Need Recommendation'
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 md:h-6 md:w-6" />,
      title: 'Phone / WhatsApp',
      content: '+91 92867 59109',
      link: 'tel:+919286759109'
    },
    {
      icon: <Mail className="h-5 w-5 md:h-6 md:w-6" />,
      title: 'Email',
      content: 'bookings@radhikasadan.com',
      link: 'mailto:bookings@radhikasadan.com'
    },
    {
      icon: <MapPin className="h-5 w-5 md:h-6 md:w-6" />,
      title: 'Prime Location',
      content: 'Near Prikarma Marg, premanand ji maharaj ashram, Gouri Gopal Vraddhashram, Vrindavan',
      link: '#'
    },
    {
      icon: <Clock className="h-5 w-5 md:h-6 md:w-6" />,
      title: 'Check-in / Check-out',
      content: '24/7 - Flexible timings',
      link: '#'
    }
  ];

  const nearbyAttractions = [
    {
      name: 'Prikarma Marg',
      distance: '2 minutes walk',
      description: 'Main parikrama path for spiritual walking'
    },
    {
      name: 'premanand ji maharaj ashram',
      distance: '3 minutes walk',
      description: 'Famous spiritual center and temple'
    },
    {
      name: 'Gouri Gopal Vraddhashram',
      distance: '5 minutes walk',
      description: 'Peaceful ashram for meditation'
    },
    {
      name: 'Banke Bihari Temple',
      distance: '8 minutes walk',
      description: 'Most famous temple in Vrindavan'
    },
    {
      name: 'ISKCON Temple',
      distance: '10 minutes',
      description: 'International Society for Krishna Consciousness'
    },
    {
      name: 'Prem Mandir',
      distance: '12 minutes',
      description: 'Beautiful marble temple with light shows'
    }
  ];

  const amenities = [
    {
      icon: '🛌',
      title: 'Comfortable Beds',
      description: 'Orthopedic mattresses for restful sleep'
    },
    {
      icon: '🚿',
      title: '24x7 Hot Water',
      description: 'Continuous hot water supply'
    },
    {
      icon: '📶',
      title: 'Free WiFi',
      description: 'High-speed internet access'
    },
    {
      icon: '🅿️',
      title: 'Car Parking',
      description: 'Secure parking space available'
    },
    {
      icon: '🍴',
      title: 'Pure Vegetarian Food',
      description: 'Hygienic & delicious meals'
    },
    {
      icon: '🙏',
      title: 'Spiritual Atmosphere',
      description: 'Perfect for meditation and bhajan'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* ✅ SEO Component */}
      <Helmet>
        <title>Radhika Sadan | Book Guest House Near Prikarma Marg, Paramhans Ji Maharaj, Gauranga Ashram Vrindavan</title>
        <meta
          name="description"
          content="Radhika Sadan Guest House - Premium accommodation near Prikarma Marg, Paramhans Ji Maharaj & Gauranga Ashram in Vrindavan. Book AC/Non-AC rooms with best rates. Walking distance to all major temples."
        />
        <meta
          name="keywords"
          content="Radhika Sadan, Prikarma Marg Vrindavan, Paramhans Ji Maharaj guest house, Gauranga Ashram stay, Banke Bihari temple accommodation, Mathura Vrindavan hotel, budget stay near parikrama marg, family guest house Vrindavan, spiritual retreat Mathura, pilgrim accommodation near gauranga ashram"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://radhikasadan.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Radhika Sadan - Premium Guest House Near Prikarma Marg & Paramhans Ji Maharaj, Vrindavan" />
        <meta property="og:description" content="Book your stay at Radhika Sadan Guest House near Prikarma Marg, Paramhans Ji Maharaj & Gauranga Ashram. Best location in Vrindavan with all modern amenities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radhikasadan.com/contact" />
        <meta property="og:image" content="https://radhikasadan.com/og-image.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Radhika Sadan Guest House",
            "url": "https://radhikasadan.com",
            "description": "Premium Guest House near Prikarma Marg, Paramhans Ji Maharaj and Gauranga Ashram in Vrindavan",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near Prikarma Marg, Paramhans Ji Maharaj",
              "addressLocality": "Vrindavan",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "281121",
              "addressCountry": "IN"
            },
            "telephone": "+919286759109",
            "email": "bookings@radhikasadan.com",
            "amenityFeature": [
              "AirConditioning",
              "FreeWifi",
              "Parking",
              "24HourFrontDesk",
              "Restaurant"
            ],
            "checkinTime": "12:00 PM",
            "checkoutTime": "11:00 AM",
            "areaServed": "Vrindavan Mathura"
          })}
        </script>
      </Helmet>
      
      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white text-orange-600 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-bold mb-6 md:mb-8 animate-pulse">
              🏩 Best Location in Vrindavan - Near Prikarma Marg
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Stay in <span className="text-yellow-300">Heart of Vrindavan</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-yellow-100 px-2">
              Radhika Sadan - Your perfect pilgrimage stay near Prikarma Marg, Paramhans Ji Maharaj, and Gauranga Ashram
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2">
              <a
                href="https://wa.me/919286759109?text=Hello Radhika Sadan, I want to book a room near Prikarma Marg and Paramhans Ji Maharaj in Vrindavan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                <span>WhatsApp Booking</span>
              </a>
              <a
                href="tel:+919286759109"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-orange-600 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
                <span>Call: +91 92867 59109</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Perfect Location for Spiritual Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-2">
              Situated in the most convenient area of Vrindavan - walking distance to all sacred places
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-orange-50 p-4 md:p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-base md:text-lg">{attraction.name}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium ml-2">
                    {attraction.distance}
                  </span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">{attraction.description}</p>
                <div className="flex items-center mt-2 text-orange-600 text-xs md:text-sm">
                  <Navigation className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  <span>Walking distance from Radhika Sadan</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Comfortable Stay with Modern Amenities
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-2">
              Everything you need for a peaceful and comfortable pilgrimage
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center p-4 md:p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="text-2xl md:text-3xl mb-3 md:mb-4">{amenity.icon}</div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Booking Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                Book Your Stay Near Prikarma Marg
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                Fill this form to book your room at Radhika Sadan - the best located guest house near Prikarma Marg, Paramhans Ji Maharaj, and Gauranga Ashram.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-orange-50 p-4 md:p-6 lg:p-8 rounded-xl shadow-lg">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 pl-10 md:pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
                        placeholder="2"
                        min="1"
                      />
                      <Users className="h-4 w-4 md:h-5 md:w-5 text-gray-400 absolute left-3 md:left-4 top-2.5 md:top-3" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
                      Room Type Preferred
                    </label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
                    >
                      <option value="">Select room type</option>
                      {roomTypes.map((roomType, index) => (
                        <option key={index} value={roomType}>
                          {roomType}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="checkin"
                        name="checkin"
                        value={formData.checkin}
                        onChange={handleChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 pl-10 md:pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
                      />
                      <Calendar className="h-4 w-4 md:h-5 md:w-5 text-gray-400 absolute left-3 md:left-4 top-2.5 md:top-3" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="checkout"
                        name="checkout"
                        value={formData.checkout}
                        onChange={handleChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 pl-10 md:pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
                      />
                      <Calendar className="h-4 w-4 md:h-5 md:w-5 text-gray-400 absolute left-3 md:left-4 top-2.5 md:top-3" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base resize-none"
                    placeholder="Any special requirements, parikrama plans, food preferences, meditation needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="h-4 w-4 md:h-5 md:w-5" />
                  <span>Check Availability & Book Now</span>
                </button>

                <p className="text-xs md:text-sm text-gray-500 text-center">
                  Perfect location near Prikarma Marg & Paramhans Ji Maharaj - Instant WhatsApp confirmation
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                Contact Radhika Sadan
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                Get the best pilgrimage experience in Vrindavan with our prime location and comfortable stay
              </p>

              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-orange-100">
                    <div className="bg-orange-100 text-orange-600 p-2 md:p-3 rounded-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{info.title}</h3>
                      {info.link !== '#' ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-orange-600 transition-colors text-sm md:text-base break-words"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm md:text-base break-words">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Location Banner */}
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 md:p-6 rounded-xl mb-6 md:mb-8 shadow-lg">
                <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 flex items-center">
                  <Navigation className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Prime Vrindavan Location
                </h3>
                <p className="text-gray-900 text-xs md:text-sm leading-relaxed">
                  🎯 <strong>Prikarma Marg:</strong> 2 minutes walking distance
                  <br />
                  ⚡ <strong>premanand ji maharaj ashram:</strong> 3 minutes walking distance
                  <br />
                  🙏 <strong>Gouri Gopal Vraddhashram:</strong> 5 minutes walking distance
                  <br />
                  🏛️ <strong>Banke Bihari Temple:</strong> 8 minutes walking distance
                </p>
              </div>

              {/* Spiritual Experience */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 md:p-6 rounded-xl mb-6 md:mb-8 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                  <Star className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Perfect for Spiritual Activities
                </h3>
                <div className="space-y-1 md:space-y-2 text-purple-700 text-xs md:text-sm">
                  <div className="flex items-start space-x-2">
                    <span>•</span>
                    <span>Early morning parikrama on Prikarma Marg</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span>•</span>
                    <span>Darshan at premanand ji maharaj ashram</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span>•</span>
                    <span>Meditation at Gouri Gopal Vraddhashram</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span>•</span>
                    <span>Banke Bihari Temple prayers</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-orange-100">
                <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Follow Our Spiritual Journey</h3>
                <div className="flex space-x-3 md:space-x-4">
                  <a
                    href="https://wa.me/919286759109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-2 md:p-3 rounded-lg transition-all hover:scale-110"
                    title="WhatsApp Booking"
                  >
                    <MessageCircle className="h-4 w-4 md:h-6 md:w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/radhikasadan_vrindavan/"
                    className="bg-pink-500 hover:bg-pink-600 text-white p-2 md:p-3 rounded-lg transition-all hover:scale-110"
                    title="Instagram"
                  >
                    <Instagram className="h-4 w-4 md:h-6 md:w-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/radhikasadanprikarmamarg/"
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-lg transition-all hover:scale-110"
                    title="Facebook"
                  >
                    <Facebook className="h-4 w-4 md:h-6 md:w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready for Divine Experience?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-orange-100 px-2">
            Book your stay at Radhika Sadan - Best location near Prikarma Marg, premanand ji maharaj ashram & Gouri Gopal Vraddhashram
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://wa.me/919286759109?text=Hello Radhika Sadan, I want to book a room near Prikarma Marg and Paramhans Ji Maharaj in Vrindavan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              <span>Book via WhatsApp</span>
            </a>
            <a
              href="tel:+919286759109"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-orange-600 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              <span>Call: +91 92867 59109</span>
            </a>
          </div>
          <p className="text-orange-200 mt-6 md:mt-8 text-base md:text-lg flex items-center justify-center space-x-2">
            <Heart className="h-4 w-4 md:h-5 md:w-5" />
            <span>Jai Shri Radhe Krishna - Welcome to the Holy Land of Vrindavan!</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;