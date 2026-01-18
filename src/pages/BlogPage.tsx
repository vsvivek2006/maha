import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { 
  Calendar, User, Clock, Tag, 
  MessageCircle, Share2, BookOpen,
  TrendingUp, Award, Zap, ChevronRight,
  ArrowRight, Search, Filter, MessageCircleMore,
  X, ExternalLink, Eye, ThumbsUp
} from "lucide-react";

const BlogPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // WhatsApp setup
  const whatsappNumber = "918969906425";
  const whatsappMessage = "Hello Mahadev Book, I want to learn more about sports betting";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Blog categories
  const categories = [
    { name: "Cricket Betting", count: 24, color: "bg-green-500" },
    { name: "Sports Analysis", count: 18, color: "bg-blue-500" },
    { name: "Betting Strategies", count: 15, color: "bg-purple-500" },
    { name: "Match Predictions", count: 32, color: "bg-orange-500" },
    { name: "Tips & Tricks", count: 12, color: "bg-red-500" },
    { name: "Platform Updates", count: 8, color: "bg-yellow-500" },
  ];

  // Google Images URLs for blog posts (Real cricket/betting related images)
  const imageUrls = {
    cricketAnalysis: "https://images.unsplash.com/photo-1593369196680-8a75d06c5693?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ipl2024: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    bankrollManagement: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    liveBetting: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    footballCricket: "https://images.unsplash.com/photo-1553778263-73a83babcc9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    beginnersMistakes: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    weatherImpact: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    appUpdate: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    psychologyBetting: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  };

  // Featured articles (main blog posts)
  const featuredArticles = [
    {
      id: 1,
      title: "How to Analyze Cricket Match Odds Like a Pro",
      excerpt: "Learn the secret techniques used by professional bettors to analyze cricket match odds and make informed betting decisions.",
      fullContent: `Cricket betting requires more than just luck. Professional bettors use systematic approaches to analyze match odds. Here are key techniques:

1. **Team Form Analysis**: Study last 5 matches performance, home/away records, and head-to-head statistics.

2. **Player Performance**: Key players' recent form, injuries, and performance against specific opponents.

3. **Pitch & Weather Conditions**: Different pitches favor different playing styles. Weather affects match outcomes significantly.

4. **Market Movement**: Track how odds change before the match - this indicates where smart money is going.

5. **Statistical Models**: Use historical data to predict outcomes based on similar past matches.

Remember, successful betting is about finding value - not just predicting winners.`,
      category: "Cricket Betting",
      author: "Rajesh Kumar",
      authorRole: "Senior Cricket Analyst",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: imageUrls.cricketAnalysis,
      tags: ["Cricket", "Analysis", "Beginners", "Odds", "Strategy"],
      featured: true,
      views: "12.5K",
      likes: "845"
    },
    {
      id: 2,
      title: "IPL 2024: Complete Team Analysis & Winning Predictions",
      excerpt: "Detailed analysis of all IPL 2024 teams, key players to watch, and our expert predictions for the tournament.",
      fullContent: `IPL 2024 promises to be the most exciting season yet. Here's our comprehensive analysis:

**Top Contenders:**
1. **Mumbai Indians**: Strong batting lineup with Rohit Sharma and new signings.
2. **Chennai Super Kings**: Dhoni's leadership and experienced squad.
3. **Royal Challengers Bangalore**: Always strong but need to perform under pressure.

**Dark Horses:**
- Gujarat Titans with their balanced squad
- Lucknow Super Giants with strategic buys

**Key Factors:**
- Impact Player rule changes
- Home advantage in different venues
- Player workload management during World Cup year

Our prediction: Mumbai Indians to win IPL 2024 with CSK as runners-up.`,
      category: "Match Predictions",
      author: "Priya Sharma",
      authorRole: "IPL Specialist",
      date: "March 12, 2024",
      readTime: "12 min read",
      image: imageUrls.ipl2024,
      tags: ["IPL", "Predictions", "Tournament", "Cricket", "2024"],
      featured: true,
      views: "18.2K",
      likes: "1.2K"
    },
    {
      id: 3,
      title: "Bankroll Management: The Most Important Betting Skill",
      excerpt: "Discover why proper bankroll management is more important than predicting winners and how to implement it effectively.",
      fullContent: `Bankroll management separates professional bettors from amateurs. Here's how to master it:

**Golden Rules:**
1. **Never bet more than 2-5% of your bankroll on a single bet**
2. **Use the Kelly Criterion for optimal stake sizing**
3. **Keep detailed records of all bets**
4. **Set daily/weekly loss limits**
5. **Have separate betting and personal funds**

**Common Mistakes to Avoid:**
- Chasing losses with bigger bets
- Overconfidence after winning streaks
- Betting without a plan
- Emotional betting decisions

**Pro Tip**: Start with a bankroll you can afford to lose completely. Treat betting as an investment, not gambling.`,
      category: "Betting Strategies",
      author: "Amit Patel",
      authorRole: "Financial Betting Expert",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: imageUrls.bankrollManagement,
      tags: ["Strategy", "Finance", "Advanced", "Management", "Money"],
      featured: true,
      views: "9.8K",
      likes: "723"
    }
  ];

  // Regular blog posts
  const blogPosts = [
    {
      id: 4,
      title: "Understanding Live Betting in Cricket Matches",
      excerpt: "A comprehensive guide to live betting strategies during cricket matches for maximum profits.",
      fullContent: "Live betting allows you to bet during matches...",
      category: "Cricket Betting",
      author: "Sports Analyst Team",
      authorRole: "Live Betting Specialists",
      date: "March 8, 2024",
      readTime: "10 min read",
      image: imageUrls.liveBetting,
      tags: ["Live", "In-Play", "Strategy", "Cricket", "Real-time"],
      views: "15.3K",
      likes: "987"
    },
    {
      id: 5,
      title: "Football vs Cricket Betting: Key Differences",
      excerpt: "Comparing betting strategies, odds calculation, and market differences between football and cricket betting.",
      fullContent: "Football and cricket betting have different dynamics...",
      category: "Sports Analysis",
      author: "Vikram Singh",
      authorRole: "Multi-sport Analyst",
      date: "March 5, 2024",
      readTime: "7 min read",
      image: imageUrls.footballCricket,
      tags: ["Comparison", "Football", "Cricket", "Analysis", "Sports"],
      views: "11.7K",
      likes: "654"
    },
    {
      id: 6,
      title: "Common Betting Mistakes Beginners Make",
      excerpt: "Learn about the most common mistakes new bettors make and how to avoid them in your betting journey.",
      fullContent: "Beginners often make these critical mistakes...",
      category: "Tips & Tricks",
      author: "Neha Gupta",
      authorRole: "Betting Coach",
      date: "March 3, 2024",
      readTime: "5 min read",
      image: imageUrls.beginnersMistakes,
      tags: ["Beginners", "Mistakes", "Learning", "Tips", "Advice"],
      views: "22.4K",
      likes: "1.5K"
    },
    {
      id: 7,
      title: "How Weather Affects Cricket Match Outcomes",
      excerpt: "Detailed analysis of how weather conditions impact cricket matches and how to factor this into your bets.",
      fullContent: "Weather plays a crucial role in cricket...",
      category: "Sports Analysis",
      author: "Meteorology Team",
      authorRole: "Weather Analysis Experts",
      date: "February 28, 2024",
      readTime: "9 min read",
      image: imageUrls.weatherImpact,
      tags: ["Weather", "Analysis", "Factors", "Cricket", "Conditions"],
      views: "8.9K",
      likes: "542"
    },
    {
      id: 8,
      title: "New Features in Mahadev Book App v3.0",
      excerpt: "Explore all the new features and improvements in the latest version of our mobile betting application.",
      fullContent: "Version 3.0 brings exciting new features...",
      category: "Platform Updates",
      author: "Tech Team",
      authorRole: "Development Team",
      date: "February 25, 2024",
      readTime: "4 min read",
      image: imageUrls.appUpdate,
      tags: ["App", "Update", "Features", "Mobile", "Technology"],
      views: "7.6K",
      likes: "421"
    },
    {
      id: 9,
      title: "The Psychology of Successful Sports Betting",
      excerpt: "Understanding the mental aspects and psychological discipline required for long-term betting success.",
      fullContent: "Psychology is 80% of successful betting...",
      category: "Betting Strategies",
      author: "Dr. Anil Mehta",
      authorRole: "Sports Psychologist",
      date: "February 22, 2024",
      readTime: "11 min read",
      image: imageUrls.psychologyBetting,
      tags: ["Psychology", "Mindset", "Discipline", "Mental", "Success"],
      views: "13.8K",
      likes: "876"
    }
  ];

  // Popular tags
  const popularTags = [
    "Cricket", "IPL", "Beginners", "Strategy", "Live Betting",
    "Football", "Analysis", "Predictions", "Tips", "Updates",
    "T20", "World Cup", "Odds", "Bankroll", "Psychology"
  ];

  const openArticleModal = (article: any) => {
    setSelectedArticle(article);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedArticle(null);
    document.body.style.overflow = 'auto';
  };

  const allArticles = [...featuredArticles, ...blogPosts];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FFD700] selection:text-black">
      <Helmet>
        <title>Mahadev Book Blog | Sports Betting Tips, Strategies & Analysis</title>
        <meta name="description" content="Read expert articles, betting strategies, match predictions and tips on Mahadev Book Blog. Stay updated with latest sports betting insights." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#FFD700]/30 px-4 py-2 rounded-full text-[#FFD700] text-sm font-black uppercase tracking-widest">
            <BookOpen size={16} />
            EXPERT INSIGHTS & ANALYSIS
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
            Mahadev Book <span className="text-[#FFD700]">Blog</span>
          </h1>
          
          <div className="w-32 h-2 bg-[#FFD700] mx-auto rounded-full"></div>
          
          <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            Expert articles, betting strategies, match predictions and insights to help you make informed decisions.
            Stay ahead with our comprehensive sports analysis.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto pt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, tips, strategies..."
                className="w-full px-8 py-5 bg-zinc-900 border border-zinc-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 text-lg"
              />
              <Search className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/10 via-transparent to-transparent"></div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Sidebar - Categories & Tags */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories Widget */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <Filter size={24} className="text-[#FFD700]" />
                Categories
              </h3>
              <div className="space-y-4">
                {categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/30 hover:bg-zinc-800 transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${cat.color}`}></div>
                      <span className="font-bold group-hover:text-[#FFD700] transition-colors">
                        {cat.name}
                      </span>
                    </div>
                    <span className="bg-zinc-900 text-gray-400 text-sm font-bold px-3 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags Widget */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-white mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-full text-sm font-bold hover:bg-[#FFD700] hover:text-black transition-all cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA Widget */}
            <div className="bg-gradient-to-br from-[#FFD700] to-orange-600 rounded-3xl p-8 text-center">
              <MessageCircleMore className="w-16 h-16 mx-auto mb-6 text-black" />
              <h3 className="text-2xl font-black text-black mb-4">Need Help?</h3>
              <p className="text-black/80 mb-6">
                Our experts are available 24/7 to answer your questions about betting strategies
              </p>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-black text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-all w-full"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-white mb-6">Recent Posts</h3>
              <div className="space-y-4">
                {allArticles.slice(0, 4).map((article) => (
                  <button
                    key={article.id}
                    onClick={() => openArticleModal(article)}
                    className="w-full text-left p-4 rounded-xl bg-zinc-800/30 hover:bg-zinc-800 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-[#FFD700] transition-colors text-sm line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar size={12} className="text-gray-500" />
                          <span className="text-gray-500 text-xs">{article.date}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Blog Content */}
          <div className="lg:col-span-2">
            {/* Featured Articles */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3">
                  <Award className="text-[#FFD700]" size={32} />
                  Featured Articles
                </h2>
                <button className="text-[#FFD700] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  View All <ChevronRight size={20} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => openArticleModal(article)}
                    className="group text-left w-full"
                  >
                    <div className="relative overflow-hidden rounded-3xl border border-zinc-800 hover:border-[#FFD700] transition-all duration-500">
                      {/* Article Image */}
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Article Content */}
                      <div className="p-8 bg-zinc-900/80 backdrop-blur-sm">
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#FFD700] text-black text-xs font-black px-4 py-1.5 rounded-full mb-4">
                          {article.category}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#FFD700] transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-gray-400 mb-6 line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-2">
                              <User size={14} />
                              {article.author}
                            </span>
                            <span className="flex items-center gap-2">
                              <Calendar size={14} />
                              {article.date}
                            </span>
                          </div>
                          <span className="flex items-center gap-2">
                            <Clock size={14} />
                            {article.readTime}
                          </span>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-6">
                          {article.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs font-bold rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-zinc-800">
                          <span className="flex items-center gap-2 text-gray-500 text-sm">
                            <Eye size={14} />
                            {article.views}
                          </span>
                          <span className="flex items-center gap-2 text-gray-500 text-sm">
                            <ThumbsUp size={14} />
                            {article.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Articles */}
            <div>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3">
                  <TrendingUp className="text-[#FFD700]" size={32} />
                  Latest Articles
                </h2>
                <button className="text-[#FFD700] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  View All <ChevronRight size={20} />
                </button>
              </div>

              <div className="space-y-8">
                {blogPosts.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => openArticleModal(article)}
                    className="group w-full text-left"
                  >
                    <div className="grid md:grid-cols-3 gap-8 p-6 rounded-3xl border border-zinc-800 hover:border-[#FFD700] hover:bg-zinc-900/50 transition-all duration-500">
                      {/* Image */}
                      <div className="md:col-span-1">
                        <div className="aspect-video rounded-2xl overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="inline-flex items-center gap-2 bg-zinc-800 text-gray-300 text-xs font-bold px-4 py-1.5 rounded-full">
                            {article.category}
                          </div>
                          <span className="text-gray-500 text-sm flex items-center gap-2">
                            <Calendar size={12} />
                            {article.date}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#FFD700] transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                              <User size={14} />
                              {article.author}
                            </span>
                            <span className="flex items-center gap-2">
                              <Clock size={14} />
                              {article.readTime}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                              <Eye size={14} />
                              {article.views}
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                              <ThumbsUp size={14} />
                              {article.likes}
                            </div>
                          </div>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {article.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs font-bold rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-16">
                <button className="bg-zinc-900 text-white font-bold px-12 py-4 rounded-full border border-zinc-800 hover:border-[#FFD700] hover:text-[#FFD700] transition-all flex items-center gap-3 mx-auto">
                  Load More Articles
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <section className="py-20 px-6 bg-black border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-12 md:p-16">
            <Zap className="w-16 h-16 mx-auto mb-8 text-[#FFD700]" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Get weekly betting tips, match predictions, and exclusive strategies directly in your inbox.
              Join 50,000+ subscribers already improving their betting skills.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20"
                />
                <button className="bg-[#FFD700] text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all flex items-center justify-center gap-3">
                  Subscribe Now
                  <ArrowRight size={20} />
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE MODAL/POPUP */}
      {showModal && selectedArticle && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-[#0a0a0a] rounded-3xl border border-zinc-800 max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-all"
              >
                <X size={24} />
              </button>
              
              {/* Article Hero Image */}
              <div className="h-64 md:h-80 overflow-hidden relative">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="inline-flex items-center gap-2 bg-[#FFD700] text-black text-xs font-black px-4 py-1.5 rounded-full mb-4">
                    {selectedArticle.category}
                  </div>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                <h1 className="text-3xl md:text-4xl font-black text-white mb-6">
                  {selectedArticle.title}
                </h1>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-zinc-800">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-orange-600 flex items-center justify-center font-black text-black">
                    {selectedArticle.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{selectedArticle.author}</div>
                    <div className="text-gray-500 text-sm">{selectedArticle.authorRole}</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-gray-500 text-sm">{selectedArticle.date}</div>
                    <div className="text-gray-500 text-sm">{selectedArticle.readTime}</div>
                  </div>
                </div>
                
                {/* Full Content */}
                <div className="prose prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line mb-8">
                    {selectedArticle.fullContent}
                  </div>
                  
                  {/* Key Takeaways */}
                  <div className="bg-zinc-900/50 rounded-2xl p-6 mb-8 border border-zinc-800">
                    <h3 className="text-xl font-black text-[#FFD700] mb-4">Key Takeaways</h3>
                    <ul className="space-y-3">
                      {selectedArticle.tags.map((tag: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                          <span className="text-gray-300">Important insight about {tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-full text-sm font-bold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Stats & Actions */}
                <div className="flex items-center justify-between pt-8 border-t border-zinc-800">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Eye size={18} />
                      <span>{selectedArticle.views} views</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <ThumbsUp size={18} />
                      <span>{selectedArticle.likes} likes</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button className="p-3 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-all">
                      <Share2 size={20} className="text-gray-400" />
                    </button>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#FFD700] text-black font-bold rounded-xl hover:bg-yellow-400 transition-all flex items-center gap-3"
                    >
                      <MessageCircle size={20} />
                      Ask Questions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[1000] bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_20px_60px_rgba(37,211,102,0.5)] flex items-center gap-3 hover:scale-110 transition-all animate-bounce"
      >
        <MessageCircle size={24} />
        <span className="hidden sm:inline">Get Betting Tips</span>
      </a>

      {/* Custom Styles for Modal */}
      <style>{`
        .prose {
          color: #d1d5db;
        }
        .prose ul {
          list-style-type: disc;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;