import React from 'react'
import Footer from './components/Footer'
import HomePage from './views/HomePage'
import Navbar from './components/Navbar'

const App = () => {
    
    return (
        <div className="d-flex justify-content-between flex-column min-vh-100 min-vw-100 home_page">
            <Navbar />
            <HomePage />
            <Footer />
        </div>
    )
}

export default App
