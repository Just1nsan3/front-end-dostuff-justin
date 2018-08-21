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

        const loginResponseJSON = await login
      } catch (err) {
        console.log(err, 'error in handleSubmit in SplashContainer')
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

