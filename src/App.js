import React from "react";
import "./App.css";
import { connect } from 'react-redux'
import UserItem from "./components/UserItem"
import UserForm from "./components/UserForm"
import { getUsers } from './store/actions'


class App extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.getUsers()
	}

	render() {
		const {users} = this.props
		return (
			<div className="App">
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
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.users
})

const mapDispatchToProps = ({
	getUsers
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
