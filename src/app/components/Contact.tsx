import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center md:justify-between items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-10 mx:p-20'>
      <h1 className='text-xl md:text-3xl lg:text-5xl   font-bold'>Got a Project! Let's Talk</h1>
      <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem beatae tempora harum sunt? Atque ut qui, adipisci a porro nesciunt sed asperiores nobis, mollitia omnis doloremque quod eius culpa?</p>
      <Link href='/contact' passHref className='text-black bg-gray-300 px-6 md:px-10 py-2 md:py-3 hover:bg-cyan-500 hover:text-white rounded-full'>
          Contact
      </Link>
    </div>
  )
}

export default Contact