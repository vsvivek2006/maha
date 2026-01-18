import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  HelpCircle, MessageCircle, Phone, Mail,
  ChevronDown, ChevronUp, Shield, Lock,
  DollarSign, Clock, Users, Award,
  Zap, Smartphone, Download, UserCheck,
  CheckCircle, XCircle, AlertCircle,
  CreditCard, TrendingUp, BarChart,
  Headphones, Globe, Key, QrCode
} from "lucide-react";

const FaqPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  // WhatsApp setup
  const whatsappNumber = "918969906425";
  const whatsappMessage = "Hello Mahadev Book, I have a question about your services";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  // FAQ Categories
  const faqCategories = [
    { name: "General", count: 8, icon: <HelpCircle className="text-[#FFD700]" size={20} /> },
    { name: "Account", count: 6, icon: <UserCheck className="text-[#FFD700]" size={20} /> },
    { name: "Deposit", count: 7, icon: <DollarSign className="text-[#FFD700]" size={20} /> },
    { name: "Withdrawal", count: 6, icon: <CreditCard className="text-[#FFD700]" size={20} /> },
    { name: "Security", count: 5, icon: <Shield className="text-[#FFD700]" size={20} /> },
    { name: "Technical", count: 4, icon: <Smartphone className="text-[#FFD700]" size={20} /> }
  ];

  // FAQ Items
  const faqItems = [
    // General Questions
    {
      category: "General",
      question: "What is Mahadev Book?",
      answer: "Mahadev Book is India's most trusted online sports betting platform, offering secure betting services across cricket, football, tennis, and other major sports. We provide real-time odds, live betting, and instant withdrawals.",
      tags: ["Platform", "Introduction"]
    },
    {
      category: "General",
      question: "Is Mahadev Book legal in India?",
      answer: "Yes, Mahadev Book operates in full compliance with Indian laws. We provide a platform for sports enthusiasts to engage in legal sports betting activities. Our services are available to users above 18 years of age.",
      tags: ["Legal", "Compliance"]
    },
    {
      category: "General",
      question: "How do I start betting on Mahadev Book?",
      answer: "To start betting: 1) Contact us via WhatsApp to create your account, 2) Complete KYC verification, 3) Make your first deposit, 4) Start betting on your favorite sports. Our team guides you through every step.",
      tags: ["Beginners", "Getting Started"]
    },
    {
      category: "General",
      question: "What sports are available for betting?",
      answer: "We offer betting on cricket (IPL, International), football (Premier League, Champions League), tennis, basketball, kabaddi, horse racing, e-sports, and many other sports with over 60,000 monthly events.",
      tags: ["Sports", "Markets"]
    },
    {
      category: "General",
      question: "What is the minimum age requirement?",
      answer: "You must be at least 18 years old to create an account and use our services. Age verification is part of our KYC process to ensure responsible gaming.",
      tags: ["Age", "Verification"]
    },
    {
      category: "General",
      question: "Do you offer live betting?",
      answer: "Yes! We offer comprehensive live betting (in-play) options with real-time odds updates. You can bet on matches while they're happening across all major sports.",
      tags: ["Live", "In-Play"]
    },
    {
      category: "General",
      question: "Are there any geographical restrictions?",
      answer: "Our services are available throughout India. However, users must ensure that online betting is permitted in their specific state according to local regulations.",
      tags: ["Location", "Availability"]
    },
    {
      category: "General",
      question: "What languages do you support?",
      answer: "Our platform supports English, Hindi, Gujarati, Bengali, and Tamil. Customer support is available in multiple Indian languages.",
      tags: ["Languages", "Support"]
    },

    // Account Questions
    {
      category: "Account",
      question: "How do I create a Mahadev Book account?",
      answer: "Contact us via WhatsApp (+91 8969906425) to begin registration. Our team will guide you through the KYC process and account setup. You'll receive your login credentials within 10-15 minutes after verification.",
      tags: ["Registration", "Account"]
    },
    {
      category: "Account",
      question: "What documents are required for registration?",
      answer: "Required documents: PAN card, Aadhaar card (for address proof), bank account details, and active mobile number for OTP verification. All documents are encrypted and securely stored.",
      tags: ["KYC", "Documents"]
    },
    {
      category: "Account",
      question: "How long does account verification take?",
      answer: "Account verification typically takes 5-10 minutes during business hours. Our team works 24/7 to ensure quick verification for all users.",
      tags: ["Verification", "Time"]
    },
    {
      category: "Account",
      question: "Can I have multiple accounts?",
      answer: "No, each user is allowed only one account. Multiple accounts may lead to suspension of all accounts. We have strict measures to prevent duplicate accounts.",
      tags: ["Multiple", "Accounts"]
    },
    {
      category: "Account",
      question: "How do I reset my password?",
      answer: "Contact our support team via WhatsApp or email. After identity verification, we'll reset your password and send you new login credentials securely.",
      tags: ["Password", "Security"]
    },
    {
      category: "Account",
      question: "Can I change my registered mobile number?",
      answer: "Yes, you can update your mobile number by contacting support with proper verification. This requires submitting a request along with new mobile verification.",
      tags: ["Update", "Mobile"]
    },

    // Deposit Questions
    {
      category: "Deposit",
      question: "What payment methods do you accept?",
      answer: "We accept UPI (Google Pay, PhonePe, Paytm), Bank Transfer, and cryptocurrencies. All payment methods are secure and encrypted.",
      tags: ["Payment", "Methods"]
    },
    {
      category: "Deposit",
      question: "What is the minimum deposit amount?",
      answer: "Minimum deposit is ₹500. There's no maximum limit for VIP users, while standard users have daily limits based on their account level.",
      tags: ["Minimum", "Deposit"]
    },
    {
      category: "Deposit",
      question: "How long do deposits take to reflect?",
      answer: "UPI deposits: Instant, Bank transfers: 15-30 minutes, Cryptocurrency: 10-20 minutes (depending on network confirmation).",
      tags: ["Time", "Processing"]
    },
    {
      category: "Deposit",
      question: "Are there any deposit fees?",
      answer: "No, we don't charge any fees for deposits. However, your bank or payment provider may apply their own transaction charges.",
      tags: ["Fees", "Charges"]
    },
    {
      category: "Deposit",
      question: "Is there a deposit bonus for new users?",
      answer: "Yes! New users get up to ₹10,000 welcome bonus on their first deposit. Contact our team to learn about current bonus offers.",
      tags: ["Bonus", "Welcome"]
    },
    {
      category: "Deposit",
      question: "Why was my deposit declined?",
      answer: "Common reasons: 1) Insufficient funds, 2) Transaction limit exceeded, 3) Bank restrictions, 4) Technical issues. Contact support for immediate assistance.",
      tags: ["Declined", "Issues"]
    },
    {
      category: "Deposit",
      question: "Can I deposit using someone else's account?",
      answer: "No, all deposits must be made from accounts registered in your name. Third-party payments are not accepted for security reasons.",
      tags: ["Own Account", "Security"]
    },

    // Withdrawal Questions
    {
      category: "Withdrawal",
      question: "How do I withdraw my winnings?",
      answer: "Request withdrawal through your account dashboard. Choose your preferred method (UPI or Bank Transfer), enter amount, and submit. Withdrawals are processed within 30 minutes.",
      tags: ["Process", "Withdrawal"]
    },
    {
      category: "Withdrawal",
      question: "What is the minimum withdrawal amount?",
      answer: "Minimum withdrawal is ₹1,000. Maximum daily withdrawal limits vary based on your account level (Basic: ₹25,000, Premium: ₹50,000, VIP: ₹1,00,000).",
      tags: ["Minimum", "Maximum"]
    },
    {
      category: "Withdrawal",
      question: "How long do withdrawals take?",
      answer: "Withdrawals are processed within 30 minutes during business hours. UPI withdrawals: 5-15 minutes, Bank transfers: 15-30 minutes.",
      tags: ["Time", "Processing"]
    },
    {
      category: "Withdrawal",
      question: "Are there withdrawal fees?",
      answer: "No withdrawal fees for VIP users. Basic users may have nominal processing fees. All charges are clearly displayed before confirmation.",
      tags: ["Fees", "Charges"]
    },
    {
      category: "Withdrawal",
      question: "Why is my withdrawal pending?",
      answer: "Common reasons: 1) Account verification required, 2) Betting turnover not completed, 3) Technical review, 4) Bank processing delays. Contact support for specific cases.",
      tags: ["Pending", "Issues"]
    },
    {
      category: "Withdrawal",
      question: "Can I cancel a withdrawal request?",
      answer: "Yes, you can cancel pending withdrawal requests within 5 minutes of submission. After that, the request goes into processing and cannot be cancelled.",
      tags: ["Cancel", "Request"]
    },

    // Security Questions
    {
      category: "Security",
      question: "Is my money safe with Mahadev Book?",
      answer: "Yes! We use 256-bit SSL encryption, secure payment gateways, and maintain separate client funds accounts. Your money is protected with bank-level security.",
      tags: ["Safety", "Security"]
    },
    {
      category: "Security",
      question: "How do you protect my personal information?",
      answer: "We use military-grade encryption, regular security audits, and comply with data protection regulations. Your data is never shared with third parties without consent.",
      tags: ["Privacy", "Data"]
    },
    {
      category: "Security",
      question: "What is two-factor authentication?",
      answer: "2FA adds an extra layer of security. In addition to your password, you'll need to enter a code sent to your registered mobile number for critical operations.",
      tags: ["2FA", "Authentication"]
    },
    {
      category: "Security",
      question: "How can I keep my account secure?",
      answer: "1) Never share login details, 2) Use strong passwords, 3) Enable 2FA, 4) Log out after sessions, 5) Regularly update contact information.",
      tags: ["Account", "Protection"]
    },
    {
      category: "Security",
      question: "What should I do if I suspect unauthorized access?",
      answer: "Immediately contact our 24/7 support team. We'll freeze your account, investigate, and help secure your account with new credentials.",
      tags: ["Hacked", "Security"]
    },

    // Technical Questions
    {
      category: "Technical",
      question: "Do you have a mobile app?",
      answer: "Yes! We have dedicated apps for Android and iOS. Download links are available on our website or via WhatsApp from our support team.",
      tags: ["App", "Mobile"]
    },
    {
      category: "Technical",
      question: "The website/app is not loading. What should I do?",
      answer: "1) Check internet connection, 2) Clear cache/cookies, 3) Try different browser, 4) Use VPN if blocked, 5) Contact support for mirror links.",
      tags: ["Technical", "Issues"]
    },
    {
      category: "Technical",
      question: "Do you offer live streaming?",
      answer: "Yes, we provide live streaming for major cricket and football matches. Available for users with active bets or premium accounts.",
      tags: ["Streaming", "Live"]
    },
    {
      category: "Technical",
      question: "Can I use multiple devices with one account?",
      answer: "Yes, you can access your account from multiple devices. However, for security, simultaneous logins may trigger security verification.",
      tags: ["Devices", "Access"]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const filteredFaqs = activeCategory === "All" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FFD700] selection:text-black">
      <Helmet>
        <title>FAQ - Mahadev Book | Frequently Asked Questions & Support</title>
        <meta name="description" content="Find answers to common questions about Mahadev Book account, deposits, withdrawals, security, and betting. Get instant support via WhatsApp." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#FFD700]/30 px-5 py-2.5 rounded-full text-[#FFD700] text-sm font-black uppercase tracking-widest">
            <HelpCircle size={18} />
            FREQUENTLY ASKED QUESTIONS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter">
            How Can We <span className="text-[#FFD700]">Help You?</span>
          </h1>
          
          <div className="w-32 h-2 bg-[#FFD700] mx-auto rounded-full"></div>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Find quick answers to common questions about Mahadev Book account, deposits, 
            withdrawals, security, and betting features. Can't find what you need? Contact us directly.
          </p>

          {/* Quick Support Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-black text-[#FFD700] flex items-center justify-center gap-2">
                <Zap size={24} />
                24/7
              </div>
              <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Support</div>
            </div>
            <div className="h-12 w-px bg-zinc-800 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#FFD700] flex items-center justify-center gap-2">
                <Clock size={24} />
                5 Min
              </div>
              <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Response Time</div>
            </div>
            <div className="h-12 w-px bg-zinc-800 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#FFD700] flex items-center justify-center gap-2">
                <CheckCircle size={24} />
                100%
              </div>
              <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Resolution Rate</div>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-12">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-black px-10 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-green-600 transition-all hover:scale-105"
            >
              <MessageCircle size={24} />
              ASK ON WHATSAPP
            </a>
            <a 
              href={`tel:${whatsappNumber}`}
              className="bg-[#FFD700] text-black font-black px-10 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all hover:scale-105"
            >
              <Phone size={24} />
              CALL SUPPORT
            </a>
          </div>
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/10 via-transparent to-transparent"></div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Categories Widget */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6">
                <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                  <HelpCircle className="text-[#FFD700]" size={24} />
                  FAQ Categories
                </h3>
                <div className="space-y-4">
                  <button
                    onClick={() => setActiveCategory("All")}
                    className={`w-full text-left p-4 rounded-xl flex items-center justify-between transition-all ${activeCategory === "All" ? 'bg-[#FFD700] text-black' : 'bg-zinc-800/30 hover:bg-zinc-800'}`}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle size={18} />
                      <span className="font-bold">All Questions</span>
                    </div>
                    <span className="bg-zinc-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {faqItems.length}
                    </span>
                  </button>
                  
                  {faqCategories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full text-left p-4 rounded-xl flex items-center justify-between transition-all ${activeCategory === cat.name ? 'bg-[#FFD700] text-black' : 'bg-zinc-800/30 hover:bg-zinc-800'}`}
                    >
                      <div className="flex items-center gap-3">
                        {cat.icon}
                        <span className="font-bold">{cat.name}</span>
                      </div>
                      <span className="bg-zinc-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Support Widget */}
              <div className="bg-gradient-to-br from-[#FFD700] to-orange-600 rounded-3xl p-6 text-center">
                <Headphones className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="text-xl font-black text-black mb-4">Still Have Questions?</h3>
                <p className="text-black/80 mb-6 text-sm">
                  Our support team is available 24/7 to help you
                </p>
                <div className="space-y-3">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-black text-white font-bold py-3 rounded-xl hover:scale-105 transition-all"
                  >
                    WhatsApp Support
                  </a>
                  <a 
                    href={`tel:${whatsappNumber}`}
                    className="block bg-white text-black font-bold py-3 rounded-xl hover:scale-105 transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Popular Questions */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6">
                <h3 className="text-xl font-black text-white mb-6">Popular Questions</h3>
                <div className="space-y-4">
                  {[
                    "How to create account?",
                    "Minimum deposit amount?",
                    "Withdrawal time?",
                    "Is it legal in India?",
                    "Mobile app download?"
                  ].map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const index = faqItems.findIndex(item => 
                          item.question.toLowerCase().includes(question.toLowerCase().replace('?', ''))
                        );
                        if (index !== -1) {
                          setActiveCategory(faqItems[index].category);
                          if (!openItems.includes(index)) {
                            toggleItem(index);
                          }
                          // Scroll to the question
                          setTimeout(() => {
                            document.getElementById(`faq-${index}`)?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }
                      }}
                      className="w-full text-left p-3 rounded-xl bg-zinc-800/30 hover:bg-zinc-800 transition-all text-sm"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main FAQ Content */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                {activeCategory === "All" ? "All Questions" : `${activeCategory} Questions`}
              </h2>
              <p className="text-gray-400">
                {activeCategory === "All" 
                  ? `Browse through ${faqItems.length} frequently asked questions` 
                  : `${filteredFaqs.length} questions about ${activeCategory.toLowerCase()}`
                }
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredFaqs.map((item, index) => {
                const originalIndex = faqItems.findIndex(faq => faq.question === item.question);
                const isOpen = openItems.includes(originalIndex);
                
                return (
                  <div 
                    key={originalIndex}
                    id={`faq-${originalIndex}`}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden transition-all hover:border-zinc-700"
                  >
                    <button
                      onClick={() => toggleItem(originalIndex)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-900/30 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mt-1">
                          <HelpCircle className="text-[#FFD700]" size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">{item.question}</h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs font-bold rounded-full">
                              {item.category}
                            </span>
                            {item.tags.map((tag, tagIdx) => (
                              <span key={tagIdx} className="px-2 py-1 bg-zinc-900 text-gray-400 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        {isOpen ? (
                          <ChevronUp className="text-[#FFD700]" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-500" size={24} />
                        )}
                      </div>
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-zinc-800 pt-6">
                        <div className="pl-14">
                          <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                          
                          {/* Additional Actions */}
                          {(item.category === "Account" || item.category === "Deposit") && (
                            <div className="mt-6 pt-6 border-t border-zinc-800">
                              <a 
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#FFD700] text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all"
                              >
                                <MessageCircle size={18} />
                                Get Help with This
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* No Results */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-20">
                <HelpCircle className="w-20 h-20 mx-auto mb-6 text-gray-600" />
                <h3 className="text-2xl font-black text-white mb-4">No questions found</h3>
                <p className="text-gray-400 mb-8">Try selecting a different category or contact our support team</p>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:bg-green-600 transition-all"
                >
                  <MessageCircle size={20} />
                  Ask Your Question on WhatsApp
                </a>
              </div>
            )}

            {/* Search Box */}
            <div className="mt-16">
              <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 border border-zinc-800">
                <h3 className="text-2xl font-black text-white mb-6 text-center">
                  Can't Find Your Question?
                </h3>
                <p className="text-gray-400 text-center mb-8">
                  Search our knowledge base or contact our support team directly
                </p>
                
                <div className="max-w-2xl mx-auto">
                  <div className="relative mb-8">
                    <input
                      type="text"
                      placeholder="Type your question here..."
                      className="w-full px-8 py-5 bg-zinc-800 border border-zinc-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 text-lg"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#FFD700] text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-all">
                      Search
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-800 p-4 rounded-xl text-center hover:bg-zinc-700 transition-all"
                    >
                      <MessageCircle className="w-8 h-8 mx-auto mb-3 text-[#25D366]" />
                      <div className="font-bold">WhatsApp</div>
                      <div className="text-gray-400 text-sm">Instant Response</div>
                    </a>
                    
                    <a 
                      href={`tel:${whatsappNumber}`}
                      className="bg-zinc-800 p-4 rounded-xl text-center hover:bg-zinc-700 transition-all"
                    >
                      <Phone className="w-8 h-8 mx-auto mb-3 text-[#FFD700]" />
                      <div className="font-bold">Phone Call</div>
                      <div className="text-gray-400 text-sm">24/7 Support</div>
                    </a>
                    
                    <a 
                      href="mailto:support@mahadevbook.com"
                      className="bg-zinc-800 p-4 rounded-xl text-center hover:bg-zinc-700 transition-all"
                    >
                      <Mail className="w-8 h-8 mx-auto mb-3 text-[#4285F4]" />
                      <div className="font-bold">Email</div>
                      <div className="text-gray-400 text-sm">Within 2 Hours</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT BANNER */}
      <section className="py-20 px-6 bg-black border-t border-zinc-900">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#FFD700] to-orange-600 rounded-[3rem] p-12 md:p-16 text-center">
          <Shield className="w-20 h-20 mx-auto mb-8 text-black" />
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-6">
            Need Immediate <span className="text-white">Assistance?</span>
          </h2>
          <p className="text-black/80 text-lg mb-10 max-w-2xl mx-auto">
            Our support team is available 24/7 to help with any questions or issues
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-black px-12 py-6 rounded-full flex items-center justify-center gap-4 hover:scale-105 transition-all text-lg"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp
            </a>
            
            <a 
              href={`tel:${whatsappNumber}`}
              className="bg-white text-black font-black px-12 py-6 rounded-full flex items-center justify-center gap-4 hover:scale-105 transition-all text-lg"
            >
              <Phone size={24} />
              Call Support Now
            </a>
          </div>
          
          <div className="mt-10 pt-10 border-t border-black/20">
            <div className="text-black/60 text-sm">
              <p className="font-bold mb-2">Support Hours: 24/7, 365 Days</p>
              <p>Average Response Time: 2-5 minutes | Resolution Rate: 98%</p>
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
        <HelpCircle size={24} />
        <span className="hidden sm:inline">Ask Question</span>
      </a>
    </div>
  );
};

export default FaqPage;