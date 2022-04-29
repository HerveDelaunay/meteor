import './styles.css'
import React from 'react'
import InputField from '../InputField/InputField'

const App: React.FC = () => {
return(
    <div className='min-h-screen flex flex-col bg-slate-200'>
        <h1 className="flex justify-center mt-8 text-4xl text-gray-600 font-roboto ">METEOR</h1>
        <InputField/>
    </div>
)
}

export default App
