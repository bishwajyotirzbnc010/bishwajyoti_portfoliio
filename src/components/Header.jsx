import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { Link, animateScroll as scroll } from 'react-scroll'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'portfolio', label: 'Portfolio' },
    { to: 'skills', label: 'Skills' },   // Added Skills here
    { to: 'experience', label: 'Experience' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-light">tobi memo</div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.label === 'Home' ? (
                  <span
                    onClick={() => {
                      scroll.scrollToTop({
                        duration: 600,
                        smooth: 'easeInOutQuad',
                      });
                      setMenuOpen(false);
                    }}
                    className="cursor-pointer no-underline text-[#111] font-medium relative
                      after:content-[''] after:absolute after:bottom-[-5px] after:left-0
                      after:h-[2px] after:w-full after:bg-black
                      after:transition-transform after:duration-300 after:ease-in-out
                      after:scale-x-0 hover:after:scale-x-100 after:origin-left"
                  >
                    {link.label}
                  </span>
                ) : (
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-70}  // adjust offset for fixed header height
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer no-underline text-[#111] font-medium relative
                      after:content-[''] after:absolute after:bottom-[-5px] after:left-0
                      after:h-[2px] after:w-full after:bg-black
                      after:transition-transform after:duration-300 after:ease-in-out
                      after:scale-x-0 hover:after:scale-x-100 after:origin-left"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow-md">
          <ul className="flex flex-col space-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.label === 'Home' ? (
                  <span
                    onClick={() => {
                      scroll.scrollToTop({
                        duration: 600,
                        smooth: 'easeInOutQuad',
                      });
                      setMenuOpen(false);
                    }}
                    className="block text-[#111] cursor-pointer"
                  >
                    {link.label}
                  </span>
                ) : (
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    onClick={closeMenu}
                    className="block text-[#111] cursor-pointer"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
