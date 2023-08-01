import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-gray-200 w-full p-10 md:pt-28 md:px-28'>
     <div className='flex flex-col md:flex-row justify-between'>
        <div className='mb-16'>
            <span className='text-cyan-500 uppercase mb-5'>Subscribe</span>
            <p className='text-2xl md:text-3xl lg:text-5xl font-bold'>Get Notified of New Projects</p>
            <span className='mt-16'>Code With Ahad</span>
        </div>
          
          <div>
            <p className='text-sm md:text-base'>Want to be the first to know about all the latest news and new blog posts? Subscribe to my newsletter and stay up-to-date.</p>
            <form className='flex flex-row mt-4'>
              <input type="text" placeholder='Your Email' className='px-2 py-1 md:px-8 md:py-4 rounded-l-md bg-white md:w-96' />
              <button className='px-2 py-1 md:px-4 md:py-2 text-sm md:text-base ring-1 text-black hover:text-white hover:bg-cyan-500 rounded-r-md'>Subscribe</button>
            </form>
            <ul className='flex flex-row text-gray-600 gap-6 mt-4 md:mt-16 text-sm md:text-base'>
              <li className='hover:underline hover:cursor-pointer'><Link href='/projects'>Projects</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href='/blog'>Blog</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href='/contact'>Contact</Link></li>
            </ul>
          </div>
     </div>
      <p className='w-full bg-gray-400 h-1 rounded-xl border border-b-gray-100 my-5'></p>
      <span className='flex justify-center items-center text-gray-500 text-xs md:text-md'>&copy; Copyright {new Date().getFullYear()} | All rights reserved by Code With Ahad</span>
    </div>
  )
} 

export default Footer