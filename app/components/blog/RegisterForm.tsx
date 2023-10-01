'use client'

import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';

interface Props {
    name: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}


export default function RegistrationForm({ }: Props) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUpUser = async () => {
    
    // Add your logic to send registration data to the server here
    // You can use the fetch API or a library like Axios
  };

  return (
    <div className="w-full flex flex-wrap justify-center items-center mx-auto px-8 md:px-20 shadow-lg">
      {/* Register Section */}
      <div className="w-full md:w-1/2 flex flex-col bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Register</p>
          <p className="">Create your free account and start to write your first blog!!</p>
          {/* form */}
          <form className="flex flex-col pt-3 md:pt-5" onSubmit={signUpUser}>
            <div className="flex flex-col pt-4">
              <label htmlFor="name" className="text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            
            <div className="flex flex-col pt-4">
              <label htmlFor="userName" className="text-lg">
                User Name
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your username here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="confirmPassword" className="text-lg">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Your confirmPassword here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>

            </div>
            {/* Add similar input fields for email, password, and position */}
            <div className='my-6'>
              <Button text='Register' />
            </div>
          </form>
        </div>
      </div>

      {/* Image Section */}
      {/* <div className="w-1/2 shadow-2xl">
        <Image
            className="object-cover w-full h-screen rounded-r-xl hidden md:block"
            src="@/public/project3.png"
            alt="Background"
            width={500}
            height={600}
        />
      </div> */}
    </div>
  );
}
