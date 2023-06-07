import React, { useEffect, useMemo, useState } from 'react'

import Header from './Header'
import Navbar from './Navbar'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import newArrivals from '../assets/new-arrivals.png'

import { BsCart2, BsSearch } from 'react-icons/bs'


import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom';

import data from '../../db.json'
import Footer from './Footer';


const NewArrivals = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('/arrivals')
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then(setImages)
    }, [])

    
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className='relative'>
                <div>
                    <img src={newArrivals} alt="" />
                </div>
                <div className='absolute bottom-[40%] left-[10%] flex flex-col gap-6'>
                    <h1 className='font-bold uppercase text-5xl'>New Arrivals</h1>
                    <div className='flex flex-row items-center text-[#545454] gap-2'>
                        <Link to='/' className='uppercase font-extralight hover:underline'>
                            Home
                        </Link>
                        <SlArrowRight className='text-sm'/>
                        <Link to='/new-arrivals' className='uppercase font-extralight hover:underline'>
                            New Arrivals
                        </Link>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 px-12 py-12 items-center gap-8'>
                {data.arrivals.map((arrivals) => (
                    <div key={arrivals.id} className='flex flex-col gap-3'>
                        <div className='w-full'>
                            <img src={arrivals.image} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold'>{arrivals.title}</h1>
                            <h1 className='text-[11px] text-[#9D9D9D]'>{arrivals.category}</h1>
                            <div className='w-[70%] items-center flex flex-row justify-between'>
                                <h1 className='font-bold'>$ {arrivals.price}</h1>
                                <BsCart2/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <Footer/>
        </div>
    )
}

export default NewArrivals