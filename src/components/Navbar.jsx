import React, { useEffect, useState } from "react";
import logoimage from "/kj logo.png";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import kitchen from "../../public/pngwing.com (1).png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosHome } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Navbar() {
  const [open, setIsOpen] = useState(false);
  const navigate = useNavigate()

  useGSAP(() => {
    gsap.fromTo(
      "nav",
      {
        y: -100,
      },
      {
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  });
  useGSAP(() => {
    gsap.fromTo(
      ".search-input",
      { width: "0%", transformOrigin: "left" }, // Start with width 0 from the right
      { width: "100%", duration: 2, delay: 1, ease: "power2.out" } // Grow to full width
    );
  });
  return (
    <>
      <nav className="flex items-center justify-between z-50 border-b border-gray-300 fixed top-0 mx-auto max-w-[1600px] w-full bg-white lg:px-6 px-3 py-2">
        <Link to="/" className="flex items-center gap-12">
          <div className="flex items-center gap-2 font-medium text-xl">
            <div className="rounded-full aspect-square p-[1px] bg-black">
            <img
              src={logoimage}
              alt="Logo"
              className="h-12 w-12 rounded-full object-cover object-center"
            />
            </div>
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
        <Link className="md:flex items-center hidden" to={'/products'}>
          <input
            placeholder="find available products"
            type="text"
            className="rounded-l-[16px] search-input border border-gray-300 outline-none text-black px-4 py-[6px]"
          />
          <button className="bg-[#adeb05] border border-[#7b7b7b] rounded-r-[16px] text-black py-[6px] px-3">
            <IoSearch size={"24px"} />
          </button>
        </Link>
        <div
          onClick={() => setIsOpen(!open)}
          className="lg:hidden cursor-pointer text-gray-500"
        >
          {!open ? (
            <RxHamburgerMenu size={"26px"} />
          ) : (
            <IoIosCloseCircleOutline size={"30px"} />
          )}
        </div>
      </nav>
      {/* <div className="h-[75px]"></div> */}
      <div
        className={`h-[150vh] bg-white transition-transform overflow-hidden duration-500 ${
          open ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } flex flex-col justify-start my-auto pt-[75px] font-medium border-r border-gray-400 inset-0 z-40 px-3 py-3 w-fit left-0 bottom-0 fixed`}
      >
        <div className="flex flex-col items-start pt-[30vh] rounded-xl justify-start gap-4 h-screen my-4">
          <NavLink
            onClick={() => setIsOpen(!open)}
            className={({ isActive }) =>
              `bg-white text-md gap-3 flex w-full items-center justify-start text-black hover:text-black hover:bg-gray-200 rounded-lg px-3 py-2 ${
                isActive ? "activeon" : ""
              }`
            }
            to="/"
          >
            <IoIosHome size={"24px"} />
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(!open)}
            className={({ isActive }) =>
              `bg-white text-md gap-3 flex w-full items-center justify-start text-black hover:text-black hover:bg-gray-200 rounded-lg px-3 py-2 `
            }
            to="/products"
          >
            <IoMdSearch size={"24px"} />
            Search
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(!open)}
            className={({ isActive }) =>
              `bg-white text-md gap-3 flex w-full items-center justify-start text-black hover:text-black hover:bg-gray-200 rounded-lg px-3 py-2 ${
                isActive ? "activeon" : ""
              }`
            }
            to="/contact"
          >
            <FaUserPlus size={"24px"} />
            Contact
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(!open)}
            className={({ isActive }) =>
              `bg-white text-md gap-3 flex w-full items-center justify-start text-black hover:text-black hover:bg-gray-200 rounded-lg px-3 py-2 ${
                isActive ? "activeon" : ""
              }`
            }
            to="/products"
          >
            <FaCartArrowDown size={"24px"} />
            Products
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(!open)}
            className={({ isActive }) =>
              `bg-white text-md gap-3 flex w-full items-center justify-start text-black hover:text-black hover:bg-gray-200 rounded-lg px-3 py-2 ${
                isActive ? "activeon" : ""
              }`
            }
            to="/about"
          >
            <IoMdInformationCircleOutline size={"24px"} />
            About us
          </NavLink>
        </div>
        <div className="bg-black h-[4.5rem] w-full fixed flex items-center justify-center left-0 bottom-0">
          <Link to="/">
            <img
              src={logoimage}
              alt="Logo"
              className="h-12 w-12 rounded-full object-cover object-center"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;