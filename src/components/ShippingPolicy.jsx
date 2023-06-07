import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'

import shippingPolicy from '../assets/shipping-policy.png'
import Footer from './Footer'

const ShippingPolicy = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div>
        <div>
            <img src={shippingPolicy} alt="" />
        </div>
        <div className='absolute bottom-[30%] left-[2%] flex flex-col gap-6'>
          <h1 className='font-bold uppercase text-5xl'>Shipping Policy</h1>
          <div className='flex flex-row items-center text-[#545454] gap-2'>
            <Link to='/' className='uppercase font-extralight hover:underline'>
                Home
            </Link>
            <SlArrowRight className='text-sm'/>
            <Link to='/about-us' className='uppercase font-extralight hover:underline'>
                Shipping Policy
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col px-24 py-12 m-16'>
        <ul className='list-disc flex flex-col gap-6'>
          <li className='opacity-60'>You can pay through Cash on Delivery</li>
          <li className='opacity-60'>Free Shipping on all orders over the value of $999.</li>
          <li className='opacity-60'>We charge $150 on all orders under the value of $999.</li>
          <li className='opacity-60'>Orders placed by 4:00 PM (Pakistan Standard Time) will be shipped the same day via Registered Courier Service.</li>
          <li className='opacity-60'>Orders received after 4:00 pm will be dispatched the next day.</li>
          <li className='opacity-60'>Orders received on Sundays and on Pakistan's National Holidays will be processed and shipped on the next working day.</li>
          <li className='opacity-60'>Delivery time is between 4 to 7 working days (No delivery on Sundays). However delivery can take up to 7 working days during busy shopping season or our mega sales events.</li>
          <li className='opacity-60'>We cannot deliver to PO boxes. All deliveries must be signed for upon receipt. We will try at least twice to deliver your order at the address indicated by you.</li>
          <li className='opacity-60'>If you have any questions you can contact us at 03136174221 or email us at example@gmail.com</li>
        </ul>
      </div>
      <Footer/>
    </div>
  )
}

export default ShippingPolicy