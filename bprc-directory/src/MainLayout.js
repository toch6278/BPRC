import React from 'react'
import Navbar from './components/navbar'

// have the same layout on every page
function MainLayout({children}) {
    
    return (
        <div className = "homePage">
            <Navbar></Navbar>
            <div> {children} </div>
        </div>
        
    )
}

export default MainLayout;