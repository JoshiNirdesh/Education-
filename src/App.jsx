import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/Hero'
import Program from './components/program/Program'
import Title from './components/title/Title'
import About from './components/about/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our Program' title="What We Offer" />
        <Program />
      </div>
      <About />
    </div>
  )
}

export default App
