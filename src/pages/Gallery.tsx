import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Heart, ZoomIn, X, ArrowLeft, ArrowRight } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images with categories using local images
  const galleryImages = [
    // Room Images - APN Rooms
    {
      id: 1,
      src: "/apnroom01.png",
      category: "rooms",
      title: "Standard AC Room - Bed View",
      description: "Comfortable AC room with orthopedic mattress and modern amenities"
    },
    {
      id: 2,
      src: "/apnroom02.png",
      category: "rooms",
      title: "Standard AC Room - Interior",
      description: "Spacious AC room with attached bathroom and seating area"
    },
    {
      id: 3,
      src: "/apnroom03.png",
      category: "rooms",
      title: "Standard AC Room - Full View",
      description: "Complete room view with all facilities and comfortable bedding"
    },
    {
      id: 4,
      src: "/apnroom04.png",
      category: "rooms",
      title: "Standard AC Room - Corner View",
      description: "Beautiful corner view showing room layout and space"
    },

    // Room Images - Bobo Rooms
    {
      id: 5,
      src: "/boboroom01.png",
      category: "rooms",
      title: "Premium Double Bed AC Room",
      description: "Luxurious double bed AC room with premium amenities"
    },
    {
      id: 6,
      src: "/boboroom02.png",
      category: "rooms",
      title: "Premium Room - Interior",
      description: "Elegant interior with king size bed and modern decor"
    },
    {
      id: 7,
      src: "/boboroom03.png",
      category: "rooms",
      title: "Premium Room - Full Setup",
      description: "Complete room setup with all comfort features"
    },
    {
      id: 8,
      src: "/boboroom04.png",
      category: "rooms",
      title: "Premium Room - Space View",
      description: "Spacious premium room perfect for couples and families"
    },

    // Additional Room Images
    {
      id: 9,
      src: "/room100.png",
      category: "rooms",
      title: "Deluxe AC Room",
      description: "Deluxe AC room with comfortable bedding and modern facilities"
    },
    {
      id: 10,
      src: "/ac.png",
      category: "rooms",
      title: "Air Conditioning",
      description: "Modern split AC for comfortable stay in all seasons"
    },

    // Guest House & Location
    {
      id: 11,
      src: "/guest.png",
      category: "location",
      title: "Radhika Sadan Guest House",
      description: "Beautiful exterior of our guest house near Prikarma Marg"
    },
    {
      id: 12,
      src: "/prem.png",
      category: "location",
      title: "Prem Mandir Area",
      description: "Beautiful temple area near our guest house - 12 minutes distance"
    },
    {
      id: 13,
      src: "/mathura.png",
      category: "location",
      title: "Mathura-Vrindavan Area",
      description: "Spiritual atmosphere of Mathura-Vrindavan divine location"
    },
    {
      id: 14,
      src: "/bankebihari.png",
      category: "location",
      title: "Banke Bihari Temple",
      description: "Most famous temple in Vrindavan - 8 minutes walking distance"
    },

    // Management & Staff
    {
      id: 15,
      src: "/vivek.png",
      category: "amenities",
      title: "Guest House Management",
      description: "Dedicated management team for your comfortable stay"
    },
    {
      id: 16,
      src: "/vivek1.png",
      category: "amenities",
      title: "24/7 Guest Service",
      description: "Round-the-clock service and support for all guests"
    },
    {
      id: 17,
      src: "/amit.png",
      category: "amenities",
      title: "Tour Guidance Service",
      description: "Expert guidance for temple visits and local exploration"
    },
    {
      id: 18,
      src: "/rate.png",
      category: "amenities",
      title: "Affordable Rates",
      description: "Transparent and affordable pricing for all room types"
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
    const whatsappUrl = `https://wa.me/919286759109?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Add error handling for images
  const handleImageError = (e) => {
    e.target.src = '/room100.png'; // Fallback image
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Helmet>
        <title>Gallery - Radhika Sadan Guest House Vrindavan | Real Room Photos & Location</title>
        <meta 
          name="description" 
          content="View real photos of our AC rooms, guest house location near Prikarma Marg, and amenities at Radhika Sadan. See actual room interiors and temple proximity."
        />
        <meta 
          name="keywords" 
          content="Radhika Sadan gallery, Vrindavan room photos, AC room pictures, Prikarma Marg location, Banke Bihari temple distance, guest house amenities"
        />
      </Helmet>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-orange-100 max-w-4xl mx-auto px-2">
            Real photos of our rooms, location, and facilities - See exactly what you'll experience
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-2">
            <span className="bg-white text-orange-600 px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">📸 {galleryImages.length}+ Real Photos</span>
            <span className="bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">🏩 Actual Room Interiors</span>
            <span className="bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">📍 Real Location Shots</span>
          </div>
        </div>
      </section>

      {/* Category Filters - Mobile Optimized */}
      <section className="py-8 md:py-12 bg-white border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                }`}
              >
                {category.name} <span className="ml-1">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Mobile Optimized */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-1 md:hover:-translate-y-2 border-2 border-orange-100"
                onClick={() => handleImageClick(image, index)}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <ZoomIn className="h-8 w-8 md:h-12 md:w-12 text-white" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className={`absolute top-2 left-2 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-bold capitalize ${
                    image.category === 'rooms' ? 'text-orange-600' :
                    image.category === 'location' ? 'text-green-600' :
                    'text-blue-600'
                  }`}>
                    {image.category}
                  </div>

                  {/* Room type badge */}
                  {image.category === 'rooms' && (
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      ❄️ AC
                    </div>
                  )}
                </div>

                <div className="p-3 md:p-4">
                  <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-1 line-clamp-2">{image.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-2">{image.description}</p>
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

      {/* Photo Categories Description - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Real Guest House Experience
            </h2>
            <p className="text-lg md:text-xl text-gray-600">See exactly what awaits you at Radhika Sadan Vrindavan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center p-4 md:p-6 bg-orange-50 rounded-xl md:rounded-2xl border-2 border-orange-200 hover:border-orange-300 transition-all duration-300">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🛌</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Real Room Photos</h3>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                See actual room interiors - AC rooms with comfortable bedding, attached bathrooms, 
                and all modern amenities.
              </p>
              <div className="mt-3 md:mt-4 text-orange-600 font-semibold text-sm md:text-base">
                {galleryImages.filter(img => img.category === "rooms").length} Room Photos
              </div>
            </div>

            <div className="text-center p-4 md:p-6 bg-green-50 rounded-xl md:rounded-2xl border-2 border-green-200 hover:border-green-300 transition-all duration-300">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">📍</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Prime Location</h3>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                View our guest house location near Prikarma Marg and walking distances to 
                major temples.
              </p>
              <div className="mt-3 md:mt-4 text-green-600 font-semibold text-sm md:text-base">
                {galleryImages.filter(img => img.category === "location").length} Location Photos
              </div>
            </div>

            <div className="text-center p-4 md:p-6 bg-blue-50 rounded-xl md:rounded-2xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🏪</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Services & Facilities</h3>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Meet our management team, see our service quality, and explore facilities 
                including 24/7 support.
              </p>
              <div className="mt-3 md:mt-4 text-blue-600 font-semibold text-sm md:text-base">
                {galleryImages.filter(img => img.category === "amenities").length} Service Photos
              </div>
            </div>
          </div>

          {/* Special Note */}
          <div className="mt-8 md:mt-12 bg-gradient-to-r from-orange-100 to-yellow-100 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-orange-200 text-center">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">📸 100% Real Photos</h4>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              All photos in this gallery are actual pictures from <strong>Radhika Sadan Guest House</strong>. 
              What you see is exactly what you'll get when you stay with us.
            </p>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              No stock images, no misleading photos - just honest representation of our comfortable accommodations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready to Experience It Yourself?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-orange-100 leading-relaxed">
            Book your stay and experience the comfort shown in our real photos
          </p>
          
          <div className="flex flex-col gap-3 md:gap-4 justify-center items-center">
            <Link
              to="/rooms"
              className="w-full max-w-sm bg-white hover:bg-gray-100 text-orange-600 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <span>View Rooms & Book Now</span>
            </Link>
            <button
              onClick={handleWhatsAppBooking}
              className="w-full max-w-sm bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
              <span>WhatsApp for Photos</span>
            </button>
            <a
              href="tel:+919286759109"
              className="w-full max-w-sm bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              <Phone className="h-5 w-5 md:h-6 md:w-6" />
              <span>Call: +91 92867 59109</span>
            </a>
          </div>
          
          <div className="mt-6 md:mt-8 p-3 md:p-4 bg-orange-400 bg-opacity-20 rounded-xl">
            <p className="text-orange-200 text-sm md:text-lg">
              💫 <strong>Special Offer:</strong> Show any photo from gallery and get additional 5% discount!
            </p>
          </div>

          <p className="text-orange-200 mt-6 md:mt-8 text-lg flex items-center justify-center gap-3">
            <Heart className="h-5 w-5 md:h-6 md:w-6" />
            <span>Jai Shri Radhe Krishna - Welcome to Divine Vrindavan!</span>
          </p>
        </div>
      </section>

      {/* Image Modal - Mobile Optimized */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 md:p-4">
          <div className="relative w-full max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <X className="h-4 w-4 md:h-6 md:w-6" />
            </button>

            {/* Navigation arrows */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ArrowLeft className="h-4 w-4 md:h-6 md:w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10 bg-black bg-opacity-50 text-white px-2 py-1 md:px-3 md:py-2 rounded-full text-xs md:text-sm font-bold">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>

            {/* Category badge */}
            <div className={`absolute top-2 left-14 md:top-4 md:left-20 z-10 px-2 py-1 md:px-3 md:py-2 rounded-full text-xs md:text-sm font-bold ${
              selectedImage.category === 'rooms' ? 'bg-orange-500 text-white' :
              selectedImage.category === 'location' ? 'bg-green-500 text-white' :
              'bg-blue-500 text-white'
            }`}>
              {selectedImage.category.toUpperCase()}
            </div>

            {/* Image */}
            <div className="flex items-center justify-center h-full pt-12 pb-20 md:pt-0 md:pb-0">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[60vh] md:max-h-[80vh] object-contain rounded-lg"
                onError={handleImageError}
              />
            </div>

            {/* Image info - Mobile bottom sheet style */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4 md:p-6 rounded-t-2xl border-t border-orange-400">
              <h3 className="font-bold text-lg md:text-xl mb-2 text-center">{selectedImage.title}</h3>
              <p className="text-sm md:text-lg opacity-90 mb-2 text-center">{selectedImage.description}</p>
              <div className="text-xs md:text-sm opacity-75 capitalize bg-orange-500 bg-opacity-20 px-3 py-1 rounded-full inline-block mx-auto block w-fit">
                Radhika Sadan Guest House
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;