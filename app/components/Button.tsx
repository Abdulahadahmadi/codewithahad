'use client'
interface Props { 
  text: string
}

const Button = ({ text }: Props) => {
  const addText = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(text)
  }

  return (
    <div>
      <button onClick={addText} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full">
        {text}
      </button>
    </div>
  )
}

export default Button