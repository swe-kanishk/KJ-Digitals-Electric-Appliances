import React, { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

function ProductCard({ product, setFormOpen, setBuyingProduct, formOpen }) {
  return (
    <div className="rounded-3xl bg-gray-300 overflow-hidden max-h-[400px] max-w-[400px] flex flex-col p-2 gap-3 text-white justify-between w-full">
      <div className="bg-white flex items-center justify-center rounded-2xl overflow-hidden relative">
        <img
          src={product.product_img}
          loading="lazy"
          className="w-2/3 rounded-3xl"
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
      <div className="w-[95%] py-1 mx-auto">
        <h1>{product.product_name}</h1>
        <p>{product.id}</p>

        <span className="text-gray-400 text-sm">{product.product_detail}</span>
        <div className="flex justify-between items-center my-2 pt-2">
          <button></button>
          <button
            className="bg-blue-500 py-2 px-3 rounded-md text-sm font-medium"
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
