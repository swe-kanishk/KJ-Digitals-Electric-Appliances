import "../App.css";
import Card from "../components/Card";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import "../../src/components/testimonial.css";
import TrustedCompanies from "../components/TrustedCompanies";
import Reviews from "../components/Reviews";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from "react";
import kitchen from '../../public/pngwing.com (1).png'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useGSAP(() => {
    gsap.to(".animated-heading", {
        translateX: -100,
        duration: 2,
        scrollTrigger: {
            trigger: '.animated-heading',
            scroller: 'body',
            start: 'top 20%',
            scrub: true
        }
    })
  })
  return (
    <>
      <marquee behavior="scroll" direction="left">
        <div className="flex items-center">
          <span>
            KJ Digitals : near shiv mandir, main road, simri bakhtiyarpur,
            saharsa, 852127, bihar, india.
          </span>
          <div className="flex items-center gap-8 ml-8">
            <span className="flex items-center gap-1">
              <IoMdCall /> 8797594743
            </span>
            <div className="flex gap-6">
              <span className="flex gap-2 items-center">
                <FaFacebook /> KJ Digitals
              </span>
              <span className="flex gap-2 items-center">
                <FaInstagram /> kjdigitals2024
              </span>
              <span className="flex gap-2 items-center">
                <BiLogoGmail /> kjdegitals@gmail.com
              </span>
            </div>
          </div>
        </div>
      </marquee>

      <section className="bg-[#FFDC90] relative">
      <div className="flex flex-col bg-black py-8 justify-between px-8 items-center gap-6">
            <div className="flex flex-col justify-between items-center gap-6">
            <h1 className="text-blue-400 text-4xl animated-heading">
              Where Innovation Meets Comfort –{" "}
              <span className="py-1 px-3 text-black bg-[#fc911e] text-3xl rounded-lg">
                Discover KJ Digitals!
              </span>
            </h1>
            <p className="text-white max-w-[60%] text-center">
              Step into the future with KJ Digitals! Our range of home
              appliances offers unmatched efficiency and style to elevate your
              living space. From smart refrigerators to energy-saving washing
              machines, we have everything you need to make your home more
              comfortable and connected.
            </p>
            </div>
            <img
            src={kitchen}
            alt=""
            className="w-1/2 drop-shadow"
          />
          </div>
      </section>
      <section className="pb-4 px-3 flex flex-col gap-3 my-3">
        <h1 className="text-2xl font-medium">
          Explore Our Trusted Brands and Find Your Perfect Match!
        </h1>
        <section className="overflow-hidden w-[100vw]">
          <TrustedCompanies />
        </section>
      </section>
      <section className="py-4 px-3 flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Our Top Products!</h1>
        <div className="bg-gray-300 flex w-full animated-cards">
          <Card
            title={"Daikin Ac"}
            subtitle={"Stay Cool with Our Range of Advanced Air Conditioners."}
            image="https://i.pinimg.com/564x/c3/3c/b1/c33cb130124c81f5402e640850e897ba.jpg"
          />
          <Card
            title={"Lazer Grinder"}
            subtitle={
              "Effortless Blending and Mixing with Our Top-Quality Mixers."
            }
            image="https://i.pinimg.com/564x/51/6e/72/516e724bb8dc57d56216aafac6c38e4d.jpg"
          />
          <Card
            title={"Washing Machine"}
            subtitle={
              "Revolutionize Laundry Day with Our Efficient Washing Machines."
            }
            image="https://i.pinimg.com/474x/d3/e4/f7/d3e4f75d8a4c274a07f6565b27bc7830.jpg"
          />
          <Card
            title={"JBL Speaker"}
            subtitle={"Immerse Yourself in Sound with Our Premium Speakers."}
            image="https://i.pinimg.com/736x/64/eb/04/64eb0407c26eabbf62e03b6eeffdbfdf.jpg"
          />
        </div>
      </section>
      
      <Reviews />
      
    </>
  )
}

export default Home
