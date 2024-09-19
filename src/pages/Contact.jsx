import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";

function Contact() {
  return (
    <section className="flex border border-black">
        <div className="flex h-[500px] flex-1">
        <div className=" mx-auto px-6 py-3  flex flex-col justify-center">
          <h1 className="text-3xl font-medium">Contact us</h1>
          <p className="text-gray-500">Feel free to contact us any time! we will get back to you as soon as we can!</p>
          <div className="flex flex-col gap-4 py-6">
          <input placeholder="name" className="border-b border-gray-200 w-1/2 outline-none" type="text" />
          <input placeholder="email" className="border-b border-gray-200 w-1/2 outline-none" type="email" />
          <textarea placeholder="message" className="border-b border-gray-200 w-1/2 outline-none" name="" id=""></textarea>
          </div>
          <div className="w-full mx-auto flex py-2 items-center justify-center">
          <button className="bg-black px-3 py-1 text-white rounded text-lg">send</button>
          </div>
        </div>
          {/* <img src="https://i.pinimg.com/564x/42/70/ae/4270ae582e42c9f837c190407e24c7f2.jpg" alt="" /> */}
        </div>
        <div className="w-[20%] bg-black relative">
        <div className="bg-[#ffb277] top-[20%] right-[50%] w-[300px] px-3 py-6 absolute">
          <h1 className="text-2xl font-medium">Contact detail</h1>
          <p className="w-full">Lorem ipsum dolor sit amet lmf gye adipisicing elit. Accusamus, corrupti!</p>
          <ul className="flex flex-col gap-3 py-4">
            <li className="flex text-lg items-center gap-2"><FaFacebook size={'24px'} /><span>kj digitals</span></li>
            <li className="flex text-lg items-center gap-2"><FaInstagram size={'24px'} /><span>kj digitals2024</span></li>
            <li className="flex text-lg items-center gap-2"><BiLogoGmail size={'24px'} /><span>kjdegitals@gmail.com</span></li>
            <li className="flex text-lg items-center gap-2"><IoMdCall size={'24px'} /><span>8797594743</span></li>
          </ul>
        </div>
        </div>
        
    </section>
  );
}

export default Contact;
