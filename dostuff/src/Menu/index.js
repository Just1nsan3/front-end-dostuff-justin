import React, {Component} from 'react';

class Menu extends Component {
  constructor(){
    super();
    this.state = {
      home: null,
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
          <li><Link to='/settings'>Settings</Link></li>
          <li><Link to='/'>Logout</Link></li>
        </ul>


      </div>
    )
  }
}