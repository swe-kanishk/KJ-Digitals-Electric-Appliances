import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import Success from "../components/Success";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    fetch("https://formcarry.com/s/X4QKpNgXeNa", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: customerName, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setSuccess(!success);
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <>
      {success ? <Success /> : ""}
      <div className="flex flex-col">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="flex border border-black"
        >
          <div className="flex h-fit md:h-[500px] pt-8 flex-1">
            <div className="w-full flex-1 mx-auto px-6 py-3  flex flex-col justify-center">
              <h1 className="text-3xl font-medium">Contact us</h1>
              <p className="text-gray-500">
                <span className="hidden lg:inline">
                  Feel free to contact us any time!
                </span>{" "}
                we will get back to you as soon as we can!
              </p>
              <div className="flex flex-col gap-4 py-6">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="border-b border-gray-200 md:w-1/2 outline-none"
                  id="name"
                  placeholder="Your first and last name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b border-gray-200 md:w-1/2 outline-none"
                  id="email"
                  placeholder="john@doe.com"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-b border-gray-200 md:w-1/2 outline-none"
                  id="message"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              <div className="w-full mx-auto flex py-2 items-center justify-center">
                <button
                  type="submit"
                  className="bg-black px-3 py-1 text-white rounded text-lg"
                >
                  send
                </button>
              </div>
            </div>
          </div>
          <div className="w-[10%] md:w-[20%] bg-black relative">
            <div className="bg-[#ffb277] rounded-lg top-[20%] right-[50%] w-[300px] hidden md:flex flex-col pr-3 pl-6 py-6 absolute">
              <h1 className="text-2xl font-medium">Contact detail</h1>
              <p className="w-full">
                Connect with us for instant support on all your electronic needs
                – KJ Digitals is always here for you!
              </p>
              <ul className="flex flex-col gap-3 py-4">
                <li className="flex text-lg items-center gap-2">
                  <FaFacebook size={"24px"} />
                  <span>kj digitals</span>
                </li>
                <li className="flex text-lg items-center gap-2">
                  <FaInstagram size={"24px"} />
                  <span>kj digitals2024</span>
                </li>
                <li className="flex text-lg items-center gap-2">
                  <BiLogoGmail size={"24px"} />
                  <span>kjdegitals@gmail.com</span>
                </li>
                <li className="flex text-lg items-center gap-2">
                  <IoMdCall size={"24px"} />
                  <span>8709159857</span>
                </li>
              </ul>
            </div>
          </div>
        </form>
        <div className="flex">
          <div className="bg-[#ffb277] flex-1 md:hidden px-3 py-6">
            <h1 className="text-2xl font-medium">Contact detail</h1>
            <p className="w-full">
              Lorem ipsum dolor sit amet lmf gye adipisicing elit. Accusamus,
              corrupti!
            </p>
            <ul className="flex flex-col gap-3 py-4">
              <li className="flex text-lg items-center gap-2">
                <FaFacebook size={"24px"} />
                <span>kj digitals</span>
              </li>
              <li className="flex text-lg items-center gap-2">
                <FaInstagram size={"24px"} />
                <span>kj digitals2024</span>
              </li>
              <li className="flex text-lg items-center gap-2">
                <BiLogoGmail size={"24px"} />
                <span>kjdegitals@gmail.com</span>
              </li>
              <li className="flex text-lg items-center gap-2">
                <IoMdCall size={"24px"} />
                <span>8709159857</span>
              </li>
            </ul>
          </div>
          <div className="w-[10%] bg-black relative"></div>
        </div>
      </div>
    </>
  );
}

export default Contact;
