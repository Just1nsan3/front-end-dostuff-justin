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
      <div id='hamburger' class='menu'>
        <label for="toggle-1" class="toggle-menu">
          <ul>
            <li></li>
            <li></li> 
            <li></li>
          </ul>
        </label>
        <input type="checkbox" id="toggle-1" />
          <nav>
            <ul>
              <li className='menuToggle'><Link to='/'>Home</Link></li>
              <li className='menuToggle'><Link to='/yourEvents'>Your Events</Link></li>
              <li className='menuToggle'><Link to='/categories'>Your Interests</Link></li>
              <li className='menuToggle'><Link to='/categoryevent'>Category Events</Link></li>
              <li className='menuToggle'><Link to='/'>Logout</Link></li>
            </ul>
          </nav>
      </div>
    )
  }
}

export default Menu;



