import React, {Component} from 'react'

import './Input.css'

class Input extends Component {
    constructor(props){
        super(props)

        this.state = {
            eventCategory: '',
            eventName: '',
            eventDate: '',
            eventNotes: '',
            filterEvents: '',
            eventPicture:'',
            /* New*/category: '',
            filterCategories: '',
            newEventDisplay: false,
            newCategoryDisplay: false,
            searchDisplay: false,

        }
    }

    handleChange = event=> {
        let {value, name} = event.target

        this.setState({
            [name]: value
        })
    }

    handleAddEventClick = () => {
        let newEvent = this.state
        this.props.addEvent(newEvent)
        this.setState({
            eventCategory: '',
            eventName: '',
            eventNotes:'',
            eventDate: '',
            eventPicture: '',
        })
    }

    handleAddCategoryClick = () => {
        let newCategory = this.state
        this.props.addCategory(newCategory)
        this.setState({
            category: ''
        })
    }

    handleSearchEventsClick = () => {
        this.props.filterEvents(this.state.filterEvents)
        this.setState({
            filterEvents: ''
        })
    }

    handleSearchCategoriesClick = () => {
        this.props.filterCategories(this.state.filterCategories)
        this.setState({
            filterCategories: ''
        })
    }

    handleSearch = () => {
        this.props.filterCategories(this.state.filterCategories)
        this.props.filterEvents(this.state.filterEvents)
        this.setState({
            filterEvents: '',
            filterCategories: ''
        })
    }

    handleCancelSearch = () => {
        this.props.filterCategories('')
        this.props.filterEvents('')
        this.setState({
            filterEvents: '',
            filterCategories: ''
        })
    }

    toggleEditFields = event=> {
        let {name} = event.target

        this.setState({
            [name]: !this.state[name]
        })
    }

    render() {
        let {eventCategory, eventName, eventDate, eventNotes,filterEvents,eventPicture,category, filterCategories} = this.state
        return(

            <div className="container">                

                <div className="newCatContainer">

                    {(this.state.newCategoryDisplay) ?
                    

                        <div className="newCatDiv">

                            <button name="newCategoryDisplay" onClick={this.toggleEditFields}className=" title toggleTitle">New Category</button>

                            <input value={category}
                            name="category"
                            type='text' 
                            placeholder='New Category'
                            className="inputBoxes" 
                            onChange={this.handleChange} />
                            

                            {(category) ?

                                <button className="buttons" onClick={this.handleAddCategoryClick}>Add New Category</button>
                           
                            : 
                                
                                <button className="buttons" >Add New Category</button>
                                
                            }

                            <div className="hrDiv">

                                <hr />
                            </div>

                        </div>
                        
                        
                    
                    
                    :
                    
                    <div className="newCatContainer">

                        <div  className="newCatDiv">

                            <button name="newCategoryDisplay" onClick={this.toggleEditFields} className="toggleTitle title">New Category</button>
                        </div>
                    
                    </div>
                    }

                </div>

                {(this.state.newEventDisplay) ?

                
                    <div className="inputContainer">

                        <div className="title">

                            <button onClick={this.toggleEditFields} name='newEventDisplay' className=" toggleTitle title">New Event</button>

                        </div>

                        <div className="inputDivContainer">

                            <div className="InputDiv">

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

                            <div className="InputDiv">

                                <input value={eventPicture}
                                name="eventPicture"
                                type='text' 
                                placeholder='Picture URL'
                                className="inputBoxes" 
                                onChange={this.handleChange} />

                                <input value={eventNotes}
                                name="eventNotes"
                                type='text' 
                                placeholder='Notes'
                                className="inputBoxes" 
                                onChange={this.handleChange} />

                                

                                
                            </div>

                            <div class="buttonDiv">

                                {(eventCategory && eventName) ?
                                    <button className="buttons" onClick={this.handleAddEventClick}>Add New Event</button>

                                :

                                    <button className="buttons" >Add New Event</button>
                                    
                                }
                                

                            </div>

                        </div>

                        <hr />
                    </div>

                    : 

                    <div className="inputContainer">

                        <div className="title">

                            <button name='newEventDisplay' onClick={this.toggleEditFields} className="toggleTitle title">New Event</button>

                        </div>

                    </div>
                }
                

                { (this.state.searchDisplay) ?

                <div className="searchContainer">

                        <div>
                            <button name="searchDisplay" onClick={this.toggleEditFields} className="title toggleTitle" id="search">Search</button>
                        </div>

                    <div className="searchBoxes">
                        <input 
                        value={filterCategories}
                        name="filterCategories"
                        type='text' 
                        placeholder='Search Categories'
                        className="inputBoxes" 
                        onChange={this.handleChange} />
                        
                        <input 
                        value={filterEvents}
                        name="filterEvents"
                        type='text' 
                        placeholder='Search Event Names'
                        className="inputBoxes" 
                        onChange={this.handleChange} />

                    </div>

                    <div className="buttonDiv">



                        <button  className="buttons searchButtons" onClick={this.handleSearch}>Search</button>

                        <button  className="buttons searchButtons" onClick={this.handleCancelSearch}>Cancel</button>


                    
                    </div>

                </div>

                :

                <div className="searchContainer">

                    <button 
                    name="searchDisplay" 
                    onClick={this.toggleEditFields} 
                    className="title toggleTitle" 
                    id="search">Search</button>


                </div>
                

                }



            </div>
            
        )
    }


}

export default Input