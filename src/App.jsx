import { useState } from 'react'
import Home from './component/Home/Home'
import "./App.css"
import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
import Section2 from './component/Section2/Section2'
import Section4 from './component/Section3/Section3'
import Footer from './component/Footer/Footer'
import Chart from './component/Chart/Chart'
import Section3 from './component/Section3/Section3'

function App() {

  return (
    <>
    <Header />
      <Hero /> 
       <Section2 />
      <Section3 />
      <Section4 />
<Chart />
      <Footer />   
    </>
  )
}

export default App
