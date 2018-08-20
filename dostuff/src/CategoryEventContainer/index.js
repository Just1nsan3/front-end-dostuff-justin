import React, {Component} from 'react';
import Events from './Events';

class CategoryEventContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: this.props.categories,
      userEvents: this.props.userEvents,
      activeCategory: this.props.category,
      categoryEvents: []
    }
  }

  componentDidMount(){
    //Loads the events that match the active category when page initially loads
    categoryEvents = this.state.userEvents.filter(event => event.category === this.state.activeCategory )

    this.setState({
      categoryEvents: categoryEvents
    })
  }

  //purpsoe is to change color of next active method to green
  placeholderMethod = () {
  }

  onChange = (e) => {
    const categoryEvents = this.state.userEvents.filter(event => event.category === e.target.value)

    this.setState({
      activeCategory: e.target.value,
      categoryEvents: categoryEvents
    })
  }

  render(){
    return (
      <div>
        <h3>Events Page</h3>
        <form >
          <select type='text' placeholder='Event Categories' name='category' onChange={this.onChange}>
            {this.state.categories.map((category, i) => {
              return (
                <option {this.state.activeCategory === category ? selected : null} value={category}>{category}</option>
              )
            })}
          </select>
        </form>
        {this.state.categoryEvents.map((event, i) => {
          return <
        })}

      </div>
    )
  }
}


export default CategoryEventContainer;