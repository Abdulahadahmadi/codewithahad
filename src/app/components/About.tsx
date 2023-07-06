import React from 'react'
import Image from 'next/image'
import profile from '../../../public/profile.png'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-10 mx:p-20'>
      <section>
        <Image src={profile} alt='about' width={400} height={450} className='object-cover object-center grayscale hover:grayscale-0' />
      </section>

      <section className='flex flex-col justify-center md:justify-start items-start'>
        <h1 className='text-cyan-500 text-2xl md:text-5xl font-bold leading-6'>About</h1>
        <h2 className='text-2xl md:text-3xl lg:text-6xl text-gray-800 leading-8  mx-5 md:mx-0  '>HEY! <strong>I'm Ahad,</strong> A <br /><strong>Software Developer <br /></strong>Based in <strong>Cyprus</strong></h2>
        <p className='text-gray-700 md:mr-20 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore rem facere molestiae voluptates magni porro accusamus, <br /> pariatur, reprehenderit dolorem laudantium nulla illum unde doloribus tempore exercitationem distinctio libero, illo quae!</p>
      </section>
    </div>
  )
}

export default About