import React, {Component} from 'react';


class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }


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

    const pasredResponse = await loginResponse.json();

    if(pasredResponse.data = 'login successful'){
      this.props.history.push('/events');
    }

    console.log(pasredResponse, ' this is response from our api');
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type='password' name='password' onChange={this.handleChange} />
        </label>
        <input type='submit' value='Login'/>
      </form>
    )
  }
}

export default Login;