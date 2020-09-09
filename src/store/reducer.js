const initialState = {
	users: [],
}

function usersReducer (state=initialState, action) {
	const { type, payload } = action

	switch (type) {
		case 'ADD_USER':
			return {
				...state,
				users: [
					...state.users,
					payload
				]
			}

		case 'DELETE_USER':
			return {
				...state,
				users: state.users.filter(
					user => user.id !== payload
				)
			}

		case 'UPDATE_USER':
			return {
				...state,
				users: state.users.reduce((output, user) => {
					output.push(user.id === payload.id ? payload : user)
					return output
				}, [])
			}

		default: return state
	}
}

export default usersReducer
