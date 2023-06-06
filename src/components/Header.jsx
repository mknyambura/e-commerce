import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#EAEAEA]'>
        <div className=' mr-16 bg-[#EAEAEA] px-6 py-6 flex flex-row gap-2 justify-end w-full'>        
            <div className='text-[#9D9D9D] text-sm items-center flex flex-row gap-2'>
                <a href='#' className='hover:text-black hover:font-bold'>Track Order</a>
                <div className='bg-[#9D9D9D] w-[1px] h-[80%]'></div>
            </div>
            <div className='text-[#9D9D9D] text-sm items-center flex flex-row gap-2'>
                <a href='#' className='hover:text-black hover:font-bold'>Register</a>
                <div className='bg-[#9D9D9D] w-[1px] h-[80%]'></div>
            </div>
            <div className='text-[#9D9D9D] text-sm items-center flex flex-row gap-2'>
                <a href='#' className='hover:text-black hover:font-bold'>Sign In</a>
            </div>
        </div>
    </div>
  )
}

export default Header