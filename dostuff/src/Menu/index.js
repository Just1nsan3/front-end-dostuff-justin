import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import SplashContainer from './SplashContainer';

class Menu extends Component {
  constructor(){
    super();
    this.state = {
      home: true,
      yourEvents: [],
      settings: null,
      logout: false
    }
  }

  render(){
    return(
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/yourEvents'>Your Events</Link></li>
          <li><Link to='/settings'>Account Settings</Link></li>
          <li><Link to='/categories'>Your Interests</Link></li>
          <li><Link to='/categoryevent'>Category Events</Link></li>
          <li><Link to='/logout'>Logout</Link></li>

        </ul>
      </div>
    )
  }
}

export default Menu;



