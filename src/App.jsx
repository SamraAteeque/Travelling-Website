import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Destination from './components/Destination/Destination'
import Deals from './components/Deals/Deals'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What we offer'/>
      <Programs/>
      <About/>
      <Title subTitle='OUR DESTINATION' title='Destination Photos'/>
      <Destination/>
      <Title subTitle='DOMESTIC TOUR EXPERIENCE' title='Ultimate Travel Experience'/>
      <Deals/>
      <Title subTitle='CONTACT US' title='Get in Touch'/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
