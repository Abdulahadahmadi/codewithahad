import React from 'react'
import Link from 'next/link'
import { BsLinkedin, BsWhatsapp, BsInstagram, BsCodeSquare } from 'react-icons/bs';

const Footer = () => {
  return (
    // <div className='bg-gray-200 w-full p-10 md:pt-28 md:px-28'>
      <footer className="py-6">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
                    <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                  </svg>
                </div>
                <span className="self-center text-2xl font-semibold">Brand name</span>
              </a>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Category</p>
              <ul>
                <li>
                  <Link href='/projects'>Projects</Link>
                </li>
                <li>
                <Link href='/blog'>Blog</Link>
                </li>
                <li>
                <Link href='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©{new Date().getFullYear()} All rights reserved by Code With Ahad</span>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              <div className='flex justify-center items-center'>
                <a className='font-bold' href='codewithahad01@gmail.com'>codewithahad01@gmail.com</a>
              </div>
              <div className='flex flex-row gap-2 md:gap-4 justify-center items-center'>
                <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full ring-1 hover:bg-cyan-500 dark:text-gray-900">
                  <BsLinkedin />
                </a>
                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full ring-1 hover:bg-cyan-500 dark:text-gray-900">
                  <BsWhatsapp />
                </a>
                <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full ring-1 hover:bg-cyan-500 dark:text-gray-900">
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    // </div>
  )
} 

export default Footer