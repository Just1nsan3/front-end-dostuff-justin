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

  // this will make a request to the backend server to update the user information 
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
    //gets the response from the server
    const responseJSON = await editUserResponse.json()

    this.props.updateUser(this.state.location, this.state.categories)


  }


  //updates user location based on user input
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  // function for adding and un-adding categories to profile to narrow interests
  onClick = (e) => {
    e.preventDefault();

    const category=e.currentTarget.id
    ;
    if(this.state.categories.indexOf(category) === -1) {
      this.setState({
        categories: [...this.state.categories, category]
      })
    } else {
        const stateCategories = this.state.categories;
        const index = this.state.categories.indexOf(category);
        stateCategories.splice(index, 1)

        this.setState({
          categories: stateCategories
        })
    }
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