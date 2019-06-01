import React, {Component} from 'react'
import Axios from 'axios';
import Event from '../Event/Event'
import xImage from './xImage.png'
import '../Category/Category.css'

class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showEvents: true
        }

    }

    handleDeleteCategoryClick = () => {
        let {id, deleteCategory} = this.props
        deleteCategory(id)
        
    }

    handleDeleteEventClick = (id) => {
        let {deleteEvent} = this.props
        deleteEvent(id)
    }

    toggleShowEvents = () => {
        this.setState({
          showEvents: !this.state.showEvents
        })
      }

    render() {
        let {events, category, editEvent} = this.props
        let filteredEvents = events.filter( elem => {
            return (elem.eventCategory === category)      
        }).sort( (a,b) =>{
            return new Date(b.eventDate) - new Date(a.eventDate)
        })
        .map( event => {
            return (
                <div>
                    <Event 
                    editEvent={editEvent}
                    key={event.id} 
                    id={event.id} 
                    deleteEvent={this.handleDeleteEventClick} 
                    event={event} />

                    <hr />

                </div>
            )
        })
       

        return(
            <section className="categoryContainer" >

                {(this.state.showEvents) ?

                    <div className="showCatContainer">

                        <header className="header">
                            <button onClick={this.toggleShowEvents} id="catName" className="toggleTitle title">{`${category}`}</button>
                            <img onClick={this.handleDeleteCategoryClick} id="xImage" src={xImage}data />
                        </header>
                        <div>
                            {filteredEvents}
                        </div>

                    </div>

                    :

                    <header  className="header">

                        <button onClick={this.toggleShowEvents} id="catName" className="toggleTitle title">{`${category}`}</button>

                    </header>

                }
            </section>
        )

    }
}

export default Category