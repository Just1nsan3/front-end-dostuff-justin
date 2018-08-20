import React, {Component} from 'react';

const Categories = (props) => {


    const categoryList = props.categorys.map((category, i) => {
    return (
      <li key={category._id}>
        <span>{category.type}</span>
        <small>{category.description}</small>
      </li>
      )
        // TURN THESE INTO ADD/UNADD BUTTONS
        // <button onClick={props.deleteCategory.bind(null, category._id)}>Delete</button>
        // <button onClick={props.showModal.bind(null, category._id, i)}>Edit</button>
  });


  render(){
    return (
    <ul>
      {categoryList}
    </ul>
    )
  }
}


export default Categories;