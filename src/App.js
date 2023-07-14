import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar'
function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
               
               <Route path="/" element={<Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/menu" element={<Menu/>}/>
          </Routes>     
        </BrowserRouter>
        
    </>
  )
}

export default App
