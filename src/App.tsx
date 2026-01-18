import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms'; // Add Rooms page
import Gallery from './pages/Gallery'; // Add Gallery page
import Contact from './pages/Contact';
import Terms from './pages/Terms'; 
import OnboardingAgreement from './pages/OnboardingAgreement'; 
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import BlogPage from './pages/BlogPage';
import BettingAppPage from './pages/BettingAppPage';
import BookIdPage from './pages/BookIdPage';
import FaqPage from './pages/FaqPage';




function App() {
  return (
    <Router>
      {/* Global SEO + GA4 */}
      <Helmet>
        {/* GA4 Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M8M1GWQ7TJ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M8M1GWQ7TJ');
          `}
        </script>
        
        {/* ✅ Updated Razorpay Script with New API Key */}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        
        {/* ✅ Razorpay Configuration Script */}
        <script>
          {`
            // Razorpay Configuration with New API Key
            window.RAZORPAY_CONFIG = {
              key_id: 'rzp_live_Rjg2D4BxOBtrmR',
              company_name: 'Radhikasadan',
              theme_color: '#10B981'
            };
            
            console.log('Razorpay configured with new API key');
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} /> {/* Add Rooms route */}
            <Route path="/gallery" element={<Gallery />} /> {/* Add Gallery route */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/onboarding-agreement" element={<OnboardingAgreement />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<BlogPage />} /> 
            <Route path="/betting-app" element={<BettingAppPage />} />  
            <Route path="/book-id" element={<BookIdPage />} />  
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/faq" element={<FaqPage />} /> 
            
            {/* ✅ UPDATED PAYMENT SUCCESS PAGE */}
            <Route path="/payment/success" element={
              <div className="min-h-screen flex items-center justify-center bg-green-50 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4">
                  <div className="text-green-500 text-6xl mb-4">✅</div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
                  <p className="text-gray-600 mb-6">
                    Thank you for your payment. Your booking has been confirmed and we've received your order.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg mb-6 text-left">
                    <p className="text-sm text-gray-700">
                      <strong>Booking ID:</strong> RAD{Date.now().toString().slice(-6)}<br/>
                      <strong>Payment Status:</strong> Completed<br/>
                      <strong>Next Steps:</strong> Our team will contact you within 2 hours.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <a 
                      href="/" 
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      Return to Home
                    </a>
                    <a 
                      href="https://wa.me/919286755109?text=Hi! I just made a payment and want to confirm my booking details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      💬 Confirm on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            } />
            
            {/* ✅ UPDATED PAYMENT FAILED PAGE */}
            <Route path="/payment/failed" element={
              <div className="min-h-screen flex items-center justify-center bg-red-50 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4">
                  <div className="text-red-500 text-6xl mb-4">❌</div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Failed</h1>
                  <p className="text-gray-600 mb-6">
                    We couldn't process your payment. This could be due to network issues or payment method problems.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg mb-6 text-left">
                    <p className="text-sm text-gray-700">
                      <strong>Quick Solutions:</strong><br/>
                      • Check your internet connection<br/>
                      • Verify card/bank details<br/>
                      • Try a different payment method<br/>
                      • Contact support for instant help
                    </p>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={() => window.history.back()}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block w-full"
                    >
                      🔄 Try Again
                    </button>
                    <a 
                      href="https://wa.me/919286755109?text=Hi! I'm having trouble completing my payment. Can you help?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      💬 WhatsApp Support
                    </a>
                    <a 
                      href="tel:+919286755109"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      📞 Call +91 92867 55109
                    </a>
                  </div>
                </div>
              </div>
            } />
            
            {/* ✅ NEW BOOKING SUCCESS PAGE (For booking flow) */}
            <Route path="/booking/success" element={
              <div className="min-h-screen flex items-center justify-center bg-green-50 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4">
                  <div className="text-green-500 text-6xl mb-4">🎉</div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
                  <p className="text-gray-600 mb-6">
                    Your room has been successfully booked. Welcome to Radhikasadan!
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg mb-6 text-left">
                    <p className="text-sm text-gray-700">
                      <strong>What's Next?</strong><br/>
                      • Booking confirmation on WhatsApp<br/>
                      • Check-in instructions<br/>
                      • Property location details<br/>
                      • 24/7 support contact
                    </p>
                  </div>
                  <div className="space-y-3">
                    <a 
                      href="/" 
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      Home Page
                    </a>
                    <a 
                      href="https://wa.me/919286755109?text=Hi! I just completed my booking and want to get the check-in details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      💬 Get Check-in Details
                    </a>
                  </div>
                </div>
              </div>
            } />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
