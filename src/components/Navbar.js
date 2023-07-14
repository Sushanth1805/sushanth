import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

       <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">Sahyadri Foods</Link>
                
                <div className="navbar-nav me-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/menu">Menu</Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                      </li>
                </div>
            </div>
        </nav> 
    </>
  )
}

export default Navbar
