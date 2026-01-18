import React from "react";
import { Link } from "react-router-dom";
import { Send, MessageCircle, Instagram, Youtube, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const whatsappNumber = "918969906425";

  // Function to handle WhatsApp redirect for platforms
  const handlePlatformClick = (platformName: string) => {
    const message = encodeURIComponent(`Hello Mahadev Book! I want ${platformName} ID. Please help.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const platforms = [
    "Gold365",
    "Laser247",
    "IPL Betting ID",
    "Online Betting ID",
    "Mahadev Online Book",
    "MahadevBook",
  ];

  return (
    <footer className="bg-[#0a0a0a] text-[#a0a0a0] pt-16 pb-8 border-t border-zinc-900 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-sm">
                <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
              </div>
              <h2 className="text-[#FFCC00] text-2xl font-black italic uppercase">Mahadev Book</h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              India's most trusted sports insights platform. Providing data-driven analysis, 
              prediction models, and educational resources since 2018.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Send size={18} />, link: "https://t.me/your_telegram" },
                { icon: <MessageCircle size={18} />, link: `https://wa.me/${whatsappNumber}` },
                { icon: <Instagram size={18} />, link: "#" },
                { icon: <Youtube size={18} />, link: "#" },
                { icon: <Twitter size={18} />, link: "#" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-zinc-800 flex items-center justify-center text-[#FFCC00] hover:bg-[#FFCC00] hover:text-black transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-xl font-black uppercase italic mb-2 tracking-tighter">Quick Links</h3>
            <div className="w-12 h-1 bg-[#FFCC00] mb-6"></div>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/" className="hover:text-[#FFCC00] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#FFCC00] transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-[#FFCC00] transition-colors">Blog</Link></li>
              <li><Link to="/betting-app" className="hover:text-[#FFCC00] transition-colors">Mahadev Betting App</Link></li>
              <li><Link to="/book-id" className="hover:text-[#FFCC00] transition-colors">Mahadev Book ID</Link></li>
              <li><Link to="/faq" className="hover:text-[#FFCC00] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Betting Platforms (WhatsApp Redirects) */}
          <div>
            <h3 className="text-white text-xl font-black uppercase italic mb-2 tracking-tighter">Get Official ID</h3>
            <div className="w-12 h-1 bg-[#FFCC00] mb-6"></div>
            <ul className="space-y-4 text-sm font-bold">
              {platforms.map((name) => (
                <li key={name}>
                  <button 
                    onClick={() => handlePlatformClick(name)}
                    className="hover:text-[#FFCC00] transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FFCC00] rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Disclaimer */}
        <div className="pt-8 border-t border-zinc-900 text-center space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            © 2026 Mahadev Book Official. All rights reserved.
          </p>
          <p className="text-[10px] max-w-4xl mx-auto leading-relaxed text-zinc-600 font-medium">
            Mahadev Book is an educational sports insights platform. All content is for informational purposes only. 
            Sports gaming involves financial risk. Please play responsibly. Users must be 18+ to access this platform.
          </p>
          <div className="text-[11px] font-bold flex justify-center gap-6 uppercase tracking-widest">
            <Link to="/terms" className="text-zinc-500 hover:text-[#FFCC00] underline decoration-zinc-800 underline-offset-4">Terms & Conditions</Link>
            <Link to="/privacy" className="text-zinc-500 hover:text-[#FFCC00] underline decoration-zinc-800 underline-offset-4">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;