import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  Smartphone, Download, Shield, Zap, 
  Clock, DollarSign, TrendingUp, Award,
  Users, BarChart, Bell, Globe,
  Lock, Wifi, Battery, Cpu,
  CheckCircle, ArrowRight, MessageCircle,
  QrCode, Play, AppWindow,
  Cloud, Server, SmartphoneCharging
} from "lucide-react";

const BettingAppPage: React.FC = () => {
  // WhatsApp setup
  const whatsappNumber = "918969906425";
  const whatsappMessage = "Hello Mahadev Book, I want to download your betting app";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // App features
  const appFeatures = [
    {
      icon: <Zap className="text-[#FFD700]" size={28} />,
      title: "Lightning Fast",
      description: "Instant match updates and real-time odds with no lag"
    },
    {
      icon: <Shield className="text-[#FFD700]" size={28} />,
      title: "Military-Grade Security",
      description: "256-bit SSL encryption & secure payment gateway"
    },
    {
      icon: <Clock className="text-[#FFD700]" size={28} />,
      title: "24/7 Live Betting",
      description: "Round-the-clock betting on global sports events"
    },
    {
      icon: <DollarSign className="text-[#FFD700]" size={28} />,
      title: "Instant Withdrawals",
      description: "Get your winnings in minutes, not days"
    },
    {
      icon: <TrendingUp className="text-[#FFD700]" size={28} />,
      title: "Live Statistics",
      description: "Real-time match stats and performance analytics"
    },
    {
      icon: <Bell className="text-[#FFD700]" size={28} />,
      title: "Smart Notifications",
      description: "Custom alerts for matches, odds changes & results"
    }
  ];

  // App specifications
  const appSpecs = [
    { icon: <Smartphone className="text-[#FFD700]" />, label: "Platform", value: "Android & iOS" },
    { icon: <Cloud className="text-[#FFD700]" />, label: "Size", value: "45 MB" },
    { icon: <Cpu className="text-[#FFD700]" />, label: "Version", value: "v3.5.2" },
    { icon: <Globe className="text-[#FFD700]" />, label: "Languages", value: "5+ Languages" },
    { icon: <Wifi className="text-[#FFD700]" />, label: "Minimum Speed", value: "2 Mbps" },
    { icon: <Battery className="text-[#FFD700]" />, label: "Battery Usage", value: "Optimized" }
  ];

  // Download steps
  const downloadSteps = [
    {
      step: "01",
      title: "Download APK",
      description: "Get the latest APK file directly from our secure server",
      icon: <Download className="text-black" size={24} />
    },
    {
      step: "02",
      title: "Install App",
      description: "Allow installation from unknown sources & complete setup",
      icon: <AppWindow className="text-black" size={24} />
    },
    {
      step: "03",
      title: "Register Account",
      description: "Create your account with mobile number verification",
      icon: <Users className="text-black" size={24} />
    },
    {
      step: "04",
      title: "Start Betting",
      description: "Make deposit & begin betting on live matches instantly",
      icon: <Play className="text-black" size={24} />
    }
  ];

  // Sports available
  const availableSports = [
    { name: "Cricket", matches: "25,000+", icon: "🏏" },
    { name: "Football", matches: "18,000+", icon: "⚽" },
    { name: "Tennis", matches: "8,000+", icon: "🎾" },
    { name: "Basketball", matches: "6,500+", icon: "🏀" },
    { name: "Kabaddi", matches: "3,200+", icon: "🤼" },
    { name: "Horse Racing", matches: "2,800+", icon: "🏇" },
    { name: "E-Sports", matches: "4,500+", icon: "🎮" },
    { name: "Baseball", matches: "3,700+", icon: "⚾" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FFD700] selection:text-black">
      <Helmet>
        <title>Mahadev Betting App | Download Official App for Android & iOS</title>
        <meta name="description" content="Download official Mahadev Book betting app for Android & iOS. Features live betting, instant withdrawals, secure transactions & 24/7 support." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#FFD700]/30 px-5 py-2.5 rounded-full text-[#FFD700] text-sm font-black uppercase tracking-widest">
                <Smartphone size={18} />
                OFFICIAL BETTING APP 2024
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter">
                Mahadev <span className="text-[#FFD700]">Betting App</span> <br />
                For Mobile
              </h1>
              
              <div className="w-24 h-2 bg-[#FFD700] rounded-full"></div>
              
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                Experience seamless betting with India's #1 betting application. 
                Get real-time odds, instant withdrawals, and exclusive mobile bonuses.
              </p>

              {/* App Store Ratings */}
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-black text-[#FFD700]">4.8★</div>
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Google Play</div>
                </div>
                <div className="h-12 w-px bg-zinc-800"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#FFD700]">4.9★</div>
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">App Store</div>
                </div>
                <div className="h-12 w-px bg-zinc-800"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#FFD700]">1.2M+</div>
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Downloads</div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 pt-8">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFD700] text-black font-black px-10 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,215,0,0.25)]"
                >
                  <Download size={24} />
                  DOWNLOAD APP
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 text-white font-black px-10 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all border border-zinc-800"
                >
                  <MessageCircle size={24} />
                  GET APK LINK
                </a>
              </div>
            </div>

            {/* Right - App Mockup */}
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="absolute -inset-8 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-[3rem] blur opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] border-2 border-zinc-800 p-8 shadow-2xl">
                {/* App Screen */}
                <div className="bg-black rounded-2xl overflow-hidden border border-zinc-800">
                  {/* App Header */}
                  <div className="bg-gradient-to-r from-[#FFD700] to-orange-600 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                          <div className="text-2xl font-black text-[#FFD700]">MB</div>
                        </div>
                        <div>
                          <div className="text-black text-sm font-bold">Mahadev Book</div>
                          <div className="text-black/80 text-xs">Live • Cricket • 15,000+</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-black text-xs font-bold">BALANCE</div>
                        <div className="text-black text-xl font-black">₹25,840</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 space-y-6">
                    {/* Live Match */}
                    <div className="bg-zinc-900 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[#FFD700] text-xs font-bold flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          LIVE • IPL 2024
                        </span>
                        <span className="text-gray-500 text-xs">62m 24s</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <div className="text-xl font-black">MI</div>
                          <div className="text-gray-400 text-xs">182/4</div>
                        </div>
                        <div className="text-gray-500 text-sm font-bold">VS</div>
                        <div className="text-center">
                          <div className="text-xl font-black">CSK</div>
                          <div className="text-gray-400 text-xs">165/6</div>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <button className="bg-[#FFD700] text-black text-xs font-bold py-2 rounded-lg">1.85</button>
                        <button className="bg-zinc-800 text-white text-xs font-bold py-2 rounded-lg">2.10</button>
                        <button className="bg-zinc-800 text-white text-xs font-bold py-2 rounded-lg">1.95</button>
                      </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="grid grid-cols-4 gap-3">
                      <button className="bg-zinc-900 p-3 rounded-xl text-center hover:bg-[#FFD700] hover:text-black transition-all">
                        <DollarSign size={18} className="mx-auto mb-1" />
                        <div className="text-xs font-bold">Deposit</div>
                      </button>
                      <button className="bg-zinc-900 p-3 rounded-xl text-center hover:bg-[#FFD700] hover:text-black transition-all">
                        <TrendingUp size={18} className="mx-auto mb-1" />
                        <div className="text-xs font-bold">Live</div>
                      </button>
                      <button className="bg-zinc-900 p-3 rounded-xl text-center hover:bg-[#FFD700] hover:text-black transition-all">
                        <BarChart size={18} className="mx-auto mb-1" />
                        <div className="text-xs font-bold">Stats</div>
                      </button>
                      <button className="bg-zinc-900 p-3 rounded-xl text-center hover:bg-[#FFD700] hover:text-black transition-all">
                        <Award size={18} className="mx-auto mb-1" />
                        <div className="text-xs font-bold">Bonus</div>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Device Frame */}
                <div className="absolute -inset-2 border-2 border-zinc-700 rounded-[2.8rem] pointer-events-none"></div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl border-x-2 border-b-2 border-zinc-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
              Why Choose <span className="text-[#FFD700]">Our App</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built with cutting-edge technology to provide the best betting experience on mobile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-[#FFD700]/50 hover:bg-zinc-900 transition-all group"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#FFD700] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP SPECIFICATIONS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
                App <span className="text-[#FFD700]">Specifications</span>
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {appSpecs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-900/30 rounded-2xl border border-zinc-800">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center">
                      {spec.icon}
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">{spec.label}</div>
                      <div className="text-white text-lg font-black">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-10 border border-zinc-800">
              <h3 className="text-2xl font-black text-white mb-8 text-center">
                Download via <span className="text-[#FFD700]">QR Code</span>
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 bg-white rounded-2xl p-6 mb-8 flex items-center justify-center">
                  <QrCode className="w-full h-full text-black" />
                </div>
                <p className="text-gray-400 text-center mb-6">
                  Scan QR code with your phone camera to download APK directly
                </p>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#FFD700] text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all"
                >
                  <SmartphoneCharging size={20} />
                  Get Download Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD STEPS */}
      <section className="py-20 px-6 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
              How to <span className="text-[#FFD700]">Install</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple 4-step process to get started with Mahadev Betting App
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downloadSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-[#FFD700] to-orange-600 rounded-3xl p-8 text-center relative z-10">
                  <div className="text-5xl font-black text-black/20 mb-4 absolute top-4 right-4">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-black text-black mb-4">{step.title}</h3>
                  <p className="text-black/80 text-sm">{step.description}</p>
                </div>
                {idx < downloadSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-1 bg-[#FFD700]/30 transform translate-x-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABLE SPORTS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
              Sports <span className="text-[#FFD700]">Available</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bet on 60,000+ monthly events across all major sports worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {availableSports.map((sport, idx) => (
              <div 
                key={idx}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center hover:border-[#FFD700] hover:bg-zinc-900 transition-all group"
              >
                <div className="text-4xl mb-4">{sport.icon}</div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#FFD700] transition-colors">
                  {sport.name}
                </h3>
                <div className="text-[#FFD700] text-sm font-bold">{sport.matches} Matches</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-12 md:p-16 border border-zinc-800 text-center">
          <Server className="w-20 h-20 mx-auto mb-8 text-[#FFD700]" />
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
            Ready to <span className="text-[#FFD700]">Download?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join 1.2 million users who trust Mahadev Book for secure, fast, and exciting mobile betting experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black font-black px-12 py-6 rounded-full flex items-center justify-center gap-4 hover:bg-yellow-400 transition-all hover:scale-105 text-lg"
            >
              <Download size={24} />
              Download App Now
            </a>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 text-white font-black px-12 py-6 rounded-full flex items-center justify-center gap-4 hover:bg-zinc-800 transition-all border border-zinc-800 text-lg"
            >
              <MessageCircle size={24} />
              Get Installation Help
            </a>
          </div>
          
          <div className="mt-10 pt-10 border-t border-zinc-800">
            <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={16} />
                <span>100% Virus Free</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={16} />
                <span>Regular Updates</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={16} />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={16} />
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[1000] bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_20px_60px_rgba(37,211,102,0.5)] flex items-center gap-3 hover:scale-110 transition-all animate-bounce"
      >
        <Download size={24} />
        <span className="hidden sm:inline">Download App</span>
      </a>
    </div>
  );
};

export default BettingAppPage;