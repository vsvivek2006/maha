import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MessageCircle, ArrowUp } from "lucide-react";

type NavItem = { name: string; href: string };
const primaryNav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Rooms", href: "/rooms" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${linkBase} bg-yellow-600 text-white shadow-md`
      : `${linkBase} text-gray-700 hover:bg-yellow-50 hover:text-yellow-700`;

  // WhatsApp direct message
  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in booking a room at your guest house. Could you please share more details?";
    const url = `https://wa.me/917044755109?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Direct call function
  const handleCall = () => {
    window.open("tel:+917044755109");
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
          <div className="flex justify-between items-center h-20">
            {/* Brand */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200"
                aria-label="Guest House Home"
              >
                <div className="flex-shrink-0">
                  <img
                    src="/logo.svg"
                    alt="Guest House Logo"
                    className="h-16 w-16 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span
                    className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    Mathura Guest House
                  </span>
                  <span
                    className="text-xs text-gray-500 -mt-1"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    Near Banke Bihari Temple
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {primaryNav.map((item) => (
                <NavLink key={item.name} to={item.href} className={navClass} end={item.href === "/"}>
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={handleCall}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 transition-colors duration-200"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden animate-in fade-in-50 slide-in-from-top-5 duration-200">
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-100 shadow-xl">
                {primaryNav.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive ? "bg-yellow-600 text-white shadow-md" : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}

                {/* Mobile CTAs */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => { handleCall(); setIsOpen(false); }}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now: +91 70447 55109
                  </button>
                  <button
                    onClick={() => { handleWhatsApp(); setIsOpen(false); }}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 py-3 rounded-lg font-bold transition-all duration-200 text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default Header;