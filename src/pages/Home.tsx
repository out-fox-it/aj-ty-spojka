import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ButtonNav from '../components/ButtonNav'
import Header from '../components/Header'
import Matching from './Matching'
import Profile from './Profile'

const Home: React.FC = () => (
	<>
		<Header />
		<Switch>
			<Route exact path="/" component={ButtonNav} />
			<Route path="/search-matching" component={Matching} />
			<Route path="/profile" component={Profile} />
		</Switch>
	</>
)

export default Home
