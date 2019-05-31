import React, {Component} from 'react'
import logo from './logo2blue.JPG'
import './Header.css'

function Header(props) {
    return(
        <header className="banner">
            <div id='imageDiv'>
                <img id="logo"  src={logo}/>
            </div>
            <div id="companyName">
                <h1 >Event Tracker</h1>
            </div>

        </header>
    )
}

export default Header