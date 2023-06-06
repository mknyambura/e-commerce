import React from 'react'

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
            <h1 className='opacity-70'>About Us</h1>
            <h1 className='opacity-70'>Accounts</h1>
            <h1 className='opacity-70'>Contact Us</h1>
            <h1 className='opacity-70'>Order Tracking</h1>
            <h1 className='opacity-70'>News</h1>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-2xl'>Customer Care</h1>
            <h1 className='opacity-70'>Terms & Conditions</h1>
            <h1 className='opacity-70'>Shiipping Policy</h1>
            <h1 className='opacity-70'>FAQs</h1>
            <h1 className='opacity-70'>Refund Policy</h1>
            <h1 className='opacity-70'>Privacy Policy</h1>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-2xl'>Follow Us</h1>
            <h1 className='opacity-70'>Facebook</h1>
            <h1 className='opacity-70'>Instagram</h1>
            <h1 className='opacity-70'>Linkedin</h1>
            <h1 className='opacity-70'>Youtube</h1>
            <h1 className='opacity-70'>Twitter</h1>
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