'use client'

import { ReactNode } from "react"

interface Props { 
  text?: string
  icon?: ReactNode
}

const Button = ({ text, icon }: Props) => {

  return (
    <div>
      <button className="bg-cyan-500 hover:bg-cyan-700 text-white shadow-lg font-bold py-2 px-4 rounded-md w-full">
        {text}
        {icon}
      </button>
    </div>
  )
}

export default Button