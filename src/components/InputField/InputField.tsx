import React from 'react'

interface Props {
  city: string,
  setCity: React.Dispatch<React.SetStateAction<string>>,
  handleFormSubmit: (event:React.FormEvent<HTMLFormElement>) => void
}

const InputField: React.FC<Props> = ({city, setCity, handleFormSubmit}) => {
  
  return (
    <form action="submit" 
      className="flex justify-center my-auto font-roboto"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <input type="input" placeholder='Chercher une ville' 
        className='border border-black rounded p-2 w-2/5 focus:outline-none focus:ring placeholder:italic placeholder:text-roboto-400 shadow-2xl'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type='submit' 
        className='relative inline-flex items-center justify-center p-4 px-5 py-3 ml-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500'>
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white">Rechercher</span>
      </button>
    </form>
  )
}

export default InputField