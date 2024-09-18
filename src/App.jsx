import { useState } from 'react'
import './App.css'
import logoimage from '../public/kj logo.jpeg'
import { IoSearch } from "react-icons/io5";
import Card from './components/Card'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Carousel2 from "./components/Carousel2";
import images from '../public/images';
import { IoMdCall } from "react-icons/io";
import CompanyCard from './components/CompanyCard';

function App() {
  const trustedComapies = [{companyLogo: 'https://i.pinimg.com/564x/ba/b7/1c/bab71c39111229a2fe71d3581b59676c.jpg', companyName : 'vivo', },
    {companyLogo: 'https://i.pinimg.com/564x/34/e7/ef/34e7efb8bf3b843ebacf2b14f90360fd.jpg', companyName : 'vivo', },
    {companyLogo: 'https://i.pinimg.com/564x/14/49/1d/14491d94474b02327509817a06e020d6.jpg', companyName : 'vivo', },
    {companyLogo: 'https://i.pinimg.com/564x/e4/7a/cd/e47acd01e1df30365cfbefa57d7507ec.jpg', companyName : 'vivo', },
    {companyLogo: 'https://i.pinimg.com/564x/32/39/be/3239be6944f3b66814a5d57b42ec6770.jpg', companyName : 'vivo', }
  ]
  return (
    <>
      <nav className='flex items-center justify-between bg-gray-900 text-white px-4 py-3'>
        <div className='flex items-center gap-12'>
          <div className='flex items-center gap-4 font-medium text-xl'>
            <img src={logoimage} alt="" className='h-12 w-12 rounded-full object-cover object-center' />
            <span>Digitals</span>
          </div>
          <ul className='flex items-center gap-6'>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className='flex items-center'>
          <input placeholder='find available products' type="text" className='rounded-l-[4px] outline-none text-black px-2 py-[6px]' />
          <button className='bg-yellow-500 rounded-r-[4px] text-black py-[6px] px-3'><IoSearch size={'24px'} /></button>
        </div>
      </nav>
      <marquee behavior="scroll" direction="left">
        <div className='flex items-center'>
          <span>KJ Digitals : near shiv mandir, main road, simri bakhtiyarpur, saharsa, 852127, bihar, india.</span>
          <div className='flex items-center gap-8 ml-8'>
            <span className='flex items-center gap-1'><IoMdCall /> contact us : </span>
            <div className='flex gap-6'>
              <span className='flex gap-2 items-center'><FaFacebook /> KJ Digitals</span>
              <span className='flex gap-2 items-center'><FaInstagram /> kjdigitals2024</span>
              <span className='flex gap-2 items-center'><BiLogoGmail /> kjdegitals@gmail.com</span>
            </div>
          </div>
        </div>
      </marquee>

      <section className='bg-black flex justify-between'>
        <div className='flex flex-col gap-4 items-start justify-center w-[70%] mx-auto'>
          <h1 className='text-blue-400 text-4xl'>Where Innovation Meets Comfort – Discover KJ Digitals!!</h1>
          <p className='text-white max-w-[100%]'>Step into the future with KJ Digitals! Our range of home appliances offers unmatched efficiency and style to elevate your living space. From smart refrigerators to energy-saving washing machines, we have everything you need to make your home more comfortable and connected.</p>
        </div>
        <Carousel2 visibleItemsCount={1} withIndicator isInfinite>
        {images.map((image, index) => {
          return  <img key={index} src={image.imgURL} className='h-[400px] w-[400px] aspect-square object-cover' loading='lazy' alt={image.imgAlt} />
        })}
      </Carousel2>
      </section>
      <section className='py-4 px-3 flex flex-col gap-3'>
        <h1 className='text-2xl font-medium'>Our Top Products!</h1>
        <div className='bg-gray-300 h-[400px flex w-full'>
          <Card title={'Daikin Ac'} subtitle={'Stay Cool with Our Range of Advanced Air Conditioners.'} image="https://i.pinimg.com/564x/c3/3c/b1/c33cb130124c81f5402e640850e897ba.jpg" />
          <Card title={'Lazer Grinder'} subtitle={'Effortless Blending and Mixing with Our Top-Quality Mixers.'} image="https://i.pinimg.com/564x/51/6e/72/516e724bb8dc57d56216aafac6c38e4d.jpg" />
          <Card title={'Washing Machine'} subtitle={'Revolutionize Laundry Day with Our Efficient Washing Machines.'} image="https://i.pinimg.com/474x/d3/e4/f7/d3e4f75d8a4c274a07f6565b27bc7830.jpg" />
          <Card title={'JBL Speaker'} subtitle={'Immerse Yourself in Sound with Our Premium Speakers.'} image="https://i.pinimg.com/736x/64/eb/04/64eb0407c26eabbf62e03b6eeffdbfdf.jpg" />
        </div>
      </section>
      <section className='pb-4 px-3 flex flex-col gap-3'>
        <h1 className='text-2xl font-medium'>Explore Our Trusted Brands and Find Your Perfect Match!</h1>
        <div className='flex items-center justify-between overflow-x-scroll'>
          {
            trustedComapies.map((company) => {
              return <CompanyCard company={company} />
            })
          }
        </div>
      </section>
    </>
  )
}

export default App

