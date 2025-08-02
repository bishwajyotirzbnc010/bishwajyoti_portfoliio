import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-scroll';  // Use react-scroll Link
import Navbar from './Navbar';
import { navLinks } from '../data/navLinks';  // Import navLinks from the data

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md border-b">
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* "tobi memo" text now wrapped with react-scroll Link */}
        <Link 
          to="home"  // This matches the id of your Home section
          smooth={true}
          duration={600}
          offset={-70}  // Adjust offset if necessary
          className="text-2xl font-light cursor-pointer"
        >
          tobi memo
        </Link>

        <Navbar /> {/* Desktop Navbar */}

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow-md">
          <ul className="flex flex-col space-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.label === 'Home' ? (
                  <Link
                    to="home" // Link to Home section using react-scroll
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    onClick={closeMenu}
                    className="cursor-pointer no-underline text-[#111] font-medium relative
                      after:content-[''] after:absolute after:bottom-[-5px] after:left-0
                      after:h-[2px] after:w-full after:bg-black
                      after:transition-transform after:duration-300 after:ease-in-out
                      after:scale-x-0 hover:after:scale-x-100 after:origin-left"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    onClick={closeMenu}
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
        </div>
      )}
    </header>
  );
};

export default Header;
