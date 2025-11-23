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
  Heart
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

    const whatsappNumber = "917044755109";
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

  return (
    <>
      {/* FOOTER SECTION */}
      <footer className="bg-gradient-to-b from-yellow-50 to-orange-50 text-gray-800 relative border-t-4 border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand + Contact Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 bg-white p-2 rounded-full shadow-lg">
                  <img
                    src="/logo.svg"
                    alt="Radhika Sadan Guest House Mathura Vrindavan"
                    className="h-16 w-16 object-contain"
                  />
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
                  <a href="tel:+917044755109" className="hover:text-green-700 text-lg font-semibold">
                    +91 70447 55109
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-600" />
                  <a
                    href="mailto:bookings@radhikasadan.com"
                    className="hover:text-orange-700 text-lg"
                  >
                    bookings@radhikasadan.com
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

          <div className="border-t border-yellow-200 mt-4 pt-6 text-center">
            <p className="text-gray-700 text-lg mb-2 flex items-center justify-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              © {year} Radhika Sadan Guest House. All rights reserved.
            </p>
            <p className="text-gray-600 text-md">
              Made with devotion in the holy land of Mathura Vrindavan | Serving pilgrims since 2010
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Your trusted accommodation partner in Braj region | Jai Shri Radhe Krishna
            </p>
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