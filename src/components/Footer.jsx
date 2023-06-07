import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#171717] text-white px-12 py-12'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-col w-1/4 gap-8'>
          <h1 className='font-bold text-3xl'>Mosjra</h1>
          <p className='opacity-70'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure ipsam error, accusamus at obcaecati est voluptas nobis eaque ad eius impedit? Perspiciatis esse, officia tempora consequuntur quo earum ex?
          </p>
          <h1 className='opacity-70'>E. example@example.com</h1>
          <h1 className='opacity-70'>T. 004123456</h1>
        </div>
        <div className='flex flex-row justify-evenly w-3/4 items-center'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-2xl'>Company</h1>
            <Link to='/about-us' className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>About Us</Link>
            <h1 className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Accounts</h1>
            <Link to='/contact-us' className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Contact Us</Link>
            <h1 className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Order Tracking</h1>
            <h1 className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>News</h1>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-2xl'>Customer Care</h1>
            <Link to='/terms-of-service' className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Terms & Conditions</Link>
            <Link to='/shipping-policy' className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Shipping Policy</Link>
            <Link to='/faq' className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>FAQs</Link>
            <Link to='/refund-policy' className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Refund Policy</Link>
            <Link to='/privacy-policy' className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Privacy Policy</Link>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-2xl'>Follow Us</h1>
            <h1 className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Facebook</h1>
            <h1 className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Instagram</h1>
            <h1 className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Linkedin</h1>
            <h1 className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Youtube</h1>
            <h1 className='opacity-70 hover:opacity-100 hover:cursor-pointer hover:underline '>Twitter</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-8 mt-8 mb-8'>
        <div className='bg-white h-[1px]'></div>
        <div className='opacity-70 flex flex-row justify-between items-center'>
          <h1>@2022 Mercy Faith Nyambura Kariuki.  All Rights Reserved</h1>
          <h1>Privacy Policy & Term of Use</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer