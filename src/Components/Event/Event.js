import React from 'react'
import './Event.css'
import EditEvent from '../EditEvent/EditEvent'

function Event(props) {
    let {
    eventName,
    eventDate,
    eventNotes,
    eventPicture} = props.event

    let {event} = props

    // handleDeleteClick = () => {
    //     let {id, deleteEvent} = props.deleteEvent
    //     deleteEvent(id)
    // }

    return(
        <div className="eventPost" style={{borderBottom: '2px solid black'}} >
            
            {(props.editMode) ? 
                <EditEvent toggleEdit={props.toggleEdit} event={event} /> 

                :
            
            
                <div className="postContent">
                    <h4>{`Event Name: ${eventName}`}</h4>
                    <h4>{`Event Date: ${eventDate}`}</h4>
                    <h4>{`Event Notes: ${eventNotes}`}</h4>
                    <img width={300} src={eventPicture} />
                    <div id='buttonsDiv'>
                        <button onClick={() => props.deleteEvent(props.id)} class="button">Delete</button>
                        <button onClick={props.toggleEdit} class="button">Edit</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Event