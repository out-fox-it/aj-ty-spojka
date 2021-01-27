import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ButtonNav } from '../components/ButtonNav'
import Header from '../components/Header'
import Matching from './Matching'
import Profile from './Profile'

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<ButtonNav />
				</Route>
				<Route path="/search-matching">
					<Matching />
				</Route>
				<Route path='/my-profile'>
					<Profile />
				</Route>
			</Switch>
		</>
	)
}

export default Home
