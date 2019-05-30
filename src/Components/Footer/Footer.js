import React, {Component} from 'react'

import './Footer.css'
import logo from '../Header/logo2.jpg'



function Footer(props) {
    return(
        <footer>

            <div className='logo' >
                <div >
                    <img id="logo"  src={logo}/>
                </div>
                <div id="companyName">
                    <h1 >Event Tracker</h1>
                </div>
            </div>

            <div className="text">
                <p>Created By Blake Lamb</p>
                <p>May 2019</p>
            </div>

        </footer>
    )
}

export default Footer