import React, {Component} from 'react';
import Events from '../Events';

class CategoryEventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories,
      allEvents: this.props.allEvents,
      activeCategory: this.props.activeCategory,
      activeCategoryEvents: []
    }
  }

  componentDidMount() {
    // Loads the events that match the active category when page initially loads
    const activeCategoryEvents = this.state.allEvents.filter(event => event.category === this.state.activeCategory )

    this.setState({
      activeCategoryEvents: activeCategoryEvents
    })
  }

  //purpose is to change color of next active method to green
  placeholderMethod = () => {
  }

  onChange = (e) => {
    const activeCategoryEvents = this.state.allEvents.filter(event => event.category === e.target.value)
    const newCategory = e.target.value

    this.setState({
      activeCategory: newCategory,
      activeCategoryEvents: activeCategoryEvents
    })
  }

 

  render() {
    return (
      <div>
        <h3>Events Page</h3>
        <form>
          <select value={this.state.activeCategory} type='text' placeholder='Event Categories' name='category' onChange={this.onChange}>
            {this.state.categories.map((category, i) => {
              return <option key={i} value={category}>{category}</option>
            })}
          </select>
        </form>
        {this.state.activeCategoryEvents.map((event, i) => {
          return <Events eventInfo={event}/>
        })}

      </div>
            
    )
  }
}


export default CategoryEventContainer;