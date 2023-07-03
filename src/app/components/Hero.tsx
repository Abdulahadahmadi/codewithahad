import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import profile from '../../../public/profile.png'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center mt-10 md:mt-32'>
      <section>
        <h1 className='text-2xl md:text-3xl lg:text-5xl mx-5'>HEY! <strong>I'm Ahad,</strong> A <br /><strong>Software Developer <br /></strong>Based in <strong>Cyprus</strong></h1>
        <p className='text-gray-400'>Curious about learning new technologies, with experience of more than 2 years in this field.</p>
        <div className='flex flex-row'>
          <Link className='text-white px-10 py-3 hover:bg-cyan-500 rounded-full' href='/contact' passHref>Contact Me</Link>
          <Link className='' href='' target='_blank' passHref>Contact Me</Link>
          <Link className='' href='' target='_blank' passHref>Contact Me</Link>
          <Link className='' href='' target='_blank' passHref>Contact Me</Link>
        </div>
        <span>UI Design-Software Development-App Development</span>
      </section>
      
      <section>
        <Image className=' object-center w-56 h-80 md:w-64 md:h-96 object-cover grayscale hover:grayscale-0' src={profile} alt='Profile Image' />
      </section>
      
    </div>
  )
}

export default Hero