import React, {Component} from 'react';
import Events from '../Events';

class CategoryEventContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: ['other', 'music', 'charities'],
      userEvents: [{category: 'music'}, {category: 'other'}, {category: 'other'}],
      activeCategory: 'charities',
      categoryEvents: []
    }
  }

  componentDidMount(){
    //Loads the events that match the active category when page initially loads
    const categoryEvents = this.state.userEvents.filter(event => event.category === this.state.activeCategory )

    this.setState({
      categoryEvents: categoryEvents
    })
  }

  //purpose is to change color of next active method to green
  placeholderMethod = () => {
  }

  onChange = async (e) => {
    const categoryEvents = this.state.userEvents.filter(event => event.category === e.target.value)
    const newCategory = e.target.value

    const response = await fetch('http://localhost:8000/api/events');

    const responseJSON = await response.json()
    const newJSON = await JSON.parse(responseJSON.data.events)
    console.log(newJSON)

    this.setState({
      activeCategory: newCategory,
      categoryEvents: categoryEvents
    })
  }

  render(){
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
        {this.state.categoryEvents.map((event, i) => {
          return <Events info={event}/>
        })}

      </div>
    )
  }
}


export default CategoryEventContainer;