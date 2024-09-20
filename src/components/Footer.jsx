import React from 'react'
import logoimage from "../../public/kj logo.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Carousel2 from "../components/Carousel2";
import { IoMdCall } from "react-icons/io";

function Footer() {
  return (
    <footer className='border-t bg-white z-50 border-gray-300'>
      <div className="flex flex-col justify-between gap-4 py-6 px-6 bg-white">
        <div className="flex items-center gap-2 font-medium text-xl">
          <img
            src={logoimage}
            alt=""
            className="h-8 w-8 rounded-full object-cover object-center"
          />
          <span className="text-2xl text-black">Digitals</span>
        </div>
        <div className="flex justify-between w-full gap-3">
          <ul className="grid grid-cols-2 gap-3 text-black w-[450px]">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <div className="flex flex-1 items-center justify-start flex-col text-black">
            <div className="flex flex-col gap-3">
              <h1>Enter your gmail and submit, we will be back to you soon!</h1>
              <div>
                <input
                  type="text"
                  placeholder="abc@gmail.com"
                  typeof="email"
                  className="rounded-l py-[0.3rem] outline-none px-3  border-black
                  border"  
                />
                <button className="py-[0.35rem] px-3 border bg-black text-white rounded-r border-white">
                  sumbit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h1 className="text-black">You can also contact us here!</h1>
          <div className="text-black flex items-center gap-6 mt-3">
            <IoMdCall size={"26px"} />
            <FaFacebook size={"26px"} />
            <FaInstagram size={"26px"} />
            <BiLogoGmail size={"26px"} />
          </div>
        </div>
      </div>
      <div className="bg-gray-950 py-3 w-full text-white flex items-center justify-center">
        &copy; 2024 KJ Digitals: simri bakhtiyarpur, saharsa, 852127, bihar,
        india. All rights reserved!
      </div>
      </footer>
  )
}

export default Footer
