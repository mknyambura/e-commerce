import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

import shoppingCart from '../assets/shopping-cart.png'
import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'

const ShoppingCart = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div>
            <div>
                <img src={shoppingCart} alt="" />
            </div>
            <div className='absolute bottom-[25%] left-[2%] flex flex-col gap-6'>
                <h1 className='font-bold uppercase text-5xl'>Shopping Cart</h1>
                <div className='flex flex-row items-center text-[#545454] gap-2'>
                    <Link to='/' className='uppercase font-extralight hover:underline'>
                        Home
                    </Link>
                    <SlArrowRight className='text-sm'/>
                    <Link to='/shopping-cart' className='uppercase font-extralight hover:underline'>
                    Shopping Cart
                    </Link>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ShoppingCart