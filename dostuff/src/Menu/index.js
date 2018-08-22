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
      <div id='hamburger' className='menu'>
        <label htmlFor="toggle-1" className="toggle-menu">
        </label>
        <input type="checkbox" id="toggle-1" />
          <nav>
            <ul>
              <li className='menuToggle'><Link to='/'>Home</Link></li>
              <li className='menuToggle'><Link to='/yourEvents'>Your Events</Link></li>
              <li className='menuToggle'><Link to='/settings'>Account Settings</Link></li>
              <li className='menuToggle'><Link to='/categories'>Your Interests</Link></li>
              <li className='menuToggle'><Link to='/categoryevent'>Category Events</Link></li>
              <li className='menuToggle'><Link to='/logout'>Logout</Link></li>
            </ul>
          </nav>
      </div>
    )
  }
}

export default Menu;



