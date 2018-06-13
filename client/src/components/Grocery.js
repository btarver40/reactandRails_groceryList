// because I am using this in my GroceryList.js
import React from 'react';

const styles ={
  complete: {
    textDecoration: 'line-through',
    color: 'violet',
  },
  pointer: {cursor: 'pointer'},
}

// we know what to pass in just look at the parent of this which is the GroceryList.js or
const Grocery =({
  id,
  name,
  category,
  complete,
  updateGrocery,
  deleteGrocery,
}) => (
  <div className="col s12">
    <div className="col s8">
      <div
        style={ complete ? styles.complete : {} }
        className="center"
      >
        {name}
      </div>
    </div>
    <div className="col s2">
      <input
        id={`grocery-${id}`}
        type="checkbox"
        defaultChecked ={complete}
        onClick={() => updateGrocery(id)}
      />
      <label htmlFor={`grocery-${id}`}>Complete?</label>
    </div>
    <div
      className="col s2"
      style={styles.pointer}
      onClick={() => deleteGrocery(id)}
    >
      X
    </div>
  </div>
)

export default Grocery;