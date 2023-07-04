import React from 'react'
import Card from './Card'

const Service = () => {
  return (
    <div>
      <span className='text-cyan-500'>Service</span>
      <h1 className='text-2xl md:text-3xl'>Expertise Service! Let's check it out</h1>
      <p className='text-gray-400 mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <Card
        image='data:image/png;base64,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'
        title='UI & UX'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
       />
    </div>
  )
}

export default Service