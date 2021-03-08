import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ThemeProvider from '../Theme'
import { GlobalStyles } from './styled'

// Pages
import Authors from '../../pages/Authors'
import Contacts from '../../pages/Contacts'
import Matching from '../../pages/Matching'
import Profile from '../../pages/Profile'
import Register from '../../pages/Register'
import Home from '../../pages/Home'
import UserProvider from '../User'
import Login from '../../pages/Login'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/authors" component={Authors} />
		<Route path="/contacts" component={Contacts} />
		<Route path="/login" component={Login} />
		<Route path="/matching" component={Matching} />
		<Route path="/profile" component={Profile} />
		<Route path="/register" component={Register} />
		<Route path="/" component={Home} />
	</Switch>
)

const App: React.FC = () => (
	<ThemeProvider>
		<UserProvider>
			<GlobalStyles />
			<Routes />
		</UserProvider>
	</ThemeProvider>
)

export default App
