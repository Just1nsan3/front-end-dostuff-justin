import React, { Component } from 'react';
import Login from './Login';


// FETCH LINKS ARE MISSING!!!!!!!!!!!!!!!!!!!!



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
      // const parsedCategories = categories.json();

    handleSubmit = async (e) => {
    e.preventDefault();
    const loginResponse = await fetch('', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

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
                <label>
                  Username:
                  <input name='login' placeholder='Username' onChange={this.handleChange} />
                </label>
                <label>
                  Password:
                  <input name='password' placeholder='Password' onChange={this.handleChange} />
                </label>
              </form>
            </div>

          </div> 
        )
      }
    }
}



export default SplashContainer;

