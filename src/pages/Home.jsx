import { useState, useRef, useEffect } from "react";
import "../App.css";
import Card from "../components/Card";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Carousel2 from "../components/Carousel2";
import images from "../components/images";
import { IoMdCall } from "react-icons/io";
import CompanyCard from "../components/CompanyCard";
import "../../src/components/testimonial.css";
import TrustedCompanies from "../components/TrustedCompanies";

function Home() {
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

      <section className="bg-[#FFDC90]">
      <div className="flex flex-col bg-black py-8 justify-between items-center gap-6">
            <h1 className="text-blue-400 text-4xl">
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
        {/* </div> */}
        {/* <Carousel2 visibleItemsCount={1} withIndicator isInfinite>
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image.imgURL}
                className="h-[400px] w-[400px] aspect-square object-cover"
                loading="lazy"
                alt={image.imgAlt}
              />
            );
          })}
        </Carousel2> */}
        <div className="bg-white flex items-center justify-center w-full">
          <img
            src="https://i.pinimg.com/originals/e2/68/7e/e2687eb8d2912f194a5840bbd472236f.jpg"
            alt=""
            className="w-1/2"
          />
          
        </div>
      </section>
      <section className="pb-4 px-3 flex flex-col gap-3 my-3">
        <h1 className="text-2xl font-medium">
          Explore Our Trusted Brands and Find Your Perfect Match!
        </h1>
        <section>
          <TrustedCompanies />
        </section>
      </section>
      <section className="py-4 px-3 flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Our Top Products!</h1>
        <div className="bg-gray-300 h-[400px flex w-full">
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
      
      <section className="pb-4 px-3 flex flex-col gap-3 my-3">
        <h1 className="text-2xl font-medium">
          Your Trust, Our Pride: See What Our Customers Are Saying
        </h1>
        <div className="testimonial-container">
          <div className="grid-testimonial-container flex gap-12 px-0">
            <div className="testimonial-cards">
              <div className="user-review">
                <p>
                  KJ Digitals ki service bahut hi acchi hai. Maine recently ek
                  naya AC kharida, aur ye mere expectations ko poora karta hai.
                  Unka customer service bhi bahut madadgar tha.
                </p>
              </div>
              <div className="mx-auto">
                <img
                  className="rounded-full h-12 w-12 aspect-sqaure object-cover"
                  src="https://i.pinimg.com/736x/3b/54/98/3b54987c27f6abd8c8c5802f7be8301e.jpg"
                  alt=""
                />
              </div>
              <div className="username mx-auto">
                <span>sarah johnson</span>
              </div>
              <div className="mx-auto user-profession">
                <span>10th grade english teacher</span>
              </div>
            </div>
            <div className="testimonial-cards flex-1">
              <div className="user-review">
                <p>
                  Mujhe KJ Digitals se washing machine aur speaker kharidne ka
                  anubhav bahut accha raha. Products superb hain, aur delivery
                  bhi timely thi. Main is company ko zaroor recommend karunga.
                </p>
              </div>
              <div className="mx-auto">
                <img
                  className="rounded-full h-12 w-12 aspect-sqaure object-cover"
                  src="https://i.pinimg.com/564x/e6/28/36/e628364d55edb04d80d5ef3cbb90c555.jpg"
                  alt=""
                />
              </div>
              <div className="username mx-auto">
                <span>Mark davis</span>
              </div>
              <div className="mx-auto user-profession">
                <span>parent</span>
              </div>
            </div>
            <div className="testimonial-cards flex-2">
              <div className="user-review">
                <p>
                  KJ Digitals par available home appliances ki quality behtareen
                  hai. Maine yahan se ek mixer grinder kharida, aur ye bahut
                  achha kaam kar raha hai. Unka customer support bhi excellent
                  hai.
                </p>
              </div>
              <div className="mx-auto">
                <img
                  className="rounded-full h-12 w-12 aspect-sqaure object-cover"
                  src="https://i.pinimg.com/564x/2b/98/e2/2b98e274273aada52345a02b987dac4b.jpg"
                  alt=""
                />
              </div>
              <div className="username mx-auto">
                <span>dr. james carter</span>
              </div>
              <div className="mx-auto user-profession">
                <span>school administrator</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Home
