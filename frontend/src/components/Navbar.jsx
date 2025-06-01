import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black w-full text-white px-4 py-3 flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">

      {/* Logo - always left & small text */}
      <div className="flex-shrink-0 sm:pl-4 sm:mr-32 sm:w-auto w-full">
      <p className="font-bold px-2 py-1 rounded-md 
  text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
  GURUNANK GYM
</p>
      </div>

      {/* Sidebar toggle for small devices - positioned on the right */}
      <div className="sm:hidden absolute top-3 right-4">
        <button
          id="menu-toggle"
          className="text-white focus:outline-none"
          onClick={() => {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('hidden');
          }}
        >
          ☰
        </button>
      </div>

      {/* Sidebar for small devices */}
      <div
        id="sidebar"
        className="hidden fixed top-0 left-0 w-3/4 h-full bg-black text-white z-50 flex flex-col items-start p-4"
      >
        <button
          className="self-end text-white text-2xl mb-4 focus:outline-none"
          onClick={() => {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.add('hidden');
          }}
        >
          ✕
        </button>
        {['gallery', 'contact', 'pricing', 'bmi'].map((item) => (
          <button
            key={item}
            onClick={() => {
              const sidebar = document.getElementById('sidebar');
              sidebar.classList.add('hidden');
              const section = document.getElementById(item);
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="font-semibold text-lg py-2"
          >
            {item === 'bmi' ? 'BMI Calculator' : item}
          </button>
        ))}
      </div>

      {/* Nav - hidden on small devices, visible on larger */}
      <nav className="hidden sm:flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-2 md:gap-3 lg:gap-4">
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
