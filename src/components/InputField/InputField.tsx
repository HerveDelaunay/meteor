import React from 'react'

const InputField: React.FC = () => {
  return (
    <div>
      <form action="submit">
        <input type="text" placeholder='rechercher'/>
        <button type='submit'>Chercher une ville</button>
      </form>
    </div>
  )
}

export default InputField