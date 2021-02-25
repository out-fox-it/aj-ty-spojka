import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ThemeProvider from '../Theme'
import { GlobalStyles } from './styled'

// Pages
import Authors from '../../pages/Authors'
import Contacts from '../../pages/Contacts'
import Login from '../../pages/Login'
import Matching from '../../pages/Matching'
import Profile from '../../pages/Profile'
import Register from '../../pages/Register'
import Home from '../../pages/Home'

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
		<GlobalStyles />
		<Routes />
	</ThemeProvider>
)

export default App
