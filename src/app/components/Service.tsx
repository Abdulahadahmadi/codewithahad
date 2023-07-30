import React from 'react'
import Card from './Card'
import { GiOrange } from 'react-icons/gi'
import { GrAppsRounded } from 'react-icons/gr'
import {  BsCodeSlash } from 'react-icons/bs'

const Service = () => {
  return (
    <div>
      <div className='text-center my-10 '>
        <span className='text-cyan-500 text-center text-2xl md:text-5xl font-bold'>Service</span>
        <h1 className='text-2xl md:text-3xl font-bold mx-5'>Expertise Service! Let's check it out</h1>
        <p className='text-gray-800 mx-5 md:mx-16 lg:mx-80 justify-start'>Meet <strong>Ahad</strong>, your dedicated software developer and technology enthusiast. With a passion for creating innovative solutions, I specialize in custom software development, turning your ideas into reality with precision and expertise. Let's collaborate to bring your projects to life and make a meaningful impact.</p>
      <div className='grid lg:grid-cols-3 md:gap-5 mx-10 '>
        
        <section className='bg-gray-100 w-72 h-72 md:w-96 md:h-96 rounded-xl shadow-xl p-10 md:p-16 leading-3 md:mx-20 my-7 lg:my-16 mx-auto hover:bg-cyan-500 cursor-pointer hover:rotate-6'>
          <div className='flex justify-center items-center mb-8'>
            <GiOrange />
          </div>
          <h1 className='font-bold text-2xl md:text-3xl'>UI & UI Design</h1>
          <p className='text-center leading-5 mt-3'>Designing with Purpose Inspiring Engagement Unleash the Full Potential of Your Product with Our UI/UX Expertise</p>
        </section>
        <section className='bg-gray-100 w-72 h-72 md:w-96 md:h-96 rounded-xl shadow-xl p-10 md:p-16 leading-3 md:mx-20 my-7 lg:my-16 mx-auto hover:bg-cyan-500 cursor-pointer hover:rotate-6'>
          <div className='flex justify-center items-center mb-8'>
            <BsCodeSlash />
          </div>
          <h1 className='font-bold text-2xl md:text-3xl'>Software Development</h1>
          <p className='text-center leading-5 mt-3'>Transforming Vision into Reality Our Software Development Service Delivers Custom Solutions for Your Unique Needs</p>
        </section>
        <section className='bg-gray-100 w-72 h-72 md:w-96 md:h-96 rounded-xl shadow-xl p-10 md:p-16 leading-3 md:mx-20 my-7 lg:my-16 mx-auto hover:bg-cyan-500 cursor-pointer hover:rotate-6'>
          <div className='flex justify-center items-center mb-8'>
            <GrAppsRounded />
          </div>
          <h1 className='font-bold text-2xl md:text-3xl'>App Development</h1>
          <p className='text-center leading-5 mt-3 '>Empowering Your Mobile Vision Seamless App Development, Simplified From Concept to Completion Building Intuitive Apps for Today's Digital Landscape.</p>
        </section>
      </div>
      </div>  
    </div>
  )
}

export default Service