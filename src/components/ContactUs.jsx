import React from 'react'
import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'

import Header from './Header'
import Navbar from './Navbar'

import contactUs from '../assets/contact-us.png'
import phone from '../assets/phone.png'
import address from '../assets/address.png'
import email from '../assets/email.png'
import Footer from './Footer'


const ContactUs = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div>
            <div>
                <img src={contactUs} alt="" />
            </div>
            <div className='absolute bottom-[40%] left-[2%] flex flex-col gap-6'>
                <h1 className='font-bold uppercase text-5xl'>Contact Us</h1>
                <div className='flex flex-row items-center text-[#545454] gap-2'>
                    <Link to='/' className='uppercase font-extralight hover:underline'>
                        Home
                    </Link>
                    <SlArrowRight className='text-sm'/>
                    <Link to='/contact-us' className='uppercase font-extralight hover:underline'>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-between gap-8 px-12 py-12'>
            <div className='flex flex-col gap-4 items-center'>
                <h1 className='font-semibold text-5xl'>Contact Details</h1>
                <h1 className='text-sm text-[#545454]'>Feel free to contact us through email and phone.</h1>
            </div>
            <div className='flex flex-row items-center justify-evenly px-12 py-12'>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center justify-center'>
                        <img src={phone} alt="" width={70}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='flex text-xl justify-center'>Phone Number</h1>
                        <h1 className='text-[#9D9D9D] text-sm'>+923057805031</h1>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center justify-center'>
                        <img src={address} alt="" width={70}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='flex text-xl justify-center'>Address</h1>
                        <h1 className='text-[#9D9D9D] text-sm'>House No. 78 Main Boulvard Islamabad</h1>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center justify-center'>
                        <img src={email} alt="" width={70}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='flex text-xl justify-center'>Email</h1>
                        <h1 className='text-[#9D9D9D] text-sm'>example@example.com</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='mb-16'>
            <div className='flex flex-col gap-4 items-center mb-16 mt-16'>
                <h1 className='font-bold text-5xl'>Get in Touch with us</h1>
                <h1>Feel free to contact us through email and phone</h1>
            </div>
            <form className='flex flex-col items-center gap-8'>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-row items-center justify-center gap-8'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Name *</label>
                            <input type="text" className='bg-transparent outline-gray-200 border px-6 py-2 w-[395px]' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Email *</label>
                            <input type="text" className='bg-transparent outline-gray-200 border px-6 py-2 w-[395px]' />
                        </div>

                    </div>
                    <div className='flex flex-col gap-2 items-center justify-center w-[500px]'>
                        <label htmlFor="">Message *</label>
                        <textarea cols="100" rows="10" required='required' className='text-black bg-transparent outline-none border items-center justify-center'></textarea>
                    </div>
                </div>
                <button type="submit" className='w-[60.5%] bg-black text-white px-6 py-2'>Submit</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs