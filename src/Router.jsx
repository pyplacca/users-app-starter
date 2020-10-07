import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import { EditUserForm, SecuredRoute, SignUp, Login } from './components'


export default function Router () {
	return (
		<BrowserRouter>
			<SecuredRoute exact path="/" component={App} />
			<SecuredRoute path="/edit/:id" component={EditUserForm} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={SignUp} />
		</BrowserRouter>
	)
}
