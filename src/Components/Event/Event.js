import React, {Component} from 'react'
import './Event.css'
import EditEvent from '../EditEvent/EditEvent'

class Event extends Component{

    constructor(props) {
        super(props) 

        this.state = {
            editMode: false,
            showEvents: true
        }
    }

    toggleEdit = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    toggleShowEvents = () => {
        this.setState({
            showEvents: !this.state.showEvents
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
                { (this.state.showEvents) ?
                    <div className="showingEvents">
                
                        {(this.state.editMode) ? 
                            <EditEvent editEvent={this.props.editEvent} id={this.props.id} deleteEvent={this.props.deleteEvent} toggleEdit={this.toggleEdit} event={event} /> 

                        :
                        
                        <div className="eventContainer">

                            <div className="postContent">

                                <div className="eventTextDiv" >

                                    <button onClick={this.toggleShowEvents} className="eventText">
                                        
                                        <h3>

                                            {eventName}  

                                        </h3>

                                    </button>

                                    <h4 className="eventText"> {eventDate}</h4>

                                    { (eventNotes) ?

                                        <p className="eventText"> <span className="eventTitle">Notes:</span> { eventNotes}</p>
                                    
                                    :

                                        <p></p>
                                    }

                                </div>

                                

                                <div className="eventPicDiv" >

                                    { (eventPicture) ?
                                        <img className="eventPic" src={eventPicture} />

                                    :

                                        <div></div>
                                    }
                                    

                                </div>


                            </div>

                            <div className='eventButtonsDiv'>

                                <button onClick={() => this.props.deleteEvent(this.props.id)} class="eventButton">Delete</button>
                                <button onClick={this.toggleEdit} class="eventButton">Edit</button>

                            </div>

                        </div>  
                        }
                    </div>  

                :
                <div className="notShowingEvents">

                    <div className="notShowingEventsTitle">

                        <button onClick={this.toggleShowEvents} className="eventText">
                            
                            <h3>
                                {eventName}  
                            </h3>  
                        </button>
                    
                    </div>

                </div>
                }
            </div>
        )
    }
}

export default Event