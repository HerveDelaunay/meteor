import React from 'react'
import {Main} from '../App/App'

interface Props {
  data: Main | null | undefined
  city: string
}

const DataDisplay: React.FC<Props> = ({data, city}) => {
  const kelvinToCelsius = (x:number | undefined) => {
    if (x !== undefined) {
      const celsius = Math.round(x-273.15)
      return celsius
    }
 }
 
  return (
    <div className='h-screen bg-gradient-to-r from-blue-300 via-purple-300 to-pink-200'>
      {/* <div className='uppercase text-4xl'>{data?.weather[0].description}</div> */}
      <h1 className='font-roboto overline uppercase text-4xl text-gray-600 basis-full text-center mt-20'>{city}</h1>
      <div className="h-2/3 mt-10 flex place-content-evenly flex-row flex-wrap items-center">
        <div className='text-gray-600 font-roboto text-xl bg-blue-200 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>
          <h2>{kelvinToCelsius(data?.main.temp)}°C</h2>
          Temperature
        </div>
        <div className='text-gray-600 font-roboto text-xl bg-gradient-to-r from-blue-200 to-purple-200 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>Ressenti : {kelvinToCelsius(data?.main.feels_like)} °C</div>
        <div className='text-gray-600 font-roboto text-xl bg-purple-200 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>Temperature minimum : {kelvinToCelsius(data?.main.temp_min)} °C</div>
        <div className='text-gray-600 font-roboto text-xl bg-purple-200 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>Temperature maximum : {kelvinToCelsius(data?.main.temp_max)} °C</div>
        <div className='text-gray-600 font-roboto text-xl bg-gradient-to-r from-purple-200 to-pink-100 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>Pression : {data?.main.pressure} hPa</div>
        <div className='text-gray-600 font-roboto text-xl bg-pink-100 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>Humidité : {data?.main.humidity}%</div>
      </div>
    </div>
  )
}

export default DataDisplay

// bg-gradient-to-r from-blueG to-yellowG
