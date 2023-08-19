'use client';

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import dayMode from '../../public/day-mode.png';
import nightMode from '../../public/night-mode.png';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if(savedMode) {
            setIsDarkMode(JSON.parse(savedMode));
        }
    }, []);

    useEffect(() => {
        if(isDarkMode) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

  return (
    <div>
        <button
            onClick={toggleDarkMode}
            className="p-2 mt-6 rounded-full bg-gray-300 dark:bg-gray-200"
            >
            {isDarkMode ? (
                <Image width={16} height={16} src={dayMode} alt='light mode' />
            ) : (
                <Image width={16} height={16} src={nightMode} alt='dark mode' />
            )}
        </button>
    </div>
  )
}

export default DarkModeToggle