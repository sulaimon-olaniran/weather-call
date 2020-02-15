import React from 'react'
import page_logo from './page_logo.jpg'
import './Components.css'


function Navbar (){
    return(
    <nav> 
       <img src={page_logo}  alt="page logo" />
    </nav>
    )
}

export default Navbar