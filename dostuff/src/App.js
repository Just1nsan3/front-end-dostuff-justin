import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CategoryEventContainer from './CategoryEventContainer'
import EventContainer from './EventContainer';
import { withRouter, Route, Switch} from 'react-router-dom';
import Categories from './Categories';


const My404 = () => {
  return (
    <div>
      You dun goofed
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      userInfo: {},
      allEvents: [],
      activePage: '',
      userEvents: [],
      activeCategory: 'other'
    }
  }

  //purpose is to change color of next active method to green
  placeholderMethod = () => {
  }

  //make initial call to load data from server
  componentDidMount() {
    this.addInitialData().then(data => {
      this.setState({
        categories: data.categories,
        allEvents: data.events
      })
    })
  }

  //makes original fetch call to API to get updated data
  addInitialData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/events');

      const responseJSON = await response.json()
      const eventsJSON = await JSON.parse(responseJSON.data.events)
      const categoryJSON = await JSON.parse(responseJSON.data.categories)

      const filteredEvents = eventsJSON.map(event => {
        return event.fields
      })

      const filteredCategories = categoryJSON.map(category => {
        return category.fields.name
      })

      return {events: filteredEvents, categories: filteredCategories}
    } catch (err) {
      console.log(err, 'error with updateData in App.js')
    }
  }

  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/events" component={EventContainer} />
          <Route exact path="/" component={Categories} />

          <Route 
                exact 
                path='/categoryevent'
                render={() => <CategoryEventContainer allEvents={this.state.allEvents} categories={this.state.categories}activeCategory={this.state.activeCategory} />}
          />

          <Route component={My404}/>
        </Switch>
      </main>
    )
  }
}

// allEvents={this.state.allEvents} 
//                     categories={this.state.categories}
//                     activeCategory={this.state.activeCategory}


export default withRouter(App);
