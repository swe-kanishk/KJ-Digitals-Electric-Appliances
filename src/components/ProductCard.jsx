import React from 'react'
import image from "../../public/PHILIPS _ Smart TV.jpeg"
function ProductCard({product}) {
  return (
    <div className='rounded-3xl bg-white flex flex-col p-2 gap-3 text-black justify-between w-full'>
        <img src={image} loading='lazy' className='w-full rounded-3xl' alt="" />
          <div className='w-[95%] mx-auto'>
      <h1 className='font-semibold text-lg px-2'>{product.category}</h1>

          </div>
    </div>
  )
}

export default ProductCard
