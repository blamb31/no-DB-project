import React, {Component} from 'react'
import Axios from 'axios';
import Event from '../Event/Event'
import xImage from './xImage.png'
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
                <header className="header">
                    <h1 id="catName">{`Category: ${category}`}</h1>
                    <img onClick={this.handleDeleteCategoryClick} id="xImage" src={xImage}data />
                </header>
                <div>
                    {filteredEvents}
                </div>


            </section>
        )

    }
}

export default Category