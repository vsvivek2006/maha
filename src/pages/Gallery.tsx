import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Heart, ZoomIn, X, ArrowLeft, ArrowRight } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images with categories
  const galleryImages = [
    // Room Images
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "rooms",
      title: "Standard Non-AC Room",
      description: "Comfortable non-AC room with traditional decor"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "rooms",
      title: "Deluxe AC Room",
      description: "Spacious AC room with modern amenities"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "rooms",
      title: "Family Suite",
      description: "Luxurious family suite with separate living area"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "rooms",
      title: "Premium AC Room",
      description: "Premium room with elegant traditional decor"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "rooms",
      title: "Room Interior",
      description: "Beautiful room interior with comfortable bedding"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "rooms",
      title: "Bathroom Facility",
      description: "Clean and modern attached bathroom"
    },

    // Temple & Location Images
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "location",
      title: "Prikarma Marg",
      description: "Main spiritual walking path - 2 minutes from us"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1548913344-66177da94287?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "location",
      title: "Paramhans Ji Maharaj",
      description: "Famous spiritual center - 3 minutes walking distance"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1587132135055-47c8d67cf3e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "location",
      title: "Banke Bihari Temple",
      description: "Most famous temple in Vrindavan - 8 minutes walk"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1591607388347-9ce64ad3eb838?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "location",
      title: "ISKCON Temple",
      description: "Beautiful ISKCON temple - 10 minutes from guest house"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1621401771729-65d2e8a66b41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "location",
      title: "Prem Mandir",
      description: "Stunning Prem Mandir - 12 minutes distance"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1587132135056-eab05406d988?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "location",
      title: "Gauranga Ashram",
      description: "Peaceful meditation ashram - 5 minutes walk"
    },

    // Amenities & Facilities
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "amenities",
      title: "Dining Area",
      description: "Pure vegetarian food service area"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "amenities",
      title: "Guest House Building",
      description: "Beautiful exterior of Radhika Sadan"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1558036117-15e82a2c9c07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "amenities",
      title: "Reception Area",
      description: "24/7 reception and guest service"
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "amenities",
      title: "Parking Space",
      description: "Secure parking for cars and two-wheelers"
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "amenities",
      title: "Common Area",
      description: "Comfortable common sitting area"
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "amenities",
      title: "Hygiene & Cleanliness",
      description: "Regular cleaning and maintenance"
    }
  ];

  // Categories
  const categories = [
    { id: "all", name: "All Photos", count: galleryImages.length },
    { id: "rooms", name: "Rooms", count: galleryImages.filter(img => img.category === "rooms").length },
    { id: "location", name: "Location", count: galleryImages.filter(img => img.category === "location").length },
    { id: "amenities", name: "Amenities", count: galleryImages.filter(img => img.category === "amenities").length }
  ];

  // Filtered images
  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  const handleWhatsAppBooking = () => {
    const message = `Hello Radhika Sadan! I saw your gallery and would like to book a room. Please share availability and rates.`;
    const whatsappUrl = `https://wa.me/917044755109?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Helmet>
        <title>Gallery - Radhika Sadan Guest House Vrindavan | Room Photos & Location</title>
        <meta 
          name="description" 
          content="View our gallery showcasing comfortable rooms, prime location near Prikarma Marg, and amenities at Radhika Sadan Guest House in Vrindavan."
        />
        <meta 
          name="keywords" 
          content="Radhika Sadan gallery, Vrindavan guest house photos, room pictures, temple location, amenities photos, Prikarma Marg stay"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto">
            Explore our comfortable rooms, prime location, and facilities through photos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white text-orange-600 px-4 py-2 rounded-full font-bold">📸 18+ Photos</span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">🏩 Real Guest House</span>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold">📍 Actual Location</span>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-white border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onClick={() => handleImageClick(image, index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <ZoomIn className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-white bg-opacity-90 text-orange-600 px-2 py-1 rounded-full text-xs font-bold capitalize">
                    {image.category}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No photos found</h3>
              <p className="text-gray-600">Try selecting a different category to see available photos.</p>
            </div>
          )}
        </div>
      </section>

      {/* Photo Categories Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              What You'll See
            </h2>
            <p className="text-xl text-gray-600">Explore every aspect of your stay at Radhika Sadan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-2xl border-2 border-orange-200">
              <div className="text-4xl mb-4">🛌</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Room Photos</h3>
              <p className="text-gray-600">
                See our comfortable AC and Non-AC rooms with detailed interior shots. 
                Get a real feel of where you'll be staying during your spiritual journey.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl border-2 border-green-200">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Location & Temples</h3>
              <p className="text-gray-600">
                View the prime location near Prikarma Marg and walking distances to 
                major temples like Banke Bihari, ISKCON, and Prem Mandir.
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Amenities</h3>
              <p className="text-gray-600">
                Explore our facilities including dining area, parking, common spaces, 
                and hygiene standards that ensure a comfortable stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready to Experience It?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
            Book your stay and experience the comfort shown in our gallery
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/rooms"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <span>View Rooms & Book</span>
            </Link>
            <button
              onClick={handleWhatsAppBooking}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <MessageCircle className="h-6 w-6" />
              <span>WhatsApp Inquiry</span>
            </button>
            <a
              href="tel:+917044755109"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <Phone className="h-6 w-6" />
              <span>Call: +91 70447 55109</span>
            </a>
          </div>
          
          <p className="text-orange-200 mt-8 text-xl flex items-center justify-center gap-3">
            <Heart className="h-6 w-6" />
            <span>Jai Shri Radhe Krishna - See You in Vrindavan!</span>
          </p>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation arrows */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>

            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            {/* Image info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-4 rounded-lg max-w-md text-center">
              <h3 className="font-bold text-lg mb-1">{selectedImage.title}</h3>
              <p className="text-sm opacity-90">{selectedImage.description}</p>
              <div className="mt-2 text-xs opacity-75 capitalize">
                Category: {selectedImage.category}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;