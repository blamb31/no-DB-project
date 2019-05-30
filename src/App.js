import React, {Component} from 'react';
import './App.css';
import Category from './Components/Category/Category'

import Axios from 'axios';
import Header from './Components/Header/Header'
import Input from './Components/Input/Input'


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

  render() {
    return (
      <div className="App">
        <Header />
        <Input addCategory={this.addCategory} addEvent={this.addEvent} />
        {this.state.categories.map( category => {
          return (
            <div>
              {console.log(category.id)}
              <Category deleteEvent={this.deleteEvent} key={category.id} id={category.id} deleteCategory={this.deleteCategory} events={this.state.events} category={category.category}/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
