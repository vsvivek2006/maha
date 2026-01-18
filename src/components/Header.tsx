import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

type NavItem = { name: string; href: string };

const primaryNav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Mahadev Betting App", href: "/betting-app" },
  { name: "Mahadev Book ID", href: "/book-id" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // WhatsApp Number and Message setup
  const whatsappNumber = "918969906425";
  const whatsappMessage = encodeURIComponent("I want ID");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Function to handle redirect
  const handleAuthClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(whatsappLink, "_blank");
  };

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-2 py-1 text-[15px] font-medium transition-all duration-200 whitespace-nowrap ${
      isActive 
        ? "text-[#FFCC00] border-b-2 border-[#FFCC00]" 
        : "text-white hover:text-[#FFCC00]"
    }`;

  return (
    <header className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <nav className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Side: Cricket Badge + Logo + Name */}
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden sm:block">
              <span className="bg-[#1a1a1a] text-[#888] text-xs px-3 py-1.5 rounded-md border border-zinc-800 cursor-default">
                Cricket
              </span>
            </div>

            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-white p-0.5 rounded-sm">
                 <img
                    src="/logo.png" 
                    alt="Logo"
                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                  />
              </div>
              <span className="text-[#FFCC00] text-xl sm:text-2xl font-bold tracking-tight">
                Mahadev Book
              </span>
            </Link>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden xl:flex items-center gap-6">
            {primaryNav.map((item) => (
              <NavLink key={item.name} to={item.href} className={navClass}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side: WhatsApp Redirect Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleAuthClick}
              className="bg-[#EAB308] hover:bg-[#FACC15] text-black px-5 py-2 rounded-lg font-bold text-sm transition-transform active:scale-95 shadow-lg"
            >
              Login
            </button>
            <button
              onClick={handleAuthClick}
              className="bg-[#EAB308] hover:bg-[#FACC15] text-black px-5 py-2 rounded-lg font-bold text-sm transition-transform active:scale-95 shadow-lg"
            >
              Registration
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FFCC00] p-2 hover:bg-zinc-900 rounded-md transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="xl:hidden bg-zinc-950 border-t border-zinc-800 py-6 px-4 space-y-4 animate-in slide-in-from-top duration-300">
            {primaryNav.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="block text-white text-lg py-2 hover:text-[#FFCC00]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-zinc-800">
              <button 
                onClick={handleAuthClick} 
                className="bg-[#EAB308] text-black text-center py-3 rounded-lg font-bold"
              >
                Login
              </button>
              <button 
                onClick={handleAuthClick} 
                className="bg-[#EAB308] text-black text-center py-3 rounded-lg font-bold"
              >
                Registration
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;