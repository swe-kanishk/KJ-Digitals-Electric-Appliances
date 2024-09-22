import React, { useEffect, useState } from "react";
import logoimage from "/kj logo.jpeg";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import kitchen from '../../public/pngwing.com (1).png'
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Navbar() {
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
    <nav className="flex items-center justify-between z-20 shadow-md shadow-white fixed top-0 left-0 w-full bg-black text-white px-6 py-2">
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
      <ul className="lg:flex items-center gap-12 hidden">
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
          className="rounded-l-[16px] search-input outline-none text-black px-4 py-[6px]"
        />
        <button className="bg-[#adeb05] rounded-r-[16px] text-black py-[6px] px-3">
          <IoSearch size={"24px"} />
        </button>
      </div>
      <RxHamburgerMenu size={'26px'} className="lg:hidden" />
    </nav>
    <div className="h-[65px]"></div>
    </>
  );
}

export default Navbar;
