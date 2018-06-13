import React from 'react';
import Grocery from './Grocery';

const GroceryList = ({groceries, addCategory, updateGrocery, deleteGrocery }) => (
  <div className="row">
    {groceries.map( grocery =>
        <Grocery
          key={grocery.id}
          addCategory={addCategory}
          updateGrocery={updateGrocery}
          deleteGrocery={deleteGrocery}
          {...grocery}
        />
      )
    }
  </div>
)

export default GroceryList;