import React, { Component } from 'react';
import GroceryForm from './components/GroceryForm';
import GroceryList from './components/GroceryList';

class App extends Component {
  state = {groceries: []}

  componentDidMount () {
    fetch('/api/groceries')
    .then(res => res.json() )
    .then(groceries => this.setState({groceries}) )
  }

  addGrocery = (name, category) => {
    const grocery = {name, category}
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
      <GroceryForm addGrocery={this.addGrocery}/>
      <GroceryList
        groceries = {this.state.groceries}
        updateGrocery={this.updateGrocery}
        deleteGrocery={this.deleteGrocery}
      />
      </div>
    );
  }
}

export default App;

// res = resolve
