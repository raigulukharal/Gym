import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black w-full text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 sm:gap-4">

      {/* Logo - always left & small text */}
      <div className="flex-shrink-0">
        <p className="font-bold px-2 py-1 border-2 border-white rounded-md 
          text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
          GURUNANK GYM
        </p>
      </div>

      {/* Nav - always in a single row, small text */}
      <nav className="flex flex-wrap gap-2 sm:gap-2 md:gap-3 lg:gap-4">
        {['gallery', 'contact', 'pricing', 'bmi'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="group relative font-semibold text-xs sm:text-md md:text-lg lg:text-2xl border-2 rounded-lg px-3 py-2 transition duration-200 hover:text-gray-200-400 whitespace-nowrap"
          >
            <span className="capitalize">
              {item === 'bmi' ? 'BMI Calculator' : item}
            </span>
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
