import React, {Component} from 'react'

import './EditEvent.css'

class Input extends Component {
    constructor(props){
        super(props)

        let {event} = this.props

        this.state ={
            eventCategory: event.eventCategory,
            eventName: event.eventName,
            eventNotes:event.eventNotes,
            eventDate: event.eventDate,
            eventPicture: event.eventPicture,
        }
    }

    handleChange = event=> {
        let {value, name} = event.target

        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    
        
    

    handleAddEventClick = () => {
        let newEvent = this.state
        this.props.addEvent(newEvent)
        this.setState({
            eventCategory: '',
            eventName: '',
            eventNotes:'',
            eventDate: '',
            eventPicture: '',
        })
    }

    handleAddCategoryClick = () => {
        let newCategory = this.state
        this.props.addCategory(newCategory)
        this.setState({
            category: ''
        })
        console.log(22222222222, "hit")
    }

    render() {
        let {eventCategory, eventName, eventDate, eventNotes,filterEvents,eventPicture,category} = this.state
        
        
        return(
            
            <div className="editContainer">


                <h1 id="newEvent " className=" title ">Edit Event</h1>

                
                <div className="inputContainer">

                    <div className="InputDiv">

                        <input value={eventCategory}
                        name="eventCategory"
                        type='text' 
                        placeholder='Category'
                        className="inputBoxes"
                        onChange={this.handleChange}  />

                        <input value={eventName}
                        name="eventName"
                        type='text' 
                        placeholder='Event Name'
                        className="inputBoxes" 
                        onChange={this.handleChange} />

                        <input value={eventDate}
                        name="eventDate"
                        type='text' 
                        placeholder='Event Date (YYYY/MM/DD)'
                        className="inputBoxes" 
                        onChange={this.handleChange} />

                    </div>

                    <div className="InputDiv">

                        <input value={eventNotes}
                        name="eventNotes"
                        type='text' 
                        placeholder='Notes'
                        className="inputBoxes" 
                        onChange={this.handleChange} />

                        <input value={eventPicture}
                        name="eventPicture"
                        type='text' 
                        placeholder='Picture URL'
                        className="inputBoxes" 
                        onChange={this.handleChange} />

                        
                    </div>

                    {/* <div className="InputDiv">
                        
                        <input value={category}
                        name="category"
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
                        
                    </div> */}

                </div>

                <div className="buttonDiv">

                    <button class="button">Delete</button>
                        <button class="button">Edit</button>

                    {/* <button className="buttons" onClick={this.handleAddEventClick}>Add New Event</button>

                    <button className="buttons" onClick={this.handleAddCategoryClick}>Add New Category</button>

                    <button className="buttons">Search Events</button> */}
                
                </div>

            </div>
            
        )
    }


}

export default Input