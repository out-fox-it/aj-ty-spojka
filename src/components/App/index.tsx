import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import Register from '../../pages/Register'
import ThemeProvider from '../Theme'
import { GlobalStyles } from './styled'

const Routes: React.FC = () => (
	<Switch>
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
