'use client'

import React, { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import GoogleAdSense from '../components/GoogleAdSense';

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
      title: 'Jobs.af',
      description: 'The largest job portal in Afghanistan. technologies: Vue.js, Nuxt.js, TailwindCSS, Node.js and Express.js',
      image: 'https://github.com/Abdulahadahmadi/codewithahad/blob/main/public/jobs.af.jpeg?raw=true',
      link: 'https://jobs.af',
      category: 'Saas Product',
    },
    {
      title: 'Admin Dashboard',
      description: 'Technologies: React.js, TailwindCSS, Material UI',
      image: 'https://github.com/Abdulahadahmadi/admin-dashboard/raw/main/public/assets/screenshots/pic-1.png',
      link: 'https://admin-dashboard-one-roan.vercel.app/',
      category: 'Dashboard',
    },
    {
      title: 'Remote Job UI',
      description: 'Technologies: React.js, TailwindCSS ',
      image: 'https://github.com/Abdulahadahmadi/codewithahad/blob/main/public/project4.png?raw=true',
      link: 'https://remote-job-ui.vercel.app/',
      category: 'Landing Page',
    },
    {
      title: 'Blogr Landing Page',
      description: 'Technologies: React.js, TailwindCSS',
      image: 'https://user-images.githubusercontent.com/62951574/262685822-2c71836e-8d07-4690-8446-17322ec88c70.png',
      link: 'https://blogr-landing-page-sooty-six.vercel.app/',
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
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6'>
        {filteredProjects.map((project, index) => (
          <PortfolioItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Page;
