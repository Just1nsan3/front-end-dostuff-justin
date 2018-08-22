
import React, { Component } from 'react';


class Categories extends Component {

  //this will save the value of the category that was clicked by the user
  clickHandle = (e) => {
    e.preventDefault();
    this.props.changeActiveCategory(e.currentTarget.id)
  }


  render() {
    return (
      <div id="categories">
        {this.props.categories.map((category, i) => {
          return (
            <div onClick={this.clickHandle} id={category} className='categoryList' key={i}>
              <span value={category}>{category}</span>
            </div>
          )
        })}
      </div>
    )
  } 
}

export default Categories;