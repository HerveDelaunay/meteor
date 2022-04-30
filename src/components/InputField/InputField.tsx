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
        className='border border-black rounded p-2 w-2/5 focus:outline-none focus:ring placeholder:italic placeholder:text-roboto-400'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type='submit' 
        className='ml-2 p-2 border rounded bg-indigo-400 hover:bg-indigo-500 '>
        Rechercher
      </button>
    </form>
  )
}

export default InputField