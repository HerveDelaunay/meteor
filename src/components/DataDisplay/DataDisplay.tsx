import React from 'react'
import {Main} from '../App/App'

interface Props {
  data: Main
  city: string
}

const DataDisplay: React.FC<Props> = ({data, city}) => {
  const kelvinToCelsius = (x: number | undefined) => {
    if (x !== undefined) return Math.round(x-273.15)
 }
  const hectopascalToBar = (x: number | undefined) => {
    if (x !== undefined) return Math.round(x/1000)
  }
 
  return (
    <div className='h-screen bg-gradient-to-r from-blue-300 via-purple-300 to-pink-200'>
      {/* <div className='uppercase text-4xl'>{data?.weather[0].description}</div> */}
      <h1 className='font-roboto overline uppercase text-4xl text-gray-600 basis-full text-center mt-20'>{city}</h1>
      <div className="h-2/3 mt-10 flex place-content-evenly flex-row flex-wrap items-center">
        <div className='flex flex-col items-center justify-center text-gray-600 font-roboto text-xl bg-blue-200 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>
          <div className='text-8xl mt-12 p-1 relative'>{kelvinToCelsius(data?.main.temp)}<span className='text-base absolute top-0 right-0'>°C</span></div>
          <div className='border-t border-black mt-12 p-1'>Temperature</div>
        </div>
        <div className='flex flex-col items-center justify-center text-gray-600 font-roboto text-xl bg-gradient-to-r from-blue-200 to-purple-200 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>
          <div className='text-8xl mt-12 p-1 relative'>{kelvinToCelsius(data?.main.feels_like)}<span className='text-base absolute top-0 right-0'>°C</span></div>
          <div className='border-t border-black mt-12 p-1'>Ressenti</div>
        </div>
        <div className='flex flex-col items-center justify-center text-gray-600 font-roboto text-xl bg-purple-200 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>
          <div className='text-8xl mt-12 p-2 relative'>{kelvinToCelsius(data?.main.temp_min)}<span className='text-base absolute top-0 right-0'>°C</span></div>
          <div className='border-t border-black mt-12 p-1'>Temperature min</div>
        </div>
        <div className='flex flex-col items-center justify-center text-gray-600 font-roboto text-xl bg-purple-200 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>
          <div className='text-8xl mt-12 p-1 relative'>{kelvinToCelsius(data?.main.temp_max)}<span className='text-base absolute top-0 right-0'>°C</span></div>
          <div className='border-t border-black mt-12 p-1'>Temperature max</div>
        </div>
        <div className='flex flex-col items-center justify-center text-gray-600 font-roboto text-xl bg-gradient-to-r from-purple-200 to-pink-100 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>
          <div className='text-8xl mt-12 p-2 relative'>{hectopascalToBar(data?.main.pressure)}<span className='text-base absolute top-0 right-0'>bar</span></div>
          <div className='border-t border-black mt-12 p-1'>Pression</div>
        </div>
        <div className='flex flex-col items-center justify-center text-gray-600 font-roboto text-xl bg-pink-100 p-3 drop-shadow-2xl rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-48 h-64'>
          <div className='text-8xl mt-12 p-2 relative'>{data?.main.humidity}<span className='text-base absolute top-0 right-0'>%</span></div>
          <div className='border-t border-black mt-12 p-1'>Humidité</div>
        </div>
      </div>
    </div>
  )
}

export default DataDisplay