import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
      <div className='bg-gray-100 w-72 h-72 md:w-96 md:h-96 rounded-xl shadow-xl p-10 md:p-16 leading-3 md:mx-20 my-7 md:my-16 hover:bg-cyan-500 cursor-pointer hover:rotate-6'>
        {/* <Image src={image} alt={title} width={24} height={24} className='object-center w-20 h-20 md:w-20 md:h-20 mx-auto object-cover grayscale hover:grayscale-0 cursor-pointer' />
        <h1 className='text-2xl md:text-4xl mx-auto'>{title}</h1>
        <p className='text-gray-700 mx-auto'>{text}</p> */}
      </div>
  )
}

export default Card