import React, {Component} from 'react'
import './Event.css'
import EditEvent from '../EditEvent/EditEvent'

class Event extends Component{

    constructor(props) {
        super(props) 

        this.state = {
            editMode: true
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
        eventPicture} = this.props.event

        let {event} = this.props

        return(
            <div className="eventPost" style={{borderBottom: '2px solid black'}} >
                
                {(this.state.editMode) ? 
                    <EditEvent id={this.props.id} deleteEvent={this.props.deleteEvent} toggleEdit={this.toggleEdit} event={event} /> 

                    :
                
                
                    <div className="postContent">
                        <h4>{`Event Name: ${eventName}`}</h4>
                        <h4>{`Event Date: ${eventDate}`}</h4>
                        <h4>{`Event Notes: ${eventNotes}`}</h4>
                        <img width={300} src={eventPicture} />
                        <div id='buttonsDiv'>
                            <button onClick={() => this.props.deleteEvent(this.props.id)} class="button">Delete</button>
                            <button onClick={this.toggleEdit} class="button">Edit</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Event