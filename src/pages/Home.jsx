import "../App.css";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import "../../src/components/testimonial.css";
import TrustedCompanies from "../components/TrustedCompanies";
import Reviews from "../components/Reviews";
import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import kitchen from "../../public/pngwing.com (1).png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoAdd from "../components/VideoAdd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import refrigerator from "../../public/Comp 1.mp4";
import { FaArrowCircleRight } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { productData } from "../data/products.js";
import { GiWashingMachine } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbAirConditioning } from "react-icons/tb";
import { TbMicrowaveFilled } from "react-icons/tb";
import { GiChimney } from "react-icons/gi";
import { FaTv } from "react-icons/fa";
import tableFan from '../../public/home.png'
import ceilingFan from '../../public/ceiling.png'
import { CategoriesContext } from "../components/MainLayout.jsx";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [categorizedProducts, setCategorizedProducts] = useState({});
  const { selectedCategories, setSelectedCategories } = useContext(CategoriesContext);

  console.log(selectedCategories)

  const navigate = useNavigate()
  const setIcon = (category) => {
    switch (category) {
      case "washing_machine":
        return <GiWashingMachine size={'60px'} />;

      case "fridge":
        return <CgSmartHomeRefrigerator size={'60px'} />;

      case "Ac":
        return <TbAirConditioning size={'60px'} />;

      case "Microwave":
        return <TbMicrowaveFilled size={'60px'} />;

      case "Chimney":
        return <GiChimney size={'60px'} />;

      case "ceilling-fan":
        return (
          <img className="h-[60px] opacity-60" src={ceilingFan} alt="ceiling fan" />
        
        );

      case "television":
        return <FaTv size={'60px'} />;

      case "table-fan":
        return (
          <img className="h-[60px] opacity-60" src={tableFan} alt="table fan" />
        );
    }
  };

  useEffect(() => {
    const categories = {};
    productData.forEach((product) => {
      const { category } = product;
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(product);
    });
    setCategorizedProducts(categories);
  }, []);

  return (
    <>
      <div className="bg-black pt-[4rem]">

      <marquee
        behavior="scroll"
        direction="left"
        className="py-3 text-white bg-[#6c25df]"
      >
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
      <section>
        <h1 className="text-center text-4xl bg-black py-1 px-3 flex flex-col  bungee-spice-regular">KJ-Digitals <span className="text-white text-[14px]">डिजिटल दुनिया अनबॉक्स अपने सपनों की</span></h1>
      </section>
      </div>
      <section className="relative flex flex-col lg:flex-row justify-between min-h-[65vh] sm:min-h-[70vh] md:min-h[75vh] lg:min-h-[85vh]">
        <div className="flex xl:flex-wrap xl:justify-center justify-between pt-[6%] pb-[6%] lg:pb-0 flex-1 items-start lg:pl-6 flex-col w-full gap-6 xl:w-1/2">
          <div className="text-center lg:text-start mx-auto px-3 flex flex-col gap-6">
            <h1 className="md:text-[2rem] text-center lg:text-start text-[1.2rem] sm:text-[1.5rem] font-semibold">
              Welcome to <span className="py-1 px-3 bg-[#ed4447] rounded-lg  text-white">KJ Digitals</span> {" "} – Where Innovation Meets Trust!
              <br /> Explore the Latest in Electronics with Unbeatable Quality
              and Genuine Customer Satisfaction!
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
              See all available products{" "}
              <FaArrowCircleRight className="animate-arrow" size={"20px"} />
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
        <h1 className="text-2xl font-medium">Our Top Home Appliances!</h1>
        <div className="bg-gray-300 flex w-full overflow-x-scroll animated-cards">
          <Card
            title={"Airconditioner"}
            subtitle={"Stay Cool with Our Range of Advanced Air Conditioners."}
            image="https://i.pinimg.com/564x/1c/74/6a/1c746aab8e8f5e4a6e4d0a1345924351.jpg"
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
            image="https://i.pinimg.com/564x/03/c5/0c/03c50c5fbdfb7cfd0f5371c380176bd4.jpg"
          />
          <Card
            title={"JBL Speaker"}
            subtitle={"Immerse Yourself in Sound with Our Premium Speakers."}
            image="https://i.pinimg.com/736x/64/eb/04/64eb0407c26eabbf62e03b6eeffdbfdf.jpg"
          />
        </div>
      </section>

      <section className="py-4 px-3 flex bg-gradient-to-bl from-lime-400 via-emerald-500 to-green-600 flex-col gap-3">
        <h1 className="text-xl md:text-2xl font-medium">
          Explore Products From Each Categories!
        </h1>
        <ul className="flex items-center justify-start rounded-lg px-3 bg-black overflow-x-scroll w-full">
          {Object.keys(categorizedProducts).map((category) => (
            <li
              key={category}
              onClick={() => {
                setSelectedCategories(category)
                navigate('/products')
              }}
              className="bg-black flex  items-center justify-start lg:justify-center text-white w-full px-3 py-4"
            >
              <div  className="bg-white hover:scale-105 duration-300 min-w-[200px] flex-1 w-full cursor-pointer text-gray-500 gap-8 px-3 py-2 flex flex-col items-between justify-center rounded-lg">
                <span className="flex items-center w-full justify-center text-lg font-medium">
                  {category.toUpperCase()}
                </span>
                <span className="w-full flex items-center justify-center">
                  {
                    setIcon(category)
                  }
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      
      <section className="py-4 px-3 flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Our Top Smart-Watches!</h1>
        <div className="bg-gray-300 flex w-full overflow-x-scroll animated-cards">
          <Card
            title={"Apple Watch Series 9"}
            subtitle={"The Ultimate Health and Fitness Companion with Advanced Tracking and Seamless Connectivity"}
            image="https://i.pinimg.com/564x/6e/b7/3e/6eb73ed0ec31e26dd728c24fe5083c71.jpg"
          />
          <Card
            title={"Samsung Galaxy Watch 6"}
            subtitle={
              "Stay Ahead with Cutting-Edge Fitness Insights and Timeless Design"
            }
            image="https://i.pinimg.com/564x/4e/a8/50/4ea8507ae664e6201ef80df4351f4b76.jpg"
          />
          <Card
            title={"Fitbit Sense 2"}
            subtitle={
              "Empower Your Wellness Journey with Stress Management and 24/7 Health Tracking"
            }
            image="https://i.pinimg.com/736x/3b/31/7a/3b317af8a879bdd90abf12bff20f071a.jpg"
          />
          <Card
            title={"Garmin Forerunner 965"}
            subtitle={"Train Smarter with Precision GPS and Unmatched Athletic Performance Metrics"}
            image="https://i.pinimg.com/736x/c8/14/c6/c814c67deccd9b6f4203ebc7dc5a9d57.jpg"
          />
        </div>
      </section>
      <section className="py-4 px-3 flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Our Top SmartPhones!</h1>
        <div className="bg-gray-300 flex w-full overflow-x-scroll animated-cards">
          <Card2
            title={"iPhone 14"}
            subtitle={"Experience the Next Level of Sophistication with Lightning-Fast Performance and Iconic Design"}
            image="https://i.pinimg.com/564x/59/fc/7b/59fc7b9945ee7d8f8b75d5977ccb97ad.jpg"
          />
          <Card2
            title={"Huawei P60 Pro"}
            subtitle={
              "Redefine Photography and Power with Cutting-Edge AI and Superior Design"
            }
            image="https://i.pinimg.com/564x/36/05/90/3605903215abeed730cac12cc7385b22.jpg"
          />
          <Card2
            title={"Samsung Galaxy S24 Ultra"}
            subtitle={
              "Unleash the Future of Mobile Innovation with Stunning Clarity and Unmatched Performance"
            }
            image="https://i.pinimg.com/736x/fc/4d/64/fc4d644c639a30a46aad2d820b72e5b2.jpg"
          />

          <Card2
            title={"Vivo V23 5G"}
            subtitle={"Elevate Your Selfie Game with Ultra-Smooth 5G and Stunning Dual Front Cameras"}
            image="https://i.pinimg.com/564x/eb/5f/9f/eb5f9f5e41040a7f32431a642ae361ce.jpg"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
