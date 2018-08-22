import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CategoryEventContainer from './CategoryEventContainer'
import { withRouter, Route, Switch, Redirect} from 'react-router-dom';
import Categories from './Categories';
import SplashContainer from './SplashContainer';
import Register from './Register'
import Logout from './Logout'
import AccountSettings from './AccountSettings'
import YourEventsContainer from './YourEventsContainer'

//Wrong page error message
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
      //all categories are stored here
      categories: [],
      //user specific categories saved here
      userCategories: [],
      //information about user to be stored here
      userLocation: '',
      //userid saver here
      userId: '',
      //all events saved here
      allEvents: [],
      //last active page stored here
      activePage: '',
      //events user has saved
      userEvents: [],
      //category that user last picked in home page
      activeCategory: 'other',
      //track status of user login
      loggedIn: false
    }
  }

  //purpose is to change color of next active method to green
  placeholderMethod = () => {
  }

  //called if login was successful
  login = (userId, userCategories) => {
    this.setState({
      loggedIn: true,
      userId: userId, 
      userCategories: userCategories
    })
    this.props.history.push('/categories')
  }

  //called if register was successful
  register = (location, userId) => {

    this.setState({
      loggedIn: true,
      userLocation: location,
      userId: userId
    })
    //
    //  CHANGE TO ACCOUNT SETTINGS PAGE
    //
    this.props.history.push('/settings')
  }

  //called if logout is successful
  logout = () => {
    this.setState({
      loggedIn: false,
      userId: ''
    })
    this.props.history.push('/')
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

  //called if updateUser call is successful
  updateUser = (location, categories) => {
    this.setState({
      userLocation: location,
      userCategories: categories
    })

    this.props.history.push('/categories')
  }

  //called when user adds/deletes from their saved categories list
  changeUserCategory = (category) => {

    if(this.state.userCategories.indexOf(category) === -1) {
      this.setState({
        userCategories: [...this.state.userCategories, category]
      })
    } else {
        const stateCategories = this.state.userCategories;
        const index = this.state.userCategories.indexOf(category);
        stateCategories.splice(index, 1)

        this.setState({
          userCategories: stateCategories
        })
    }
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

  //called when user changes the events category they want to view
  changeActiveCategory = (category) => {
    this.setState({
      activeCategory: category
    })
    this.props.history.push('/categoryevent')
  }

  render() {
    return (
      <main>
        <Header />
        <Switch>
          
          <Route exact path='/' render={() => <SplashContainer login={this.login} loggedIn={this.state.loggedIn}/> } />
          <Route exact path='/categoryevent' render={() => <CategoryEventContainer allEvents={this.state.allEvents} categories={this.state.categories} activeCategory={this.state.activeCategory} />}
          />
          <Route exact path='/categories' render={() => <Categories categories={this.state.categories} changeActiveCategory={this.changeActiveCategory} />}
          />
          <Route exact path='/register' render={() => <Register register={this.register} /> } />
          <Route exact path='/logout' render={() => <Logout logout={this.logout} loggedIn={this.state.loggedIn} history={this.props.history}/> } />
          <Route exact path='/settings' render={() => <AccountSettings userId={this.state.userId} loggedIn={this.state.loggedIn} userLocation={this.state.userLocation} userCategories={this.state.userCategories} categories={this.state.categories} changeUserCategory={this.changeUserCategory} updateUser={this.updateUser}/> } />
          <Route exact path='/yourevents' render={() => <YourEventsContainer categories={this.state.categories} changeActiveCategory={this.changeActiveCategory} />}
          />

          <Route component={My404}/>
        </Switch>
      </main>
    )
  }
}


export default withRouter(App);
