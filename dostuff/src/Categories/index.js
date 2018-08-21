import React, {Component} from 'react';


// HOME PAGE



// class Categories extends Component {}

const Categories = (props) => {

  const tempCat = ['other', 'food-and-drink', 'nightlife']

    const categoryList = tempCat.map((category, i) => {

      // Click on categories to see events? <Link to='/'> CategoryLinkContainer 
      return (
        <li key={category._id}>
          <span>{category}</span>
        </li>
        )
    });


  return (
    <ul>
      {categoryList}
    </ul>
  )  
}

// <button onClick={props.addCategory}>Add Interest</button>
// <button onClick={props.deleteCategory}>Remove</button>

// Where define categories? fetch call?
// Need declare category?

export default Categories;