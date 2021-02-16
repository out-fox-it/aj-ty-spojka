import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import LoginForm from '../components/LoginForm'
import NavBar from '../components/NavBar'
import Home from './Home'
import Footer from '../components/Footer'

const Login: React.FC = () => {
	return (
		<>
			<NavBar login={false} />
			<Switch>
				<Route path="/login" component={LoginForm} />
				<Route path="/" component={Home} />
			</Switch>
			<Footer />
		</>
	)
}

export default Login
