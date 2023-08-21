import React, { useState } from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const PortfolioItem: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="h-80 w-full rounded-md overflow-hidden cursor-pointer transition duration-500 hover:opacity-70 bg-no-repeat shadow-xl bg-cover mt-2 md:mt-4"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-md">
          <div className="text-white text-center">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <Link target='_blank' href={project.link}>
              View Project
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
