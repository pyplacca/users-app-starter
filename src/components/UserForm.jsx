import React from 'react'
import { connect } from 'react-redux'
import { addNewUser } from '../store/actions'

class UserForm extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			name: '',
			email: '',
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange ({target}) {
		this.setState({
			[target.name]: target.value
		})
	}

	handleSubmit (event) {
		event.preventDefault()
		// add new user to users list in redux store
		this.props.addNewUser(this.state)
		// reset form
		this.setState({
			name: '',
			email: '',
		})
	}

	render () {
		return (
			<form
				onSubmit={this.handleSubmit}
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
		)
	}
}


const mapDispatchToProps = {
	addNewUser
}


export default connect(null, mapDispatchToProps)(UserForm)
