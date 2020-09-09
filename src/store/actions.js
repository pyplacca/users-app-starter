function createAction(type, payload) {
	return {
		type,
		payload
	}
}

export const addNewUser = user 	 => createAction('ADD_USER', user)

export const deleteUser = userId => createAction('DELETE_USER', userId)

export const updateUser = user => createAction('UPDATE_USER', user)
