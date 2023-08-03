'only client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profile from '../../../public/avatar.png'
import mern from '../../../public/mern.png';
import mevn from '../../../public/mevn.png';
import cv from '../../../public/cv.pdf'
import { BsArrowRightCircle } from 'react-icons/bs'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-around items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-10 '>
      <section>
        <Image src={profile} alt='about' width={550} height={400} className='object-cover object-center grayscale hover:grayscale-0 cursor-pointer' />
      </section>

      <section className=''>
      <h1 className='text-cyan-500 text-2xl md:text-5xl font-bold leading-6 my-8'>Tech Stacks</h1>

      <section className='flex flex-row gap-4'>
        <div title='Mern stack' className='skills-black'>
            <Image alt='mern stack' width={150} height={150} src={mern} />
        </div>
        <div title='Mevn Stack' className='skills-black'>
            <Image alt='mervn stack' width={150} height={150} src={mevn} />
        </div>
      </section>


      <h1 className='text-cyan-500 text-2xl md:text-5xl font-bold leading-6 my-8'>Sklls</h1>
      <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5'>
        <div title='html' className='skills-cyan'>
          <Image alt='html' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
        </div>
        
        <div title='css' className='skills-cyan'>
          <Image alt='css' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        </div>
            
        <div title='sass' className='skills-cyan'>
          <Image alt='sass' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        </div>
          
        <div title='tailwind css' className='skills-black'>
          <Image alt='tailwindcss' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
        </div>


        <div title='javascript' className='skills-cyan'>
          <Image alt='JavaScript' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        </div>
          
        <div title='typescript' className='skills-cyan'>
          <Image alt='TypeScript' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        </div>

        <div title='react' className='skills-black'>
          <Image alt='React.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        </div>

        <div title='nextjs' className='skills-cyan'>
          <Image alt='Next.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
        </div>

        <div title='vuejs' className='skills-cyan'>
          <Image alt='Vue.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" />
        </div>
  
        <div title='nuxtjs' className='skills-cyan'>
          <Image alt='Nuxt.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-plain-wordmark.svg" />
        </div>

        <div title='nodejs' className='skills-cyan'>
          <Image alt='Node' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        </div>
          
        <div title='nodejs' className='skills-cyan'>
          <Image alt='Node' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
        </div>
          

        <div title='git' className='skills-cyan'>
          <Image alt='git' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
        </div>
          

        <div title='github' className='skills-cyan'>
          <Image alt='github' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
        </div>
          
          

        <div title='docker' className='skills-black'>
          <Image alt='docker' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
        </div>
          
          
          

      </section>
      </section>


    </div>
  )
}

export default About