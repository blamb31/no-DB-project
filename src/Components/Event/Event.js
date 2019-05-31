import React, {Component} from 'react'
import './Event.css'
import EditEvent from '../EditEvent/EditEvent'

class Event extends Component{

    constructor(props) {
        super(props) 

        this.state = {
            editMode: false
        }
    }

    toggleEdit = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        let {
        eventName,
        eventDate,
        eventNotes,
        eventPicture } = this.props.event

        let {event} = this.props

        return(
            <div className="eventPost"  >
                
                {(this.state.editMode) ? 
                    <EditEvent editEvent={this.props.editEvent} id={this.props.id} deleteEvent={this.props.deleteEvent} toggleEdit={this.toggleEdit} event={event} /> 

                :
                
                <div className="eventContainer">
                    <div className="postContent">

                        <div className="eventTextDiv" >

                            <p className="eventText"> <span className="eventTitle">Event Name:</span> {eventName}</p>
                            <p className="eventText"> <span className="eventTitle">Event Date:</span> { eventDate}</p>
                            <p className="eventText"> <span className="eventTitle">Event Notes:</span> { eventNotes}</p>

                        </div>

                        

                        <div className="eventPicDiv" >
                            
                            <img className="eventPic" src={eventPicture} />

                        </div>


                    </div>

                    <div className='eventButtonsDiv'>

                        <button onClick={() => this.props.deleteEvent(this.props.id)} class="eventButton">Delete</button>
                        <button onClick={this.toggleEdit} class="eventButton">Edit</button>

                    </div>

                </div>    
                }
            </div>
        )
    }
}

export default Event