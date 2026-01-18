import React, { useState } from 'react';
import { MessageCircle, X, ShieldCheck } from 'lucide-react';

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = () => {
    if (!name || !mobile) {
      alert('Please enter both Name and Mobile Number');
      return;
    }

    // New WhatsApp Number: +91 8969906425
    const whatsappNumber = "918969906425";
    const message = `Hello Mahadev Book Official,%0A%0AI want to get my New Betting ID.%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0A%0APlease provide me the login details.`;
    
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
    
    // Reset and Close
    setOpen(false);
    setName('');
    setMobile('');
  };

  return (
    <>
      {/* Floating Button - Dark Gold Theme */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-10 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 animate-pulse flex items-center gap-3"
        aria-label="Get Betting ID"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden md:inline font-bold uppercase tracking-tighter text-sm">Get Your ID Now</span>
      </button>

      {/* Popup Form - Black & Gold Theme */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-[#111] border border-zinc-800 p-8 rounded-3xl w-full max-w-sm shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-[#FFD700] transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="bg-zinc-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#FFD700]/30">
                <ShieldCheck className="h-8 w-8 text-[#FFD700]" />
              </div>
              <h3 className="text-2xl font-black uppercase italic italic text-[#FFD700]">Get Mahadev ID</h3>
              <p className="text-zinc-500 text-xs mt-1 uppercase font-bold tracking-widest">Instant Activation</p>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black uppercase text-zinc-500 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FFD700] transition-all"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase text-zinc-500 ml-1">WhatsApp Number</label>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FFD700] transition-all"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#FFD700] hover:bg-yellow-500 text-black py-4 rounded-xl font-black uppercase tracking-tighter transition-all flex items-center justify-center gap-2 mt-2"
              >
                <MessageCircle size={20} />
                WhatsApp for ID
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-[10px] text-zinc-600 text-center mt-6 uppercase font-bold tracking-tight">
              100% Secure & Private Account Setup
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;