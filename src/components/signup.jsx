import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../store/actions'
import { Redirect } from 'react-router-dom';


class SignUp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loginInstead: false
		}
		this.signInUser = this.signInUser.bind(this)
	}

	signInUser (event) {
		event.preventDefault()
		const {signup} = this.props
		signup(event.target.elements, 'email')
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
		return !this.state.loginInstead ? (
			<form
				onSubmit={this.signInUser}
			>
				<h2 style={{
					textAlign: "center",
					marginBottom: "50px",
					fontFamily: "Roboto",
					color: "var(--color)"
				}}>CREATE AN ACCOUNT</h2>
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
				<input type="submit" value="Sign Up"/>
				<button
					style={{
						backgroundImage: "url(https://seeklogo.net/wp-content/uploads/2015/09/google-favicon-vector.png)",
						"--size": "25px",
						backgroundSize: "var(--size)",
						backgroundPosition: "17px center",
						backgroundRepeat: "no-repeat",
						padding: "17px 17px 17px calc(var(--size) + 17px) ",
						borderRadius: "6px",
						border: "none",
						textTransform: "uppercase",
						fontFamily: "Roboto, sans-serif",
						fontWeight: "600",
						width: "100%"
					}}
					value="Sign Up with Google"
					onClick={() => this.props.signup({}, 'google')}
				>
					Sign Up with Google
				</button>
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
						this.setState({loginInstead: true})
					}}
				>Already have an account? Login instead</p>
			</form>
		) :
		<Redirect to={{pathname: '/login'}} />
	}
}

const mapStateToProps = state => ({
	auth: state.firebaseReducer.auth
})

export default connect(mapStateToProps, {signup})(SignUp)
