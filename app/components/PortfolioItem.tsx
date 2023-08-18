'use client'
import React, { useState } from 'react';
import Link from 'next/link';

interface Project {
  image: string;
}

const PortfolioItem: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="p-4">
      <div className="relative">
        <Link href='/projects' passHref>
          <div
            className="h-80 w-full bg-gray-300 rounded-md overflow-hidden cursor-pointer transition duration-500 hover:opacity-70 bg-no-repeat bg-cover mt-2 md:mt-4"
            style={{ backgroundImage: `url(${project.image})` }}
          >  
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default PortfolioItem;
