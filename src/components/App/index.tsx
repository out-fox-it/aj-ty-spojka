import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from '../../pages/Home'
import { DarkTheme } from '../../themes'
import { GlobalStyles } from './styled'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" component={Home} />
	</Switch>
)

const App: React.FC = () => (
	<ThemeProvider theme={DarkTheme}>
		<GlobalStyles />
		<Routes />
	</ThemeProvider>
)

export default App
