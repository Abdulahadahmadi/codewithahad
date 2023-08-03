'use client'

import React, { useState } from 'react';

const PortfolioItem = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 });

  const handleOpenDialog = (event) => {
    setIsOpen(true);
    setDialogPosition({ x: event.pageX, y: event.pageY });
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-4">
      <div className="relative">
        <div
          className="h-80 w-full bg-gray-300 rounded-md overflow-hidden cursor-pointer transition duration-500 hover:opacity-70 bg-no-repeat bg-cover mt-2 md:mt-4"
          style={{ backgroundImage: `url(${project.image})` }}
          onClick={handleOpenDialog}
        ></div>
        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
            onClick={handleCloseDialog}
          >
            <div
              className="bg-white p-4 rounded-md"
              style={{
                width: '100%', // Set the width of the dialog to 90% of the screen
                position: 'absolute',
                top: dialogPosition.y,
                left: dialogPosition.x,
                transform: 'translate(-50%, -50%)', // Center the dialog using translation
                margin: '0 50px 0 50px'
              }}
            >
              <h2 className="text-xl font-bold mb-4">{project.title}</h2>
              <img src={project.image} alt={project.title} className="w-full h-60 mb-4 bg-cover bg-no-repeat" />
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-1 text-black hover:text-white hover:bg-cyan-500 px-6 py-2 rounded-md mr-2"
                >
                  Link
                </a>
                <button
                  className="ring-1 text-black hover:text-white hover:bg-red-500 px-4 py-2 rounded-md"
                  onClick={handleCloseDialog}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
