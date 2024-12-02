import React from 'react'
import './index.css'
import { Navbar } from './component/Navbar'
import { Footer } from './component/Footer'
import { Profile } from './component/Profile'

function App() {
  

  return (
    <>
      <Navbar />
      {/* content mulai dari sini */}
      <Profile  />
      <Footer />
    </>
  )
}

export default App
