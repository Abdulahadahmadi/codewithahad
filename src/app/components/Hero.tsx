import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import profile from '../../../public/profile.png'
import image from '../../../public/intro0.png'
import { BsLinkedin, BsWhatsapp, BsInstagram, BsCodeSquare } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center w-full md:h-screen md:pb-24'>
      <section className='lg:mr-28'>
          <Image className=' object-center w-full md:w-2/3  object-cover rounded-xl' src={image} alt='Intro Image' />
        <div className='flex flex-row items-center justify-center lg:justify-start'>
          <Link className='text-black bg-gray-300 px-6 md:px-10 py-2 md:py-3 hover:bg-cyan-500 hover:text-white rounded-full' href='/contact' passHref>Contact Me</Link>
          <div className='flex m-4 justify-center items-center'>
            <Link className='w-12 h-12 ring-1 rounded-full py-4 pl-4 ml-2 hover:bg-cyan-500 hover:text-white' href='https://www.linkedin.com/in/ahad-ahmadi-1a7295175/' target='_blank' passHref>
              <BsLinkedin />
            </Link>
            <Link className='w-12 h-12 ring-1 rounded-full py-4 pl-4 ml-2 hover:bg-cyan-500 hover:text-white' href='https://wa.me/35794448287' target='_blank' passHref><BsWhatsapp /></Link>
            <Link className='w-12 h-12 ring-1 rounded-full py-4 pl-4 ml-2 hover:bg-cyan-500 hover:text-white' href='https://www.instagram.com/ahad_ahmadi_01/' target='_blank' passHref><BsInstagram /></Link>
          </div>
        </div>
        <span className='flex '><BsCodeSquare className='mt-1' /> &nbsp; UI Design-Software Development-App Development</span>
      </section>
      
      <section>
        <div className="flex items-center justify-center h-2 w-2 rounded-full bg-orange-500 ">
            <span className="text-white font-bold text-2xl"></span>
        </div>  
        <div className="flex items-center justify-center h-3 w-3 rounded-full bg-cyan-500 ml-40">
            <span className="text-white font-bold text-2xl"></span>
        </div>  
        <div className="flex items-center justify-center h-2 w-2 rounded-full bg-blue-500 ml-80 ">
            <span className="text-white font-bold text-2xl"></span>
        </div>        
    <Image className=' object-center w-56 h-80 md:w-64 md:h-96 mx-auto object-cover grayscale hover:grayscale-0 cursor-pointer' src={profile} alt='Profile Image' />
    <div className="flex items-center justify-center h-3 w-3 rounded-full bg-yellow-500 ">
            <span className="text-white font-bold text-2xl"></span>
        </div>  
        <div className="flex items-center justify-center h-2 w-2 rounded-full bg-red-500 ml-40">
            <span className="text-white font-bold text-2xl"></span>
        </div>  
        <div className="flex items-center justify-center h-3 w-3 rounded-full bg-lime-500 ml-80 ">
            <span className="text-white font-bold text-2xl"></span>
        </div>  
      </section>
      
    </div>
  )
}

export default Hero