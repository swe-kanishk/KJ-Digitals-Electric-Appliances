import "../App.css";
import Card from "../components/Card";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import "../../src/components/testimonial.css";
import TrustedCompanies from "../components/TrustedCompanies";
import Reviews from "../components/Reviews";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import kitchen from "../../public/pngwing.com (1).png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoAdd from "../components/VideoAdd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import refrigerator from "../../public/Comp 1.mp4";
import { FaArrowCircleRight } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  return (
    <>
      <marquee behavior="scroll" direction="left" className="py-3 text-white bg-[#6c25df]">
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

      <section className="relative flex flex-col lg:flex-row justify-between min-h-[65vh] sm:min-h-[70vh] md:min-h[75vh] lg:min-h-[85vh]">
        <div className="flex xl:flex-wrap xl:justify-center justify-between pt-[6%] pb-[6%] lg:pb-0 flex-1 items-start lg:pl-6 flex-col w-full gap-6 xl:w-1/2">
          <div className="text-center lg:text-start mx-auto px-3 flex flex-col gap-6">
            <h1 className="md:text-[2rem] text-[1.2rem] sm:text-[1.5rem] font-bold">
              Smart Living Starts Here
              <br /> Elevate Your Home with Cutting-Edge Electronics
            </h1>
            <p className="text-gray-400 mx-auto lg:mx-0 xl:w-auto w-full text-[14px] sm:text-[18px] md:font-medium">
              Transform your lifestyle with KJ Digitals! Explore the latest in
              electronic appliances that combine sleek design with unbeatable
              performance. Upgrade today and live smarter.
            </p>
            <Link
              to="/products"
              className="bg-red-500 mx-auto lg:mx-0 xl:self-start w-fit hover:bg-red-600 text-white py-2 px-4 font-medium rounded-lg flex items-center gap-2"
            >
              See all available products <FaArrowCircleRight className="animate-arrow" size={"20px"} />
            </Link>
          </div>
          <div className="flex lg:gap-3 items-end w-full xl:flex-1 h-full lg:pr-6 justify-between">
            <img
              src="https://i.pinimg.com/564x/f0/a3/ef/f0a3efaa6be4fac83e00d06181735e8c.jpg"
              className="rounded-2xl lg:flex lg:w-3/4 xl:hidden 2xl:flex 2xl:w-2/4 self-end mt-3 w-2/4"
              alt=""
            />

            <div className="h-fit flex lg:hidden xl:flex self-end mt-3 rounded-2xl flex-1 overflow-hidden w-full relative ">
              <img
                className="hidden lg:flex min-w-[600px] lg:rounded-2xl"
                src="https://i.pinimg.com/564x/bb/46/cc/bb46cce207cc28ca37d6c70854560c25.jpg"
                alt=""
              />
              <ul className="absolute flex flex-col gap-1 top-4 left-4 font-semibold">
                <span className="text-white pb-3">Why KJ Digitals ?</span>
                <li className="flex items-center gap-2 text-sm text-black">
                  <TiArrowRight />
                  Top-Quality Appliances from Trusted Brands.
                </li>
                <li className="flex items-center gap-2 text-sm text-black">
                  <TiArrowRight />
                  Affordable Prices with Amazing Discounts.
                </li>
                <li className="flex items-center gap-2 text-sm text-black">
                  <TiArrowRight />
                  Fast, Reliable Shipping Nationwide.
                </li>
                <li className="flex items-center gap-2 text-sm text-black">
                  <TiArrowRight />
                  Expert Support Available 24/7.
                </li>
              </ul>
              {/* <Link
                to="/contact"
                className="absolute bottom-5 right-5 text-white z-20 border-white border-2 rounded-lg bg-black px-4 py-2 hover:bg-purple-700 font-medium"
              >
                Contact us!
              </Link> */}
            </div>
            <div className="relative w-fit lg:hidden flex justify-end">
            <img
              src="https://i.pinimg.com/564x/69/4c/1f/694c1f3e615fb3419496ddf7ec675098.jpg"
              className="absolute max-w-[300px] hidden md:flex h-[250px] z-10 rounded-xl bottom-0 right-[70%]  border-4 border-white"
              alt=""
            />
            <img
              className="rounded-xl lg:w-auto relative left-[1rem] w-full"
              src="https://i.pinimg.com/564x/e7/91/58/e79158085645e47113f4488b8807c3e3.jpg"
              alt=""
            />
          </div>
          </div>
        </div>
          <div className="relative hidden lg:flex justify-end">
            <img
              src="https://i.pinimg.com/564x/69/4c/1f/694c1f3e615fb3419496ddf7ec675098.jpg"
              className="absolute max-h-[400px] lg:h-[400px] z-10 rounded-xl bottom-0 right-[40%] lg:right-[70%] border-4 border-white"
              alt=""
            />
            <img
              className="rounded-xl lg:w-auto relative left-[1rem] w-1/2"
              src="https://i.pinimg.com/564x/e7/91/58/e79158085645e47113f4488b8807c3e3.jpg"
              alt=""
            />
          </div>
      </section>

      <section className="lg:bg-[#151515] lg:py-4 flex flex-col gap-3">
        <h1 className="text-2xl px-3 hidden sm:flex lg:text-white font-medium">
          Explore Our Trusted Brands and Find Your Perfect Match!
        </h1>
        <h1 className="text-2xl px-2 sm:hidden lg:text-white font-medium">
          Explore Our Trusted Brands!
        </h1>
        <section className="overflow-hidden bg-[#151515] w-[100vw]">
          <TrustedCompanies />
        </section>
      </section>

      <section className="py-4 px-3 flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Our Top Categories!</h1>
        <div className="bg-gray-300 flex w-full overflow-x-scroll animated-cards">
          <Card
            title={"Summer Appliances"}
            subtitle={"Stay Cool All Year Round – Powerful ACs for Ultimate Comfort!."}
            image="https://i.pinimg.com/736x/5b/51/af/5b51af33306d4eb1c2fee0ec58c308d2.jpg"
          />
          <Card
            title={"Kitchen Appliances"}
            subtitle={
              "Cook with Precision – Modern Ovens for Perfect Meals Every Time!."
            }
            image="https://i.pinimg.com/736x/00/20/c5/0020c563c92f77ed35eb2661bb732ed0.jpg"
          />
          <Card
            title={"Laundry Appliances"}
            subtitle={
              "Effortless Laundry Days – Washing Machines that Do the Hard Work for You!"
            }
            image="https://i.pinimg.com/736x/f7/dd/4c/f7dd4c81c591889ec5dcde51fb5dc56a.jpg" />
          <Card
            title={"Entertainment Appliances"}
            subtitle={"Experience Entertainment Like Never Before – Stunning TVs for a Cinematic Viewing"}
            image="https://i.pinimg.com/736x/69/4c/1f/694c1f3e615fb3419496ddf7ec675098.jpg"
          />
        </div>
      </section>
      <section className="py-4 px-3 flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Our Top Products!</h1>
        <div className="bg-gray-300 flex w-full overflow-x-scroll animated-cards">
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

    </>
  );
}

export default Home;
