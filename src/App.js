import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      title:"My Awesome Ass Blog",
      loading:true,
    }
  }

  componentWillMount(){
    const items = []
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then((results) => {
      results.data.forEach((post) => {
        items.push(post)
      })
      this.setState({items, loading:false})
    }).catch((err) => {
      console.error(err)
    })
  }

  deleteItem = () => {
    const items = this.state.items
    items.pop()
    this.setState({items})
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        {this.state.loading && this.state.items &&
          <p>Loading</p>
        }
        <List items={this.state.items} />
        <button onClick={this.deleteItem}>Delete</button>
      </div>
    );
  }
}

export default App;
