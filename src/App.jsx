import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/Hero'
import Program from './components/program/Program'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our Program' title="What We Offer" />
        <Program />
        <About />
        <Title subTitle='Gallery' title="Campus Photo" />
        <Campus />
        <Title subTitle='TESTIMONIALS' title="What Student Says" />

      </div>

    </div>
  )
}

export default App
