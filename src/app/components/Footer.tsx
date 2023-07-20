import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-200 w-full p-28'>
     <div className='flex flex-col md:flex-row justify-between'>
        <div className=''>
            <span className='text-cyan-500 uppercase mb-5'>Subscribe</span>
            <p className='text-2xl md:text-4xl lg:text-6xl font-bold mb-16'>Get Notified of New Projects</p>
            <span>Code With Ahad</span>
          </div>
          
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum, ut illum, quam error<br /> voluptatum blanditiis modi iste, eligendi ipsa commodi dolor in pariatur voluptas optio mollitia inventore a quibusdam?</p>
            <form className='flex flex-col md:flex-row mt-4'>
              <input type="text" placeholder='Your Email' className='px-8 py-4 rounded-l-md bg-white' />
              <button className='px-4 py-2 ring-1 text-black hover:text-white hover:bg-cyan-500 rounded-r-md'>Subscribe</button>
            </form>
            <ul className='flex flex-col md:flex-row text-gray-600 gap-6 mt-4 '>
              <li className='hover:underline hover:cursor-pointer'>Projects</li>
              <li className='hover:underline hover:cursor-pointer'>Blog</li>
              <li className='hover:underline hover:cursor-pointer'>Contact</li>
            </ul>
          </div>
     </div>
      <p className='w-full bg-gray-400 h-1 rounded-xl border border-b-gray-100 my-8'></p>
      <span className='flex justify-center text-gray-500 text-lg'>&copy; Copyright {new Date().getFullYear()} | All rights reserved by Code With Ahad</span>
    </div>
  )
} 

export default Footer