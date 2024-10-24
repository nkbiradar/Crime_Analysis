import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Violent from './Components/Programs/Violent'
import Title from './Components/Title/Title'
import Property from './Components/Property/Property'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Violent crimes' title = ' Analyzing Patterns and Trends in Murder , Rape & Kidnaping'/>
       <Violent/>
       <Property/>
      </div>
    </div>
  )
}

export default App
