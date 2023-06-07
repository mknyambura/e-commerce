import React, { useEffect, useState } from 'react'

import womensCollection from '../assets/women-collection.png'
import Header from './Header'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import { BsCart2 } from 'react-icons/bs'
import data from '../../db.json'
import Footer from './Footer'

const WomensCollection = () => {
    const [women, setWomen] = useState([])

    useEffect(() => {
        fetch('/women')
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then(setWomen)
    }, [])

    return (
      <div>
        <Header/>
        <Navbar/>
        <div className='relative'>
            <div>
                <img src={womensCollection} alt="" />
            </div>
            <div className='absolute bottom-[40%] left-[2%] flex flex-col gap-6'>
                <h1 className='font-bold uppercase text-5xl'>Women's Collection</h1>
                <div className='flex flex-row items-center text-[#545454] gap-2'>
                    <Link to='/' className='uppercase font-extralight hover:underline'>
                        Home
                    </Link>
                    <SlArrowRight className='text-sm'/>
                    <Link to='/womens-collection' className='uppercase font-extralight hover:underline'>
                        Women
                    </Link>
                </div>
            </div>

        </div>
        <div className='grid grid-cols-4 px-12 py-12 items-center gap-8'>
            {data.women.map((women) => (
                <div key={women.id} className='flex flex-col gap-3'>
                    <div className='w-full'>
                        <img src={women.image} alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-bold'>{women.title}</h1>
                        <h1 className='text-[11px] text-[#9D9D9D]'>{women.category}</h1>
                        <div className='w-[90%] items-center flex flex-row justify-between'>
                            <h1 className='font-bold'>$ {women.price}</h1>
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

export default WomensCollection