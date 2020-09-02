import React from "react";
import "./App.css";
import { connect } from 'react-redux'
import UserItem from "./components/UserItem"
import UserForm from "./components/UserForm"


class App extends React.Component {

	render() {
		return (
			<div className="App">
				<div className="App__user-form_container">
					<UserForm/>
				</div>

				<div className="App__users-display">
					<h3>List of users</h3>
					<div className="App__users">
						{
							this.props.users.map(
								(user, i) => <UserItem {...user} key={i}/>
							)
						}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.users || []
})

export default connect(mapStateToProps)(App);
