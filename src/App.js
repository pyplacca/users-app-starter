import React from "react";
import "./App.css";
import UserItem from "./components/UserItem"
import UserForm from "./components/UserForm"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		}

		this.createNewUser = this.createNewUser.bind(this)
	}

	createNewUser (user) {
		// add new user to users list
		this.setState({
			users: [...this.state.users, user]
		})
	}

	render() {
		return (
			<div className="App">
				<div className="App__user-form_container">
					<UserForm submitCallback={this.createNewUser}/>
				</div>

				<div className="App__users-display">
					<h3>List of users</h3>
					<div className="App__users">
						{
							this.state.users.map(
								(user, i) => <UserItem {...user} key={i}/>
							)
						}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
