import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profile from '../../../public/profile.png'
import cv from '../../../public/cv.pdf'
import { BsArrowRightCircle } from 'react-icons/bs'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-10 mx:p-20'>
      <section>
        <Image src={profile} alt='about' width={400} height={450} className='object-cover object-center grayscale hover:grayscale-0 cursor-pointer' />
      </section>

      <section className='flex flex-col justify-center md:justify-start items-start'>
        <h1 className='text-cyan-500 text-2xl md:text-5xl font-bold leading-6'>About</h1>
        <h2 className='text-2xl md:text-3xl lg:text-6xl text-gray-800 leading-8  mx-5 md:mx-0  '>HEY! <strong>I'm Ahad,</strong> A <br /><strong>Software Developer <br /></strong>Based in <strong>Cyprus</strong></h2>
        <p className='text-gray-700 md:mr-20 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore rem facere molestiae voluptates magni porro accusamus, <br /> pariatur, reprehenderit dolorem laudantium nulla illum unde doloribus tempore exercitationem distinctio libero, illo quae!</p>
        <div className='flex flex-col md:w-2/3 bg-orange-100 rounded-lg py-3 px-4 md:py-6 md:px-8 my-1 md:my-5 hover:cursor-pointer shadow-xl'>
          <div className='flex'>
            <BsArrowRightCircle className='mt-2 mr-4'/>
            <span className='text-gray-700 text-xl md:text-3xl font-bold'>10+ Complete Project</span>
          </div>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aspernatur et illum tempora voluptate dicta cumque accusamus quam aut.</p>
        </div>
        <div className='flex  
        
        
        
        
        flex-col md:w-2/3 bg-cyan-100 rounded-lg py-3 px-4 md:py-6 md:px-8 my-1 md:my-5 hover:cursor-pointer shadow-xl'>
          <div className='flex'>
            <BsArrowRightCircle className='mt-2 mr-4'/>
            <span className='text-gray-700 text-xl md:text-3xl font-bold'>2+ Years of Experience</span>
          </div>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aspernatur et illum tempora voluptate dicta cumque accusamus quam aut.</p>
        </div>
        <Link href='' target='_blank' passHref className='text-black bg-gray-300 px-6 md:px-10 py-2 md:py-3 hover:bg-cyan-500 hover:text-white rounded-full'>
          Download CV
        </Link>
      </section>
    </div>
  )
}

export default About