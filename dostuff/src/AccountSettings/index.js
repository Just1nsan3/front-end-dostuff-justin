import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

// Account settings page

class AccountSettings extends Component{
  constructor(props){
    super(props);
    this.state = {
      categories: [],
      location: this.props.userLocation
    }
  }

  handleSubmit = async (e) => {
  e.preventDefault();
  const loginResponse = await fetch('http://localhost:8000/api/edituser', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(this.state),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  // function for adding and un-adding categories to profile to narrow interests

  render() {
    if(this.props.loggedIn) {  
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Location:
              <input name='location' placeholder='Location' value={this.state.location} onChange={this.handleChange} />
            </label>

            {this.props.categories.map((category, i) => {
              return (
                <div id={category} onClick={this.onClick} className='settingsCategory'>
                  <span>{category}</span>
                </div>
              )

            })}
            <button onClick={this.handleSubmit}>Save Settings</button>
          </form>    
        </div>
      )
    } else {
      return <Redirect to='/register' />

    }
  }
}

export default AccountSettings;