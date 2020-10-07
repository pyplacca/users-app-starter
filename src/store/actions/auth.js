
export const signup = (credentials, with_) => {
	return (dispatch, getState, {getFirebase}) => {
		const {email, password} = credentials;
		const firebase = getFirebase();
		if (with_ === 'email') {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email.value, password.value)
				.then(res => {console.log(res)})
				.catch(err => {console.log(err)})
		} else if (with_ === 'google') {
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then(res => {
					// dispatch
				})
		}
	}
}

export const login = (credentials, with_) => {
	return (dispatch, getState, {getFirebase}) => {
		const {email, password} = credentials;
		const firebase = getFirebase();
		firebase
			.auth()
			.signInWithEmailAndPassword(email.value, password.value)
			.then(res => {console.log(res)})
			.catch(err => {console.log(err)})
	}
}


export const signout = () => {
	return (dispatch, getState, {getFirebase}) => {
		getFirebase()
			.auth()
			.signOut()
			.then(res => {console.log(res)})
			.catch(err => {console.log(err)})
	}
}
