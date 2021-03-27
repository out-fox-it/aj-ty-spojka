import React from 'react'
import NavBar from '../components/NavBar'
import Page from '../components/Page'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'

const Login: React.FC = () => (
	<>
		<NavBar />
		<Page>
			<LoginForm />
		</Page>
		<Footer />
	</>
)

export default Login
