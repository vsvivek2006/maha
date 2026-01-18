import React from "react";
import { ShieldCheck, Trophy, Zap, Clock, MessageCircle, Phone, Lock, CheckCircle2 } from "lucide-react";

const OnboardingAgreement: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  // WhatsApp Link
  const whatsappLink = "https://wa.me/918969906425?text=Hello%20Mahadev%20Book%20Official,%20I%20accept%20the%20onboarding%20terms.";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FFD700] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#111] via-[#050505] to-black text-white py-24 border-b border-zinc-800 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-6 py-2 rounded-full text-lg font-black mb-8 animate-pulse uppercase tracking-tighter">
            <Trophy size={20} /> Official Onboarding
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-4">
            Mahadev Book <br />
            <span className="text-[#FFD700]">User Agreement</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Your official process to kickstart your secure gaming and premium betting ID engagement.
          </p>
          <p className="text-sm text-zinc-500 mt-6 uppercase font-bold tracking-widest">Effective Date: {lastUpdated}</p>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-16 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2rem] p-8 md:p-12">
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              This Onboarding Agreement ("Agreement") outlines how **Mahadev Book Official** will initiate and deliver premium betting ID services. It defines account access, security protocols, withdrawal timelines, and user responsibilities to ensure your gaming experience is smooth, secure, and transparent.
            </p>
            <div className="bg-[#FFD700]/5 border-l-4 border-[#FFD700] p-6 rounded-r-xl">
              <p className="text-sm text-[#FFD700] font-bold leading-relaxed">
                IMPORTANT: This agreement is an operational guide. By creating your Mahadev Book ID, you agree to these terms alongside our General Privacy Policy. In case of disputes, the terms mentioned here prevail for operational delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE TERMS SECTION */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Section 1: Services */}
          <div className="group transition-all">
            <h2 className="text-2xl font-black text-[#FFD700] mb-4 uppercase italic flex items-center gap-3">
              <Zap className="shrink-0" /> 1) Scope of ID Services
            </h2>
            <ul className="space-y-4 text-zinc-400 font-medium">
              <li className="flex gap-3"><CheckCircle2 className="text-zinc-700 shrink-0" size={20} /> Verified Betting IDs for Cricket, Football, and 500+ Casino Games.</li>
              <li className="flex gap-3"><CheckCircle2 className="text-zinc-700 shrink-0" size={20} /> 24/7 Priority Support via official WhatsApp channels.</li>
              <li className="flex gap-3"><CheckCircle2 className="text-zinc-700 shrink-0" size={20} /> Real-time match analytics and expert prediction insights.</li>
              <li className="flex gap-3"><CheckCircle2 className="text-zinc-700 shrink-0" size={20} /> 100% Google-Safe and encrypted transaction gateways.</li>
            </ul>
          </div>

          {/* Section 2: Security */}
          <div>
            <h2 className="text-2xl font-black text-[#FFD700] mb-4 uppercase italic flex items-center gap-3">
              <Lock className="shrink-0" /> 2) Security & Asset Protection
            </h2>
            <p className="text-zinc-400 mb-4 italic">To protect your funds, the following protocols are strictly followed:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>2-Factor Authentication (2FA) for all login attempts.</li>
              <li>Verification of KYC documents for large withdrawal requests.</li>
              <li>Strict privacy—your gaming data is never shared with third parties.</li>
              <li>Official communication will ONLY happen through our verified WhatsApp (+91 89699 06425).</li>
            </ul>
          </div>

          {/* Section 3: Withdrawals */}
          <div className="bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800">
            <h2 className="text-2xl font-black text-[#FFD700] mb-4 uppercase italic flex items-center gap-3">
              <Clock className="shrink-0" /> 3) Withdrawal & Payout SLA
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="p-4 bg-black rounded-xl border border-zinc-800">
                <p className="font-black text-white mb-1">IMPS/UPI Payouts</p>
                <p className="text-zinc-500">Processed within 30 minutes (24/7).</p>
              </div>
              <div className="p-4 bg-black rounded-xl border border-zinc-800">
                <p className="font-black text-white mb-1">Bank Transfers</p>
                <p className="text-zinc-500">Processed within 2-4 hours on banking days.</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-zinc-500 font-bold uppercase tracking-widest">Note: Minimum withdrawal ₹500 | No hidden charges.</p>
          </div>

          {/* Section 4: Responsible Gaming */}
          <div>
            <h2 className="text-2xl font-black text-[#FFD700] mb-4 uppercase italic flex items-center gap-3">
              <ShieldCheck className="shrink-0" /> 4) Responsible Gaming Policy
            </h2>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex gap-2"><span>•</span> Users must be 18+ years of age.</li>
              <li className="flex gap-2"><span>•</span> We provide daily/weekly loss limit setting tools.</li>
              <li className="flex gap-2"><span>•</span> Self-exclusion is available upon request through WhatsApp support.</li>
            </ul>
          </div>

          {/* Section 5: Bonus Policy */}
          <div className="bg-gradient-to-r from-zinc-900 to-black p-8 rounded-[2rem] border border-[#FFD700]/20">
            <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Exclusive Rewards</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl bg-black/50 border border-zinc-800">
                <p className="text-[#FFD700] text-3xl font-black italic">400%</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold">Welcome Bonus</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-black/50 border border-zinc-800">
                <p className="text-[#FFD700] text-3xl font-black italic">10%</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold">Refill Bonus</p>
              </div>
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="pt-10 border-t border-zinc-800">
            <div className="bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-800 text-center space-y-6">
              <h3 className="text-2xl font-black uppercase italic">Ready to <span className="text-[#FFD700]">Start Winning?</span></h3>
              <p className="text-zinc-400">By proceeding, you acknowledge that you have read and agreed to the Mahadev Book Onboarding Terms.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_15px_40px_rgba(37,211,102,0.3)]"
                >
                  <MessageCircle size={24} /> I Accept & Get ID
                </a>
                <a 
                  href="tel:+918969906425"
                  className="bg-white text-black font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all"
                >
                  <Phone size={24} /> Call Official
                </a>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-zinc-600 text-center uppercase font-bold tracking-widest pb-10">
            © 2026 Mahadev Book Official. All Rights Reserved. Gaming Involves Financial Risk.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OnboardingAgreement;