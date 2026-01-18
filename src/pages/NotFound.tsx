import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, ShieldCheck, Zap, MessageCircle, Trophy, Target } from "lucide-react";
import { Helmet } from "react-helmet";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FFD700] selection:text-black">
      {/* ✅ SEO Component */}
      <Helmet>
        <title>404 - Page Not Found | Mahadev Book Official</title>
        <meta
          name="description"
          content="The page you are looking for is out of play. Return to Mahadev Book for the best sports insights and secure betting IDs."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Hero Section with Dark Theme */}
      <section className="relative py-24 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/10 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="text-[12rem] md:text-[15rem] font-black leading-none tracking-tighter text-zinc-900 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
            404
          </div>
          
          <div className="mb-6 inline-block bg-zinc-900 p-4 rounded-full border border-zinc-800">
            <Target className="h-12 w-12 text-[#FFD700] animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-6">
            Looks like you're <br />
            <span className="text-[#FFD700]">Out of Play!</span>
          </h1>
          
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            The page you are looking for doesn't exist or has been moved. 
            Don't worry, the real game is still on!
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800 transition-all font-bold text-lg"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-[#FFD700] text-black hover:bg-yellow-500 transition-all font-black text-lg shadow-[0_0_30px_rgba(255,215,0,0.2)]"
            >
              <Home className="h-5 w-5" />
              Return to Base
            </Link>
          </div>
        </div>
      </section>

      {/* Suggested Sections Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase italic italic mb-4">
              Get Back <span className="text-[#FFD700]">In The Game</span>
            </h2>
            <p className="text-zinc-500">Explore our most popular sections instead:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/betting-app"
              className="group bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-[#FFD700]/50 transition-all"
            >
              <Zap className="h-10 w-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">Betting App</h3>
              <p className="text-zinc-500 text-sm mb-4">Download India's most trusted app for live sports insights.</p>
              <span className="text-[#FFD700] font-bold inline-flex items-center gap-2">
                Download Now <ArrowLeft className="h-4 w-4 rotate-180" />
              </span>
            </Link>

            <Link
              to="/book-id"
              className="group bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-[#FFD700]/50 transition-all"
            >
              <ShieldCheck className="h-10 w-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">Verified ID</h3>
              <p className="text-zinc-500 text-sm mb-4">Get your 100% secure and official Mahadev Book ID instantly.</p>
              <span className="text-[#FFD700] font-bold inline-flex items-center gap-2">
                Get ID <ArrowLeft className="h-4 w-4 rotate-180" />
              </span>
            </Link>

            <Link
              to="/faq"
              className="group bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-[#FFD700]/50 transition-all"
            >
              <Trophy className="h-10 w-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">Support & FAQ</h3>
              <p className="text-zinc-500 text-sm mb-4">Have questions? We have the answers to get you started.</p>
              <span className="text-[#FFD700] font-bold inline-flex items-center gap-2">
                Read More <ArrowLeft className="h-4 w-4 rotate-180" />
              </span>
            </Link>
          </div>

          {/* Contact Support CTA */}
          <div className="mt-16 bg-gradient-to-r from-zinc-900 to-black p-10 rounded-[3rem] border border-zinc-800 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700] opacity-5 blur-[80px]"></div>
            
            <h2 className="text-3xl font-black italic uppercase mb-6">
              Need Help <span className="text-[#FFD700]">Right Away?</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/918969906425"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                <MessageCircle className="h-6 w-6" />
                WhatsApp Support
              </a>
              <a
                href="tel:+918969906425"
                className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                Call Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;