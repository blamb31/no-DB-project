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
    })
  }

  addEventClick(newAnimal) {
    axios.post('/api/events', newAnimal).then( res =>{
        this.setState({
            events:res.data
        })
    })
}

  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        {this.state.categories.map( category => {
          return (
            <div>
              <Category events={this.state.events} category={category.category}/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
