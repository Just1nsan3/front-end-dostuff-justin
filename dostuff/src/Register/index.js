import React, { Component } from 'react';

class Register extends Component {
	constructor(){
		super();
		this.state = {
			username: "",
			password: "",
			confirm: "",
			location: ""
		}
	}

	//sends register attempt to the backend server
	handleSubmit = async (e) => {
		const theBody=JSON.stringify(this.state)
		e.preventDefault();
		try {
			const registerResponse = await fetch('http://localhost:8000/api/register', {
				method: 'POST',
				credentials: 'include',
				body: theBody,
				header: {
					'Content-Type': 'application/json'
				}
			})
	
		const registerResponseJSON = await registerResponse.json();

		//checks status from server
		console.log(registerResponseJSON, 'registerResponseJSON HERE')
		if(registerResponseJSON.status === 200) {
			this.props.register(this.state.location, registerResponseJSON.userid)
		}
		
	} catch (err) {

		console.log(err, 'ERROR HERE')
		}
	}



	//allows the user to change the state
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	render(){
		return(
			<div class="register">

				<form className="register" onSubmit={this.handleSubmit}>
					<label>

						Username:

						<input type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
					</label>

					<label>

						Password:

						<input type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
					</label>

					<label>

						Confirm:

						<input type='password' name='confirm' onChange={this.handleChange} value={this.state.confirm}/>

					</label>

					<label>

						Location:

						<input type='text' name='location' onChange={this.handleChange} value={this.state.location}/>

					</label>
					
					<button>Submit</button>
				</form>
			</div>
		)
	}

}



export default Register;