'only client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profile from '../../../public/profile.png'
import cv from '../../../public/cv.pdf'
import { BsArrowRightCircle } from 'react-icons/bs'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-10 '>
      <section>
        <Image src={profile} alt='about' width={400} height={450} className='object-cover object-center grayscale hover:grayscale-0 cursor-pointer' />
      </section>

      <section className=''>
      <h1 className='text-cyan-500 text-2xl md:text-5xl font-bold leading-6 my-8'>About</h1>
      <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5'>
        <div title='html' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='html' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
        </div>
        
        <div title='css' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='css' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        </div>
            
        <div title='sass' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='sass' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        </div>
          
        <div title='tailwind css' className='bg-white p-3 rounded-xl shadow-xl hover:bg-black cursor-pointer'>
          <Image alt='tailwindcss' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
        </div>


        <div title='javascript' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='JavaScript' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        </div>
          
        <div title='typescript' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='TypeScript' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        </div>

        <div title='react' className='bg-white p-3 rounded-xl shadow-xl hover:bg-black cursor-pointer'>
          <Image alt='React.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        </div>

        <div title='nextjs' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='Next.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
        </div>

        <div title='vuejs' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='Vue.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" />
        </div>
  
        <div title='nuxtjs' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='Nuxt.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-plain-wordmark.svg" />
        </div>

        <div title='nodejs' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='Node' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        </div>
          
        <div title='nodejs' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='Node' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
        </div>
          

        <div title='git' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='git' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
        </div>
          

        <div title='github' className='bg-white p-3 rounded-xl shadow-xl hover:bg-cyan-500 cursor-pointer'>
          <Image alt='github' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
        </div>
          
          

        <div title='docker' className='bg-white p-3 rounded-xl shadow-xl hover:bg-black cursor-pointer'>
          <Image alt='docker' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
        </div>
          
          
          

      </section>
      </section>



      {/* <section className='flex flex-col justify-center md:justify-start items-start'>
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
      </section> */}
    </div>
  )
}

export default About