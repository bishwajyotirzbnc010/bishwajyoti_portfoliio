import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { navLinks } from '../data/navLinks';  // Correct import for navLinks

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
                offset={-70}  // Offset to make sure the link scrolls properly
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
  );
};

export default Navbar;
