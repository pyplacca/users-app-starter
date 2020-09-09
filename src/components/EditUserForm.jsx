import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { updateUser } from '../store/actions'

class EditUserForm extends React.Component {
	constructor (props) {
		super(props)
		this.state = this.props.user

		this.handleChange = this.handleChange.bind(this)
		this.editUser = this.editUser.bind(this)
	}

	handleChange ({target}) {
		this.setState({
			[target.name]: target.value
		})
	}

	editUser (event) {
		event.preventDefault()
		// add new user to users list in redux store
		const {user, updateUser, history} = this.props
		updateUser({
			...this.state, id: user.id
		})
		history.push('/')
	}

	render () {
		return (
			<div className="App__user-form_container">
				<form
					onSubmit={this.editUser}
				>
					<input
						type="text"
						name="name"
						value={this.state.name}
						placeholder="Name"
						onChange={this.handleChange}
					/>
					<br/>
					<input
						type="email"
						name="email"
						value={this.state.email}
						placeholder="Email"
						onChange={this.handleChange}
					/>
					<br/>
					<input
						type="submit"
					/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	user: state.users.find(user => user.id === ownProps.match.params.id)
})

const mapDispatchToProps = {
	updateUser,
}


export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm)
