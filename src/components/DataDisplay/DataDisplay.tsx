import React from 'react'

const DataDisplay: React.FC = (data) => {
  return (
    <div className='h-screen flex justify-center items-center flex-col bg-gradient-to-b from-sky-200 to-sky-400'>
      <h1>weather[0].description</h1>
      <h2>Temperature : main.temp</h2>
      <p>Ressenti : main.feels_like</p>
      <p>Temperature minimum : main.temp_min</p>
      <p>Temperature minimum : main.temp_max</p>
      <p>Pression : main.pressure</p>
      <p>Humidité : main.humidity</p>
      {console.log(data)}
    </div>
  )
}

export default DataDisplay

// bg-gradient-to-r from-blueG to-yellowG
