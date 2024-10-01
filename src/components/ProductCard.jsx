import React, { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

function ProductCard({ product, setFormOpen, isOdd, setBuyingProduct, formOpen }) {
  return (
    // bg-[#ffc08c]
    <div className={`rounded-3xl  bg-gradient-to-r ${isOdd ? 'bg-gradient-to-r from-stone-500 to-stone-700' : 'bg-gradient-to-r from-stone-500 to-stone-700'} overflow-hidden max-w-[400px] flex flex-col p-2 gap-3 text-white justify-between w-full`}>
      <div className="bg-white flex items-center justify-center min-h-[250px] object-cover w-full object-center max-h-[250px] rounded-2xl overflow-hidden relative">
        <img
          src={product.product_img}
          loading="lazy"
          className="rounded-3xl"
          alt=""
        />
        <div className="flex justify-between items-center w-full absolute top-0 left-0">
          <div className="aspect-square mx-2 rounded-full bg-black text-white p-1">
            <MdMoreHoriz size={"24px"} />
          </div>
          <span className="bg-gray-600 p-2 rounded-l-md font-medium text-sm text-white">
            {product.brand}
          </span>
        </div>
      </div>
      <div className="w-[95%] text-white py-1 mx-auto">
        <h1 className="font-medium">{product.product_name}</h1>

        <span className="text-white text-sm">{product.product_detail}</span>
        <div className="flex justify-between items-center my-2 pt-2">
          <button
            className="bg-white text-black py-2 px-3 rounded-md text-sm font-medium"
            onClick={() => {setFormOpen(!formOpen), setBuyingProduct(product)}}
          >
            Details...
          </button>
          <button
            className="bg-white text-black py-2 px-3 rounded-md text-sm font-medium"
            onClick={() => {setFormOpen(!formOpen), setBuyingProduct(product)}}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
