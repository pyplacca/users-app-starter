import firebase from 'firebase'

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyDv8Wr5cp6z_FYcCBYypL3gvioc-bO0bs8",
	authDomain: "ct-g14-m.firebaseapp.com",
	databaseURL: "https://ct-g14-m.firebaseio.com",
	projectId: "ct-g14-m",
	storageBucket: "ct-g14-m.appspot.com",
	messagingSenderId: "671773754814",
	appId: "1:671773754814:web:3e5b1e8a3a11c717bce5ef",
	measurementId: "G-1ZNKEF173K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
