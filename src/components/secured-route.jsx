import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


class SecuredRoute extends React.Component {
	render () {
		const {component:Component, auth, ...other} = this.props
		if (auth.isLoaded) {
			if (auth.uid) {
				return <Route
					{...other}
					render={
						(props) => <Component {...props} />
					}
				/>
			}

		}
		return <Route
			{...other}
			render={
				(props) => <Redirect to={{pathname: '/signup'}} />
			}
		/>
	}
}


const mapStateToProps = state => ({
	auth: state.firebaseReducer.auth
})

export default connect(mapStateToProps, null)(SecuredRoute);
