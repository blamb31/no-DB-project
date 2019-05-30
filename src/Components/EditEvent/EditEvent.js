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
        let {toggleEdit, event, deleteEvent, id} = this.props
        
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

                </div>

                <div id="imageDiv">
                    <img style={{width: 300}} src={event.eventPicture} />
                </div>

                <div className="buttonDiv">

                    <button onClick={() => deleteEvent(id)} class="button">Delete</button>
                    
                    <button onClick={toggleEdit} class="button">Cancel</button>

                    <button>Save</button>

                   
                
                </div>

            </div>
            
        )
    }


}

export default Input