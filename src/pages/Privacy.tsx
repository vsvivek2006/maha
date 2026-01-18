import React, { useState } from "react";
import { ShieldCheck, Lock, RefreshCcw, Mail, MessageCircle, Phone, AlertTriangle, Scale } from "lucide-react";

const Privacy: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FFD700] selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 border-b border-zinc-900 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-6 py-2 rounded-full text-sm font-black mb-8 animate-pulse uppercase tracking-tighter">
            <ShieldCheck size={20} /> Official Security Protocol
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-tight mb-4">
            Privacy <span className="text-[#FFD700]">& Policy</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
            How Mahadev Book collects, uses, protects, and secures your gaming data and transactions.
          </p>
          <p className="text-sm text-zinc-500 mt-6 uppercase font-bold tracking-widest">Last updated: {lastUpdated}</p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mt-12 space-x-2 md:space-x-4">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-8 py-4 rounded-xl font-black uppercase tracking-tighter transition-all flex items-center gap-2 ${
                activeTab === "privacy" 
                ? "bg-[#FFD700] text-black shadow-[0_0_30px_rgba(255,215,0,0.2)] scale-105" 
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              <Lock size={18} /> Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("refund")}
              className={`px-8 py-4 rounded-xl font-black uppercase tracking-tighter transition-all flex items-center gap-2 ${
                activeTab === "refund" 
                ? "bg-[#FFD700] text-black shadow-[0_0_30px_rgba(255,215,0,0.2)] scale-105" 
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              <RefreshCcw size={18} /> Refund Policy
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/5 via-transparent to-transparent"></div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          
          {activeTab === "privacy" ? (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2rem]">
                <p className="text-zinc-400 text-lg leading-relaxed">
                  This Privacy Policy explains how **Mahadev Book Official** ("we", "us", "our") handles personal information. By creating your Mahadev Book ID, you consent to the data practices described in this policy.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-black text-[#FFD700] uppercase italic flex items-center gap-3">
                  <Scale className="text-[#FFD700]" /> 1) Data Collection
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Personal Details", desc: "Full name, contact info, and age verification." },
                    { title: "Financial Logs", desc: "Transaction history and payment method details." },
                    { title: "Technical Data", desc: "IP address, device type, and login timestamps." },
                    { title: "Gaming Logs", desc: "Betting history and platform preferences." }
                  ].map((item, i) => (
                    <li key={i} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-black text-[#FFD700] uppercase italic flex items-center gap-3">
                  <Lock className="text-[#FFD700]" /> 2) How We Secure Your Information
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  We use **256-bit SSL Encryption** to protect your financial transactions. Your data is stored on secure servers with restricted access to prevent unauthorized breaches.
                </p>
              </div>

              <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl space-y-6">
                <h2 className="text-2xl font-black text-white uppercase italic">3) Your Rights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-400 font-medium">
                  <div className="flex gap-2"><span>•</span> Access your logs</div>
                  <div className="flex gap-2"><span>•</span> Request data deletion</div>
                  <div className="flex gap-2"><span>•</span> Update mobile number</div>
                  <div className="flex gap-2"><span>•</span> Self-exclusion rights</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-black text-[#FFD700] uppercase italic">Financial & Refund Policy</h2>
                <p className="text-zinc-500">Please read our transaction and withdrawal policy carefully.</p>
              </div>

              <div className="space-y-6">
                <div className="bg-zinc-900/50 border border-[#FFD700]/20 p-8 rounded-[2.5rem]">
                  <h3 className="text-xl font-bold text-[#FFD700] mb-6 uppercase flex items-center gap-2">
                    <AlertTriangle size={20} /> Withdrawal Rules
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 border-b border-zinc-800 pb-6">
                      <div className="w-12 h-12 bg-[#FFD700] text-black rounded-full flex items-center justify-center font-black shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-white uppercase text-sm tracking-widest">Instant Payouts</h4>
                        <p className="text-zinc-500 text-sm">UPI and IMPS withdrawals are initiated within 30 minutes of request.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 border-b border-zinc-800 pb-6">
                      <div className="w-12 h-12 bg-zinc-800 text-[#FFD700] rounded-full flex items-center justify-center font-black shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-white uppercase text-sm tracking-widest">Verification</h4>
                        <p className="text-zinc-500 text-sm">Large withdrawals may require a one-time OTP verification on your registered number.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-zinc-800 text-red-500 rounded-full flex items-center justify-center font-black shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-white uppercase text-sm tracking-widest">No Refunds on Bets</h4>
                        <p className="text-zinc-500 text-sm">Once a bet is placed and accepted by the system, it cannot be refunded or cancelled.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Support Section */}
          <div className="mt-20 p-10 bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] border border-zinc-800 text-center space-y-8">
            <h3 className="text-2xl font-black uppercase italic">Need Help with <span className="text-[#FFD700]">Policy?</span></h3>
            <p className="text-zinc-500">Contact our 24/7 compliance and support team for any concerns.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918969906425" 
                className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter flex items-center justify-center gap-2 hover:scale-105 transition-all"
              >
                <MessageCircle size={20} /> WhatsApp Support
              </a>
              <a 
                href="tel:+918969906425" 
                className="bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-tighter flex items-center justify-center gap-2 hover:scale-105 transition-all"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;