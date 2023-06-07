import React from 'react'

import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl'

import commerce from '../assets/my-commerce.png'
import commerce2 from '../assets/my-commerce2.png'
import commerce3 from '../assets/my-commerce3.png'
import commerce4 from '../assets/my-commerce4.png'

const AboutUs = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div className='flex flex-col gap-8 px-24 py-24' >
            <div className='flex flex-col gap-4'>
                <h1 className='uppercase text-5xl font-semibold'>Our History</h1>
                <div className='bg-[#252525] h-[2px] w-[10%]'></div>
            </div>
            <div className='flex flex-row justify-between mt-16 mb-16'>
                <p className='opacity-70 text-sm font-extralight leading-loose'>
                    Duis in maximus turpis. 
                    Sed mattis ullamcorper metus, nec placerat lectus hendrerit sed. 
                    Vestibulum sollicitudin magna ante, sollicitudin laoreet sem tincidunt eget. 
                    Vestibulum tristique sem in purus pulvinar posuere. 
                    Nam lacinia elementum viverra.
                    Fusce orci nunc, aliquam a dapibus at, aliquet sed libero. 
                    Duis pellentesque luctus finibus. 
                    Donec vulputate a est quis porta. 
                    Suspendisse potenti. Integer ac sollicitudin odio. 
                    Etiam suscipit ipsum augue, ut tempor augue lacinia vel. 
                    Aenean tincidunt blandit risus. Vestibulum nec ex maximus, consequat neque id, aliquet enim. 
                    Curabitur volutpat leo vel neque lacinia, in convallis neque accumsan. 
                    Nullam imperdiet vel diam quis blandit. 
                    Nulla luctus quam ac fermentum rutrum.

                </p>

                <p className='opacity-70 text-sm font-extralight leading-loose'>
                    Duis in maximus turpis. 
                    Sed mattis ullamcorper metus, nec placerat lectus hendrerit sed. 
                    Vestibulum sollicitudin magna ante, sollicitudin laoreet sem tincidunt eget. 
                    Vestibulum tristique sem in purus pulvinar posuere. 
                    Nam lacinia elementum viverra.
                    Fusce orci nunc, aliquam a dapibus at, aliquet sed libero. 
                    Duis pellentesque luctus finibus. 
                    Donec vulputate a est quis porta. 
                    Suspendisse potenti. Integer ac sollicitudin odio. 
                    Etiam suscipit ipsum augue, ut tempor augue lacinia vel. 
                    Aenean tincidunt blandit risus. Vestibulum nec ex maximus, consequat neque id, aliquet enim. 
                    Curabitur volutpat leo vel neque lacinia, in convallis neque accumsan. 
                    Nullam imperdiet vel diam quis blandit. 
                    Nulla luctus quam ac fermentum rutrum.

                </p>
            </div>
            <div className='flex flex-row justify-between gap-10 px-10 py-10'>
                <div className='flex flex-col relative'>
                    <img src={commerce} alt="" />
                    <div className='absolute top-[40%] left-[-20%]'>
                        <img src={commerce2} alt="" />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-4 justify-center'>
                    <h1 className='font-bold text-5xl mt-4 mb-4'>MyCommerce</h1>
                    <div className=' bg-[#252525] h-[2px] w-[10%]'></div>
                    <p className='opacity-60'>
                        Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module.
                    </p>
                    <h1 className='text-4xl font-bold'>785659</h1>
                    <h1 className='opacity-50 text-[12px]'>Happy Follwers</h1>
                    <div className='flex flex-row gap-3'>
                        <SlSocialFacebook/>
                        <SlSocialInstagram/>
                        <SlSocialLinkedin/>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-between gap-10 px-10 py-10'>
                <div className='w-1/2 flex flex-col gap-4 justify-center'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[#545454] font-semibold'>Address</h1>
                        <h1 className='opacity-50 text-[11px]'>House No.78 Main Boulvard Islamabad, Pakistan</h1>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[#545454] font-semibold'>Phone Number</h1>
                        <h1 className='opacity-50 text-[11px]'>Mobile: +92305834974636</h1>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[#545454] font-semibold'>Email</h1>
                        <h1 className='opacity-50 text-[11px]'>example@example.com</h1>
                    </div>
                </div>
                <div className='flex flex-col relative'>
                    <img src={commerce3} alt="" />
                    <div className='absolute top-[40%] right-[-20%]'>
                        <img src={commerce4} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#EAEAEA] mb-48'>
            <div className='bg-[#EAEAEA] px-24 py-24 '>
                <div className='flex flex-col gap-2 items-center mb-16'>
                    <h1 className='font-bold text-5xl'>Sign up Now & get 10% off</h1>
                    <h1>Be the first to know about our new arrivals and exclusive offers.</h1>
                </div>
                <div className='flex flex-col items-center relative'>
                    <input type="email" className='px-6 py-2 text-black bg-white w-[400px]' placeholder='Email' />
                    <button className='right-[32.7%] absolute text-white bg-black/20 rounded-none px-6 py-2'>Subscribe</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs