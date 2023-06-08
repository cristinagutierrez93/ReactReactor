import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";



function App() {

  return (
    <>
    <div id="container">

      <div id="navbar">
        <nav>
        <Link to="/blue">blue</Link>
        <Link to="/red">red</Link>
        <Link to="/home">home</Link>
        </nav>
        </div>

      <div id="main-section">
        <Routes>
          <Route path= "/blue" element={<Blue />} />
          <Route path= "/red" element={<Red  />} />
          <Route path= "/home" element={<Home  />}/>
          </Routes>
          </div>
    </div>
       
    </>
  )
}

export default App
