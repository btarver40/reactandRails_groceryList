import React from 'react';

class GroceryForm extends React.Component {
  state = {groceryName: '', category: ''}

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {groceryName, category} = this.state;
    this.props.addGrocery(groceryName, category)
    this.setState({groceryName: '', category: ''})
  }


render(){
  const {groceryName, category} = this.state
  return (
    <form onSubmit={this.handleSubmit}>
    <input 
      name="groceryName"
      placeholder="Add an Item to the List"
      required
      value={groceryName}
      onChange={this.handleChange}
    />
    <input
      name="category"
      placeholder="Add a Category"
      required
      value={category}
      onChange={this.handleChange}
    />
    <button className="btn purple darken-2">Add to Cart!</button>
    </form>
  )
}

}

export default GroceryForm;