import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import NavBar from '../components/NavBar'
import Home from './Home'

const Login: React.FC = () => {
	return (
		<>
			<NavBar login={false} />
			<Switch>
				<Route path="/login" component={LoginForm} />
				<Route path="/" component={Home} />
			</Switch>
		</>
	)
}

export default Login
