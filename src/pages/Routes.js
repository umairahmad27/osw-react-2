import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'

// Pages
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import NoPage from './NoPage'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseRef from './Hooks/UseRef'
import UseMemo from './Hooks/UseMemo'
import UseContext from './Hooks/UseContext'
import UseReducer from './Hooks/UseReducer'

export default function index() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />

                    <Route path='/hook/usestate' element={<UseState />} />
                    <Route path='/hook/useeffect' element={<UseEffect />} />
                    <Route path='/hook/useref' element={<UseRef />} />
                    <Route path='/hook/usememo' element={<UseMemo />} />
                    <Route path='/hook/useContext' element={<UseContext />} />
                    <Route path='/hook/useReducer' element={<UseReducer />} />

                    <Route path='*' element={<NoPage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}
