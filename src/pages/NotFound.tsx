import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, MapPin, Phone, MessageCircle, Heart, Star } from "lucide-react";
import { Helmet } from "react-helmet";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* ✅ SEO Component */}
      <Helmet>
        <title>404 - Page Not Found | Radhika Sadan Vrindavan - Best Guest House</title>
        <meta
          name="description"
          content="Page not found. Book best guest house in Vrindavan near Banke Bihari Temple & Prem Mandir. AC/Non-AC rooms from ₹999. 24/7 booking support."
        />
        <meta
          name="keywords"
          content="404 page not found, Radhika Sadan Vrindavan, best guest house Vrindavan, Banke Bihari temple stay, Prem Mandir accommodation, ISKCON Vrindavan hotel, budget guest house Mathura, Radhika Sadan booking"
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://radhikasadan.com/404" />
      </Helmet>

      {/* Hero Section with Vrindavan Image */}
      <section className="relative py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/mathura.png')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-9xl font-bold mb-4 opacity-90">404</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Page Not Found
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-orange-100">
            The page you're looking for doesn't exist in Vrindavan!
          </p>
          <p className="text-orange-200 text-lg">
            But don't worry, our best guest house is right here for you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 font-semibold text-lg"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold text-lg"
            >
              <Home className="h-5 w-5" />
              Go to Homepage
            </Link>
          </div>

          {/* Location Info Card */}
          <div className="bg-orange-50 rounded-3xl p-8 border-2 border-orange-200 mb-12">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">📍</div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Best Guest House in Vrindavan
              </h2>
              <p className="text-gray-600 text-lg">
                While this page might be missing, our guest house is right here near Banke Bihari Temple
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="text-2xl mb-2">🛕</div>
                <div className="font-bold text-gray-900">3 min walk</div>
                <div className="text-gray-600 text-sm">to Banke Bihari Temple</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">💫</div>
                <div className="font-bold text-gray-900">5 min walk</div>
                <div className="text-gray-600 text-sm">to Prem Mandir</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">🌟</div>
                <div className="font-bold text-gray-900">8 min walk</div>
                <div className="text-gray-600 text-sm">to ISKCON Temple</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">🏩</div>
                <div className="font-bold text-gray-900">Best Rooms</div>
                <div className="text-gray-600 text-sm">From ₹999</div>
              </div>
            </div>
          </div>

          {/* Suggested Pages Grid */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Explore Best Guest House in Vrindavan
            </h2>
            <p className="text-gray-600 text-lg">
              Here are some pages you might be looking for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link
              to="/rooms"
              className="block group bg-white rounded-2xl border-2 border-orange-200 p-6 shadow-lg hover:shadow-xl hover:border-orange-400 transition-all duration-300"
            >
              <div className="text-3xl mb-3">🛌</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Our Rooms</h3>
              <p className="text-gray-600 text-sm">
                View comfortable AC & Non-AC rooms near Banke Bihari Temple
              </p>
              <div className="mt-3 text-orange-600 font-semibold">
                Starting at ₹999 →
              </div>
            </Link>

            <Link
              to="/gallery"
              className="block group bg-white rounded-2xl border-2 border-orange-200 p-6 shadow-lg hover:shadow-xl hover:border-orange-400 transition-all duration-300"
            >
              <div className="text-3xl mb-3">📸</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Photo Gallery</h3>
              <p className="text-gray-600 text-sm">
                See photos of our rooms, location, and nearby temples
              </p>
              <div className="mt-3 text-orange-600 font-semibold">
                View Photos →
              </div>
            </Link>

            <Link
              to="/about"
              className="block group bg-white rounded-2xl border-2 border-orange-200 p-6 shadow-lg hover:shadow-xl hover:border-orange-400 transition-all duration-300"
            >
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">About Us</h3>
              <p className="text-gray-600 text-sm">
                Learn about our best guest house in Vrindavan
              </p>
              <div className="mt-3 text-orange-600 font-semibold">
                Our Story →
              </div>
            </Link>

            <Link
              to="/contact"
              className="block group bg-white rounded-2xl border-2 border-orange-200 p-6 shadow-lg hover:shadow-xl hover:border-orange-400 transition-all duration-300"
            >
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">
                Get in touch for bookings and inquiries
              </p>
              <div className="mt-3 text-orange-600 font-semibold">
                Get Directions →
              </div>
            </Link>

            <div className="block group bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl border-2 border-orange-300 p-6 shadow-lg">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Why We're Best</h3>
              <p className="text-gray-600 text-sm">
                Best location near all major temples in Vrindavan
              </p>
              <div className="mt-3 text-green-600 font-semibold">
                Walking distance to temples
              </div>
            </div>

            <div className="block group bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border-2 border-green-200 p-6 shadow-lg">
              <div className="text-3xl mb-3">🎉</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Special Offer</h3>
              <p className="text-gray-600 text-sm">
                10% OFF on advance payment for room booking
              </p>
              <div className="mt-3 text-green-600 font-semibold">
                Book Now & Save →
              </div>
            </div>
          </div>

          {/* Contact Help Section */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Need Immediate Booking Help?
            </h2>
            <p className="text-orange-100 text-lg mb-6">
              Contact best guest house in Vrindavan for room bookings or directions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/919286755109"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
              >
                <MessageCircle className="h-6 w-6" />
                WhatsApp Now
              </a>
              <a
                href="tel:+919286755109"
                className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
              >
                <Phone className="h-6 w-6" />
                Call: +91 92867 55109
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-orange-200 text-sm">
              <div className="flex items-center justify-center gap-2">
                <span>🏩</span>
                <span>Best Guest House</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>🛕</span>
                <span>Near Banke Bihari</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>💫</span>
                <span>Near Prem Mandir</span>
              </div>
            </div>
          </div>

          {/* Spiritual Message */}
          <div className="text-center mt-8">
            <p className="text-gray-600 flex items-center justify-center gap-2 text-lg">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Jai Shri Radhe Krishna - Welcome to Best Guest House in Vrindavan!</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
