import './styles.css'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'

const App: React.FC = () => {
	const [city, setCity] = useState<string>("");
	const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	return(
		<div className='min-h-screen flex flex-col bg-slate-200'>
			<h1 className="flex justify-center mt-10 text-4xl text-gray-600 font-roboto ">METEOR</h1>
			<InputField city={city} setCity={setCity} handleFormSubmit={handleFormSubmit}/>
		</div>
	)
	}

export default App
