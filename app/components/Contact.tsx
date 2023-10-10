import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import discuss from '../../public/discuss.png'

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-around items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-10 mx:p-20'>
      <section>
        <Image width={500} height={450} src={discuss} alt='group discuss' />
      </section>
      
      <section className=' md:leading-8'>
        <h1 className='text-xl md:text-3xl lg:text-5xl text-white font-bold'>Got a Project! Let's Talk</h1>
        <p className='text-white mb-4'>Have an exciting project idea in mind? Let's chat and make it happen together!</p>
        <Link href='/contact' passHref className='px-6 md:px-10 ring-1 py-2 md:py-3 hover:bg-cyan-500 hover:text-white rounded-md'>
            Contact
        </Link>
      </section>
    </div>
  )
}

export default Contact