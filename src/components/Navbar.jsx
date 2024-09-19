import React from 'react'
import logoimage from "../../public/kj logo.jpeg";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black text-white my-3 mx-3 rounded-[4rem] px-6 py-2">
        <Link to="/" className="flex items-center gap-12">
          <div className="flex items-center gap-2 font-medium text-xl">
            <img
              src={logoimage}
              alt=""
              className="h-12 w-12  rounded-full object-cover object-center"
            />
            <span className='text-2xl'>Digitals</span>
          </div>
        </Link>
        <ul className="flex items-center gap-12">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='about/'>About</NavLink>
          <NavLink to='/contact'>Contact us</NavLink>
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
  )
}

export default Navbar
