import React from 'react';


const Hero = () => {
  

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src="/img3.jpg"
        alt="Gym Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 py-20 sm:py-24 md:py-32 lg:py-40">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
          GURUNANK GYM
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
          Strength. Power. Discipline.
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          Train Like a Warrior
        </h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-8">
          Join our community of fitness enthusiasts and achieve your goals with expert guidance and top-notch equipment.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
        <button
  onClick={() => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-full text-white text-sm sm:text-base transition duration-300"
>
  Get Started
</button>


          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full text-white text-sm sm:text-base transition duration-300">
            Discover your plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
