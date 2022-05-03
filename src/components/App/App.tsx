import './styles.css'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import axios from 'axios'

const App: React.FC = () => {
	const [city, setCity] = useState<string>("");
	const [lat, setLat] = useState<number>();
	const [lon, setLon] = useState<number>();
	const apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='
	const apiKey= '8e808a4b2170a7bdd2be0675e5e1200e'
	const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		axios({
			method: 'get',
			url: `${apiUrl}${city}&limit=1&appid=${apiKey}`
		})
			.then(async(res) => {
				setLat(res.data[0].lat)
				setLon(res.data[0].lon)
			})
			.catch((err) => console.log(err))
	}

	return(
		<div className='min-h-screen flex flex-col bg-gradient-to-r from-blue-200 via-purple-200 to-pink-100'>
			<h1 className="flex justify-center mt-20 text-4xl text-gray-600 font-roboto overline">METEOR</h1>
			<InputField city={city} setCity={setCity} handleFormSubmit={handleFormSubmit}/>
		</div>
	)
	}

export default App
