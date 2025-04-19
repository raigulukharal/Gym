import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    'front.jfif',
    'side.jfif',
    'gymr.jfif',
    'officee.jfif',
    'h1.jfif',
    'h2.jfif',
    'h3.jfif',
  ];

  const defaultIndex = images.indexOf('gymr.jfif');
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="text-center bg-black rounded-xl px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Gallery</h1>

      <div className="relative w-full max-w-6xl mx-auto h-[60vh] sm:h-[75vh] lg:h-screen overflow-hidden rounded-xl shadow-lg">
        {/* Image */}
        <img
          src={`/assets/${images[currentIndex]}`}
          alt="Gallery"
          className="w-full h-full object-cover transition duration-500"
        />

        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-3 rounded-full transition duration-300 z-10"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-3 rounded-full transition duration-300 z-10"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
