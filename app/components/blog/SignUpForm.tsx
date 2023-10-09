'use client'

import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import { FcGoogle } from 'react-icons/fc';
import Bg from '@/public/project4.png'

interface Props {
    name: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}


export default function SignUpForm({ }: Props) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState('');

  const signUpUser = async (e: any) => {
    
    // Add logic to send registration data to the server here
    // You can use the fetch API or a library like Axios
    e.preventDefault();

    if(!name || !userName || !email || !password || !confirmPassword) {
      setFormError('Please fill all the fields');
      return;
    }


  };

  const singUpWithGoogle = (e: any) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center py-20 mx-auto px-2 md:px-20">
      {/* Register Section */}
      <div className="w-full flex flex-row justify-center items-center  rounded-md bg-gray-300">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Register</p>
          <p className="">Create free account and start to write first blog!!</p>
          {/* form */}
          <form className="flex flex-col pt-3 md:pt-5" onSubmit={signUpUser}>
            <div className="flex flex-col pt-4">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm"
              />
            </div>
            
            <div className="flex flex-col pt-4">
              <label htmlFor="userName" className="text-sm">
                User Name
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="username here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="confirmPassword" className="text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="confirmPassword here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm"
              />
            </div>
            <div>

            </div>
            {/* Add similar input fields for email, password, and position */}
            <div className='flex flex-col gap-2 my-6'>
              <Button text='Sign up' />
              <button onClick={singUpWithGoogle} className='flex justify-center items-center ring-1 hover:bg-cyan-700 text-white shadow-lg font-bold py-2 px-4 rounded-md w-full'>  
                <FcGoogle />
              </button>
            </div>
          </form>
        </div>
      <div className="w-2/4">
        <Image
            className="object-cover w-full h-screen rounded-r-xl hidden md:block"
            src={Bg}
            alt="Background"
            width={500}
            height={600}
        />
      </div>
      </div>

      {/* Image Section */}
    </div>
  );
}
