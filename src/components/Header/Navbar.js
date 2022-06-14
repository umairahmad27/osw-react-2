import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className='nav-link active'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className='nav-link'>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className='nav-link'>Login</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Hooks
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/hook/usestate" className="dropdown-item">UseState</Link></li>
                                <li><Link to="/hook/useeffect" className="dropdown-item">UseEffect</Link></li>
                                <li><Link to="/hook/useref" className="dropdown-item">UseRef</Link></li>
                                <li><Link to="/hook/usememo" className="dropdown-item">UseMemo</Link></li>
                                <li><Link to="/hook/useContext" className="dropdown-item">UseContext</Link></li>
                                <li><Link to="/hook/useReducer" className="dropdown-item">UseReducer</Link></li>
                                {/* <li><hr className="dropdown-divider" /></li>
                                <li><button className="dropdown-item">Something else here</button></li> */}
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
