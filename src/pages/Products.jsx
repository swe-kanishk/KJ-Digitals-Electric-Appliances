import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaFilter } from "react-icons/fa";
import {productData} from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx';

function Products() {
    const category = 'television'
    const [selected, setSelected] = useState('categories');
    const products = useState(productData)
    console.log(products)
  return (
    <div className='text-white w-full bg-black flex flex-col pt-[20vh] gap-20 pb-6 items-center justify-center'>
        <div className='flex items-center flex-col gap-8'>
        <div className='flex flex-col items-center gap-2'>
        <h1 className='text-3xl'>POPULAR PRO STOCKS</h1>
        <p>search for available products</p>
        </div>
         <div className='flex px-2 items-center py-2 border border-white rounded-lg'><NavLink className='px-2 border border-white rounded font-light' to={`/products/${category}`}>Art</NavLink><input placeholder='search available items' className='outline-none bg-black ml-2 text-white px-2' type="text" /><button className=' px-2'><IoSearch size={'22px'} /></button></div>  
        </div>
            <div className='flex justify-evenly items-center w-full'>
                <ul className='flex gap-8 items-center'>
                    <li onClick={() => setSelected('categories')} className={`cursor-pointer ${selected === 'categories' ? 'active' : ''}`}>Categories</li>
                    <li onClick={() => setSelected('All items')} className={`cursor-pointer ${selected === 'All items' ? 'active' : ''}`}>All items</li>
                    <li onClick={() => setSelected('latest')} className={`cursor-pointer ${selected === 'latest' ? 'active' : ''}`}>Latest</li>
                </ul>
                <FaFilter />
            </div>
            <div className='grid grid-cols-4 gap-8 px-6'>
                {
                    productData.map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </div>
    </div>
  )
}

export default Products
