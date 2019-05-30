import React from 'react'
import './Event.css'

function Event(props) {
    let {
    eventName,
    eventDate,
    eventNotes,
    eventPicture} = props.event
    return(
        <div className="eventPost" style={{borderBottom: '2px solid black'}} >
            <div className="postContent">
                <h4>{`Event Name: ${eventName}`}</h4>
                <h4>{`Event Date: ${eventDate}`}</h4>
                <h4>{`Event Notes: ${eventNotes}`}</h4>
                <img width={300} src={eventPicture} />
            </div>
        </div>
    )
}

export default Event