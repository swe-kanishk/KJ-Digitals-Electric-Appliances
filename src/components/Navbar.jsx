import React, { useEffect, useState } from "react";
import logoimage from "/kj logo.jpeg";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import kitchen from '../../public/pngwing.com (1).png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosHome } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

function Navbar() {
  const [open, setIsOpen] = useState(false)

  useGSAP(() => {
    gsap.fromTo("nav", 
      { 
        y: -100, 
      },  
      { 
        y: 0, 
        duration: 1.5, 
        ease: "power2.out"
      }
    );
  });
  useGSAP(() => {
    gsap.fromTo(".search-input", 
      { width: "0%", transformOrigin: "left" }, // Start with width 0 from the right
      { width: "100%", duration: 2, delay: 1, ease: "power2.out" } // Grow to full width
    );
  });
  return (
    <>
    <nav className="flex items-center justify-between z-30 border-b border-gray-300 fixed top-0 left-0 w-full bg-white lg:px-6 px-3 py-2">
      <Link to="/" className="flex items-center gap-12">
        <div className="flex items-center gap-2 font-medium text-xl">
          <img
            src={logoimage}
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover object-center"
          />
          <span className="text-2xl">Digitals</span>
        </div>
      </Link>
      <ul className="lg:flex items-center font-medium gap-12 hidden">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <div className="md:flex items-center hidden">
        <input
          placeholder="find available products"
          type="text"
          className="rounded-l-[16px] search-input border border-gray-300 outline-none text-black px-4 py-[6px]"
        />
        <button className="bg-[#adeb05] border border-[#7b7b7b] rounded-r-[16px] text-black py-[6px] px-3">
          <IoSearch size={"24px"} />
        </button>
      </div>
      <div onClick={() => setIsOpen(!open)}className="lg:hidden cursor-pointer">
      <RxHamburgerMenu size={'26px'} />
      </div>
    </nav>
    <div className="h-[65px]"></div>
    <div className={`h-screen bg-white transition-transform overflow-hidden duration-500 ${open ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} flex flex-col justify-between border-r border-gray-400 inset-0 z-20 px-3 py-3 w-fit fixed top-0`}>
    <Link to="/" className="flex items-center gap-12">
        <div className="flex items-center gap-2 font-medium text-xl">
          <img
            src={logoimage}
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover object-center"
          />
          <hr />
        </div>
      </Link>
      <div className="flex flex-col items-center rounded-xl justify-start gap-8 my-6 h-2/3">
          <NavLink onClick={() => setIsOpen(!open)} to="/" className="bg-white aspect-square flex items-center justify-center text-black"><IoIosHome size={'28px'} /></NavLink>
          <NavLink onClick={() => setIsOpen(!open)} to="/search" className="bg-white aspect-square flex items-center justify-center text-black"><IoMdSearch size={'28px'} /></NavLink>
          <NavLink onClick={() => setIsOpen(!open)} to="/contact" className="bg-white aspect-square flex items-center justify-center text-black"><FaUserPlus size={'28px'} /></NavLink>
          <NavLink onClick={() => setIsOpen(!open)} to="/products" className="bg-white aspect-square flex items-center justify-center text-black"><FaCartArrowDown size={'28px'} /></NavLink>
          <NavLink onClick={() => setIsOpen(!open)} to="/about" className="bg-white aspect-square flex items-center justify-center text-black"><IoMdInformationCircleOutline size={'28px'} /></NavLink>
      </div>
      <div className="bg-black h-12 w-full fixed flex items-center justify-center left-0 bottom-0">
      <Link to="/">
          <img
            src={logoimage}
            alt="Logo"
            className="h-8 w-8 rounded-full object-cover object-center"
          />
      </Link>
      </div>
    </div>
    </>
  );
}

export default Navbar;
