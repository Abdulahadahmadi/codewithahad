'use client'

import React, { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const Page: React.FC = () => {
  const projects: Project[] = [
    // ... (your project data)
    {
      title: 'Project 1',
      description: 'This is the description for Project 1.',
      image: 'https://media.licdn.com/dms/image/C4D22AQFKiDlJUoUT2g/feedshare-shrink_800/0/1674668981057?e=1694649600&v=beta&t=shJFYPBeyyZAEOW_ufwnGx_F2ipIkZeEsBqfBXlprGM',
      link: 'https://jobs.af',
      category: 'Saas Product',
    },
    {
      title: 'Project 2',
      description: 'This is the description for Project 2.',
      image: 'https://github.com/Abdulahadahmadi/admin-dashboard/raw/main/public/assets/screenshots/pic-1.png',
      link: 'https://jobs.af',
      category: 'Dashboard',
    },
    {
      title: 'Project 3',
      description: 'This is the description for Project 2.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3Q54FgNW2x2Rp9oY70DjRT6NDlCHomynOt2NyRvpow&s',
      link: 'https://jobs.af',
      category: 'Landing Page',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects: Project[] = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);

  const handleCategoryClick = (category: string): void => {
    setSelectedCategory(category);
  };

  return (
    <div className='w-full py-6'>
      {/* ... (rest of your JSX) */}
      <section className='flex flex-row justify-center gap-2 md:gap-4'>
        <button
          onClick={() => handleCategoryClick('All')}
          className={`p-1 md:px-4 md:py-2 hover:text-white hover:bg-cyan-500 ring-1 text-xs md:text-base rounded mx-1 ${selectedCategory === 'All' ? 'bg-cyan-500 text-white' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick('Landing Page')}
          className={`p-1 md:px-4 md:py-2 hover:text-white hover:bg-cyan-500 ring-1 text-xs md:text-base rounded mx-1 ${selectedCategory === 'Landing Page' ? 'bg-cyan-500 text-white' : ''}`}
        >
          Landing Page
        </button>
        <button
          onClick={() => handleCategoryClick('Saas Product')}
          className={`p-1 md:px-4 md:py-2 hover:text-white hover:bg-cyan-500 ring-1 text-xs md:text-base rounded mx-1 ${selectedCategory === 'Saas Product' ? 'bg-cyan-500 text-white' : ''}`}
        >
          Saas Product
        </button>
        <button
          onClick={() => handleCategoryClick('Dashboard')}
          className={`p-1 md:px-4 md:py-2 hover:text-white hover:bg-cyan-500 ring-1 text-xs md:text-base rounded mx-1 ${selectedCategory === 'Dashboard' ? 'bg-cyan-500 text-white' : ''}`}
        >
          Dashboard
        </button>
      </section>
      {/* ... (rest of your JSX) */}
       {/* Display filtered projects */}
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {filteredProjects.map((project, index) => (
          <PortfolioItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Page;
