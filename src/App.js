import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './css/mystylesheet.css'
import './css/bootstrap.min.css'
import Home from './Components/Home'


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
