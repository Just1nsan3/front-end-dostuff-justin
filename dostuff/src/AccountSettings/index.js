import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

// Account settings page

class AccountSettings extends Component{
  constructor(props){
    super(props);
    this.state = {
      categories: this.props.userCategories,
      allCategories: this.props.categories,
      location: this.props.userLocation,
      userid: this.props.userId
    }
  }

  handleSubmit = async (e) => {
  e.preventDefault();
  const editUserResponse = await fetch('http://localhost:8000/api/edituser', {
    method: 'PUT',
    credentials: 'include',
    body: JSON.stringify(this.state),
    headers: {
      'Content-Type': 'application/json'
    }
  });

    const responseJSON = await editUserResponse.json()

    console.log(responseJSON)

    this.props.updateUser(this.state.location, this.state.categories)


  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  // function for adding and un-adding categories to profile to narrow interests
  onClick = (e) => {
    e.preventDefault();
    this.props.changeUserCategory(e.currentTarget.id)
  }

  render() {
    if(this.props.loggedIn) {  
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Location:
              <input name='location' placeholder='Location' value={this.state.location} onChange={this.handleChange} />
            </label>
            <div className='settingsCategoryContainer'>
              {this.props.categories.map((category, i) => {
                 return (this.state.categories.indexOf(category) >= 0 ? 
                  <div id={category} onClick={this.onClick} className='settingsCategory clicked'>
                    <span>{category}</span>
                  </div>
                : 
                  
                  <div id={category} onClick={this.onClick} className='settingsCategory'>
                    <span>{category}</span>
                  </div>
                )
              })}
            </div>
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