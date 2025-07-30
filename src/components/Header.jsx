import React from 'react';
const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b-black-2 sticky">
      <div className="text-2xl font-light">tobi memo</div>
      <nav>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#" className="no-underline text-[#111] font-medium relative
                after:content-[''] after:absolute after:bottom-[-5px] after:left-0
                after:h-[2px] after:w-full after:bg-black
                after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0 hover:after:scale-x-100 after:origin-left">Home</a></li>
          <li><a href="#about" className="no-underline text-[#111] font-medium relative
                after:content-[''] after:absolute after:bottom-[-5px] after:left-0
                after:h-[2px] after:w-full after:bg-black
                after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0 hover:after:scale-x-100 after:origin-left">About</a></li>
          <li><a href="#portfolio" className="no-underline text-[#111] font-medium relative
                after:content-[''] after:absolute after:bottom-[-5px] after:left-0
                after:h-[2px] after:w-full after:bg-black
                after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0 hover:after:scale-x-100 after:origin-left">Portfolio</a></li>
          <li><a href="#experience" className="no-underline text-[#111] font-medium relative
                after:content-[''] after:absolute after:bottom-[-5px] after:left-0
                after:h-[2px] after:w-full after:bg-black
                after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0 hover:after:scale-x-100 after:origin-left">Experience</a></li>
          <li><a href="#contact" className="no-underline text-[#111] font-medium relative
                after:content-[''] after:absolute after:bottom-[-5px] after:left-0
                after:h-[2px] after:w-full after:bg-black
                after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0 hover:after:scale-x-100 after:origin-left">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
