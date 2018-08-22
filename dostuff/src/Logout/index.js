import React, {Component} from 'react';


class Logout extends Component {

	tryLogout = async ()  => {
		if(this.props.loggedIn) {
			console.log('got here')
			const logout = await fetch('http://localhost:8000/api/logout', {
				credentials: 'include'
			});

			const logoutJSON = await logout.json()
			console.log(logoutJSON)
			if(logoutJSON.status === 200) {
				this.props.logout()
			}
		} else {
			console.log('Cannot logout')
			this.props.history.push('/')
		}
	}
	render(){
		this.tryLogout()
		return <h3>Logout Successful</h3>
	}
}


export default Logout;