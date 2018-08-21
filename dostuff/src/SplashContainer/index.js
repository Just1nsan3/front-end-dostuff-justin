import React, { Component } from 'react';
// import Login from './Login';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import PasswordMask from 'react-password-mask';


class SplashContainer extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      // skipLogin: null
    }
  }

  handleSubmit = async (e) => {
    try{
      e.preventDefault();
      const loginResponse = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })


      const loginResponseJSON = await loginResponse.json()

      console.log(loginResponseJSON)

      if(loginResponseJSON.status === 200) {
        this.props.login(loginResponseJSON.userid)
        // this.props.history.push('/categories')
      }

    } catch (err) {
      console.log(err, 'stop lying!')
    }
  }


  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    if(this.props.loggedIn === false){
      return(
        <div>
          <ul>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/'>Skip Login</Link></li>
          </ul>

          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Username:
                <input name='username' placeholder='Username' onChange={this.handleChange} />
              </label>
              <label>
                Password:
              </label>
              <input name='password' type='password' placeholder='Password' onChange={this.handleChange} />
            
              <input type='submit' value='Login' />
            </form>
          </div>

        </div> 
      )
    } else {
      return <Redirect to={'/categories'} />
    }
  }
}     


export default SplashContainer;

