import React, { Component } from 'react';
import Login from '/Login';


class SplashContainer extends Component {
  constructor(){
    super();
    this.state = {
      login: '',
      password: '',
      // skipLogin: null
    }

    getCategories = async () => {
      const categories = await fetch('', {
        credentials: 'include',
        method: 'GET'
      });
      const parsedCategories = categories.json();
      render(){
        return(
          <div>
            <ul>
              <li><Link to='/register'>Register</Link></li>
              <li><Link to='/'>Skip Login</Link></li>
              <li>parsedCategories</li>
            </ul>
            <div>
              <form onSubmit={this.handleSubmit}>
                <input name='login' placehold='Username'></input>
                <input>Password</input>
              </form>

            <Login/> 
          </div> 
        )
      }
    }
  }
}



export default SplashContainer;

