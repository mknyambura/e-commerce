import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

import privacyPolicy from '../assets/privacy-policy.png'
import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'

const PrivacyPolicy = () => {
  return (
    <div>
      <Header/>
        <Navbar/>
        <div>
          <div>
              <img src={privacyPolicy} alt="" />
          </div>
          <div className='absolute bottom-[30%] left-[2%] flex flex-col gap-6'>
            <h1 className='font-bold uppercase text-5xl'>Privacy Policy</h1>
            <div className='flex flex-row items-center text-[#545454] gap-2'>
              <Link to='/' className='uppercase font-extralight hover:underline'>
                  Home
              </Link>
              <SlArrowRight className='text-sm'/>
              <Link to='/about-us' className='uppercase font-extralight hover:underline'>
                  Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-12 px-36 py-12 m-16'>
          <div className='flex flex-col gap-3'>
            <h1 className='uppercase font-semibold text-xl'>Privacy Policy</h1>
            <p className='opacity-70'>
              Thank you for accessing our website. We respect your privacy and want to protect your personal information. To learn more, please read this Privacy Policy. This Privacy Policy explains how we collect, use and (under certain conditions) disclose your personal information. By visiting the Site directly or through another site, you accept the practices described in this Policy.
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='uppercase font-semibold text-xl'>Data That We Collect</h1>
            <p className='opacity-70'>
              We collect personal information such as your contact information (name, e-mail address, etc.), and billing/shipping information (credit card number, visa card Number shipping address, etc.)We take responsibility for all the personal data that you provide us with, that we obtain when you subscribe to our newsletter or when you create a personal profile.
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='uppercase font-semibold text-xl'>How Do we Use Your Data?</h1>
            <p className='opacity-70'>
              We use the information that we collect to fulfill our commitments to you and to provide you with the service that you expect. This includes sending you information and offers for marketing purposes. In order to provide you with relevant offers and information, we may analyze your personal data. We will only keep your data for as long as necessary to carry out our services to you or for as long as we are required by law. After this, your personal data will be deleted.
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='uppercase font-semibold text-xl'>What information do we require to share with thrid party?</h1>
            <p className='opacity-70'>
              Teefit Fashion may share your data information with third party or affiliates of Teefit Fashion who perform services on our behalf or process authorized transactions. The data information we share with these companies to perform services on our behalf is protected via contractual agreements and cannot be shared.
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='uppercase font-semibold text-xl'>Your Account Protection</h1>
            <p className='opacity-70'>
            While creating an account on our website, you will be enquired to provide a personal password. You will be required to use your chosen password for all future access to your account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. Teefit Fashion reserves the right to refuse service, terminate accounts, remove or edit content, or cancel orders in its lone discretion.
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='uppercase font-semibold text-xl'>Your rights</h1>
            <p className='opacity-70'>
              You have the right to request access to the personal data which we may hold or process about you. You have the right to require us to correct any incorrect, incomplete or irrelevant information in your data. At any stage, you also have the right to ask us to stop using your personal data for direct marketing purposes.
            </p>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default PrivacyPolicy