import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  UserCheck, Shield, Key, Award,
  Zap, Clock, DollarSign, TrendingUp,
  Users, CheckCircle, Lock, MessageCircle,
  Smartphone, Mail, CreditCard, QrCode,
  BarChart, Trophy, Gift, Headphones,
  ArrowRight, Phone, Calendar,
  FileText, Download, Star
} from "lucide-react";

const BookIdPage: React.FC = () => {
  // WhatsApp setup
  const whatsappNumber = "918969906425";
  const whatsappMessage = "Hello Mahadev Book, I want to create my betting ID";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Benefits of having Book ID
  const benefits = [
    {
      icon: <Zap className="text-[#FFD700]" size={28} />,
      title: "Instant Access",
      description: "Get immediate access to all betting markets and live events"
    },
    {
      icon: <Shield className="text-[#FFD700]" size={28} />,
      title: "Verified Account",
      description: "Fully verified and secure account with KYC protection"
    },
    {
      icon: <DollarSign className="text-[#FFD700]" size={28} />,
      title: "Higher Limits",
      description: "Increased deposit and withdrawal limits for verified users"
    },
    {
      icon: <Award className="text-[#FFD700]" size={28} />,
      title: "Exclusive Bonuses",
      description: "Access to VIP bonuses and special promotions"
    },
    {
      icon: <TrendingUp className="text-[#FFD700]" size={28} />,
      title: "Better Odds",
      description: "Premium odds and special betting markets"
    },
    {
      icon: <Headphones className="text-[#FFD700]" size={28} />,
      title: "Priority Support",
      description: "24/7 dedicated customer support for ID holders"
    }
  ];

  // Registration steps
  const registrationSteps = [
    {
      number: "01",
      title: "Contact via WhatsApp",
      description: "Message us on WhatsApp to start the registration process",
      icon: <MessageCircle className="text-black" size={24} />
    },
    {
      number: "02",
      title: "Provide Details",
      description: "Share required information for KYC verification",
      icon: <UserCheck className="text-black" size={24} />
    },
    {
      number: "03",
      title: "Account Setup",
      description: "Our team creates your personalized betting account",
      icon: <Key className="text-black" size={24} />
    },
    {
      number: "04",
      title: "Get Credentials",
      description: "Receive your username and password securely",
      icon: <Mail className="text-black" size={24} />
    },
    {
      number: "05",
      title: "Make First Deposit",
      description: "Deposit funds and claim welcome bonus",
      icon: <CreditCard className="text-black" size={24} />
    },
    {
      number: "06",
      title: "Start Betting",
      description: "Access all features and begin your betting journey",
      icon: <Trophy className="text-black" size={24} />
    }
  ];

  // Required documents
  const requiredDocuments = [
    {
      title: "PAN Card",
      description: "For identity verification",
      icon: "📄"
    },
    {
      title: "Aadhaar Card",
      description: "For address proof",
      icon: "🆔"
    },
    {
      title: "Bank Details",
      description: "For withdrawals",
      icon: "🏦"
    },
    {
      title: "Mobile Number",
      description: "For OTP verification",
      icon: "📱"
    }
  ];

  // ID features
  const idFeatures = [
    { icon: "⚡", feature: "Instant Activation", desc: "Active within 5 minutes" },
    { icon: "🔐", feature: "Secure Login", desc: "Two-factor authentication" },
    { icon: "💰", feature: "Multiple Payment", desc: "UPI, Bank Transfer, Crypto" },
    { icon: "📊", feature: "Betting History", desc: "Complete transaction history" },
    { icon: "🎁", feature: "Welcome Bonus", desc: "Up to ₹10,000 on first deposit" },
    { icon: "👑", feature: "VIP Program", desc: "Exclusive rewards for loyal users" }
  ];

  // Pricing plans (optional)
  const pricingPlans = [
    {
      name: "Basic ID",
      price: "FREE",
      features: [
        "Standard betting limits",
        "Basic customer support",
        "Access to all sports",
        "Regular odds",
        "Email support"
      ],
      recommended: false
    },
    {
      name: "Premium ID",
      price: "VIP",
      features: [
        "Higher betting limits",
        "Priority customer support",
        "Premium odds",
        "Personal account manager",
        "Exclusive promotions",
        "Faster withdrawals"
      ],
      recommended: true
    },
    {
      name: "VIP ID",
      price: "ELITE",
      features: [
        "Unlimited betting limits",
        "24/7 dedicated support",
        "Best odds guaranteed",
        "VIP event invitations",
        "Custom bonuses",
        "Instant withdrawals"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FFD700] selection:text-black">
      <Helmet>
        <title>Mahadev Book ID | Get Your Verified Betting ID in 5 Minutes</title>
        <meta name="description" content="Get your official Mahadev Book betting ID. Verified account with higher limits, exclusive bonuses, and priority support. Create ID now!" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#FFD700]/30 px-5 py-2.5 rounded-full text-[#FFD700] text-sm font-black uppercase tracking-widest">
                <UserCheck size={18} />
                OFFICIAL BETTING ID REGISTRATION
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter">
                Get Your <span className="text-[#FFD700]">Mahadev Book ID</span>
              </h1>
              
              <div className="w-24 h-2 bg-[#FFD700] rounded-full"></div>
              
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                Join India's most trusted betting platform with a verified Mahadev Book ID. 
                Get access to premium features, higher limits, and exclusive bonuses.
              </p>

              {/* Quick Stats */}
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-black text-[#FFD700]">5 Min</div>
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Activation</div>
                </div>
                <div className="h-12 w-px bg-zinc-800"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#FFD700]">24/7</div>
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Support</div>
                </div>
                <div className="h-12 w-px bg-zinc-800"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#FFD700]">100%</div>
                  <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Secure</div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-8">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-[#25D366] text-white font-black px-12 py-6 rounded-xl hover:bg-green-600 transition-all hover:scale-105 shadow-[0_0_40px_rgba(37,211,102,0.3)] text-lg"
                >
                  <MessageCircle size={28} />
                  GET YOUR ID VIA WHATSAPP
                  <ArrowRight size={24} />
                </a>
                <p className="text-gray-500 text-sm mt-4">
                  Click to open WhatsApp with pre-filled message: "{whatsappMessage}"
                </p>
              </div>
            </div>

            {/* Right - ID Card Preview */}
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="absolute -inset-8 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-[3rem] blur opacity-20 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] border-2 border-zinc-800 p-10 shadow-2xl">
                {/* ID Card */}
                <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-2xl border-2 border-[#FFD700] overflow-hidden">
                  {/* ID Header */}
                  <div className="bg-gradient-to-r from-[#FFD700] to-orange-600 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                          <div className="text-2xl font-black text-[#FFD700]">MB</div>
                        </div>
                        <div>
                          <div className="text-black text-lg font-black">MAHADEV BOOK ID</div>
                          <div className="text-black/80 text-xs">Official Verified Account</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-black text-xs font-bold">STATUS</div>
                        <div className="text-black text-sm font-black bg-green-500 px-3 py-1 rounded-full">ACTIVE</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* ID Details */}
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">USER ID</div>
                        <div className="text-white text-xl font-black">MB785432</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">MEMBER SINCE</div>
                        <div className="text-white text-xl font-black">2024</div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">ACCOUNT LEVEL</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#FFD700] to-orange-500 w-3/4"></div>
                        </div>
                        <span className="text-[#FFD700] text-sm font-bold">VIP 3</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-[#FFD700] text-sm font-bold">DEPOSIT LIMIT</div>
                        <div className="text-white text-lg font-black">₹50,000/day</div>
                      </div>
                      <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-[#FFD700] text-sm font-bold">WITHDRAWAL</div>
                        <div className="text-white text-lg font-black">₹25,000/day</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* ID Footer */}
                  <div className="bg-zinc-900 p-4 border-t border-zinc-800">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>VERIFIED • SECURE • TRUSTED</span>
                      <span>ID: MB785432</span>
                    </div>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FFD700] to-orange-600 w-24 h-24 rounded-full flex items-center justify-center transform rotate-12">
                  <div className="text-black text-center">
                    <div className="text-xs font-black">OFFICIAL</div>
                    <div className="text-lg font-black">ID</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 px-6 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
              Benefits of <span className="text-[#FFD700]">Book ID</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Why every serious bettor needs a verified Mahadev Book ID
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-[#FFD700]/50 hover:bg-zinc-900 transition-all group"
              >
                <div className="mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#FFD700] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION PROCESS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
              Get ID in <span className="text-[#FFD700]">6 Easy Steps</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple and secure process to get your betting ID activated
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrationSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 border border-zinc-800 relative z-10">
                  <div className="text-5xl font-black text-[#FFD700]/10 mb-4 absolute top-4 right-4">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-400 text-center text-sm">{step.description}</p>
                </div>
                
                {/* Connecting line (for desktop) */}
                {idx < registrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-1 bg-[#FFD700]/30 transform translate-x-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>

          {/* Step 1 WhatsApp Button */}
          <div className="text-center mt-16">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-[#25D366] to-green-600 text-white font-black px-12 py-6 rounded-full hover:scale-105 transition-all shadow-[0_0_50px_rgba(37,211,102,0.3)] text-lg"
            >
              <MessageCircle size={28} />
              START STEP 1: MESSAGE ON WHATSAPP
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS */}
      <section className="py-20 px-6 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
                Required <span className="text-[#FFD700]">Documents</span>
              </h2>
              <p className="text-gray-400 mb-10">
                For KYC verification and account security, we need these documents. 
                All information is encrypted and 100% secure.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {requiredDocuments.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-900/30 rounded-2xl border border-zinc-800">
                    <div className="text-3xl">{doc.icon}</div>
                    <div>
                      <div className="text-white font-bold mb-1">{doc.title}</div>
                      <div className="text-gray-500 text-sm">{doc.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                <div className="flex items-center gap-4">
                  <Shield className="text-green-500" size={24} />
                  <div>
                    <div className="text-white font-bold mb-1">100% Secure & Encrypted</div>
                    <div className="text-gray-500 text-sm">Your documents are protected with bank-level security</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-10 border border-zinc-800">
              <h3 className="text-2xl font-black text-white mb-8 text-center">
                ID <span className="text-[#FFD700]">Features</span>
              </h3>
              <div className="space-y-6">
                {idFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-2xl hover:bg-zinc-800 transition-all">
                    <div className="text-2xl">{feature.icon}</div>
                    <div className="flex-1">
                      <div className="text-white font-bold">{feature.feature}</div>
                      <div className="text-gray-500 text-sm">{feature.desc}</div>
                    </div>
                    <CheckCircle className="text-green-500" size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
              Choose Your <span className="text-[#FFD700]">ID Plan</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select the perfect plan based on your betting needs and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx}
                className={`relative rounded-3xl p-8 border-2 ${plan.recommended ? 'border-[#FFD700] bg-gradient-to-b from-zinc-900 to-black' : 'border-zinc-800 bg-zinc-900/50'}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FFD700] to-orange-600 text-black font-black px-6 py-2 rounded-full text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-white mb-4">{plan.name}</h3>
                  <div className="text-5xl font-black text-[#FFD700] mb-2">{plan.price}</div>
                  <div className="text-gray-500">Registration</div>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-bold py-4 rounded-xl transition-all ${plan.recommended ? 'bg-[#FFD700] text-black hover:bg-yellow-400' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
                >
                  Get {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-black border-t border-zinc-900">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-12 md:p-16 border border-zinc-800 text-center">
          <UserCheck className="w-20 h-20 mx-auto mb-8 text-[#FFD700]" />
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
            Ready for Your <span className="text-[#FFD700]">Book ID?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join 500,000+ verified users who trust Mahadev Book for secure and exciting betting experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black font-black px-12 py-6 rounded-full flex items-center justify-center gap-4 hover:bg-yellow-400 transition-all hover:scale-105 text-lg"
            >
              <MessageCircle size={24} />
              Get ID via WhatsApp
            </a>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 text-white font-black px-12 py-6 rounded-full flex items-center justify-center gap-4 hover:bg-zinc-700 transition-all border border-zinc-700 text-lg"
            >
              <Phone size={24} />
              Call for Assistance
            </a>
          </div>
          
          <div className="mt-10 pt-10 border-t border-zinc-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-black text-[#FFD700]">5 Min</div>
                <div className="text-gray-500 text-sm">Activation Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-[#FFD700]">24/7</div>
                <div className="text-gray-500 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-[#FFD700]">100%</div>
                <div className="text-gray-500 text-sm">Secure Process</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-[#FFD700]">₹10K</div>
                <div className="text-gray-500 text-sm">Welcome Bonus</div>
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
        <UserCheck size={24} />
        <span className="hidden sm:inline">Get Book ID</span>
      </a>
    </div>
  );
};

export default BookIdPage;