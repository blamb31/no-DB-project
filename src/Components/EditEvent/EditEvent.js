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

    handleEditEventClick = () => {
        let editedEvent = this.state
        this.props.editEvent(this.props.id, editedEvent)
        console.log(11111, editedEvent)
        this.props.toggleEdit()
       
    }

    render() {
        let {eventCategory, eventName, eventDate, eventNotes,filterEvents,eventPicture,category} = this.state
        let {toggleEdit, event, deleteEvent, id, editEvent} = this.props
        
        return(
            
            <div className="editContainer">

                <div className="editTitle">
                    
                    <h1 id="newEvent " className=" title ">Edit Event</h1>

                </div>

                
                <div className="inputContainer">

                    <div className="EditInputDiv">

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

                    <div className="EditInputDiv">

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

                <div className="editImageDiv">

                    <img id="image" src={event.eventPicture} />
                
                </div>

                <div className="buttonDiv">

                    <button className="editButtons" onClick={() => deleteEvent(id)} >Delete</button>
                    
                    <button className="editButtons" onClick={toggleEdit} >Cancel</button>

                    <button className="editButtons" onClick={this.handleEditEventClick}>Save</button>

                   
                
                </div>

            </div>
            
        )
    }


}

export default Input