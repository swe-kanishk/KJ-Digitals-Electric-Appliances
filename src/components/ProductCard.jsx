import React from 'react'

function ProductCard({product}) {
  return (
    <div className='rounded-xl bg-white flex hover:shadow-lg hover:scale-[105%] transition-all overflow-hidden hover:shadow-[#e0e0e0] flex-col gap-3 text-black justify-between w-full'>
        <img src="https://i.pinimg.com/564x/0a/48/55/0a48556cc1b291f006391b624175f719.jpg" className='w-full' alt="" />
      <h1 className='font-semibold px-2'>{product.name}</h1>
      <p className='text-sm px-2 text-gray-600 text-start'>{product.description}</p>
      <div className='flex gap-6 justify-between items-center w-full px-2 border-b pb-3 py-1 border-gray-300'>
        <button className='border text-sm py-1 px-2 border-gray-300 rounded bg-gray-100'>{product.category}</button>
        <button className='border text-sm py-1 px-2 border-gray-300 rounded bg-gray-100'>{product.brand}</button>
      </div>
      <div className='flex justify-between px-3 pb-3'>
        <button>&#8377;{product.price.toLocaleString()}</button>
        <button className='bg-[#bf25ed] py-1 px-2 text-white rounded text-sm'>more...</button>
      </div>
    </div>
  )
}

export default ProductCard
