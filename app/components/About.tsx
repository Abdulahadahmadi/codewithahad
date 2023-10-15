'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profile from '../../public/avatar.png'
import mern from '../../public/mern.png';
import mevn from '../../public/mevn.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-around items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-8 md:p-20'>
      <section data-aos="fade-left" data-aos-duration="1000">
        <Image src={profile} alt='about' width={600} height={400} className='object-cover object-center grayscale hover:grayscale-0 cursor-pointer w-auto' />
      </section>

      <section className=''>
      <h1 className='text-cyan-500 text-2xl md:text-5xl font-bold leading-6 my-8'>Tech Stacks</h1>

      <section className='flex flex-row gap-4'>
        <div title='Mern stack' className='skills-black' data-aos="fade-right" data-aos-duration="500">
            <Image alt='mern stack' width={100} height={100} src={mern} className='w-auto' />
        </div>
        <div title='Mevn Stack' className='skills-black' data-aos="fade-left" data-aos-duration="500">
            <Image alt='mervn stack' width={100} height={100} src={mevn} className='w-auto' />
        </div>
      </section>


      <p className='text-cyan-500 text-2xl md:text-5xl font-bold leading-6 my-8'>Sklls</p>
      <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5' >
        <div title='html' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="100">
          <Image alt='html' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
        </div>
        
        <div title='css' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="300">
          <Image alt='css' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        </div>
            
        <div title='sass' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="500">
          <Image alt='sass' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        </div>
          
        <div title='tailwind css' className='skills-black' data-aos="fade-up-left" data-aos-duration="700">
          <Image alt='tailwindcss' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
        </div>


        <div title='javascript' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="900">
          <Image alt='JavaScript' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        </div>
          
        <div title='typescript' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="600">
          <Image alt='TypeScript' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        </div>

        <div title='react' className='skills-black' data-aos="fade-up-left" data-aos-duration="700">
          <Image alt='React.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        </div>

        <div title='nextjs' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="1100">
          <Image alt='Next.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
        </div>

        <div title='vuejs' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="1300">
          <Image alt='Vue.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" />
        </div>
  
        <div title='nuxtjs' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="1500">
          <Image alt='Nuxt.js' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-plain-wordmark.svg" />
        </div>

        <div title='nodejs' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="1700">
          <Image alt='Node' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        </div>
          
        <div title='nodejs' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="1800">
          <Image alt='Node' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
        </div>
          

        <div title='git' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="1900">
          <Image alt='git' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
        </div>
          

        <div title='github' className='skills-cyan' data-aos="fade-up-left" data-aos-duration="2000">
          <Image alt='github' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
        </div>
          
          

        <div title='docker' className='skills-black' data-aos="fade-up-left" data-aos-duration="2100">
          <Image alt='docker' width={80} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
        </div>
          
          
          

      </section>
      </section>


    </div>
  )
}

export default About