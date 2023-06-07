import React from 'react'

import { BsCart2, BsSearch } from 'react-icons/bs'

import logo from '../assets/mosjra.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center px-12 py-12'>
        <img src={logo} alt="" />
        <div className='text-[#545454] flex flex-row gap-8'>
            <Link to='/' className='hover:underline hover:text-black hover:cursor-pointer hover:font-bold'>Home</Link>
            <Link to='/new-arrivals' className='hover:underling hover:text-black hover:cursor-pointer hover:font-bold'>New Arrivals</Link>
            <Link to='/mens-collection' className='hover:underline hover:text-black hover:cursor-pointer hover:font-bold'>Men</Link>
            <Link to='/womens-collection' className='hover:underline hover:text-black hover:cursor-pointer hover:font-bold'>Women</Link>
            <Link to='/kids-collection' className='hover:underline hover:text-black hover:cursor-pointer hover:font-bold'>Kids</Link>
            <Link to='/sales' className='hover:underline hover:text-black hover:cursor-pointer hover:font-bold'>Sale</Link>
            <Link to='/blogs' className='hover:underline hover:text-black hover:cursor-pointer hover:font-bold'>Blogs</Link>
        </div>
        <div className='flex flex-row justify-between gap-6 text-2xl text-[#9D9D9D]'>
            <BsSearch/>
            <BsCart2/>
        </div>
    </div>
  )
}

export default Navbar