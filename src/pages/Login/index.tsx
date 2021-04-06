import React from 'react'

import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import Page from 'components/Page'

import LoginForm from 'features/LoginForm'

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
