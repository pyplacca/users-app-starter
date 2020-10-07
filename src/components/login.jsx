import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			signupInstead: false
		}
		this.LoginUser = this.LoginUser.bind(this)
	}

	LoginUser (event) {
		event.preventDefault()
		this.props.login(event.target.elements, 'email')
	}

	render () {
		const {auth} = this.props;
		if (!auth.isLoaded) {
			return null
		}
		if (auth.isLoaded) {
			if (auth.uid) {
				return <Redirect to={{pathname: '/'}} />
			}
		}
		return !this.state.signupInstead ? (
			<form
				onSubmit={this.LoginUser}
			>
				<h2 style={{
					textAlign: "center",
					marginBottom: "50px",
					fontFamily: "Roboto",
					color: "var(--color)"
				}}>LOG IN</h2>

				<div className="field" key={1}>
					<label>Email</label>
					<input
						required
						type="email"
						name="email"
						placeholder="Enter your email"
						autoComplete="username"
					/>
				</div>
				<div className="field" key={2}>
					<label>Password</label>
					<input
						required
						type="password"
						name="password"
						placeholder="Enter password"
						autoComplete="new-password"
					/>
				</div>
				<input type="submit" value="Log In"/>
				<p
					style={{
						marginTop: "12px",
						textAlign: "center",
						display: "block",
						textDecoration: "none",
						cursor: "pointer",
						color: "var(--color-2)"
					}}
					onClick={() => {
						this.setState({signupInstead: true})
					}}
				>Don't have an account? Create one.</p>
			</form>
		) :
		<Redirect to={{pathname: '/signup'}} />
	}
}

const mapStateToProps = state => ({
	auth: state.firebaseReducer.auth
})

export default connect(mapStateToProps, {login})(Login)
