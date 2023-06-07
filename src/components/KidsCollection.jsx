import React, { useEffect, useState } from 'react'

import kidsCollection from '../assets/kids-collection.png'
import Header from './Header'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import { BsCart2 } from 'react-icons/bs'
import data from '../../db.json'
import Footer from './Footer'

const KidsCollection = () => {
    const [children, setChildren] = useState([])

    useEffect(() => {
        fetch('/children')
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then(setChildren)
    }, [])

    return (
      <div>
        <Header/>
        <Navbar/>
        <div className='relative'>
            <div>
                <img src={kidsCollection} alt="" />
            </div>
            <div className='absolute bottom-[40%] left-[2%] flex flex-col gap-6'>
                <h1 className='font-bold uppercase text-5xl'>Kid's Collection</h1>
                <div className='flex flex-row items-center text-[#545454] gap-2'>
                    <Link to='/' className='uppercase font-extralight hover:underline'>
                        Home
                    </Link>
                    <SlArrowRight className='text-sm'/>
                    <Link to='/womens-collection' className='uppercase font-extralight hover:underline'>
                        Kids
                    </Link>
                </div>
            </div>

        </div>
        <div className='grid grid-cols-4 px-12 py-12 items-center gap-8'>
            {data.children.map((children) => (
                <div key={children.id} className='flex flex-col gap-3'>
                    <div className='w-full'>
                        <img src={children.image} alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-bold'>{children.title}</h1>
                        <h1 className='text-[11px] text-[#9D9D9D]'>{children.category}</h1>
                        <div className='w-[90%] items-center flex flex-row justify-between'>
                            <h1 className='font-bold'>$ {children.price}</h1>
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

export default KidsCollection