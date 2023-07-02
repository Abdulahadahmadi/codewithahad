import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import profile from '../../../public/profile.jpg'

const Hero = () => {
  return (
    <div className='flex flex-row justify-center '>
      <section>
        <h1>HEY! <strong>I'm Ahad,</strong> A <strong>Software Developer</strong>Based in <strong>Cyprus</strong></h1>
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
        <Image className='rounded-full object-center' src={profile} width={300} height={300} alt='Profile Image' />
      </section>
      
    </div>
  )
}

export default Hero