import React from 'react'

import mosjra from '../../assets/mosjra.png'

const Navbar = () => {
  return (
    <div>
        <div className='bg-[#EAEAEA]'>
            <div className='flex flex-row bg-[#EAEAEA] justify-end gap-8 items-center px-5 py-2 mr-16'>
                <h1 className='text-[#9D9D9D] text-sm'>Track Order</h1>
                <div className='bg-[#9D9D9d] w-[1px] h-4'></div>
                <h1 className='text-[#9D9D9D] text-sm'>Register</h1>
                <div className='bg-[#9D9D9d] w-[1px] h-4'></div>
                <h1 className='text-[#9D9D9D] text-sm'>Sign In</h1>
            </div>
        </div>
        <div className='flex flex-row justify-between px-8 py-8 items-center'>
            <div>
                <img src={mosjra} alt="" />
            </div>
            <div className='flex flex-row gap-8 text-[#545454] items-center justify-between'>
                <h1 className='hover: text-black hover:underline hover:cursor-pointer'>Home</h1>
                <h1 className='hover: text-black hover:underline hover:cursor-pointer'>New Arrivals</h1>
                <h1 className='hover: text-black hover:underline hover:cursor-pointer'>Men</h1>
                <h1 className='hover: text-black hover:underline hover:cursor-pointer'>Women</h1>
                <h1 className='hover: text-black hover:underline hover:cursor-pointer'>Kids</h1>
                <h1 className='hover: text-black hover:underline hover:cursor-pointer'>Sale</h1>
                <h1 className='hover: text-black hover:underline hover:cursor-pointer'>Blogs</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar