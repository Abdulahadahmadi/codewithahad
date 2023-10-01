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
      <button onClick={addText} className="bg-cyan-500 hover:bg-cyan-700 text-white shadow-lg font-bold py-2 px-4 rounded-md w-full">
        {text}
      </button>
    </div>
  )
}

export default Button