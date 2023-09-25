import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../../public/logo_transparent.png'
import { BsLinkedin, BsWhatsapp, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='w-full md:pt-12 md:px-16'>
      <footer className="py-6">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                <div className="flex items-center justify-center w-20 h-20">
                  <Image src={Logo} alt='logo' />
                </div>
              </a>
            </div>
            <div className="flex justify-center items-center mx-auto">
              <ul className='flex flex-row gap-4 justify-center items-center  lg:ml-72'>
                <li className='hover:underline'>
                  <Link href='/projects'>Projects</Link>
                </li>
                <li className='hover:underline'>
                  <Link href='/blog'>Blog</Link>
                </li>
                <li className='hover:underline'>
                  <Link href='/contact'>Contact</Link>
                </li>
                <li className='hover:underline w-full'>
                  <Link href='/privacy-policy'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©{new Date().getFullYear()} All rights reserved &copy; by Code With Ahad</span>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              <div className='flex justify-center items-center'>
                <a className='font-bold' href='codewithahad01@gmail.com'>codewithahad01@gmail.com</a>
              </div>
              <div className='flex flex-row gap-2 md:gap-4 justify-center items-center'>
                <Link rel="noopener noreferrer" passHref href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full ring-1 hover:bg-cyan-500">
                  <BsLinkedin />
                </Link>
                <Link rel="noopener noreferrer" passHref href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full ring-1 hover:bg-cyan-500">
                  <BsWhatsapp />
                </Link>
                <Link rel="noopener noreferrer" passHref href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full ring-1 hover:bg-cyan-500">
                  <BsInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 

export default Footer