import React, { useState } from 'react'

// Components
import NavBar from '../components/NavBar'
import SubmitMessage from '../components/RegisterForm/RegistrationMessage'
import RegisterForm from '../components/RegisterForm'
import Footer from '../components/Footer'

const Register: React.FC = () => {
	const [isSuccessful, setSuccessful] = useState<boolean>(false)

	return (
		<>
			<NavBar login={false} />
			{isSuccessful ? (
				<SubmitMessage />
			) : (
				<RegisterForm onSuccess={() => setSuccessful(true)} />
			)}
			<Footer />
		</>
	)
}

export default Register
