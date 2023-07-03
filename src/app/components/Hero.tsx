import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import profile from '../../../public/profile.png'
import { BsLinkedin, BsWhatsapp, BsInstagram, BsCodeSquare } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center mt-10 md:mt-32 w-full'>
      <section className='mr-60'>
        <h1 className='text-2xl md:text-3xl lg:text-6xl mx-5 md:mx-0  '>HEY! <strong>I'm Ahad,</strong> A <br /><strong>Software Developer <br /></strong>Based in <strong>Cyprus</strong></h1>
        <p className='text-gray-400'>Curious about learning new technologies,<br /> with experience of more than 2 years in this field.</p>
        <div className='flex flex-row items-center'>
          <Link className='text-black bg-gray-300 px-10 py-3 hover:bg-cyan-500 hover:text-white rounded-full' href='/contact' passHref>Contact Me</Link>
          <div className='flex m-4 justify-center items-center'>
            <Link className='w-12 h-12 ring-1 rounded-full py-4 pl-4 ml-2 hover:bg-cyan-500' href='https://www.linkedin.com/in/ahad-ahmadi-1a7295175/' target='_blank' passHref>
              <BsLinkedin />
            </Link>
            <Link className='w-12 h-12 ring-1 rounded-full py-4 pl-4 ml-2 hover:bg-cyan-500' href='https://wa.me/35794448287' target='_blank' passHref><BsWhatsapp /></Link>
            <Link className='w-12 h-12 ring-1 rounded-full py-4 pl-4 ml-2 hover:bg-cyan-500' href='https://www.instagram.com/ahad_ahmadi_01/' target='_blank' passHref><BsInstagram /></Link>
          </div>
        </div>
        <span className='flex '><BsCodeSquare className='mt-1' /> &nbsp; UI Design-Software Development-App Development</span>
      </section>
      
      <section>
        <Image className=' object-center w-56 h-80 md:w-64 md:h-96 object-cover grayscale hover:grayscale-0 cursor-pointer' src={profile} alt='Profile Image' />
      </section>
      
    </div>
  )
}

export default Hero