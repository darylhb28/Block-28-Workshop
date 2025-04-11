import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'

function App() {

  return (
    <div id="container">
      <NavBar />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App
