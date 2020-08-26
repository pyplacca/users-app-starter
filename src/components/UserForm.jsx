import React from 'react'

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
		this.props.submitCallback(this.state)
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

export default UserForm
