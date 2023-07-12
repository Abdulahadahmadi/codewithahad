import React, { useState, useEffect } from 'react'

const Testimonial = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

  return (
    <div className='w-full'>
      <h1>Testimonial</h1>
      <p>What People Say's About Me</p>
      
    </div>
  )
}

export default Testimonial