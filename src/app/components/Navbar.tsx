'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import github from '../../../public/github.png'

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [navbarOpen, setNavbarOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [darkMode, setDarkMode] = useState(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if(darkMode === 'dark') {
      document.documentElement.classList.add('dark')
    }else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  
  const handleDarkMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark")
  }

  const navigation = [
    { name: "projects", href: "/projects", current: false },
    { name: "blog", href: "/blog", current: false },
    { name: "Contact me", href: "/contact", current: false },
  ]
  return (
    <>
      <nav className="relative flex flex-wrap w-full items-center justify-between px-2 py-6  bg-transparent border">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className=" text-xl md:text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-gray-700 dark:text-gray-400"
              href="/"
            >
              Code With Ahad
            </Link>
            <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border lg:hidden"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                  {navbarOpen ? (
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  >
                  <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  />
                  </svg>
                  ) : (
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                  />
                  </svg>
                  )}
          </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:m-auto ">
              {/* <li className="mt-3">
                <label htmlFor="Toggle" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                  <span className="relative">
                    <input onClick={handleDarkMode} id="Toggle" type="checkbox" className="hidden peer" />
                    <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                  </span>
                  </label>
              </li> */}
              <li className="hover:underline">
                <Link
                  className="px-3 py-2 flex items-center text-xs md:text-lg leading-snug text-gray-800 hover:opacity-75 dark:text-gray-500"
                  href="/projects"
                  passHref
                >
                  <span className="ml-2">{navigation[0].name}</span>
                </Link>
              </li>
              <li className="hover:underline">
                <Link
                  className="px-3 py-2 flex items-center text-xs md:text-lg leading-snug text-gray-200 hover:opacity-75 dark:text-gray-500"
                  href="blog"
                  passHref
                >
                  <span className="ml-2">{navigation[1].name}</span>
                </Link>
              </li>
              <li className="hover:underline">
                <Link
                  className="px-3 py-2 flex items-center text-xs md:text-lg  leading-snug text-gray-800 hover:opacity-75 dark:text-gray-500"
                  href="/contact"
                  passHref
                >
                  <span className="ml-2">{navigation[2].name}</span>
                </Link>
              </li>
             
            </ul>
            <button className='text-md text-black bg-gray-300 px-8 py-2 rounded-full hover:bg-black hover:text-white'>
              Hire me!
            </button>
            <div className="hover:underline">
                <Link
                  className="px-3 py-2 flex items-center text-xs md:text-lg  leading-snug text-gray-800 hover:opacity-75 dark:text-gray-400"
                  href="https://github.com/abdulahadahmadi"
                  target="_blank"
                  passHref
                >
                  <Image className="" src={github} alt="github logo" width={36} height={36} />
                </Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}
export default index;