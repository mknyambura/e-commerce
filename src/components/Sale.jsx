import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import { BsCart2 } from 'react-icons/bs'

import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

import sale from '../assets/sale.png'

import data from '../../db.json'

const SaleCollection = () => {

    const [men, setMen] = useState([])

    useEffect(() => {
        fetch('/sale')
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then(setMen)
    }, [])


  return (
    <div>
        <Header/>
        <Navbar/>
        <div className='relative'>
            <div>
                <img src={sale} alt="" />
            </div>
            <div className='absolute bottom-[40%] left-[2%] flex flex-col gap-6'>
                <h1 className='font-bold uppercase text-5xl'>Summer Sales!</h1>
                <div className='flex flex-row items-center text-[#545454] gap-2'>
                    <Link to='/' className='uppercase font-extralight hover:underline'>
                        Home
                    </Link>
                    <SlArrowRight className='text-sm'/>
                    <Link to='/men-collection' className='uppercase font-extralight hover:underline'>
                        Sales
                    </Link>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-4 px-12 py-12 items-center gap-8'>
            {data.sales.map((sale) => (
                <div key={sale.id} className='relative flex flex-col gap-3'>
                    <div className='w-full'>
                        <img src={sale.image} alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-bold'>{sale.title}</h1>
                        <h1 className='text-[11px] text-[#9D9D9D]'>{sale.category}</h1>
                        <div className='w-[90%] items-center flex flex-row justify-between'>
                            <h1 className='font-bold'>$ {sale.price}</h1>
                            <BsCart2/>
                        </div>
                    </div>
                    <h1 className='uppercase bg-[#EC2E2E] px-4 py-2 absolute rotate-45 right-0 text-white animate-pulse top-[8%] rounded-full'>25% Off</h1>
                </div>
            ))}
        </div>
            
        <Footer/>
    </div>
  )
}

export default SaleCollection