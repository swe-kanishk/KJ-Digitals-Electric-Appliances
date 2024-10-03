import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbBrandAmazon } from "react-icons/tb";
import { FaScaleUnbalanced } from "react-icons/fa6";

function ProductDetailCard({
  product,
  setFormOpen,
  setBuyingProduct,
  formOpen,
  openDetails,
  setOpenDetails,
}) {
  const [active, setActive] = useState("Details");
  return (
    <div
      className={`${
        openDetails ? "flex" : "hidden"
      } fixed  top-0 left-0 px-6 backdrop-blur-md bg-black bg-opacity-70 flex items-center justify-center z-30 h-screen w-full`}
    >
      <div className="bg-gradient-to-r overflow-y-scroll from-neutral-400 border border-white to-stone-500 p-1 flex justify-between items-center lg:items-start flex-col max-h-[80%] lg:flex-row rounded-xl w-[90%] max-w-[1080px] mx-auto relative">
        <div className="border-2 border-gray-100 flex items-center justify-center rounded-xl overflow-hidden min-h-[550px] w-full lg:w-fit relative">
          <img
            src={product.product_img}
            className="max-h-[550px] min-h-[550px] w-auto object-cover"
            alt=""
          />
          <div className="bg-black bg-opacity-75 rounded-bl-lg font-medium absolute right-0 w-fit px-2 py-1 top-0 flex justify-between items-center">
            <p>{product.brand}</p>
          </div>
          <div className="bg-black bg-opacity-75 px-3 absolute left-0 w-full bottom-0 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm mt-2">{product.product_name}</span>
              <p className="text-yellow-400 text-lg font-medium">
                {product.category}{" "}
                <span className="text-[13px] font-normal text-gray-300">
                  ({product.netWeight})
                </span>
              </p>
            </div>
            <button
              onClick={() => {
                setFormOpen(!formOpen),
                  setBuyingProduct(product),
                  setOpenDetails(false);
              }}
              className="bg-yellow-400 text-black flex items-center rounded-[0.3rem] text-sm font-medium px-2 py-1"
            >
              <span>Buy Now</span> <MdOutlineKeyboardArrowRight size={"24px"} />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start pt-[1.5rem] lg:pt-0 flex-1 min-h-[550px] lg:px-3 w-full lg:w-[55%] text-black">
          <div className="flex bg-[#6e4949] shadow-sm shadow-yellow-300 py-1 rounded-3xl gap-3 justify-evenly w-full px-2">
            <button
              onClick={() => setActive("Details")}
              className={`rounded-2xl px-2 py-2 w-full font-semibold text-sm ${
                active === "Details" ? "bg-white text-[#176b5e]" : "text-white"
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActive("Reviews")}
              className={`rounded-2xl px-2 py-2 w-full font-semibold text-sm ${
                active === "Reviews" ? "bg-white text-[#176b5e]" : "text-white"
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActive("Features")}
              className={`rounded-2xl px-2 py-2 w-full font-semibold text-sm ${
                active === "Features" ? "bg-white text-[#176b5e]" : "text-white"
              }`}
            >
              Features
            </button>
          </div>
          <div className="flex flex-col my-auto w-full">
            <div
              className={`${
                active === "Reviews" ? "flex" : "hidden"
              } text-2xl items-center justify-center font-semibold`}
            >
              No Reviews !
            </div>
            <div
              className={`${
                active === "Features" ? "flex" : "hidden"
              } gap-8 pt-8 min-h-[500px] max-h-[500px] flex-col`}
            >
              <p className="flex items-start flex-col text-lg gap-3 font-semibold px-4">
                Key features :{" "}
                <span className="text-white font-normal text-sm">
                  {product.discription.Key_Features || ""}
                </span>
              </p>
              <p className="flex items-start flex-col text-lg gap-3 font-semibold px-4">
                Additional features :{" "}
                <span className="text-white font-normal text-sm">
                  {product.discription.Additional_Features || ""}
                </span>
              </p>
              <p className="flex items-start flex-col text-lg gap-3 font-semibold px-4">
                Feature Programs :{" "}
                <span className="text-white font-normal text-sm">
                  {product.discription.Feature_Programs || ""}
                </span>
              </p>
            </div>
            <div
              className={`${
                active === "Details" ? "flex" : "hidden"
              } flex-col justify-between overflow-y-scroll max-h-[500px] gap-3 px-3 py-6 `}
            >
              <span className="text-white text-[15px]">
                {product.product_name}
              </span>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl py-5 font-semibold">
                  {product.product_detail}
                </h1>
                <p className="text-stone-200">
                  {product.discription.Key_Features || ""}
                </p>
                <p className="text-stone-200">
                  {product.discription.Additional_Features || ""}
                </p>
                <p className="text-stone-200">
                  {product.discription.Feature_Programs || ""}
                </p>
              </div>
              <hr className="mt-6 pb-3" />
              <div className="flex justify-between items-center">
                <button className="rounded-lg border border-gray-400 bg-gradient-to-r from-red-400 to-orange-700 font-semibold text-white px-3 py-1 flex items-center gap-2">
                  <TbBrandAmazon size={"28px"} /> {product.brand}
                </button>
                <button className="rounded-lg bg-gradient-to-r from-amber-200 to-yellow-500 font-medium px-3 py-1 flex items-center gap-2">
                  {product.category}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative text-white  w-fit px-3 py-2">
          <IoMdCloseCircle
            onClick={() => setOpenDetails(false)}
            size={"28px"}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
