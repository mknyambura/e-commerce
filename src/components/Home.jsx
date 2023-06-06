import React, { useEffect, useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Products from './Products'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper' 
import 'swiper/css'
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'

import tShirt from '../assets/t-shirt.png'
import fullSleeve from '../assets/full-sleeve.png'

import data from '../../db.json'
import './index.scss'
import { BsArrowRight } from 'react-icons/bs'
import Blog from './Blog'

const Home = ({products}) => {
    const [arrivals, setArrivals] = useState([])


    useEffect(() => {
        fetch('/trending')
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then(setArrivals)
    }, [])
    
    

  return (
    <div>
        {/* Navbar */}
        <Header/>
        <Navbar/>
        <div>
            <div className='flex flex-col items-center gap-8'>
                <h1 className='text-black text-5xl font-bold'>Trending Products</h1>
                <div className='flex flex-row gap-8'>
                    <button className='trending-button px-6 py-2 rounded-none bg-[#E6E6E6] text-black hover:bg-black hover:text-white transition-all duration-300'>All</button>
                    <button className='trending-button px-6 py-2 rounded-none bg-[#E6E6E6] text-black hover:bg-black hover:text-white transition-all duration-300'>Shorts</button>
                    <button className='trending-button px-6 py-2 rounded-none bg-[#E6E6E6] text-black hover:bg-black hover:text-white transition-all duration-300'>Accessories</button>
                    <button className='trending-button px-6 py-2 rounded-none bg-[#E6E6E6] text-black hover:bg-black hover:text-white transition-all duration-300'>Dresses</button>
                    <button className='trending-button px-6 py-2 rounded-none bg-[#E6E6E6] text-black hover:bg-black hover:text-white transition-all duration-300'>Trousers</button>
                </div>
            </div>
            
            <Products className='grid grid-cols-3'/>


            <div className='flex flex-row items-center justify-between text-[#383838] px-6 py-6 mt-1 mb-16'>
                <div className='relative'>
                    <img src={tShirt} alt="" />
                    <div className='absolute bottom-[10%] left-8'>
                        <h1 className='font-bold text-xl'>Shorts</h1>
                        <h1 className='font-bold text-xl'>t-shirt for Men's</h1>
                        <a href="#" className='text-sm hover:underline hover:text-black hover:font-bold'>Show Now</a>
                    </div>
                </div>
                <div className='relative'>
                    <img src={fullSleeve} alt="" />
                    <div className='absolute bottom-[10%] left-8'>
                        <h1 className='font-bold text-xl'>Full Sleeve</h1>
                        <h1 className='font-bold text-xl'>Shirt for Women's</h1>
                        <a href="#" className='text-sm hover:underline hover:text-black hover:font-bold'>Shop Now</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-16'>
                <h1 className='flex font-bold  text-5xl items-center justify-center'>Recent Arrivals</h1>
                <Swiper
                        // key={arrival.id}
                    freeMode={true}
                    grabCursor={true}
                    modules={FreeMode}
                    slidesPerView={3}
                    spaceBetween={30}
                    className='mySwiper text-black flex flex-row items-center justify-start overflow-x-scroll overflow-y-hidden m-16 scrollbar-hide'
                    >
                        {data.trending.map((arrival) => (
                            <SwiperSlide key={arrival.id}>
                                <div key={arrival.id} className='flex flex-col gap-4'>
                                    <div>
                                    <img src={arrival.image} alt="" />
                                    </div>
                                    <div>
                                    <h1 className='text-[#383838] text-xl'>{arrival.title}</h1>
                                    <h1 className='text-black font-bold'>${arrival.price}</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <Blog/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home