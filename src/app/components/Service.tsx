import React from 'react'
import Card from './Card'
import { GiOrange } from 'react-icons/gi'

const Service = () => {
  return (
    <div>
      <div className='text-center my-10 '>
        <span className='text-cyan-500 text-center text-2xl md:text-5xl font-bold'>Service</span>
        <h1 className='text-2xl md:text-3xl font-bold'>Expertise Service! Let's check it out</h1>
        <p className='text-gray-800 mx-auto md:mx-16 lg:mx-80 justify-start'>Meet <strong>Ahad</strong>, your dedicated software developer and technology enthusiast. With a passion for creating innovative solutions, I specialize in custom software development, turning your ideas into reality with precision and expertise. Let's collaborate to bring your projects to life and make a meaningful impact.</p>
        <div className='grid grid-cols-3 mx-auto'>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-5'>
        <section className='bg-gray-100 w-72 h-72 md:w-96 md:h-96 rounded-xl shadow-xl p-10 md:p-16 leading-3 md:mx-20 my-7 md:my-16 hover:bg-cyan-500 cursor-pointer hover:rotate-6'>
          <GiOrange />
          <h1>UI & UI Design</h1>
          <p></p>
        </section>
      </div>
      </div>  
    </div>
  )
}

export default Service