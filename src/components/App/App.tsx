import './styles.css'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import axios from 'axios'
import DataDisplay from '../DataDisplay/DataDisplay'


const App: React.FC = () => {
	const [city, setCity] = useState<string>("");
	const [lat, setLat] = useState<number>();
	const [lon, setLon] = useState<number>();
	const apiUrl = 'http://api.openweathermap.org'
	const apiKey= process.env.REACT_APP_API_KEY
	const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		getWeatherData()
		//scrollTo()
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
		<div className='h-max flex flex-col bg-gradient-to-r from-blue-300 via-purple-300 to-pink-200'>
			<h1 className="flex justify-center mt-20 text-4xl text-gray-600 font-roboto overline">METEOR</h1>
			<InputField city={city} setCity={setCity} handleFormSubmit={handleFormSubmit}/>
			<DataDisplay/>
		</div>
	)
	}

export default App
