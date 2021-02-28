import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import NavBar from '../components/NavBar'
import Page from '../components/Page'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'

const Login: React.FC = () => (
	<>
		<NavBar login={false} />
		<Page>
			<Switch>
				<Route path="/login" component={LoginForm} />
				<Route path="/" component={Home} />
			</Switch>
		</Page>
		<Footer />
	</>
)

export default Login
