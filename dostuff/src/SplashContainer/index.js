import React, { Component } from 'react';
import Login from './Login';



class SplashContainer extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      // skipLogin: null
    }

    getCategories = async () => {
      const categories = await fetch('http://localhost:8000/api/events', {
        credentials: 'include',
        method: 'GET'
      });
      // const parsedCategories = categories.json();

    handleSubmit = async (e) => {
      e.preventDefault();
      const loginResponse = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const loginResponseJSON = loginResponse.json();

      if(loginResponseJSON.status === 200){
        // redirect to home page
        this.props.history.push('/events');
      } else {
        // login false - send error message to user
      }

    }

    

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
                  <input name='username' placeholder='Username' onChange={this.handleChange} />
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

