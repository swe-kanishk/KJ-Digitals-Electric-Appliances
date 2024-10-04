import React from 'react'

function Card({image, title, subtitle}) {
  return (
    <div className='bg-white px-3 py-2 min-w-[400px] flex overflow-hidden flex-col items-center gap-3'>
      <div>
        <img src={image} alt="" className='aspect-square rounded-xl overflow-hidden max-h-[400px] object-cover' />
      </div>
      <div className='flex flex-col gap-3'>
        <div>
        <p className='font-medium'>{title}</p>
        <h1 className='text-sm text-gray-600'>{subtitle}</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Card
