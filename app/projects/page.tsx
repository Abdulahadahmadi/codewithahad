import React from 'react'
import PortfolioItem from '../components/PortfolioItem';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';

const page = () => {

  const projects = [
    {
      title: 'Project 1',
      description: 'This is the description for Project 1.',
      image: 'https://media.licdn.com/dms/image/C4D22AQFKiDlJUoUT2g/feedshare-shrink_800/0/1674668981057?e=1694649600&v=beta&t=shJFYPBeyyZAEOW_ufwnGx_F2ipIkZeEsBqfBXlprGM',
      link: 'https://jobs.af',
      category: 'saas product',
    },
    {
      title: 'Project 2',
      description: 'This is the description for Project 2.',
      image: 'https://github.com/Abdulahadahmadi/admin-dashboard/raw/main/public/assets/screenshots/pic-1.png',
      link: 'https://jobs.af',
      category: 'dashboard',
    },
    {
      title: 'Project 3',
      description: 'This is the description for Project 2.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3Q54FgNW2x2Rp9oY70DjRT6NDlCHomynOt2NyRvpow&s',
      link: 'https://jobs.af',
      category: 'landing page',
    },
    
    // Add more projects here
  ];

  return (
    <div className='w-full py-6'>
      {/* <h1 className='text-xl md:text-2xl lg:text-4xl text-cyan-500 text-center'>Portfolio</h1> */}
      <p className='text-2xl md:text-4xl lg:text-5xl text-center font-bold my-8'>Products Showcases</p>
      <section className='flex flex-row justify-center gap-2 md:gap-4'>
        <button className='p-1 md:px-4 md:py-2 hover:text-white hover:bg-cyan-500 ring-1 text-xs md:text-base rounded mx-1'>All</button>
        <button className='p-1 md:px-4 md:py-2 hover:text-white hover:bg-cyan-500 ring-1 text-xs md:text-base rounded mx-1'>Landing Page</button>
        <button className='p-1 md:px-4 md:py-2 hover:text-white hover:bg-cyan-500 ring-1 text-xs md:text-base rounded mx-1'>Saas Product</button>
        <button className='p-1 md:px-4 md:py-2 hover:text-white hover:bg-cyan-500 ring-1 text-xs md:text-base rounded mx-1'>Dashboard</button>
      </section>  

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
        projects.map((project, index) => (
          <PortfolioItem key={index} project={project} />
        ))
        }
      </div>
    </div>
  )
}

export default page