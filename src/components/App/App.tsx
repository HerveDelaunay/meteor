import './styles.css'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import axios from 'axios'


const App: React.FC = () => {
	const [city, setCity] = useState<string>("");
	const [lat, setLat] = useState<number>();
	const [lon, setLon] = useState<number>();
	const apiUrl = 'http://api.openweathermap.org'
	const apiKey= process.env.REACT_APP_API_KEY
	const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		getWeatherData()
	}
	const getWeatherData = async () => {
		try {
			const getCoordinates = await axios({
				method: 'get',
				url: `${apiUrl}/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
			})
			const lat = getCoordinates.data[0].lat
			const lon = getCoordinates.data[0].lon
			setLat(lat)
			setLon(lon)
			const getWeather = await axios({
				method: 'get',
				url: `${apiUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
			})
			console.log(getWeather)
		}
		catch(error){
			console.log(error);
		}
	}
	
	return(
		<div className='min-h-screen flex flex-col bg-gradient-to-r from-blue-200 via-purple-200 to-pink-100'>
			<h1 className="flex justify-center mt-20 text-4xl text-gray-600 font-roboto overline">METEOR</h1>
			<InputField city={city} setCity={setCity} handleFormSubmit={handleFormSubmit}/>
		</div>
	)
	}

export default App
