import React, { Component } from 'react';
// import Login from './Login';
import {Route, Switch} from 'react-router-dom';
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

    // getCategories = async () => {
    //   try{
    //     const categories = await fetch('', {
    //       credentials: 'include',
    //       method: 'GET'
    //     });
    //     // const parsedCategories = categories.json(); 
    //   } catch (err) {
    //     console.log(err, 'error in getCategories in SplashContainer')
    //   }

    // <input name='password' placeholder='Password' onChange={this.handleChange} />

    // <PasswordMask
    //                   name="password"
    //                   placeholder="Enter password"
    //                   useVendorStyles={false}
    //                   value={this.state.password}
    //                   onChange={this.handleChange.bind(this)}
    //                 />

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

        const loginResponseJSON = await loginResponse
      } catch (err) {
        console.log(err, 'stop lying!')
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
      }
}     


export default SplashContainer;

