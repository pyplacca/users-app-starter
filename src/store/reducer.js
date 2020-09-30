const initialState = {
	users: [],
}

function usersReducer (state=initialState, action) {
	const { type, payload } = action

	switch (type) {

		case 'GET_USERS':
			return {
				users: payload
			}

		default: return state
	}
}

export default usersReducer
