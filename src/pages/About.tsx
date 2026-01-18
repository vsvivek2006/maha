import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, Award, Users, TrendingUp, 
  Target, Lightbulb, GraduationCap, ArrowRight,
  Star, Clock, MessageCircle, Phone
} from "lucide-react";

const About: React.FC = () => {
  // WhatsApp number और message
  const whatsappNumber = "918969906425";
  const whatsappMessage = "Hello Mahadev Book, I want to get my ID";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Stats from your content
  const stats = [
    { number: "500,000", label: "Active Users", desc: "Trusted by sports enthusiasts across India" },
    { number: "92%", label: "Prediction Accuracy", desc: "For IPL 2023 tournament matches" },
    { number: "1,500", label: "Educational Resources", desc: "Articles, tutorials and strategy guides" },
    { number: "24/7", label: "Hour Support", desc: "Dedicated customer service team" }
  ];

  // Journey Timeline from your content
  const timeline = [
    { year: "Founded", title: "Founded with Vision", desc: "Established with the goal of creating India's most trusted sports insights platform." },
    { year: "Year 1", title: "Rapid Growth", desc: "Gained 50,000+ registered users with superior cricket predictions." },
    { year: "Mobile", title: "App Launch", desc: "Launched award-winning App for Android and iOS platforms." },
    { year: "Success", title: "500,000 Milestone", desc: "Preferred choice for fantasy sports fans across India." }
  ];

  // Team members data
  const teamMembers = [
    { name: "Sports Analyst", role: "Cricket Specialist", exp: "10+ Years" },
    { name: "Data Scientist", role: "Prediction Models", exp: "8+ Years" },
    { name: "Support Head", role: "Customer Service", exp: "7+ Years" },
    { name: "Tech Lead", role: "Platform Security", exp: "12+ Years" }
  ];

  // Testimonials data
  const testimonials = [
    { name: "Rahul Sharma", loc: "Mumbai", text: "Mahadev Book transformed how I understand cricket. Their data-driven approach helped me improve significantly." },
    { name: "Priya Patel", loc: "Delhi", text: "The football analysis tools are exceptional. After registration, I've been able to predict outcomes with accuracy." },
    { name: "Vikram Singh", loc: "Bangalore", text: "As someone new to analytics, the resources have been invaluable. Their guides helped me understand complex stats." }
  ];

  // Values data
  const values = [
    { icon: <ShieldCheck className="text-[#FFD700]" />, title: "Integrity", text: "Highest standards of accuracy and transparency." },
    { icon: <Lightbulb className="text-[#FFD700]" />, title: "Innovation", text: "Developing new analytical methods and tools." },
    { icon: <Users className="text-[#FFD700]" />, title: "Community", text: "Fostering a vibrant community for knowledge sharing." },
    { icon: <GraduationCap className="text-[#FFD700]" />, title: "Education", text: "Helping users understand sports analytics." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FFD700] selection:text-black">
      <Helmet>
        <title>About Mahadev Book | India's #1 Sports Insights & Betting ID Platform</title>
        <meta name="description" content="Learn about Mahadev Book's journey. India's premier sports analytics platform with 500k+ users. Get your verified Mahadev Book ID today." />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-[#FFD700] font-black uppercase tracking-[0.3em] text-xs md:text-sm animate-pulse">
            India's Premier Sports Insights Platform Since 2018
          </h2>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
            About <span className="text-[#FFD700]">Mahadev Book</span>
          </h1>
          <div className="w-24 h-2 bg-[#FFD700] mx-auto rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            Mahadev Book is India's most reliable and secure online platform, providing data-driven analysis 
            and seamless Mahadev Book ID services to millions of enthusiasts.
          </p>
          
          <div className="pt-8">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FFD700] text-black font-black px-10 py-5 rounded-full hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,215,0,0.3)] animate-in fade-in slide-in-from-bottom duration-700"
            >
              <MessageCircle size={24} /> 
              GET YOUR MAHADEV BOOK ID
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/10 via-transparent to-transparent"></div>
      </section>

      {/* 2. NUMBERS/IMPACT SECTION */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-[#FFD700]/50 transition-all animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-black text-[#FFD700] mb-2">{stat.number}</div>
                <div className="text-white font-bold uppercase text-xs tracking-widest mb-2">{stat.label}</div>
                <p className="text-gray-500 text-xs leading-tight">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. JOURNEY TIMELINE */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none">Our <span className="text-[#FFD700]">Journey</span></h2>
              <p className="text-gray-500 font-bold mt-2 uppercase tracking-widest">Growth in Sports Analytics</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-zinc-800 mx-8 mb-4"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:bg-zinc-800 transition-all group animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="absolute -top-4 left-8 bg-[#FFD700] text-black text-xs font-black px-4 py-1 rounded-full">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2 group-hover:text-[#FFD700] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSION & VALUES */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic">Our <span className="text-[#FFD700]">Mission</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To empower sports enthusiasts with data-driven insights, accurate predictions, and educational resources 
              that enhance their understanding of sports.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-[#FFD700]/50 transition-all">
                  <div className="mt-1">{val.icon}</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{val.title}</h4>
                    <p className="text-gray-500 text-xs leading-tight">{val.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFD700] to-orange-500 text-black font-black px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            >
              <MessageCircle size={20} /> 
              GET YOUR ID VIA WHATSAPP
            </a>
          </div>
          
          <div className="relative group animate-in fade-in slide-in-from-right duration-700">
            <div className="absolute -inset-2 bg-[#FFD700] rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl">
              <img src="/about-banner.png" alt="Mission" className="w-full opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      <section className="py-24 px-6 bg-[#080808] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">
            Meet Our <span className="text-[#FFD700]">Expert Team</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Our team of data scientists, sports analysts, and customer support professionals work tirelessly to provide you with the best experience.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800 hover:border-[#FFD700] transition-all animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FFD700] to-orange-500 flex items-center justify-center text-3xl font-black text-black">
                  {member.name[0]}
                </div>
                <h4 className="text-xl font-bold text-white">{member.name}</h4>
                <p className="text-[#FFD700] text-sm font-bold mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">Experience: {member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-16">
            What Our <span className="text-[#FFD700]">Community</span> Says
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="p-8 bg-zinc-900 rounded-[2rem] border border-zinc-800 relative hover:border-[#FFD700]/50 transition-all text-left animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${i * 150}ms` }}>
                <div className="flex gap-1 text-[#FFD700] mb-6">
                  {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="#FFD700" />)}
                </div>
                <p className="text-gray-300 leading-relaxed mb-8 italic">"{test.text}"</p>
                <div className="flex items-center gap-4 border-t border-zinc-800 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFD700] to-orange-500 flex items-center justify-center font-black text-black text-xl">
                    {test.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-white">{test.name}</h5>
                    <p className="text-[#FFD700] text-xs uppercase font-black tracking-widest">{test.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#FFD700] to-orange-600 rounded-[3rem] p-12 md:p-20 text-center space-y-8 shadow-[0_0_50px_rgba(255,215,0,0.2)] animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl md:text-7xl font-black text-black italic uppercase leading-tight">
            Ready to Start <br /> Your Journey?
          </h2>
          <p className="text-black/80 text-lg md:text-xl font-bold max-w-2xl mx-auto">
            Join 500,000+ active users on India's most trusted platform for secure, fast, and reliable betting IDs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-black px-10 py-5 rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all uppercase tracking-tighter shadow-lg"
            >
              <MessageCircle size={20} /> Get My ID Now
            </a>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-black px-10 py-5 rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all uppercase tracking-tighter shadow-lg"
            >
              <MessageCircle size={20} /> WhatsApp For ID
            </a>
          </div>
          
          <p className="text-black/60 text-sm font-bold mt-4">
            All buttons open WhatsApp with message: "<span className="font-black">Hello Mahadev Book, I want to get my ID</span>"
          </p>
        </div>
      </section>

      {/* 8. FLOATING WHATSAPP BUTTON */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[1000] bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-[0_20px_60px_rgba(37,211,102,0.5)] flex items-center gap-4 hover:scale-110 transition-all animate-bounce"
      >
        <MessageCircle size={32} />
        <span className="hidden sm:inline">I WANT ID</span>
      </a>
    </div>
  );
};

export default About;