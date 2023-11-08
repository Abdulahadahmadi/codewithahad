'use client'

import React, { useEffect } from 'react'
import { GiOrange } from 'react-icons/gi'
import { GrAppsRounded } from 'react-icons/gr'
import {  BsCodeSlash } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tilt } from 'react-tilt'


const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Service = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);



  return (
    <div className='mx-auto'>
      <div className='text-center my-10' data-aos="fade-right" data-aos-duration="500">
        <h1 className='text-cyan-500 text-center text-2xl md:text-5xl font-bold'>Service</h1>
        <p className='text-2xl md:text-3xl font-bold mx-5'>Expertise Service! Let's check it out</p>
        <p className='mx-5 md:mx-16 lg:mx-80 justify-start'>Meet <strong>Ahad</strong>, your dedicated software developer and technology enthusiast. With a passion for creating innovative solutions, I specialize in custom software development, turning your ideas into reality with precision and expertise. Let's collaborate to bring your projects to life and make a meaningful impact.</p>
      <div className='grid lg:grid-cols-3 md:gap-5 mx-10 '>
        
        <Tilt options={defaultOptions} className='w-72 h-72 md:w-96 md:h-96 rounded-xl shadow-xl p-10 md:p-16 leading-3 md:mx-20 my-7 lg:my-16 mx-auto hover:bg-cyan-500 cursor-pointer hover:rotate-6' data-aos="flip-right">
          <div className='flex justify-center items-center mb-8'>
            <GiOrange />
          </div>
          <p className='font-bold text-2xl md:text-3xl'>UI & UI Design</p>
          <p className='text-center leading-5 mt-3'>Designing with Purpose Inspiring Engagement Unleash the Full Potential of Your Product with Our UI/UX Expertise</p>
        </Tilt>

        <Tilt options={defaultOptions} className='w-72 h-72 md:w-96 md:h-96 rounded-xl shadow-xl p-10 md:p-16 leading-3 md:mx-20 my-7 lg:my-16 mx-auto hover:bg-cyan-500 cursor-pointer hover:rotate-6' data-aos="flip-right">
          <div className='flex justify-center items-center mb-8'>
            <BsCodeSlash />
          </div>
          <p className='font-bold text-2xl md:text-3xl'>Software Development</p>
          <p className='text-center leading-5 mt-3'>Transforming Vision into Reality Our Software Development Service Delivers Custom Solutions for Your Unique Needs</p>
        </Tilt>

        <Tilt options={defaultOptions} className='w-72 h-72 md:w-96 md:h-96 rounded-xl shadow-xl p-10 md:p-16 leading-3 md:mx-20 my-7 lg:my-16 mx-auto hover:bg-cyan-500 cursor-pointer hover:rotate-6' data-aos="flip-right">
          <div className='flex justify-center items-center mb-8'>
            <GrAppsRounded />
          </div>
          <p className='font-bold text-2xl md:text-3xl'>App Development</p>
          <p className='text-center leading-5 mt-3 '>Empowering Your Mobile Vision Seamless App Development, Simplified From Concept to Completion Building Intuitive Apps for Today's Digital Landscape.</p>
        </Tilt>
      </div>
      </div>  
    </div>
  )
}

export default Service