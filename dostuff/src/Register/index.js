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


	handleSubmit = async (e) => {
		const theBody=JSON.stringify(this.state)
		console.log(theBody, "here is the body in handleSubmit in Register")
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

		console.log(registerResponseJSON, 'registerResponseJSON HERE')
		if(registerResponseJSON.status === 200) {
			this.props.register(this.state.location, registerResponseJSON.userid)
		}
	} catch (err) {		

		console.log(err, 'ERROR HERE')
		}
	}




	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	render(){
		return(
			<div>

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
					
					<input type='submit' />
				</form>
			</div>
		)
	}

}



export default Register;