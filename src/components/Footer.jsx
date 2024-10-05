import React, { useState } from "react";
import logoimage from "../../public/kj logo.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Carousel2 from "../components/Carousel2";
import { IoMdCall } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { MdPrivacyTip } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import Success from "./Success";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";

function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    fetch("https://formcarry.com/s/X4QKpNgXeNa", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message: "This user wants to contact you",
      }),
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
      <footer className="border-t bg-white z-10 border-gray-300">
        <div className="flex flex-col justify-between gap-4 py-6 px-6 bg-gradient-to-r from-neutral-100 to-stone-300">
          <div className="flex items-center gap-2 lg:py-8 font-medium text-xl">
            <span className="text-2xl lg:text-3xl text-black">KJ Digitals</span>
          </div>
          <div className="flex md:flex-row flex-col w-full gap-3">
            <ul className="grid grid-cols-2 gap-3 text-black w-full md:w-[750px]">
              <li className="flex items-center justify-start gap-2 font-medium">
                <span className="text-black">
                  <FaWhatsapp size={"22px"} />
                </span>{" "}
                8797594743
              </li>
              <li className="flex items-center justify-start gap-2 font-medium">
                <span className="text-black">
                  <IoMdCall size={"22px"} />
                </span>{" "}
                8709159857
              </li>
              <li className="flex items-center justify-start gap-2 font-medium">
                <span className="text-black">
                  <MdEventAvailable size={"22px"} />
                </span>{" "}
                10:00AM - 10:00PM
              </li>
              <li className="flex items-center justify-start gap-2 font-medium">
                <span className="text-black">
                  <MdPrivacyTip size={"22px"} />
                </span>{" "}
                Privacy & Prolicy
              </li>
              <li className="lg:flex items-center justify-start hidden gap-2 font-medium">
                <span className="text-black">
                  <ImLocation2 size={"22px"} />
                </span>{" "}
                Near shiv mandir, main road, simri bakhtiyarpur, saharsa,
                852127, bihar, india.
              </li>
            </ul>
            <li className="flex items-center justify-start lg:hidden gap-2 font-medium">
              <span className="text-black">
                <ImLocation2 size={"22px"} />
              </span>
              Near shiv mandir, main road, simri bakhtiyarpur, saharsa, 852127,
              bihar, india.
            </li>

            <div className="flex flex-1 items-start md:items-center justify-start flex-col text-black">
              <div className="flex flex-col gap-3">
                <h1 className="font-medium mt-3 md:my-0">
                  Enter your gmail and submit, we will be back to you soon!
                </h1>
                <form onSubmit={(e) => onSubmit(e)}>
                  <input
                    type="text"
                    placeholder="abc@gmail.com"
                    typeof="email"
                    className="rounded-l py-[0.3rem] outline-none px-3  border-black
                  border"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="py-[0.35rem] px-3 border bg-black text-white rounded-r border-white"
                  >
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="my-4">
            <li className="flex my-3 items-center justify-start gap-2 text-blue-700 font-medium">
              <span className="text-red-600">GST NO.</span> 10ELLPK2267P1ZQ
            </li>

            <h1 className="text-black">You can also contact us here!</h1>
            <div className="text-black flex items-center gap-6 mt-3">
              <Link
                to="https://www.facebook.com/profile.php?id=61565158797039"
                className="hover:text-[#3e4ee0]"
              >
                <FaFacebook size={"26px"} />
              </Link>
              <Link
                to="https://www.instagram.com/kjdigitals2024/"
                className="hover:text-[#ed4c4c]"
              >
                <FaInstagram size={"26px"} />
              </Link>
              <li className="flex items-center justify-start gap-1 hover:text-[#209520]">
                <span className="hover:text-[#8b32f7]">
                  <CgMail size={"28px"} />
                </span>{" "}
                kjdegitals@gmail.com
              </li>
            </div>
          </div>
        </div>
        <div className="bg-gray-950 py-3 w-full text-white text-center flex items-center justify-center">
          &copy; 2024 KJ Digitals: simri bakhtiyarpur, saharsa, 852127, bihar,
          india. All rights reserved!
        </div>
      </footer>
    </>
  );
}

export default Footer;
