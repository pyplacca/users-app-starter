function performDatabaseAction(type, payload) {
	return (dispatch, getState, {getFirestore}) => {
		// get or set user's document reference from firestore database.
		const docRef = getFirestore().collection('users').doc(payload.id);
		// perform specified action on database
		(type === 'DELETE_USER' ? docRef.delete() : docRef.set(payload))
		.then(
			// give some sort feedback
		)
		.catch(err => console.log);
	}
}

export const addNewUser = user 	 => performDatabaseAction('ADD_USER', user)

export const deleteUser = userId => performDatabaseAction('DELETE_USER', {id: userId})

export const getUsers = () => {
	return (dispatch, getState, {getFirestore}) => {
		getFirestore()
			.collection('users')
			.orderBy('name')
			.onSnapshot(snapshot => {
				let users = []
				snapshot.forEach(doc => users.push(doc.data()))
				dispatch({
					type: 'GET_USERS',
					payload: users
				})
			})
	}
}

export const updateUser = user => performDatabaseAction('UPDATE_USER', user)
