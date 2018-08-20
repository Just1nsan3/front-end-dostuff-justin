import React, { Component } from 'react';

class Register extends Component {
	constructor(){
		super()
		this.state = {
			username: "",
			password: "",
			confirm: ""
		}
	}


		handleSubmit = async (e) => {
		e.preventDefault();

		const registerResponse = await fetch('https://stark-citadel-84155.herokuapp.com', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state),
			header: {
				'Content-Type': 'application/json'
			}
		});

			const parsedResponse = await loginResponse.json();

			if(parsedResponse.data === 'login successful') {
				this.props.hideLoginRegister();

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

						<input type='text' name='username' onChange={this.handleChange} />
					</label>

					<label>

						Password:

						<input type='password' name='password' onChange={this.handleChange} />
					</label>

					<label>

						Confirm:

						<input type='password' name='password' onChange={this.handleChange} />

					</label>

					
					<input type='submit' value='register' />
				</form>
			</div>
				)
		}
}



export default Register;