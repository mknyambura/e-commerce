import React from 'react'

import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

import { SlArrowRight } from 'react-icons/sl'

import shippingPolicy from '../assets/shipping-policy.png'
import { Link } from 'react-router-dom'

const RefundPolicy = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div>
        <div>
            <img src={shippingPolicy} alt="" />
        </div>
        <div className='absolute bottom-[35%] left-[2%] flex flex-col gap-6'>
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
      <div className='flex flex-col px-24 py-12 m-16 gap-8'>
        <h1 className='font-bold'>All products purchased from Teefit Fashion can be exchanged within 7 days of purchase only if:-</h1>
        <ul className='list-disc flex flex-col gap-6 px-12 py-2'>
          <li>The item(s) is faulty, damaged or defective at the time of delivery.</li>
          <li>The item(s) does not match the original specifications of the product or is found to be not the same as you had actually purchased.</li>
          <li>You must notify us within 7 days of delivery by writing to info@teefitfashion.com or by calling at 0322-4312699 , in case you want to raise a dispute. At Teefit Fashion, we look at each dispute on a case-by-case basis and tries to be fair to both parties.</li>
          <li>Replacement will be sent in case a defected/faulty/damaged item. You will be required to email photographic evidence of the defective item at info@teefitfashion.com, within 7 days of purchase before any claims can be processed.</li>
          <li>Customer needs to return the merchandise via traceable delivery i.e. courier or registered post on his own expense to our address.</li>
          <li>Delivery Charges will not be refunded.</li>
          <li>Refund requests will be processed within 7 working days after receiving the return products. Rs 250 is deducted for delivery charges in case of refund.</li>
        </ul>
      </div>
      <Footer/>
    </div>
  )
}

export default RefundPolicy