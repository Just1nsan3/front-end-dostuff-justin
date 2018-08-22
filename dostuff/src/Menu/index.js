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
  
  //changes the state of the menu
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  //changes the state of the menu
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render(){
    return(
       <div className='menuButton'>
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
              <li className='menuToggle'><Link style={{ textDecoration: 'none'}} to='/'><span className='menuText'>Home</span></Link></li>
              <li className='menuToggle'><Link style={{ textDecoration: 'none'}} to='/yourEvents'><span className='menuText'>Your Events</span></Link></li>
              <li className='menuToggle'><Link style={{ textDecoration: 'none'}} to='/settings'><span className='menuText'>Account Settings</span></Link></li>
              <li className='menuToggle'><Link style={{ textDecoration: 'none'}} to='/categories'><span className='menuText'>Your Interests</span></Link></li>
              <li className='menuToggle'><Link style={{ textDecoration: 'none'}} to='/categoryevent'><span className='menuText'>Category Events</span></Link></li>
              <li className='menuToggle'><Link style={{ textDecoration: 'none'}} to='/logout'><span className='menuText'>Logout</span></Link></li>
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



