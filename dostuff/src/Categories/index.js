import React, {Component} from 'react';


// HOME PAGE



// class Categories extends Component {}

class Categories extends Component {

  clickHandle = (e) => {
    e.preventDefault();
    console.log(e.target)
    console.log(typeof e.target)
    // this.props.changeActiveCategory(e.target.value)
  }


  render() {
    return (
      <div>
        {this.props.categories.map((category, i) => {
          return (
            <div onClick={this.clickHandle} value={category} name={category} data-cat={category} className='categoryList' key={i}>
              <span value={category}>{category}</span>
            </div>
          )
        })}
      </div>
    )
  } 
}

// <button onClick={props.addCategory}>Add Interest</button>
// <button onClick={props.deleteCategory}>Remove</button>

// Where define categories? fetch call?
// Need declare category?

export default Categories;