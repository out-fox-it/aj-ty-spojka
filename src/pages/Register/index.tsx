import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import SubmitMessage from '../../components/RegisterForm/RegistrationMessage'
import Page from '../../components/Page'
import RegisterForm from '../../components/RegisterForm'
import Footer from '../../components/Footer'

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
