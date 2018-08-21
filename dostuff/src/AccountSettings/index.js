import React, {Component} from 'react';

// Account settings page


class AccountSettings extends Component{
  constructor(){
    super();
    this.state = {
      categories: [],
      location: ''
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

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  // function for adding and un-adding categories to profile to narrow interests

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Location:
            <input name='location' placeholder='Location' onChange={this.handleChange} />
          </label>
          <button onClick={saveLocation}>Save Location</button>
        </form>      



      </div>
    )
  }



}

export default AccountSettings;