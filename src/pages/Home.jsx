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
import bee from '../../public/pngwing.com.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    console.log(event)
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const imageRef = useRef()
  const randomX = gsap.utils.random(-500, 100, 500)
  const randomY = gsap.utils.random(-360, 30, 300)
  const rotateX = gsap.utils.random(-500, 100, 500)

  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [rotateValue, setrotateValue] = useState(0)
  console.log(xValue, yValue, rotateValue)
  useGSAP(() => {
    gsap.to(imageRef.current, {
      x: xValue,
      y: yValue,
      duration: 0.6,
      rotate: rotateValue
    })
  }, [xValue, yValue, rotateValue])

  useGSAP(() => {
    gsap.to('.circle', {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0.6,
    })
  }, [mousePosition])

  // useGSAP(() => {
  //   gsap.from(".animated-cards", {
  //     x: 150,
  //     opacity: 50,
  //       scrollTrigger: {
  //           trigger: '.animated-cards',
  //           scroller: 'body',
  //           markers: true,
  //           start: 'top 80%',
  //           scrub: true
  //       }
  //   })
  // })
  return (
    <>
    <main className="">
      <img src={bee} alt="" onClick={() => {
        setXValue(randomX)
        setYValue(randomY)
        setrotateValue(rotateX)
      }} ref={imageRef} className="h-16 absolute w-16 scale-[105%] top-[50%] left-[50%] rounded-full object-cover" />
    </main>
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

      <section onMouseMove={handleMouseMove} className="bg-[#FFDC90] relative">
        <div className="circle rounded-full bg-yellow-500"></div>
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
