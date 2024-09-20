import React, { useEffect, useState } from 'react';
import logoimage from "/kj logo.jpeg";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const [direction, setDirection] = useState("ltr"); // ltr: left-to-right, rtl: right-to-left
  const location = useLocation(); // To detect the current route

  useEffect(() => {
    const routes = ["/", "/products", "/about", "/contact"];
    const currentIndex = routes.indexOf(location.pathname);
    const prevIndex = routes.indexOf(window.localStorage.getItem("prevPath"));

    if (currentIndex > prevIndex) {
      setDirection("ltr"); // Left to right
    } else if (currentIndex < prevIndex) {
      setDirection("rtl"); // Right to left
    }
    window.localStorage.setItem("prevPath", location.pathname);
  }, [location]);

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
      <ul className="flex items-center gap-12">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `nav-link active ${direction === "ltr" ? "ltr" : "rtl"}`
                : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? `nav-link active ${direction === "ltr" ? "ltr" : "rtl"}`
                : "nav-link"
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `nav-link active ${direction === "ltr" ? "ltr" : "rtl"}`
                : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `nav-link active ${direction === "ltr" ? "ltr" : "rtl"}`
                : "nav-link"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center">
        <input
          placeholder="find available products"
          type="text"
          className="rounded-l-[16px] outline-none text-black px-4 py-[6px]"
        />
        <button className="bg-[#adeb05] rounded-r-[16px] text-black py-[6px] px-3">
          <IoSearch size={"24px"} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
