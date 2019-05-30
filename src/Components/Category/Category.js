import React, {Component} from 'react'
import Axios from 'axios';
import Event from '../Event/Event'
import '../Category/Category.css'

class Category extends Component {
    constructor(props) {
        super(props)

    }

    handleDeleteCategoryClick = () => {
        let {id, deleteCategory} = this.props
        deleteCategory(id)
        
    }

    handleDeleteEventClick = (id) => {
        let {deleteEvent} = this.props
        deleteEvent(id)
    }

    

    render() {
        let {events, category, editEvent} = this.props
        let filteredEvents = events.filter( elem => {
            return (elem.eventCategory === category)      
        }).map( event => {
            return (
                <div>
                    <Event 
                    editEvent={editEvent}
                    key={event.id} 
                    id={event.id} 
                    deleteEvent={this.handleDeleteEventClick} 
                    event={event} />
                </div>
            )
        })
       

        return(
            <section className="categoryContainer" style={{border: '2px solid black', margin: 10}}>
                <div className="header">
                    <h1>{`Category: ${category}`}</h1>
                    <img onClick={this.handleDeleteCategoryClick} id="xImage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAG1BMVEX///8AAACvr6+srKywsLDs7Oz4+Ph3d3d0dHST27y0AAADk0lEQVR4nO3d23LiMBBFURsDmf//4knCaAAjW7LVl9NdZz+mEkWrVHL7IUWmiTHGGGOMMcYYY4wxxhhjLFR37w1UEt3TbV4klxNpmW9yi93mGY64fO9JjPgDRCMuv3sSIj6AWMTl355EiAWIRFz+70mA+ATiEJeXPQ0TX4HzfJHY33DL254Gie9AjFNcVnsaIq6BCMQ1cIh4/1jMn/gJnOeBt5vacr5E8R1dwIg14ODjD4uoAMQiqgCRiErAOtFj9KsBUU5REYhBVAUiEJWB/kR1oDfRAOhLNAF6Eo2AfkQzoNfoNwT6nKIp0INoDLQnmgOtiQ5AW6IL0JLoBLQjugGtiI5Am9HvCrQ4RWegPtEdqE0EAOoSIYCaRBCgHhEGqEUEAuoQoYAaox8MKH+KcEBpIiBQlggJlCSCAuWIsEApIjBQhggNlCCCA8dHPzxw9BQDAMeIIYAjxCDA88QwwLPEQMBzxFDAM8RgwOPEcMCjoz8g8NgphgQeIQYF9hPDAnuJgYF9xNDAHmJwYJsYHtgiJgDuj/4UwL1TTALcJqYBbhETAevEP5mAdWIqYB8xNLCHGBzYJoYHtogJgPvEFMA9YhLgNjENcIuYCDhNXxXgl/emJKu9i3p/OoNodWAiYvpnafp5mP6dZusOprmLLWB4YhsYnNgDDE2sPWRqbzdhHze1E7y6fwCFYDXKdePrIU9xC5iGuA2cpmsGYv0OlhLcxX1gAmILGJ7YBgYn9gBDE/uAgYl7Y6L9nQGGRj8wKPEIMOTo772DpXB38SgwHPE4MBjxDDAU8RwwEPEsMAzx2Jho/yzc0BgBhiCOAQOM/vN3sAR+F8eB4EQJIDRRBghMlALCEuWAoMTRMdFeDfDDW84DAYnSQLjRL3kHS1B3UQMIRdQBAhG1gDBEPSAIURMIQZQfE+313T+gVRLoTtQHOo9+3TtYcryLNkBHohXQjWgHdCJaAl2ItkAHosWYaP9G43/Cogs0JnoATUe/9R0smd1FL6AZ0Q9oRPQEmhB9gQZEb6A60WdMtPeg+o9WrYGqRAyg4uj3v4MlpbuIA1QiIgFViFhABSIaUJx4hwPWiffzy93ggDXibWS5NdEf+EkcAq6JCMD16B8EvhMxgO+nOAx8JaIAX4kCwCcRB/gkigALEQlYiELABxEL+CCKAX+IUH+S/NtFEvj9diO5mFCIe2KMMcYYY4wxxhhjjDHGGNvpL7iAHctX6Ew0AAAAAElFTkSuQmCC" />
                </div>
                <div>
                    {filteredEvents}
                </div>
            </section>
        )

    }
}

export default Category