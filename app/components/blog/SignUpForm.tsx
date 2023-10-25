'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../Button';
import { FcGoogle } from 'react-icons/fc';
import Bg from '@/public/project4.png'
import supabase from '@/lib/supabaseClient'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
    name?: string;
    userName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export default function SignUpForm({ }: Props) {
  const [formData, setFormData] = useState<Props>({
    name: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState<string>('');
  const router = useRouter()

  useEffect(() => {
    if(formError) {
      const timer = setTimeout(() => {
          setFormError('')
        }, 3000);
        return () => {
          clearTimeout(timer)
        }
    }
  }, [formError])
  
  
  const handleChange = async (event: any) => {
    setFormData((prevFormData: any) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
        
      }
    })
    
  };
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(!formData.email || !formData.password) {
      alert('Email and password are required');
      return;   
    }
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              name: formData.name,
              userName: formData.userName,
              confirmPassword: formData.confirmPassword,
            }
          }
        }
      )
      if(error ) throw error
      if(data) {
        router.push('/blog')
      }
    } catch (error: any) {
      setFormError(error.message)
    }
  };

  const singUpWithGoogle = (e: any) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center py-14 mx-auto px-2 md:px-20">
      {/* Register Section */}
      <div className="w-full flex flex-row justify-center items-center  rounded-md">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Register</p>
          <p className="">Create free account and start to write first blog!!</p>
          {/* form */} 
          <form className="flex flex-col pt-3 md:pt-5" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name='name'
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="name here"
                className="text-box"
              />
            </div>
            
            <div className="flex flex-col pt-4">
              <label htmlFor="userName" className="text-sm">
                User Name
              </label>
              <input
                type="text"
                id="userName"
                name='userName'
                required
                value={formData.userName}
                onChange={handleChange}
                placeholder="username here"
                className="text-box"
              />
            </div>

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
                className="text-box"
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
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="password here"
                className="text-box"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="confirmPassword" className="text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name='confirmPassword'
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="confirmPassword here"
                className="text-box"
              />
            </div>
            <div>

            </div>
            {/* Add similar input fields for email, password, and position */}
            <div className='flex flex-col gap-2 my-6'>
              <Button text='Sign up' />
              {formError && <p className='text-red-500 text-xs'>{formError}</p>}
              <span className='text-xs md:text-sm'>Already have an account? <strong><Link href='/auth/login'>Login</Link></strong></span>
              <button onClick={singUpWithGoogle} className='flex justify-center items-center ring-1 hover:bg-cyan-700 text-white shadow-lg font-bold py-2 px-4 rounded-md w-full'>  
                <FcGoogle />
              </button>
            </div>
          </form>
        </div>
      <div className="sr-only md:not-sr-only w-2/4">
        <Image
            className="object-cover w-full h-screen rounded-r-xl"
            src='https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D'
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
