import React, {Component} from 'react'
import logo from './logo2.jpg'
import './Header.css'

function Header(props) {
    return(
        <header className="banner">
            <div >
                <img id="logo"  src={logo}/>
            </div>
            <div id="companyName">
                <h1 >Event Manager</h1>
            </div>

        </header>
    )
}

export default Header