import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ThemeProvider from '../Theme'
import { GlobalStyles } from './styled'

// Pages
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Contacts from '../../pages/Contacts'
import Register from '../../pages/Register'
import Authors from '../../pages/Authors'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/authors" component={Authors} />
		<Route path="/login" component={Login} />
		<Route path="/register" component={Register} />
		<Route path="/contacts" component={Contacts} />
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
