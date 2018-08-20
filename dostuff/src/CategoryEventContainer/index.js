import React, {Component} from 'react';
import Events from '/Events';

class CategoryEventContainer extends Component {
  constructor(){
    super();
    this.state = {
      categories: [],
      events: []
    }
  }


  render(){
    return (
      <div>
        <h1>{categories}</h1>
        <ul>
          <li>{eventList}</li>
        </ul>

      </div>
    )
  }
}


export default CategoryEventContainer;