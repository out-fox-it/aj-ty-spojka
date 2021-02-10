import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ThemeProvider from '../Theme'
import { GlobalStyles } from './styled'

// Pages
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/login" component={Login} />
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
