import React from 'react'
import Reviews from '../components/Reviews'
import TrustedCompanies from '../components/TrustedCompanies'

function About() {
  return (
    <div className='min-h-[55vh] w-full flex flex-col items-center justify-center'>
        <section className='bg-white pt-8 w-full flex flex-col gap-2 text-center'>
            <h2 className='text-4xl font-semibold w-fit mx-auto bg-purple-800 text-white py-2 rounded-lg px-3'>Welcome to KJ Digitals</h2>
            <p className='bg-black text-white font-medium w-[80%] mx-auto rounded-lg py-2'>At KJ Digital, we are dedicated to bringing you the best in electronic appliances...</p>
        </section>
        
        <section className='w-full px-8 py-6'>
            <h3 className='text-2xl font-medium bg-teal-500 text-white w-fit px-3 rounded-md'>Contact Us</h3>
            <ul>
                <li>Phone: <a href="tel:+918797594743">8797594743</a></li>
                <li>Email: <a href="mailto:kjdegitals@gmail.com">kjdegitals@gmail.com</a></li>
                <li>Facebook: <a href="https://www.facebook.com/kjdigitals" target="_blank">kj digitals</a></li>
                <li>Instagram: <a href="https://www.instagram.com/kjdigitals2024" target="_blank">kj digitals2024</a></li>
                <li>Address: Near Shiv Mandir, Main Road, Simri Bakhtiyarpur, Saharsa, 852127, Bihar, India</li>
            </ul>
        </section>
          <section className='bg-[#E2E2E2] w-full'>
            <div className='flex items-center justify-evenly w-full mt-3'>
            <h3 className='text-start my-2 ml-8 text-4xl font-semibold'>Unleash Excellence with Our Top-Tier Brands!</h3>
            <img className="mx-auto h-[200px]" src="https://i.pinimg.com/564x/61/1d/4d/611d4dc95d8dcb8ef811cedda10fe33b.jpg" alt="" />
            </div>

            <ul className='grid grid-cols-3 bg-black place-content-center py-12 place-items-center'>
                <li className='mx-8 my-4'><img src="https://i.pinimg.com/564x/55/91/6b/55916b71df8acb4b97e6eef80a195e20.jpg" className='w-[300px] rounded-lg h-[100px] object-cover' alt="" /></li>
                <li className='mx-8 my-4'><img src="https://i.pinimg.com/564x/46/7c/fb/467cfb0511b1e9f1bc1208956b01e5a7.jpg" className='w-[300px] rounded-lg h-[100px] object-cover' alt="" /></li>
                <li className='mx-8 my-4'><img src="https://i.pinimg.com/564x/aa/10/f8/aa10f8828e606a1d7525fa4a59dc93dd.jpg" className='w-[300px] rounded-lg h-[100px] object-cover' alt="" /></li>
                <li className='mx-8 my-4'><img src="https://i.pinimg.com/564x/ca/47/db/ca47db4373b6463ce9cf1bbf312a9963.jpg" className='w-[300px] rounded-lg h-[100px] object-cover' alt="" /></li>
                <li className='mx-8 my-4'><img src="https://i.pinimg.com/564x/17/01/d9/1701d9f16e77f47a727e84c93984bd82.jpg" className='w-[500px] rounded-lg h-[100px] object-cover' alt="" /></li>
                <li className='mx-8 my-4'><img src="https://i.pinimg.com/564x/d6/03/00/d6030076e7947f2fa8803af48e652bbd.jpg" className='w-[300px] rounded-lg h-[100px] object-cover' alt="" /></li>
                <li className='mx-8 my-4'><img src="https://i.pinimg.com/564x/bb/08/0e/bb080e4e0f6588240fdb0f5e1b57d2ca.jpg" className='w-[300px] rounded-lg h-[100px] object-cover' alt="" /></li>
                <li className='mx-8 my-4'><img src="https://i.pinimg.com/564x/66/aa/fa/66aafaa25fffe78c6b01dd175a91cee7.jpg" className='w-[300px] rounded-lg h-[100px] object-cover' alt="" /></li>
                <li className='mx-8 my-4'><img src="https://i.pinimg.com/564x/ef/8a/e5/ef8ae5b2a53c6d3be9e281d99241d635.jpg" className='w-[300px] rounded-lg h-[100px] object-cover' alt="" /></li>
            </ul>
        </section>
        
        <section className='bg-pink-600 text-white flex flex-col gap-3 pt-12 pb-6 px-8 w-full'>
            <h3 className='text-2xl font-medium bg-white w-fit py-1 px-3 text-black rounded-md'>Customer Satisfaction</h3>
            <ul>
                <li>Customer satisfaction is our top priority. We strive to exceed expectations with every product and service we offer.</li>

                <li>Quality products and exceptional service - that's what we stand for. Thank you for being a part of the KJ Digital family.</li>
                <footer className='text-end mt-5'>- KJ Digitals Team</footer>
            </ul>
        </section>
        <div className='w-full mx-6 py-4'>
        <Reviews />
        </div>
        
        <section className='bg-[#8BC53E] text-start flex-col lg:flex-row flex px-5 pt-4'>
          <div className='w-full flex justify-center flex-col'>
          <h3 className='text-center text-2xl md:text-4xl py-3 mx-auto w-full font-semibold'>Our Commitment to Excellence</h3>
            <p className='w-full lg:w-2/3 text-center text-[14px] md:text-[16px] mx-auto'>At KJ Digital, we believe in innovation, quality, and customer satisfaction. Our team is dedicated to providing you with the best electronic appliances that cater to your needs. Explore our collection and experience the difference.</p>
            
          </div>
            <img src="https://i.pinimg.com/564x/40/c7/2a/40c72ad8e064827ed303e5c20508372c.jpg" className='mx-auto w-[300px]' alt="Creative Image" />
        </section>
    </div>
  )
}

export default About
