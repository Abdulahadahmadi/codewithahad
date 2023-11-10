import React from 'react'
import SignUpForm from '@/app/components/blog/SignUpForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up'
}

const page = () => {
  return (
    <div>
      <SignUpForm
      />
    </div>
  )
}

export default page