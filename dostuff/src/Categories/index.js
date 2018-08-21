import React from 'react';

const Categories = (props) => {
  console.log(props, " props in Home")


    const categoryList = props.categories.map((category, i) => {
      console.log(categories, "this is a category")

      // Click on categories to see events?
      return (
        <li key={category._id}>
          <span>{category.type}</span>
          <button onClick={props.addCategory}>Add Interest</button>
          <button onClick={props.deleteCategory}>Remove</button>
        </li>
        )
    });


  return (
    <ul>
      {categoryList}
    </ul>
  )  
}

// Where define categories? fetch call?
// Need declare category?

export default Categories;