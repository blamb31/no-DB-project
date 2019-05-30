import React, {Component} from 'react'
import axios from 'axios'

import './Input.css'

class Input extends Component {
    constructor(props){
        super(props)

        this.state = {
            eventCategory: '',
            eventName: '',
            eventDate: '',
            eventNotes: '',
            filterEvents: '',
            eventPicture:'',
            newCategory: ''

        }
    }

    handleChange = event=> {
        let {value, name} = event.target

        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    

    render() {
        return(
            <div className="container">

                <div className="title">

                    <h1 id="newEvent" className="inputBoxes">New Event</h1>

                    <h1 id="newCategory" className="inputBoxes">New Category</h1>

                </div>
                
                <div className="inputContainer">

                    <div className="InputDiv">

                        <input 
                        name="eventCategory"
                        type='text' 
                        placeholder='Category'
                        className="inputBoxes"
                        onChange={this.handleChange}  />

                        <input name="eventName"
                        type='text' 
                        placeholder='Event Name'
                        className="inputBoxes" 
                        onChange={this.handleChange} />

                        <input name="eventDate"
                        type='text' 
                        placeholder='Event Date'
                        className="inputBoxes" 
                        onChange={this.handleChange} />

                    </div>

                    <div className="InputDiv">

                        <input name="eventNotes"
                        type='text' 
                        placeholder='Notes'
                        className="inputBoxes" 
                        onChange={this.handleChange} />

                        <input name="eventPicture"
                        type='text' 
                        placeholder='Picture URL'
                        className="inputBoxes" 
                        onChange={this.handleChange} />

                        
                    </div>

                    <div className="InputDiv">
                        <input name="newCategory"
                        type='text' 
                        placeholder='New Category'
                        className="inputBoxes" 
                        onChange={this.handleChange} />

                        <h1 className="title" id="search">Search Events</h1>

                        <input name="filterEvents"
                        type='text' 
                        placeholder='Search'
                        className="inputBoxes" 
                        onChange={this.handleChange} />
                        
                    </div>

                </div>

                <div className="buttonDiv">

                    <button className="buttons">Add New Event</button>

                    <button className="buttons">Add New Category</button>

                    <button className="buttons">Search Events</button>
                
                </div>

            </div>
            
        )
    }


}

export default Input