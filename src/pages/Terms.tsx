import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Clock, Shield, AlertTriangle, Check, X, Trophy, Lock } from "lucide-react";

const Terms = () => {
  // WhatsApp Number and Link
  const whatsappNumber = "918969906425";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Mahadev%20Book,%20I%20have%20a%20question%20about%20your%20Terms%20and%20Conditions`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FFD700] selection:text-black">
      <Helmet>
        <title>Terms & Conditions - Mahadev Book Official</title>
        <meta 
          name="description" 
          content="Official terms and conditions for Mahadev Book. Read our policies on account security, withdrawals, fair play, and responsible gaming."
        />
        <meta 
          name="keywords" 
          content="Mahadev Book terms, betting rules, online gaming policies, account verification, withdrawal terms"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 border-b border-zinc-900 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-6 py-2 rounded-full text-sm font-black mb-8 animate-pulse uppercase tracking-tighter">
             <Shield size={20} /> Legal Agreement
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-tight mb-6">
            Terms <span className="text-[#FFD700]">& Conditions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zinc-400 max-w-4xl mx-auto font-medium">
            Important protocols for a secure, fair, and rewarding experience on India's most trusted platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-zinc-900 text-white px-5 py-2 rounded-xl border border-zinc-800 font-bold flex items-center gap-2">📜 User Guidelines</span>
            <span className="bg-[#FFD700] text-black px-5 py-2 rounded-xl font-black flex items-center gap-2">🔐 SSL Encrypted</span>
            <span className="bg-zinc-900 text-white px-5 py-2 rounded-xl border border-zinc-800 font-bold flex items-center gap-2">🔞 18+ Only</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Important Notice */}
          <div className="bg-zinc-900/50 border border-[#FFD700]/20 rounded-[2rem] p-8 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700] opacity-5 blur-[60px]"></div>
            <div className="flex items-start gap-5 relative z-10">
              <AlertTriangle className="h-10 w-10 text-[#FFD700] shrink-0" />
              <div>
                <h3 className="text-2xl font-black text-[#FFD700] mb-2 uppercase italic">Binding Agreement</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  By creating a Mahadev Book ID or accessing our services, you agree to abide by these terms. 
                  These protocols are designed to ensure account security, financial transparency, and fair play for all users.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-10">
            {/* Account & Security */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:border-[#FFD700]/30 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <Lock className="h-8 w-8 text-[#FFD700]" />
                <h2 className="text-2xl font-black text-white uppercase italic">1. Account & Security</h2>
              </div>
              <div className="space-y-6">
                {[
                  { title: "One User, One ID", desc: "Users are strictly prohibited from maintaining multiple accounts. Duplicate IDs will be permanently suspended." },
                  { title: "Credential Confidentiality", desc: "Never share your login ID or Password with anyone. Management is not responsible for losses due to shared credentials." },
                  { title: "Verification Policy", desc: "Large withdrawals may require OTP or KYC verification on your registered WhatsApp number." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-[#FFD700] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Transactions */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:border-[#FFD700]/30 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <Trophy className="h-8 w-8 text-[#FFD700]" />
                <h2 className="text-2xl font-black text-white uppercase italic">2. Transactions & Payouts</h2>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Withdrawal Timelines", desc: "UPI/IMPS withdrawals are processed within 30 minutes. Bank transfers may take up to 4 hours." },
                  { title: "Minimum & Maximum Limits", desc: "Minimum withdrawal is ₹500. Maximum limits depend on your account tier and activity level." },
                  { title: "Bonus Terms", desc: "Bonuses are subject to standard rollover requirements before they can be withdrawn." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-[#FFD700] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prohibited Activities */}
            <div className="bg-zinc-900/30 border border-red-900/20 rounded-3xl p-8 hover:border-red-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <X className="h-8 w-8 text-red-500" />
                <h2 className="text-2xl font-black text-white uppercase italic">3. Prohibited Conduct</h2>
              </div>
              <div className="space-y-5">
                {[
                  "Syndicate betting or the use of automated bots is strictly forbidden.",
                  "Exploiting technical glitches or system errors for unfair gain.",
                  "Use of abusive language with support staff via WhatsApp or Chat.",
                  "Involvement in any fraudulent activity or money laundering."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-black/40 rounded-xl border border-zinc-800">
                    <X className="h-5 w-5 text-red-500 shrink-0" />
                    <span className="text-zinc-400 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agreement Section */}
          <div className="mt-20 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FFD700] opacity-5 blur-[80px]"></div>
            <h3 className="text-3xl font-black text-white mb-6 uppercase italic">Acknowledgment</h3>
            <p className="text-zinc-400 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              By using Mahadev Book Official, you confirm that you are at least **18 years of age** and agree to all security and financial protocols mentioned above.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-[0_15px_40px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="h-6 w-6" />
                Get Verified ID
              </a>
              <a
                href="tel:+918969906425"
                className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                <Phone className="h-6 w-6" />
                Talk to Official
              </a>
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-12 text-center text-zinc-600">
            <p className="text-xs uppercase font-bold tracking-[0.2em]">
              © 2026 Mahadev Book Official. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;