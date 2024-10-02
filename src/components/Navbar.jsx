import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > lastScrollPos) {
        setIsScrollingDown(true); // Hide navbar on scroll down
      } else {
        setIsScrollingDown(false); // Show navbar on scroll up
      }

      if (currentScrollPos > 100) {
        setIsScrolled(true); // Change navbar background to white
      } else {
        setIsScrolled(false); // Keep original background
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <div
      className={`fixed top-0 w-full transition-transform duration-300 z-50 ${
        isScrollingDown ? '-translate-y-full' : 'translate-y-0'
      } ${isScrolled ? 'bg-white border-b border-gray-300' : 'bg-gradient-to-r from-[#101115] to-[#061241]'}`}
    >
      <div className="flex items-center justify-between h-20 px-4 lg:px-24">
        {/* Logo */}
        <div className="ml-4">
          <img
            className="w-20"
            src="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/66ddbdec3555ab75c6796de4_logo%20jasne.svg"
            alt="Logo"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? (
              <AiOutlineClose className={`text-2xl ${isScrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <AiOutlineMenu className={`text-2xl ${isScrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Links (hidden on mobile, shown on medium+ screens) */}
        <nav className={`hidden md:flex ${isScrolled ? 'text-black' : 'text-white'} gap-5 ml-4`}>
          <ul className="flex gap-5">
            {['HOME', 'SERVICES', 'ABOUT US', 'INBOUND AGENT', 'CAREERS', 'MEDIA CENTRE'].map((item, idx) => (
              <li key={idx} className="relative group">
                <Link
                  to={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`${isScrolled ? 'hover:text-black' : 'hover:text-white'} group-hover:no-underline`}
                >
                  {item}
                </Link>
                <div
                  className={`block h-[2px] ${
                    isScrolled ? 'bg-black' : 'bg-white'
                  } scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-4`}
                ></div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu (shown on mobile) */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:hidden fixed top-20 left-0 w-full bg-white p-4 transition-transform`}
        >
          <ul className="flex flex-col items-center gap-4">
            {['HOME', 'SERVICES', 'ABOUT US', 'INBOUND AGENT', 'CAREERS', 'MEDIA CENTRE'].map((item, idx) => (
              <li key={idx} className="text-gray-800">
                <Link
                  to={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <button className="text-black w-32 h-10 bg-white hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] rounded-lg">
            <Link to="/letstalk" className="block w-full h-full flex items-center justify-center">
              Let's talk ➜
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


  