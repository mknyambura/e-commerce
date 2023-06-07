import React from 'react'

import termsOfService from '../assets/terms-of-service.png'
import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const TermsOfService = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div>
            <div>
                <img src={termsOfService} alt="" />
            </div>
            <div className='absolute bottom-[30%] left-[2%] flex flex-col gap-6'>
                <h1 className='font-bold uppercase text-5xl'>Terms Of Service</h1>
                <div className='flex flex-row items-center text-[#545454] gap-2'>
                    <Link to='/' className='uppercase font-extralight hover:underline'>
                        Home
                    </Link>
                    <SlArrowRight className='text-sm'/>
                    <Link to='/about-us' className='uppercase font-extralight hover:underline'>
                        Terms Of Service
                    </Link>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-8 px-12 py-12 m-16'>
            <div className='flex flex-col gap-2'>
                <h1 className='mb-2 uppercase font-semibold text-2xl'>Terms</h1>
                <p>
                    By accessing the website at http://www.teefitfashion.com/, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='mb-2 uppercase font-semibold text-2xl'>Use License</h1>
                <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on Teefit Fashion's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
                </p>
                <ul className='flex flex-col list-disc px-12 py-12'>
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                    <li>attempt to decompile or reverse engineer any software contained on Teefit Fashion's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.</li>
                    <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Teefit Fashion at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='mb-2 uppercase font-semibold text-2xl'>Disclaimer</h1>
                <p>
                    The materials on Teefit Fashion's website are provided on an 'as is' basis. Teefit Fashion makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                    Further, Teefit Fashion does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='mb-2 uppercase font-semibold text-2xl'>Limitations</h1>
                <p>
                    In no event shall Teefit Fashion be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Teefit Fashion's website, even if Teefit Fashion or a Teefit Fashion authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='mb-2 uppercase font-semibold text-2xl'>Accuracy of Materials</h1>
                <p>
                    While creating an account on our website, you will be enquired to provide a personal password. You will be required to use your chosen password for all future access to your account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. Teefit Fashion reserves the right to refuse service, terminate accounts, remove or edit content, or cancel orders in its lone discretion.
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='mb-2 uppercase font-semibold text-2xl'>Delivery of Your Order</h1>
                <p>
                    Teefit Fashion products are sold on a delivery duty unpaid basis. The recipient may have to pay import duty or a formal customs entry fee prior to or on delivery. Additional taxes, fees or levies may apply according to local legislation and customers are required to check these details before placing an order for international delivery.
                </p>
                <p>
                You bear the risk for the products once delivery is completed.
                </p>
                <p>
                Where possible, we try to deliver in one go. We reserve the right to split the delivery of your order, for instance (but not limited to) if part of your order is delayed or unavailable. In the event that we split your order, we will notify you of our intention to do so by sending you an e-mail to the e-mail address provided by you at the time of purchase. You will not be charged for any additional delivery costs.
                </p>
                <p>
                We can entertain any changes to order provided if the order isn't dispatched yet. We will not be able to accept any order change requests once the order is dispatched.
                </p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default TermsOfService