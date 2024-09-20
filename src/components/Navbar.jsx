import React, { useEffect, useState } from "react";
import logoimage from "/kj logo.jpeg";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black text-white my-3 mx-3 rounded-[4rem] px-6 py-2">
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
          className="rounded-l-[16px] outline-none text-black px-4 py-[6px]"
        />
        <button className="bg-[#adeb05] rounded-r-[16px] text-black py-[6px] px-3">
          <IoSearch size={"24px"} />
        </button>
      </div>
      <RxHamburgerMenu size={'26px'} className="lg:hidden" />
    </nav>
  );
}

export default Navbar;
