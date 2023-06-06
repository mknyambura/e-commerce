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
import menDeal from '../assets/men-deal.png'
import womenDeal from '../assets/women-deal.png'
import bagDeal from '../assets/bag-deal.png'
import headerImage from '../assets/header.png'

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
        <div className='relative'>
            <div>
                <img src={headerImage} alt="" />
            </div>
            <div className='absolute w-1/2 flex flex-col gap-8 bottom-[30%] left-[10%]'>
                <h1 className='font-extralight'>Premium High Waisted</h1>
                <h1 className='font-bold text-5xl w-3/4'>Women Tracks NOW Available</h1>
                <button className='w-[30%] text-white roundedn-none bg-black px-4 py-2 uppercase'>Shop Now</button>
            </div>
        </div>
        <div className='text-[#383838] flex flex-row justify-between px-6 py-6 mb-16 mt-16'>
            <div className='flex flex-col gap-3 relative'>
                <div>
                    <img src={menDeal} alt="" />
                </div>
                <div className='flex flex-col absolute bottom-[10%] left-4'>
                    <h1 className='text-xl font-bold'>For Men</h1>
                    <h1 className='text-xl font-bold'>Clothing Bundle Deal</h1>
                    <a href="#" className='text-[11px] hover:underline hover:font-bold hover:text-black hover:cursor-pointer'>View Deal</a>
                </div>
            </div>
            <div className='flex flex-col gap-3 relative'>
                <div>
                    <img src={womenDeal} alt="" />
                </div>
                <div className='flex flex-col absolute bottom-[10%] left-4'>
                    <h1 className='text-xl font-bold'>For Men</h1>
                    <h1 className='text-xl font-bold'>Clothing Bundle Deal</h1>
                    <a href="#" className='text-[11px] hover:underline hover:font-bold hover:text-black hover:cursor-pointer'>View Deal</a>
                </div>
            </div>
            <div className='flex flex-col gap-3 relative'>
                <div>
                    <img src={bagDeal} alt="" />
                </div>
                <div className='flex flex-col absolute bottom-[10%] left-4'>
                    <h1 className='text-xl font-bold'>For Men</h1>
                    <h1 className='text-xl font-bold'>Clothing Bundle Deal</h1>
                    <a href="#" className='text-[11px] hover:underline hover:font-bold hover:text-black hover:cursor-pointer'>View Deal</a>
                </div>
            </div>
        </div>
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