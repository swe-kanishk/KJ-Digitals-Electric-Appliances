import React from 'react'
import success from '../../public/Animation - 1727301061653.gif'
function Success() {
  return (
    <div className='w-screen h-screen z-50 flex items-center justify-center bg-black bg-opacity-40 fixed top-0 left-0 inset-0 backdrop-blur-sm'>
      <div className='flex flex-col gap-2 items-center justify-between py-5 shadow-md shadow-violet-500 px-6 bg-white rounded-lg'>
        <img src={success} className='h-[8rem]' alt="" />
        <h2 className='text-black font-semibold text-xl'>Success! we will be back to you soon</h2>
      </div>
    </div>
  )
}

export default Success
