import LoginForm from '@/app/components/blog/LoginForm'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login Page'
}

const page = () => {
  return (
    <div>
        <LoginForm
        />
    </div>
  )
}

export default page