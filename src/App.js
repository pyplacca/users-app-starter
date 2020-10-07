import React from "react";
import "./App.css";
import { connect } from 'react-redux'
import { UserItem, UserForm } from "./components"
import { getUsers, signout } from './store/actions'


class App extends React.Component {
	componentDidMount() {
		// retrieve and display all users from database
		this.props.getUsers()
	}

	render() {
		const {users} = this.props
		return ([
			<nav style={{
				display: "flex",
				flexDirection: "row-reverse",
			}} key={1}>
				<p
					style={{
						fontFamily: "Roboto",
						padding: "20px",
						cursor: "pointer"
					}}
					onClick={() => this.props.signout()}
				>Logout</p>
			</nav>,
			<div className="App" key={2}>
				<div className="App__user-form_container">
					<UserForm/>
				</div>

				<div className="App__users-display">
					<h3>List of users</h3>
					<div className="App__users">
						{
							users.length ?
							users.map(
								user => <UserItem {...user} key={user.id}/>
							)
							:
							<p style={{
								textAlign: "center",
								marginTop: "4rem"
							}}>No users to display</p>
						}
					</div>
				</div>
			</div>
		]);
	}
}

const mapStateToProps = (state) => ({
	users: state.usersReducer.users
})

export default connect(mapStateToProps, { getUsers, signout })(App);
