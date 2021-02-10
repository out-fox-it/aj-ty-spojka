import React, { useState } from 'react'

import NavBar from '../components/NavBar'
import SubmitMessage from '../components/RegisterForm/RegistrationMessage'
import RegisterForm from '../components/RegisterForm'

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
		</>
	)
}

export default Register
