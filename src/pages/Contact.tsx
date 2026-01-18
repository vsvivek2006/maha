import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Phone, MessageCircle, Mail, MapPin, 
  Clock, ShieldCheck, Headphones, Send 
} from 'lucide-react';

const Contact = () => {
  // WhatsApp Link using the new number provided
  const whatsappLink = "https://wa.me/918969906425";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FFD700] selection:text-black">
      <Helmet>
        <title>Contact Mahadev Book Support | 24/7 Dedicated Assistance</title>
        <meta name="description" content="Contact Mahadev Book for 24/7 support regarding sports insights, account questions, and technical needs. Reach us via WhatsApp at +91 8969906425." />
      </Helmet>

      {/* 1. HERO SECTION (image_4644a6.png) */}
      <section className="relative pt-24 pb-20 px-6 border-b border-zinc-900 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <h1 className="text-4xl md:text-7xl font-black italic uppercase leading-tight shadow-sm">
            Contact <span className="text-[#FFD700]">Mahadev Book</span> Support
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
            Our dedicated team is available 24/7 to assist with your sports insights, 
            account questions, and technical support needs.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/5 via-transparent to-transparent"></div>
      </section>

      {/* 2. CONTACT OPTIONS & FORM */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* LEFT: GET IN TOUCH FORM (image_4644dd.png & image_4644e6.png) */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-black uppercase italic mb-2">Get in Touch <span className="text-[#FFD700]">With Our Team</span></h2>
              <div className="w-16 h-1 bg-[#FFD700] rounded-full"></div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Your Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">How Can We Help You?</label>
                <select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 focus:border-[#FFD700] outline-none appearance-none text-gray-400">
                  <option>Select a topic</option>
                  <option>Mahadev Book ID Request</option>
                  <option>Deposit/Withdrawal Issue</option>
                  <option>Technical Support</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Detailed Description</label>
                <textarea 
                  rows={4} 
                  placeholder="Please describe your inquiry in detail..." 
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 focus:border-[#FFD700] outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#FFD700] text-black font-black py-5 rounded-xl uppercase tracking-tighter hover:bg-yellow-500 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                <Send size={20} /> Send Message to Support Team
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO & WHATSAPP */}
          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 p-10 rounded-[2.5rem] space-y-8">
              <h3 className="text-2xl font-black uppercase italic">Direct <span className="text-[#FFD700]">Assistance</span></h3>
              
              <div className="space-y-6">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-6 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366] transition-all group"
                >
                  <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] group-hover:scale-110 transition-transform">
                    <MessageCircle size={30} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-widest text-gray-300">WhatsApp Support</h4>
                    <p className="text-xl font-bold text-white">+91 89699 06425</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-4 border border-zinc-800 rounded-2xl">
                  <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center text-[#FFD700]">
                    <Clock size={30} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-widest text-gray-300">Availability</h4>
                    <p className="text-xl font-bold text-white">24 Hours / 7 Days</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-4 border border-zinc-800 rounded-2xl">
                  <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center text-[#FFD700]">
                    <Headphones size={30} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-widest text-gray-300">Service Area</h4>
                    <p className="text-xl font-bold text-white">Nationwide Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECURITY MESSAGE */}
            <div className="p-8 rounded-[2rem] border border-[#FFD700]/20 bg-gradient-to-br from-zinc-900 to-black">
              <div className="flex gap-4">
                <ShieldCheck className="text-[#FFD700] shrink-0" size={32} />
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-white">Security Note:</strong> Your data is protected by 256-bit SSL encryption. 
                  Never share your login password or OTP with anyone, including our support team.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FLOATING WHATSAPP BUTTON (image_45c91f.png) */}
      <a 
        href={whatsappLink} 
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[1000] bg-[#25D366] text-white px-8 py-4 rounded-full font-black text-lg shadow-[0_15px_40px_rgba(37,211,102,0.4)] flex items-center gap-3 hover:scale-110 transition-all animate-pulse"
      >
        <MessageCircle size={28} />
        <span className="hidden sm:inline text-sm uppercase tracking-tighter">Get Mahadev Book ID</span>
      </a>
    </div>
  );
};

export default Contact;