import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';


class Logout extends Component {
	componentDidMount = async ()  => {
		const logout = await fetch('http://localhost:8000/api/logout', {
			credentials: 'include'
		});

		const logoutJSON = await logout.json()
		console.log(logoutJSON)
		if(logoutJSON.status === 200) {
			this.props.history.push('/')
		}
	}
	render(){
		return <h3>Logout Successful</h3>
	}
}


export default Logout;