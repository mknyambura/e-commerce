import React from 'react'
import { SlArrowDown, SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

import faq from '../assets/faq.png'

const FAQ = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div>
            <div>
                <img src={faq} alt="" />
            </div>
            <div className='absolute bottom-[40%] left-[2%] flex flex-col gap-6'>
                <h1 className='font-bold uppercase text-5xl'>FAQs</h1>
                <div className='flex flex-row items-center text-[#545454] gap-2'>
                    <Link to='/' className='uppercase font-extralight hover:underline'>
                        Home
                    </Link>
                    <SlArrowRight className='text-sm'/>
                    <Link to='/contact-us' className='uppercase font-extralight hover:underline'>
                        FAQ
                    </Link>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center gap-8 mt-16 mb-16'>
            <div className='flex flex-col relative w-1/2 border px-6 py-6'>
                <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>Where are your order shipped from?</label>
                <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-180'>
                    <SlArrowDown/>
                </div>
                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                    <p className='p-[20px] text-sm peer-checked:max-h-full'>We ship from 6 warehouses around the US. With so many shipping centers across the country, we provide some of the fastest, most affordable delivery options in the industry.</p>
                </div>
            </div>

            <div className='flex flex-col relative w-1/2 border px-6 py-6'>
                <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>How can I checked the status of my order?</label>
                <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-180'>
                    <SlArrowDown/>
                </div>
                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                    <p className='p-[20px] text-sm peer-checked:max-h-full'>We ship from 6 warehouses around the US. With so many shipping centers across the country, we provide some of the fastest, most affordable delivery options in the industry.</p>
                </div>
            </div>

            <div className='flex flex-col relative w-1/2 border px-6 py-6'>
                <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>Where can I find product finding persons?</label>
                <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-180'>
                    <SlArrowDown/>
                </div>
                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                    <p className='p-[20px] text-sm peer-checked:max-h-full'>We ship from 6 warehouses around the US. With so many shipping centers across the country, we provide some of the fastest, most affordable delivery options in the industry.</p>
                </div>
            </div>

            <div className='flex flex-col relative w-1/2 border px-6 py-6'>
                <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>My discount is not working. what shoud I do?</label>
                <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-180'>
                    <SlArrowDown/>
                </div>
                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                    <p className='p-[20px] text-sm peer-checked:max-h-full'>We ship from 6 warehouses around the US. With so many shipping centers across the country, we provide some of the fastest, most affordable delivery options in the industry.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default FAQ