import React from 'react'
import ContactForm from '../components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact'
}

const page: React.FC = () => {
  const style = {
    background:'rgba( 255, 255, 255, 0.25 )',
    backdropFilter: 'blur( 4px )',
    webkitBackdropFilter: 'blur( 4px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )'
  }
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default page