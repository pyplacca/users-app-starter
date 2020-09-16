import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Router from './Router';
import App from './App'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebase from './firebase/config';
import usersReducer from './store/reducer';


const store = createStore(
	usersReducer,
	// middleware(s)
	compose(
		// thunk adds extra functionality to our app and this setup syncs our store with firebase
		reduxFirestore(firebase),
		applyMiddleware(thunk.withExtraArgument({
			getFirestore,
			getFirebase
		})),
		reactReduxFirebase(firebase),
		// setup firestore and firebase to work with our actions
	)
	// enhancer(s)
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
