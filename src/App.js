import React, {Component} from 'react';
import './App.css';
import Category from './Components/Category/Category'

import Axios from 'axios';
import Header from './Components/Header/Header'
import Input from './Components/Input/Input'
import Footer from './Components/Footer/Footer'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories:[],
      events: []

    }
  }

  componentDidMount() {
    Axios.get('/api/categories').then( res => {
        this.setState({
            categories: res.data
        })
    }).catch(err => console.log(err))

    Axios.get('/api/events').then( res => {
      this.setState({
          events: res.data
      })
  }).catch(err => console.log(err))
  }

  searchEvents = searchKeyword => {
    Axios.get(`/api/events?events=${searchKeyword}`).then( res => {
      this.setState({
        events: res.data
      })
    })
  }

  searchCategories = searchKeyword => {
    Axios.get(`/api/categories?categories=${searchKeyword}`).then( res => {
      this.setState({
        categories: res.data
      })
    })
  }

  addEvent = (newEvent) => {
    Axios.post('/api/events', newEvent).then( res =>{
        this.setState({
            events:res.data
        })
    }).catch(err => console.log(err))
  }

  addCategory = (newCategory) => {
    Axios.post('/api/categories', newCategory).then( res =>{
        this.setState({
            categories:res.data
        })
    }).catch(err => console.log(err))
  }

  deleteCategory = id => {
    Axios.delete(`/api/categories/${id}`).then( res => {
      this.setState({
        categories: res.data
      })
    }).catch(err => console.log(err))
  }

  deleteEvent = id => {
    Axios.delete(`/api/events/${id}`).then( res => {
      this.setState({
        events: res.data
      })
    }).catch(err => console.log(err))
  }

  editEvent = (id, editedEvent) => {
    Axios.put(`/api/events/${id}`, editedEvent).then( res => {
      this.setState({
        events: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input filterCategories={this.searchCategories} filterEvents={this.searchEvents} addCategory={this.addCategory} addEvent={this.addEvent} />
        {this.state.categories.map( category => {
          return (
            <div>
              <Category 
              editEvent={this.editEvent}
              deleteEvent={this.deleteEvent} 
              key={category.id} 
              id={category.id} 
              deleteCategory={this.deleteCategory} 
              events={this.state.events} 
              category={category.category}/>

            </div>
          )
        })}
        <Footer />
      </div>
    );
  }
}

export default App;
