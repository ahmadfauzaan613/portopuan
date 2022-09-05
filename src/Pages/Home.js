import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import First from '../Components/First'
import About from '../Components/About'
import Porto from '../Components/Porto'
import Contacs from '../Components/Contacs'

function Home() {
  return (
    <>
      <Navbar />
      <First />
      <About />
      <Porto />
      <Contacs />
      <Footer />
    </>
  )
}

export default Home
