import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper' 
import 'swiper/css'
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'
import data from '../../db.json'
import { BsArrowRight } from 'react-icons/bs'


const Blog = () => {
    const [article, setArticle] = useState([])

    useEffect(() => {
        fetch('/blogs')
        .then((res) => res.json())
      //   .then(setArticle)
      //   .then((show) => console.log(show))
        .then(data => setArticle(data[Math.floor(Math.random() * data.results.length - 1)]))
    }, [])
      
      function truncate(string, n){
          return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
  return (
    <div  className='flex flex-col gap-8 mb-16'>
        <h1 className='flex text-5xl mt-4 mb-4 font-bold items-center justify-center'>Our Blogs</h1>
        <Swiper
            freeMode={true}
            grabCursor={true}
            modules={FreeMode}
            slidesPerView={3}
            spaceBetween={100}
            className='mySwiper text-black flex flex-row items-center justify-start overflow-x-scroll overflow-y-hidden m-1 scrollbar-hide'
        >
            {data.blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                    <div key={blog.id} className='flex flex-col relative justify-evenly gap-8 px-12 py-12'>
                        <div className='w-[400px] h-[350px]'>
                            <img src={blog.image} alt="" className='w-full'/>
                        </div>
                        <div className='flex flex-col justify-between absolute bg-white bottom-[1px] h-[250px] w-[80%] m-4'>
                            <div className='m-4 items-center gap-8' >
                                <h1 className='text-[12px] mb-4 text-center font-light bg-[#E6E6E6] text-[#383838] px-4 py-2 rounded-none w-[35%] items-center '>{blog.category}</h1>
                                <h1 className='font-bold'>{blog.title}</h1>
                                <p className='text-[#585858] text-[12px]'>{truncate(blog.content, 100)}</p>
                                <a href="#" className='text-sm flex flex-row gap-2 items-center mt-8 mb-8'>Read More <BsArrowRight/></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Blog