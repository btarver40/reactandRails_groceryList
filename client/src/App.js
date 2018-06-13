import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryForm from './components/GroceryForm';
import GroceryList from './components/GroceryList';

class App extends Component {
  state = {groceries: []}

  componentDidMount () {
    fetch('/api/groceries')
    .then(res => res.json() )
    .then(groceries => this.setState({groceries}) )
  }

  addGrocery = (name) => {
    const grocery = {name}
    fetch('api/groceries',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(grocery)
    }).then(res => res.json())
      .then(todo => {
        const {groceries} = this.state;
        this.setState({groceries: [...groceries, grocery] })
      })

      const id= Math.floor(Math.random() * 0x1000).toString()
      // const grocery = {id, name, category}
  }

  addCategory = (category) => {
    const grocery = {category}
    fetch('api/groceries',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(grocery)
    }).then(res => res.json())
      .then(todo => {
        const {groceries} = this.state;
        this.setState({groceries: [...groceries, grocery] })
      })
      const id= Math.floor(Math.random() * 0x1000).toString()
  }

  updateGrocery = (id) => {
    fetch(`/api/groceries/${id}`, {method: 'PUT'})
      .then(res => res.json() )
      .then(grocery => {
        const groceries = this.state.groceries.map( g => {
          if (g.id === id)
            return {...g, complete: !g.complete}
            return g
        })
        this.setState({groceries})
      })
  }

  deleteGrocery = (id) => {
    fetch(`/api/groceries/${id}`, { method: 'DELETE' })
      .then( () => {
        const { groceries } = this.state;
        this.setState({ groceries: groceries.filter( t => t.id !== id ) })
      })
  }

  // showGroceries = () => {
  //   // map over the groceries w/ loop then render it below
  // }

  render() {
    return (
    <div className="container">
      <nav>
        <div class="nav-wrapper  purple accent-4 ">
          <a href="#" class="brand-logo">Shopping List</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Categories</a></li>
            <li><a href="collapsible.html">Lists</a></li>
          </ul>
        </div>
      </nav>
        <br/>
      <GroceryForm addGrocery={this.addGrocery}/>
      <GroceryList
        groceries = {this.state.groceries}
        updateGrocery={this.updateGrocery}
        deleteGrocery={this.deleteGrocery}
        addCategory={this.addCategory}
      />
    </div>
    );
  }
}

export default App;

// res = resolve
