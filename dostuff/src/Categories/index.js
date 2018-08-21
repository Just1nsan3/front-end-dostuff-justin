import React, {Component} from 'react';


// THIS IS HOME PAGE
// class Categories extends Component {}

const Categories = (props) => {
  console.log(props, " props in Home")

  const tempCat = ['other', 'food-and-drink', 'nightlife']

    const categoryList = tempCat.map((category, i) => {
      console.log(category, "this is a category")

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