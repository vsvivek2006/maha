import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  X,
  Star,
  Heart,
  Home
} from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    guests: "",
    checkin: "",
    checkout: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, mobile, guests, checkin, checkout, message } = formData;

    if (!name || !mobile) {
      alert("Please fill name and mobile number!");
      return;
    }

    const whatsappNumber = "919286755109"; // Updated WhatsApp number
    const text = `🏩 *Radhika Sadan - Room Booking Inquiry*

*Name:* ${name}
*Mobile:* ${mobile}
*Guests:* ${guests || "Not specified"}
*Check-in:* ${checkin || "Flexible"}
*Check-out:* ${checkout || "Flexible"}
*Special Request:* ${message || "No special request"}

I would like to book a room at Radhika Sadan Guest House in Mathura. Please share available rooms and rates.`;

    const encodedText = encodeURIComponent(text);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappLink, "_blank");
    setShowModal(false);
  };

  // Legal pages links
  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Shipping Policy", path: "/shipping" },
    { name: "Cancellation & Refund", path: "/cancellation-refund" },
  ];

  return (
    <>
      {/* FOOTER SECTION */}
      <footer className="bg-gradient-to-b from-yellow-50 to-orange-50 text-gray-800 relative border-t-4 border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand + Contact Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0">
                  {/* Clean logo without background */}
                  <div className="h-20 w-20 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/logo.png"
                      alt="Radhika Sadan Guest House Mathura Vrindavan"
                      className="h-18 w-18 object-contain"
                      onError={(e) => {
                        // Fallback if logo doesn't exist
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="h-18 w-18 rounded-full border-2 border-yellow-500 flex items-center justify-center bg-yellow-50">
                              <svg class="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-yellow-700" style={{ fontFamily: '"Playfair Display", serif' }}>
                    Radhika Sadan
                  </h2>
                  <p className="text-orange-600 text-sm">
                    Premium Guest House in Mathura Vrindavan
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 max-w-md text-lg leading-relaxed">
                Experience divine hospitality at <strong>Radhika Sadan</strong> - your peaceful retreat in the holy land of Mathura Vrindavan. 
                We offer comfortable accommodation with modern amenities, perfect for pilgrims and spiritual seekers.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <a href="tel:+919286755109" className="hover:text-green-700 text-lg font-semibold">
                    +91 92867 55109
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-600" />
                  <a
                    href="mailto:book@radhikasadan.com"
                    className="hover:text-orange-700 text-lg"
                  >
                    book@radhikasadan.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="text-lg">
                    Near Banke Bihari Temple, Vrindavan, Mathura, Uttar Pradesh
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-700">Quick Navigation</h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Our Rooms", path: "/rooms" },
                  { name: "Photo Gallery", path: "/gallery" },
                  { name: "Contact Us", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-700 hover:text-yellow-700 text-lg block py-1 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities + Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-700">Guest Amenities</h3>
              <ul className="space-y-2 mb-6 text-gray-700">
                {[
                  "🛌 AC & Non-AC Rooms",
                  "🚿 Hot Water 24x7",
                  "📶 Free WiFi",
                  "🅿️ Car Parking",
                  "🍴 Pure Vegetarian Food",
                  "🙏 Temple Proximity"
                ].map((amenity, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-md">{amenity}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-yellow-700">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                {[
                  {
                    icon: MessageCircle,
                    label: "WhatsApp Booking",
                    color: "text-green-600 hover:text-green-700",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/radhikasadan_mathura/",
                    color: "text-gray-700 hover:text-pink-600",
                    label: "Instagram",
                  },
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/radhikasadanvrindavan/",
                    color: "text-gray-700 hover:text-blue-600",
                    label: "Facebook",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href || "#"}
                    onClick={
                      social.label === "WhatsApp Booking"
                        ? (e) => {
                            e.preventDefault();
                            setShowModal(true);
                          }
                        : undefined
                    }
                    target={social.href ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`${social.color} transition-all duration-200 hover:scale-110 transform bg-white p-2 rounded-full shadow-md`}
                    title={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* SEO Keywords Section */}
          <div className="border-t border-yellow-200 mt-8 pt-8">
            <div className="text-center mb-4">
              <h4 className="text-lg font-semibold text-yellow-700 mb-2">
                Radhika Sadan - Best Guest House in Mathura Vrindavan
              </h4>
              <p className="text-gray-600 text-sm">
                Keywords: Mathura guest house, Vrindavan accommodation, budget hotel Mathura, 
                family stay Vrindavan, pilgrim accommodation, Banke Bihari temple stay, 
                ISKCON guest house, spiritual retreat Mathura, affordable hotels in Vrindavan, 
                Radhika Sadan reviews, Yamuna riverside stay, Braj dham accommodation
              </p>
            </div>
          </div>

          {/* Legal Links Section */}
          <div className="border-t border-yellow-200 mt-6 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-700 text-lg mb-4 md:mb-0 flex items-center justify-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                © {year} Radhika Sadan Guest House. All rights reserved.
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-600 hover:text-yellow-700 text-sm transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-gray-600 text-md">
                Made with devotion in the holy land of Mathura Vrindavan | Serving pilgrims since 2010
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Your trusted accommodation partner in Braj region | Jai Shri Radhe Krishna
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ✅ WhatsApp Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-700">
              Book Your Stay
            </h2>
            <p className="text-gray-600 text-center mb-4">
              Get instant confirmation via WhatsApp
            </p>
            <form onSubmit={handleWhatsAppBooking} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number *"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
              />
              <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  name="checkin"
                  placeholder="Check-in Date"
                  value={formData.checkin}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                />
                <input
                  type="date"
                  name="checkout"
                  placeholder="Check-out Date"
                  value={formData.checkout}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                />
              </div>
              <textarea
                name="message"
                placeholder="Special Requirements (optional)"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                rows={3}
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg flex justify-center items-center gap-2 transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5" />
                Book via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
