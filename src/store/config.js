import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebase from '../firebase/config';


const store = createStore(
	reducers,
	// middleware(s)
	compose(
		// setup firestore and firebase to work with our actions
		reduxFirestore(firebase),
		reactReduxFirebase(firebase),
		// thunk adds extra functionality to our app and this setup syncs our store with firebase
		applyMiddleware(thunk.withExtraArgument({
			getFirestore,
			getFirebase
		})),
	)
	// enhancer(s)
);

export default store
