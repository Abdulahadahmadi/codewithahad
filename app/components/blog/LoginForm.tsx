'use client'

import { useState } from 'react';
import Image from 'next/image';
import Button from '../../components/Button';
import { FcGoogle } from 'react-icons/fc';
import Bg from '@/public/project4.png'
import supabase from '@/lib/supabaseClient'
import navigate  from 'next/navigation'
import Link from 'next/link';

interface Props {
    userName?: string;
    email?: string;
    password?: string;
}


const LoginForm = ({ }: Props) => {
  const [formData, setFormData] = useState<Props>({
    userName: '',
    email: '',
    password: '',
  });

  const [formError, setFormError] = useState('');
  
  
  const handleChange = async (event: any) => {
    setFormData((prevFormData: any) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
        
      }
    })
    
  };
  console.log(formData, 'formData');
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
    } catch (error) {
      alert(error)
    }
  };

  const singUpWithGoogle = (e: any) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center py-20 mx-auto px-2 md:px-20">
      {/* Register Section */}
      <div className="w-full flex flex-row justify-center items-center  rounded-md">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Login</p>
          <p className="">Create free account and start to write first blog!!</p>
          {/* form */}
          <form className="flex flex-col pt-3 md:pt-5" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="text"
                id="email"
                name='email'
                required
                value={formData.email}
                onChange={handleChange}
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
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder="password here"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm"
              />
            </div>
          <div>
            </div>
            {/* Add similar input fields for email, password, and position */}
            <div className='flex flex-col gap-2 my-6'>
              <Button text='Login' />
              <span className='text-xs md:text-sm'>Don't have an account? <strong><Link href='/auth/signup'>Sign up</Link></strong></span>
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

export default LoginForm;