import React from 'react'
import { NavLink } from 'react-router-dom'
import chl from "../assets/log.avif"

const Navbar = () => {
  return (
    <header className='container-fluid'><nav
        className="navbar navbar-expand-sm navbar-light bg-light"
    >
        <div className="container">
            <NavLink className="navbar-brand" to="/">
            <img src={chl} className='logo'/>
            <b className='text-danger poppins ms-3'>Pet Avenue</b></NavLink>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/" aria-current="page"
                            >Home
                            <span className="visually-hidden">(current)</span></NavLink
                        >
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="contact">Contact</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink className="nav-link" to="blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="gallery">Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="pet">Pet Grooming</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="login">Login</NavLink>
                    </li>
                </ul>
               
            </div>
        </div>
    </nav>
    </header>
  )
}

export default Navbar