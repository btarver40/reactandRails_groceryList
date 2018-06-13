import React from 'react';
import Grocery from './Grocery';

const GroceryList = ({groceries, updateGrocery, deleteGrocery }) => (
  <div className="row">
    {groceries.map( grocery =>
        <Grocery
          key={grocery.id}
          updateGrocery={updateGrocery}
          deleteGrocery={deleteGrocery}
          {...grocery}
        />
      )
    }
  </div>
)

export default GroceryList;