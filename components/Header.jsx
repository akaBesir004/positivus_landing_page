'use client';
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto flex justify-between items-center  lg:px-16 px-8  lg:gap-24 py-4 bg-white">
     
      <div className="flex items-center space-x-2">
        <img src="images/logo.jpg" alt="Logo" className="h-8 w-8" />
        <h1 className="text-2xl font-medium">Positivus</h1>
      </div>

    
      <button
        className="block lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation Menu */}
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } absolute lg:static top-16 left-0 w-full lg:w-auto flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 bg-white lg:bg-transparent shadow-md lg:shadow-none lg:flex`}
      >
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Use Cases</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Blog</li>
        <button className="py-[10px] px-[25px] rounded-[14px] border border-black">
          Request a quote
        </button>
      </ul>
    </div>
  );
};

export default Header;
