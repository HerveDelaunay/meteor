import React from 'react'

const InputField: React.FC = () => {
  return (
      <form action="submit" className="flex justify-center my-auto font-roboto">
        <input type="text" placeholder='Chercher une ville' className='border border-black rounded p-2 w-2/5 focus:outline-none focus:ring placeholder:italic placeholder:text-roboto-400'/>
        <button type='submit' className='ml-2 p-2 border rounded bg-indigo-400 hover:bg-indigo-500 '>Rechercher</button>
      </form>
  )
}

export default InputField