import React from 'react';
import { 
  ShieldCheck, Smartphone, Zap, Headphones, 
  Lock, CheckCircle, ArrowRight, MessageCircle, 
  Download, Users, Award, TrendingUp, DollarSign,
  ChevronRight, Star, Shield
} from 'lucide-react';

const HomePage = () => {
  // Updated WhatsApp Number
  const whatsappNumber = "918969906425";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Mahadev%20Book,%20I%20want%20to%20get%20my%20ID`;

  return (
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-[#FFD700] selection:text-black">
      
      {/* 1. HERO SECTION - Content Right, Image Left (UPDATED) */}
      <section className="relative pt-16 pb-24 px-4 md:px-8 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Left (UPDATED) */}
          <div className="relative group w-full max-w-[600px] animate-in fade-in slide-in-from-left duration-1000 order-1 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#111] border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/imghero.png" 
                alt="Mahadev Book Official" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                 <p className="text-[#FFD700] font-black text-2xl italic tracking-tight">Start Winning Today!</p>
                 <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Join 1.2M+ Active Users</p>
              </div>
            </div>
          </div>

          {/* Content Right (UPDATED) */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700 z-10 order-2 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#FFD700]/30 px-4 py-1.5 rounded-full text-[#FFD700] text-sm font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Official Platform 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] italic uppercase tracking-tighter">
              Mahadev Book – India’s <br />
              <span className="text-[#FFD700]">Most Trusted Online</span> <br />
              Betting Platform
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
              Welcome to Mahadev Book, the online betting game-changer. Our platform ensures every user enjoys over 60,000 live events per month with fully encrypted transactions.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#FFD700] text-black font-black px-10 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,215,0,0.25)]"
              >
                <Smartphone size={24} /> GET MAHADEV BOOK ID
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white font-black px-10 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-[0_0_40px_rgba(37,211,102,0.2)]"
              >
                <MessageCircle size={24} /> WHATSAPP NOW
              </a>
            </div>

            {/* 3 Screenshot Images Below Content (NEW ADDITION) */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-[#FFD700] rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative rounded-xl overflow-hidden border border-zinc-800 hover:border-[#FFD700] transition-all duration-500">
                  <img 
                    src="/screenshot1.png" 
                    alt="Mahadev Book App Interface 1" 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-[#FFD700] rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative rounded-xl overflow-hidden border border-zinc-800 hover:border-[#FFD700] transition-all duration-500">
                  <img 
                    src="/screenshot2.png" 
                    alt="Mahadev Book App Interface 2" 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-[#FFD700] rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative rounded-xl overflow-hidden border border-zinc-800 hover:border-[#FFD700] transition-all duration-500">
                  <img 
                    src="/screenshot3.png" 
                    alt="Mahadev Book App Interface 3" 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECURITY TRUST BAR */}
      <section className="bg-black py-12 border-b border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-wrap justify-between gap-8 md:gap-4">
          {[
            { icon: <Lock className="text-[#FFD700]" />, label: "256-bit SSL Encryption" },
            { icon: <Award className="text-[#FFD700]" />, label: "Certified Fair Play" },
            { icon: <Shield className="text-[#FFD700]" />, label: "Fraud Protection" },
            { icon: <Users className="text-[#FFD700]" />, label: "Account Security" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 flex-1 min-w-[150px]">
              <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800 group hover:border-[#FFD700] transition-all hover:-translate-y-1">
                {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE BENEFITS */}
      <section className="py-24 px-4 bg-[#080808]">
        <div className="max-w-7xl mx-auto text-center mb-20 space-y-5">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            The Official <span className="text-[#FFD700]">Mahadev Book</span> Website
          </h2>
          <div className="w-32 h-2 bg-[#FFD700] mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Verified and trusted official platform. Our commitment to security, fair play, and reliability makes us India’s most preferred online betting destination.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
          {[
            { title: "Expertise", desc: "Built by sports & gaming veterans with 15+ years of proven innovation.", icon: "🎓" },
            { title: "Experience", desc: "Trusted by 1.2M+ users since 2018 with over 60M successful transactions.", icon: "🎖️" },
            { title: "Authority", desc: "Recognized as India’s leading betting platform by top industry awards.", icon: "🏆" },
            { title: "Trust", desc: "SSL encrypted, PCI-DSS compliant, and fair play certified by iTech Labs.", icon: "🛡️" }
          ].map((card, i) => (
            <div key={i} className="bg-zinc-900/40 p-12 rounded-[2.5rem] border border-zinc-800 hover:border-[#FFD700]/50 transition-all hover:-translate-y-3 group text-center">
              <div className="text-6xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110">{card.icon}</div>
              <h3 className="text-2xl font-black mb-4 text-white group-hover:text-[#FFD700] transition-colors">{card.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WITHDRAWAL PROOFS */}
      <section className="py-24 px-4 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#FFD700] italic leading-tight uppercase tracking-tighter">
            Our Users Speak for Us – <br />
            Mahadev Book Always Delivers <br />
            <span className="text-white">100% Guaranteed Withdrawals.</span>
          </h2>
          <p className="text-gray-500 mt-6 text-xl uppercase tracking-[0.3em] font-black">
            Real WhatsApp feedback from verified users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative group cursor-pointer">
              <div className="absolute -inset-2 bg-[#FFD700] rounded-[2rem] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative rounded-[1.5rem] overflow-hidden border-2 border-zinc-900 hover:border-[#FFD700] transition-all duration-500">
                <img 
                  src={`/whatsapp-proof-${item}.png`} 
                  alt="Withdrawal Success Proof" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. APP FEATURES & DOWNLOAD */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-[1300px] mx-auto bg-gradient-to-br from-[#111] to-black p-12 md:p-24 rounded-[3rem] border border-zinc-800 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700] opacity-5 blur-[150px]"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10 z-10">
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
                Download the <br /> <span className="text-[#FFD700]">Mahadev Betting App</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
                India’s most dependable online betting app. Compatible with both Android and iOS, featuring real-time updates and instant deposits.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
                {[
                  "Live betting on 60,000+ events",
                  "Fast withdrawals (minutes)",
                  "24/7 Dedicated Support",
                  "100% Secure & Encrypted",
                  "Exclusive App Bonuses",
                  "Real-time Match Odds"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-gray-200">
                    <CheckCircle className="text-[#FFD700] shrink-0" size={24} />
                    <span className="font-black text-sm uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <button className="bg-white text-black font-black px-14 py-6 rounded-2xl flex items-center gap-4 hover:bg-[#FFD700] transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:scale-105 uppercase tracking-widest text-lg">
                  <Download size={28} /> Download App Now
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/3 relative animate-float">
               <div className="absolute -inset-10 bg-[#FFD700]/10 blur-[100px] rounded-full"></div>
              <img 
                src="/app-mockup.png" 
                alt="Mahadev Book Mobile App" 
                className="relative w-full h-auto drop-shadow-[0_0_100px_rgba(255,215,0,0.2)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESPONSIBLE GAMBLING */}
      <section className="py-24 px-4 border-t border-zinc-900 bg-black">
        <div className="max-w-5xl mx-auto bg-zinc-900/40 p-16 rounded-[3rem] border border-zinc-800 shadow-xl">
          <h2 className="text-4xl font-black text-[#FFD700] mb-8 uppercase italic tracking-tighter">Responsible Betting</h2>
          <p className="text-gray-300 text-xl mb-10 leading-relaxed font-medium">
            Your Mahadev Book ID unlocks exciting opportunities — but it’s equally important to bet responsibly:
          </p>
          <ul className="grid md:grid-cols-2 gap-8 text-gray-400">
            {[
              "Set daily or weekly betting limits",
              "Avoid chasing losses",
              "Take breaks to maintain balance",
              "Use tools like self-exclusion"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-5 group">
                <div className="w-3 h-3 mt-2.5 bg-[#FFD700] rounded-full shadow-[0_0_15px_rgba(255,215,0,1)] group-hover:scale-125 transition-transform"></div>
                <span className="font-bold text-lg group-hover:text-white transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. FLOATING WHATSAPP BUTTON */}
      <a 
        href={whatsappLink} 
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-10 right-10 z-[1000] bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-[0_20px_60px_rgba(37,211,102,0.5)] flex items-center gap-4 hover:scale-110 transition-all animate-bounce"
      >
        <MessageCircle size={32} />
        <span className="hidden sm:inline">Get Your ID Now</span>
      </a>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
};

export default HomePage;