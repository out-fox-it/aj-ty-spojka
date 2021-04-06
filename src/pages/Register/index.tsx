import React, { useState } from 'react'

import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Page from 'components/Page'
import RegisterForm from 'features/RegisterForm'

import SubmitMessage from 'features/RegisterForm/components/RegistrationMessage'

const Register: React.FC = () => {
	const [isSuccessful, setSuccessful] = useState<boolean>(false)

	return (
		<>
			<NavBar />
			<Page>
				{isSuccessful ? (
					<SubmitMessage />
				) : (
					<RegisterForm onSuccess={() => setSuccessful(true)} />
				)}
			</Page>
			<Footer />
		</>
	)
}

export default Register
