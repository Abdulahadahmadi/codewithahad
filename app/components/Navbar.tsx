'use client'

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/logo/logo-no-background.png'
import { BsYoutube } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import DarkModeToggle from "./DarkModeToggle";
import { usePathname } from 'next/navigation'
import Script from 'next/script'

import { User } from "@supabase/supabase-js";

function Navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const router = usePathname()

  const navigation = [
    { name: "projects", href: "/projects", current: false },
    { name: "blog", href: "/blog", current: false },
    { name: "Videos", href: "/videos", current: false },
  ] 
  return (
      <nav className="relative flex flex-wrap w-full items-center justify-between px-2 py-3 bg-transparent shadow-lg border-b">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex flex-row justify-center items-center gap-8">
              <Link
                className="inline-block ml-6 dark:text-bg-100"
                href="/"
                passHref
              >
                <Image className="object-contain w-20 aspect[3/2]" src={Logo} alt="logo image" />
              </Link>

              <DarkModeToggle />

            </div>
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
              (navbarOpen ? "flex" : " sr-only md:not-sr-only")
            }
            id="navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:m-auto ">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="hover:underline"
                >
                  <Link 
                    className={router === item.href ? 'text-gray-600' : 'text-gray-400'} 
                    href={item.href} 
                    passHref
                  >
                    <span className="mx-2">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href='/contact' className='text-xs md:text-sm ring-1 px-6 py-2 rounded-md hover:rounded-full hover:transition-all hover:bg-cyan-500 hover:text-white'>
              Hire me!
            </Link>
            <div className="flex flex-col md:flex-row">
                <Link
                  className="px-3 py-2 flex items-center text-xs md:text-lg  leading-snug text-gray-800 hover:grayscale"
                  href="https://github.com/abdulahadahmadi"
                  target="_blank"
                  passHref
                >
                  <AiFillGithub className="text-gray-800" />
                </Link>
                <Link
                  className='w-16 h-12 py-4 ml-2 text-red-600 cursor-pointer hover:grayscale' 
                  href='https://www.youtube.com/channel/UC5BLFjPW4MO9p5-G6oat3IA'
                  target='_blank' 
                  passHref>
                  <BsYoutube />
                </Link>
            </div>

          </div>
        </div>
      </nav>
  );
}
export default Navbar;