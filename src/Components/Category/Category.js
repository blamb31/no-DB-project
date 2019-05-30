import React, {Component} from 'react'
import Axios from 'axios';
import Event from '../Event/Event'
import '../Category/Category.css'

class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: []
        }
    }

    componentDidMount() {
        Axios.get('/api/events').then( res => {
            this.setState({
                events: res.data
            })
        })
    }

    render() {
        let {events} = this.state
        let {category} = this.props
        let filteredEvents = events.filter( elem => {
            return (elem.eventCategory === category)      
        }).map( event => {
            return (
                <div>
                    <Event event={event} />
                </div>
            )
        })
       

        return(
            <div className="categoryContainer" style={{border: '2px solid black', margin: 10}}>
                <h1>{`Category: ${category}`}</h1>
                <div>
                    {filteredEvents}
                </div>
            </div>
        )

    }
}

export default Category