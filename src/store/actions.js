function createAction(type, payload) {
	return {
		type,
		payload
	}
}

export const addNewUser = user 	 => {
	return (dispatch, state, {getFirestore}) => {
		getFirestore().collection('users').add(user)
		.then(() => {
			dispatch({type: 'ADD_USER', payload: user})
		})
	}
}

export const deleteUser = userId => createAction('DELETE_USER', userId)

export const updateUser = user => createAction('UPDATE_USER', user)

