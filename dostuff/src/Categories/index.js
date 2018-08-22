
import React, { Component } from 'react';


class Categories extends Component {

  clickHandle = (e) => {
    e.preventDefault();
    // console.log(e.currentTarg et.id)
    this.props.changeActiveCategory(e.currentTarget.id)
  }


  render() {
    return (
      <div>
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