import React from 'react'
import {Main} from '../App/App'

interface Props {
  data: Main | null | undefined
}

const DataDisplay: React.FC<Props> = ({data}) => {
//  const kelvintoCelsius = (x:number) => {}
  return (
    <div className='h-screen flex justify-center items-center flex-col bg-gradient-to-b from-sky-200 to-sky-400'>
      <h1 className='uppercase'>{data?.weather[0].description}</h1>
      <h2>Temperature : {data?.main.temp}</h2>
      <p>Ressenti : {data?.main.feels_like}</p>
      <p>Temperature minimum : {data?.main.temp_min}</p>
      <p>Temperature minimum : {data?.main.temp_max}</p>
      <p>Pression : {data?.main.pressure}</p>
      <p>Humidité : {data?.main.humidity}</p>
    </div>
  )
}

export default DataDisplay

// bg-gradient-to-r from-blueG to-yellowG
