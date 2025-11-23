import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Star, Users, Heart, Shield, Clock, Award } from "lucide-react";

const About = () => {
  // Team members
  const teamMembers = [
    {
      name: "Shri Krishna Das Ji",
      role: "Founder & Manager",
      experience: "15+ years in hospitality",
      description: "Spiritual guide and hospitality expert dedicated to serving pilgrims in Vrindavan",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Radha Rani Sharma",
      role: "Head of Housekeeping",
      experience: "12+ years experience",
      description: "Ensures pristine cleanliness and comfortable stay for all our guests",
      image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Gopal Singh",
      role: "Guest Relations Manager",
      experience: "10+ years in service",
      description: "Your personal guide for temple visits and spiritual activities in Vrindavan",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Values and principles
  const values = [
    {
      icon: "🙏",
      title: "Spiritual Service",
      description: "We consider our work as seva (service) to the pilgrims visiting the holy land of Vrindavan"
    },
    {
      icon: "💫",
      title: "Authentic Experience",
      description: "Providing genuine Braj culture experience with modern comfort and traditional values"
    },
    {
      icon: "🛡️",
      title: "Guest Safety",
      description: "Complete security and hygiene standards for peaceful and worry-free stay"
    },
    {
      icon: "❤️",
      title: "Personal Care",
      description: "Treating every guest as part of our family with personalized attention and care"
    }
  ];

  // Milestones
  const milestones = [
    { year: "2010", event: "Radhika Sadan Established", description: "Started with 5 rooms near Prikarma Marg" },
    { year: "2013", event: "First Renovation", description: "Upgraded facilities with modern amenities" },
    { year: "2016", event: "Family Suite Addition", description: "Added spacious family accommodations" },
    { year: "2019", event: "Digital Presence", description: "Launched online booking and website" },
    { year: "2022", event: "Premium Rooms", description: "Introduced AC rooms with premium features" },
    { year: "2024", event: "5000+ Guests Served", description: "Milestone of serving thousands of pilgrims" }
  ];

  // Guest statistics
  const stats = [
    { number: "5000+", label: "Happy Pilgrims", description: "Served since establishment" },
    { number: "98%", label: "Guest Satisfaction", description: "Repeat visitors and referrals" },
    { number: "24/7", label: "Service", description: "Round the clock guest support" },
    { number: "2-8 min", label: "Temple Access", description: "Walking distance to all major temples" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Helmet>
        <title>About Radhika Sadan - Premium Guest House in Vrindavan | Our Story</title>
        <meta 
          name="description" 
          content="Learn about Radhika Sadan Guest House in Vrindavan - Our 15+ years of serving pilgrims near Prikarma Marg, Paramhans Ji Maharaj. Authentic Braj hospitality with modern comfort."
        />
        <meta 
          name="keywords" 
          content="about Radhika Sadan, Vrindavan guest house history, Prikarma Marg accommodation, Mathura Vrindavan stay, spiritual guest house, Braj hospitality, pilgrim accommodation Vrindavan, Radhika Sadan team, guest house about us"
        />
        <link rel="canonical" href="https://radhikasadan.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Radhika Sadan - Authentic Guest House in Vrindavan" />
        <meta property="og:description" content="Discover our story of serving pilgrims for 15+ years near Prikarma Marg, Vrindavan. Experience genuine Braj hospitality with modern comfort." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radhikasadan.com/about" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Radhika Sadan Guest House",
            "description": "Premium Guest House in Vrindavan near Prikarma Marg, serving pilgrims with authentic Braj hospitality since 2010",
            "url": "https://radhikasadan.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near Prikarma Marg, Close to premanand ji maharaj ashram",
              "addressLocality": "Vrindavan",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "281121",
              "addressCountry": "IN"
            },
            "telephone": "+917044755109",
            "email": "bookings@radhikasadan.com",
            "founder": "Shri Krishna Das Ji",
            "foundingDate": "2010",
            "numberOfRooms": "15",
            "areaServed": "Vrindavan Mathura",
            "knowsAbout": ["Pilgrim Accommodation", "Spiritual Tourism", "Braj Culture", "Vrindavan Temples"]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            About Radhika Sadan
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto">
            Serving Pilgrims with Authentic Braj Hospitality Since 2010 - Your Spiritual Home in Vrindavan
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white text-orange-600 px-4 py-2 rounded-full font-bold">🏩 15+ Years of Service</span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">🙏 5000+ Happy Pilgrims</span>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold">📍 Near Prikarma Marg</span>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                Our Humble Beginning
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>Radhika Sadan</strong> was established in <strong>2010</strong> with a simple yet profound vision - to provide 
                comfortable and affordable accommodation to pilgrims visiting the holy land of <strong>Vrindavan</strong>. What started 
                as a small guest house with just 5 rooms near <strong>Prikarma Marg</strong> has now grown into a trusted name 
                in spiritual hospitality.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in the heart of <strong>Vrindavan</strong>, just minutes away from <strong>premanand ji maharaj ashram </strong> 
                and <strong>Gouri Gopal Vraddhashram </strong>, we have been blessed to serve thousands of pilgrims from across India and 
                around the world. Our mission has always been to make every guest feel the divine energy of Braj while 
                enjoying modern comforts.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that visiting <strong>Vrindavan</strong> is not just a journey, but a spiritual transformation. 
                That's why we go beyond just providing rooms - we create experiences that touch the soul and create 
                memories for lifetime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/rooms"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 text-center"
                >
                  View Our Rooms
                </Link>
                <a
                  href="tel:+917044755109"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Radhika Sadan Guest House Building in Vrindavan"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-orange-200">
                <div className="text-center">
                  <div className="text-3xl text-orange-500 mb-2">🏩</div>
                  <div className="text-2xl font-bold text-gray-900">15+ Years</div>
                  <div className="text-gray-600">of Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Our Journey in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Years of dedicated service to pilgrims visiting the holy land of Vrindavan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our service and define the Radhika Sadan experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group p-6 bg-orange-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-300">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to making your Vrindavan stay memorable and spiritually enriching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-200">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-3">{member.experience}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in Vrindavan hospitality
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-200 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-orange-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Empty space for alignment */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Why Choose Radhika Sadan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes us the preferred choice for pilgrims visiting Vrindavan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
              <div className="text-4xl text-orange-500 mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prime Vrindavan Location</h3>
              <p className="text-gray-600 text-lg">
                Situated in the heart of Vrindavan, just 2-8 minutes walking distance from all major temples including 
                Banke Bihari, ISKCON, and Prem Mandir. Perfect location for spiritual activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
              <div className="text-4xl text-orange-500 mb-4">🙏</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spiritual Guidance</h3>
              <p className="text-gray-600 text-lg">
                Our team provides guidance for temple visits, parikrama routes, and spiritual activities. 
                Experience Vrindavan like a local with our personalized assistance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
              <div className="text-4xl text-orange-500 mb-4">🏩</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Comfort</h3>
              <p className="text-gray-600 text-lg">
                Enjoy the perfect blend of traditional hospitality and modern amenities. All rooms equipped with 
                comfortable beds, attached bathrooms, hot water, and free WiFi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
              <div className="text-4xl text-orange-500 mb-4">🍴</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pure Vegetarian Food</h3>
              <p className="text-gray-600 text-lg">
                Experience authentic Braj cuisine with our pure vegetarian meal options. Hygienic, delicious, 
                and prepared with traditional recipes passed down through generations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
              <div className="text-4xl text-orange-500 mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safe & Secure</h3>
              <p className="text-gray-600 text-lg">
                24/7 security, CCTV surveillance, and safe environment for families, solo travelers, and 
                elderly pilgrims. Your safety is our top priority.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
              <div className="text-4xl text-orange-500 mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Value for Money</h3>
              <p className="text-gray-600 text-lg">
                Affordable pricing without compromising on quality and service. Special discounts for 
                long stays, group bookings, and advance payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Experience Radhika Sadan Hospitality
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
            Join thousands of satisfied pilgrims who have made Radhika Sadan their spiritual home in Vrindavan
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/rooms"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <span>View Rooms & Book Now</span>
            </Link>
            <a
              href="https://wa.me/917044755109"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <MessageCircle className="h-6 w-6" />
              <span>WhatsApp Inquiry</span>
            </a>
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
            <span>Jai Shri Radhe Krishna - Welcome to Your Spiritual Home in Vrindavan!</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;