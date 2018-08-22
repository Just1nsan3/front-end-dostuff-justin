import {Link} from 'react-router-dom';
import React, {Component} from 'react';
// import SplashContainer from './SplashContainer';

class Menu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render(){
    return(
       <div>
        <button onClick={this.showMenu}>
          Menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
            <ul>
              <li className='menuToggle'><Link to='/'>Home</Link></li>
              <li className='menuToggle'><Link to='/yourEvents'>Your Events</Link></li>
              <li className='menuToggle'><Link to='/settings'>Account Settings</Link></li>
              <li className='menuToggle'><Link to='/categories'>Your Interests</Link></li>
              <li className='menuToggle'><Link to='/categoryevent'>Category Events</Link></li>
              <li className='menuToggle'><Link to='/logout'>Logout</Link></li>
            </ul>
          </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Menu;



