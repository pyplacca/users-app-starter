import { combineReducers } from 'redux';
import usersReducer from './user';
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
	usersReducer,
	firebaseReducer
})
